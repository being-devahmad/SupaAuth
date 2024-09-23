'use server'

import { createClient } from "@/utils/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const confirmReset = async (formData: FormData) => {
    const origin = headers().get('origin')
    const email = formData.get("email") as string;

    const supabase = createClient();
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${origin}/reset-password`
    })



    if (error) {
        // redirect('/forgot-password?message=could not authenticate user')
        console.log("error", error)
        return {
            error: error.message
        }
    }

    redirect('/confirm?message=reset+password+link+has+been+sent+to+your+email')
}
