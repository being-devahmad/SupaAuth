'use server'

import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const resetPassword = async (formData: FormData) => {
    const origin = headers().get('origin')
    const password = formData.get("password") as string
    const confirmPassword = formData.get("confirmPassword") as string


    if (password !== confirmPassword) {
        return { error: "Passwords do not match" };
    }
    const supabase = createClient();
    const { data, error } = await supabase.auth.updateUser({ password })
    if (error) console.log(error)

    redirect(`${origin}`)
}