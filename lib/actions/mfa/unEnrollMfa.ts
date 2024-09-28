'use server'

import { createClient } from "@/utils/supabase/server"

export const unEnrollMFA = async () => {
    const supabase = createClient()

    // find the factorId first before unenrolling
    const factors = await supabase.auth.mfa.listFactors()
    if (factors.error) {
        throw factors.error
    }

    console.log('factors', factors.data.all)


    if (factors) {
        const factorId = factors.data.all[0].id
        console.log("factorId", factorId)

        // now we'll unenroll the factor
        const { data, error } = await supabase.auth.mfa.unenroll({
            factorId
        })
        if (error) {
            console.log('error in enrolling MFA', error)
            throw error
        }
        console.log('factors', data)
        console.log('dataID or factorIdUnenrolled-->', data.id)


    }

    console.log('No TOTP factors found!')

}