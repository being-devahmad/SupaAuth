'use server'

import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"

export const signInWithGoogle = async () => {
    const supabase = createClient()
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: 'http:localhost:3000/auth/callback',
            queryParams: {
                access_type: 'offline',
                prompt: 'consent',
            },
        },
    })

    if (data.url) {
        // console.log('googleData->', data)
        redirect(data.url)
    }

}


export const signInWithGithub = async () => {
    const supabase = createClient()
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
        options: {
            redirectTo: 'http:localhost:3000/auth/callback',
            queryParams: {
                access_type: 'offline',
                prompt: 'consent',
            },
        }
    })

    if (data.url) {
        // console.log('githubData->', data)
        redirect(data.url)
    }

}

