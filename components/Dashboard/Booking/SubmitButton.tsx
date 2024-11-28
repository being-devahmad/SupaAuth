'use client';

import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { addBooking } from "@/lib/actions/dashboard-actions/addBooking";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useFormStatus } from "react-dom";

export function SubmitButton() {
    const { pending } = useFormStatus();
    const { toast } = useToast();

    const router = useRouter()

    const handleSuccess = (result: { success: boolean; error?: string }) => {
        if (result.success) {
            toast({
                title: "Booking Successful",
                description: "Your booking has been confirmed.",
            });

            router.push("/dashboard/users")

        } else {
            toast({
                title: "Booking Failed",
                description: result.error || "An error occurred while processing your booking.",
                variant: "destructive",
            });
        }
    };

    return (
        <Button
            className="w-full"
            type="submit"
            disabled={pending}
            formAction={async (formData) => {
                const result = await addBooking(formData);
                handleSuccess(result);
            }}>
            {pending ? <><Loader2 className="animate-spin" /></> : "Book Now"}
        </Button>
    );
}
