'use server'

import { createClient } from "@/utils/supabase/server"
import { headers } from "next/headers"
import { redirect } from "next/navigation"

export const loginAction = async (formData: FormData) => {
    const origin = headers().get('origin')
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const supabase = createClient()

    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    })

    if (error) {
        return { error: error.message }
    }

    const assuranceLevel = await supabase.auth.mfa.getAuthenticatorAssuranceLevel()
    if (assuranceLevel.data?.nextLevel === 'aal2' &&
        assuranceLevel.data?.nextLevel !== assuranceLevel.data?.currentLevel) {

        redirect(`${origin}/verify-mfa`)
        
    }

    redirect(`${origin}/dashboard`)
}
