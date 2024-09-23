'use server'

import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"
import { headers } from "next/headers"

export const signOutAction = async () => {
    const origin = headers().get('origin')
    const supabase = createClient()
    await supabase.auth.signOut()

    redirect(`${origin}/login`)
}