'use server'

import { createClient } from "@/utils/supabase/server"

export const checkAssurance = async () => {
    const supabase = createClient()

    const assuranceLevel = await supabase.auth.mfa.getAuthenticatorAssuranceLevel()
    console.log("assuranceLevel>>>>>>>>>>", assuranceLevel)

}