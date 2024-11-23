"use server"

import { createClient } from "@/utils/supabase/server"

export const getBookings = async () => {

    const supabase = createClient()

    try {

        const { data, error } = await supabase
            .from('bookings')
            .select()


        const formattedData = data?.map((booking: any) => ({
            id: booking.id,
            firstName: booking.first_name, // mapping here
            lastName: booking.last_name,   // mapping here
            email: booking.email,
            phone: booking.phone,
            date: booking.date,
            guests: booking.guests,
        }));




        console.log("FetchedData-->", formattedData)

        return {
            success: true,
            formattedData
        }


    } catch (error) {
        console.error("Error fetching bookings : ", error)
        return {
            success: false,
            error: error || "Unknown error occurred"
        }
    }
}