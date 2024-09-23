'use server'

import { createClient } from "@/utils/supabase/server";

export const resetPassword = async (formData: FormData) => {
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    if (password !== confirmPassword) {
        return { error: "Passwords do not match" };
    }

    const supabase = createClient();
    

}