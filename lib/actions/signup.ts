'use server'

import { createClient } from "@/utils/supabase/server"
import { headers } from "next/headers"

export const signupAction = async (formData: FormData) => {
    const origin = headers().get('origin')
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const confirmPassword = formData.get('confirmPassword') as string

    if (password !== confirmPassword) {
        return { error: 'Passwords do not match' }
    }

    const supabase = createClient()

    console.log("supdabase->", supabase)

    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            emailRedirectTo: `${origin}/login`
        }
    })



}
