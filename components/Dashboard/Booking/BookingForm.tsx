import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { addBooking } from "@/lib/actions/dashboard-actions/addBooking"
import { SubmitButton } from "./SubmitButton"

export function BookingForm() {
    return (
        <Card className="w-full h-[600px] max-w-2xl mx-auto my-10  text-black">
            <CardHeader>
                <CardTitle>Make a Booking</CardTitle>
                <CardDescription>Fill out the form below to make your reservation.</CardDescription>
            </CardHeader>
            <div>
                <form action={addBooking}>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="firstName">First name</Label>
                                <Input id="firstName" name="firstName" placeholder="John" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="lastName">Last name</Label>
                                <Input id="lastName" name="lastName" placeholder="Doe" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" name="email" placeholder="john@example.com" type="email" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone number</Label>
                            <Input id="phone" name="phone" placeholder="+1 (555) 000-0000" type="tel" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="date">Date</Label>
                                <Input id="date" name="date" type="date" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="guests">Number of guests</Label>
                            <Select name="guestsCount">
                                <SelectTrigger id="guests" name="guestsCount">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="1">1 guest</SelectItem>
                                    <SelectItem value="2">2 guests</SelectItem>
                                    <SelectItem value="3">3 guests</SelectItem>
                                    <SelectItem value="4">4 guests</SelectItem>
                                    <SelectItem value="5">5 guests</SelectItem>
                                    <SelectItem value="6">6+ guests</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="terms" />
                            <Label htmlFor="terms">I agree to the terms and conditions</Label>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <SubmitButton />
                    </CardFooter>
                </form>
            </div>
        </Card>
    )
}

