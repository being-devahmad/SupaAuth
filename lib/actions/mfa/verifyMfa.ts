'use server'

import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"

export const verifyMFA = async (formData: FormData) => {
    const supabase = createClient()

    const verificationCode = formData.get('verifyCode') as string
    console.log("verificationCode-->", verificationCode)

    // check the list factors of user
    const factors = await supabase.auth.mfa.listFactors()
    if (factors.error) {
        throw factors.error
    }

    console.log('factors', factors.data.all)

    const totp = factors.data.all[0].factor_type
    console.log('totpFactor', totp)

    if (!totp) {
        throw new Error('No TOTP factors found!')
    }

    const factorId = factors.data.all[0].id
    console.log("factorId", factorId)


    // now'we challenge and verify
    const challenge = await supabase.auth.mfa.challenge({
        factorId
    })
    console.log('challenge', challenge)

    if (challenge.error) {
        console.log(challenge.error.message)
        throw challenge.error
    }

    const challengeId = challenge.data.id
    console.log('challengeID', challengeId)


    const verify = await supabase.auth.mfa.verify({
        factorId,
        challengeId,
        code: verificationCode
    })

    if (verify.error) {
        console.log(verify.error.message)
        throw verify.error
    }

    // Set a success message in the session
    const { data, error } = await supabase.auth.setSession({
        access_token: verify?.data?.access_token || '',
        refresh_token: verify.data?.refresh_token || ''
    })

    if (error) {
        console.log(error.message)
        throw error
    }

    // Redirect with success message
    redirect('/dashboard?mfaSuccess=true')


}