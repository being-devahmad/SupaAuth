'use server'

import { createClient } from "@/utils/supabase/server"

export const enrollMFA = async () => {
    const supabase = createClient()

    // assurance level before enrolling MFA
    const assuranceLevel = await supabase.auth.mfa.getAuthenticatorAssuranceLevel()
    console.log("assuranceLevelBefore", assuranceLevel)

    const { data, error } = await supabase.auth.mfa.enroll({
        factorType: 'totp',
    })
    if (error) {
        console.log('error in enrolling MFA', error)
        throw error
    }
    console.log('factors', data)
    console.log('dataID or factorId-->', data.id)



    // Now check the assurance level after enrolling MFA
    const assuranceLevelAfter = await supabase.auth.mfa.getAuthenticatorAssuranceLevel()
    console.log("assuranceLevelAfter", assuranceLevelAfter)

    return data


}