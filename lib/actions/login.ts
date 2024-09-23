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

    redirect(`${origin}`)
}
