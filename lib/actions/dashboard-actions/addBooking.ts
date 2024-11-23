'use server'

import { createClient } from "@/utils/supabase/server"
import { revalidatePath } from "next/cache"
import { headers } from "next/headers"

export const addBooking = async (formData: FormData) => {
    const origin = headers().get('origin')

    const firstName = formData.get('firstName') as string
    const lastName = formData.get('lastName') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const date = formData.get('date') as string
    const guestsCount = formData.get('guestsCount') as string

    console.log("Data------>", firstName, lastName, email, phone, date, guestsCount)

    const supabase = createClient()

    const { data, error } = await supabase
        .from('bookings')
        .insert({
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone: phone,
            date: date,
            guests: guestsCount,
        })
        .select()

    if (error) {
        console.error("Error inserting booking:", JSON.stringify(error, null, 2))
        return {
            success: false,
            error: error.message || "Unknown error occurred"
        }
    }

    console.error("Data Inseted successfully --> ", data)

    revalidatePath('/dashboard/users')

    return {
        success: true,
        data
    }


}