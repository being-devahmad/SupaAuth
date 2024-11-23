'use client'

import { useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Booking = {
    id: number
    firstName: string
    lastName: string
    email: string
    phone: string
    date: string
    time: string
    guests: number
    specialRequests: string
}

const dummyData: Booking[] = [
    { id: 1, firstName: "John", lastName: "Doe", email: "john@example.com", phone: "+1 (555) 000-0001", date: "2023-05-15", time: "19:00", guests: 2, specialRequests: "No nuts please" },
    { id: 2, firstName: "Jane", lastName: "Smith", email: "jane@example.com", phone: "+1 (555) 000-0002", date: "2023-05-16", time: "20:00", guests: 4, specialRequests: "Gluten-free options" },
    { id: 3, firstName: "Bob", lastName: "Johnson", email: "bob@example.com", phone: "+1 (555) 000-0003", date: "2023-05-17", time: "18:30", guests: 3, specialRequests: "Vegetarian meal" },
    { id: 4, firstName: "Alice", lastName: "Williams", email: "alice@example.com", phone: "+1 (555) 000-0004", date: "2023-05-18", time: "19:30", guests: 2, specialRequests: "" },
    { id: 5, firstName: "Charlie", lastName: "Brown", email: "charlie@example.com", phone: "+1 (555) 000-0005", date: "2023-05-19", time: "20:30", guests: 6, specialRequests: "Birthday celebration" },
]

export function DataTable() {
    const [filter, setFilter] = useState("")
    const [filterBy, setFilterBy] = useState("name")

    const filteredData = dummyData.filter((booking) => {
        const searchTerm = filter.toLowerCase()
        console.log("searchItem-->", searchTerm)
        switch (filterBy) {
            case "name":
                const filteredBookingByName = booking.firstName.toLowerCase().includes(searchTerm) || booking.lastName.toLowerCase().includes(searchTerm)
                console.log("ByName-------->", filteredBookingByName)
                return filteredBookingByName
            case "email":
                return booking.email.toLowerCase().includes(searchTerm)
            case "date":
                return booking.date.includes(searchTerm)
            default:
                return true
        }
    })

    return (
        <Card className="w-full ">
            <div>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-2xl font-bold">Recent Bookings</CardTitle>
                    <div className="flex items-center space-x-2">
                        <Select value={filterBy} onValueChange={setFilterBy}>
                            <SelectTrigger className="w-[120px]">
                                <SelectValue placeholder="Filter by" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="name">Name</SelectItem>
                                <SelectItem value="email">Email</SelectItem>
                                <SelectItem value="date">Date</SelectItem>
                            </SelectContent>
                        </Select>
                        <Input
                            placeholder="Filter bookings..."
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            className="max-w-sm"
                        />
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="rounded-md border">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="font-bold">Name</TableHead>
                                    <TableHead className="font-bold">Email</TableHead>
                                    <TableHead className="font-bold">Phone</TableHead>
                                    <TableHead className="font-bold">Date</TableHead>
                                    <TableHead className="font-bold">Time</TableHead>
                                    <TableHead className="font-bold">Guests</TableHead>
                                    <TableHead className="font-bold">Special Requests</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {filteredData.map((booking) => (
                                    <TableRow key={booking.id} className="hover:bg-gray-100 transition-colors">
                                        <TableCell className="font-medium">{`${booking.firstName} ${booking.lastName}`}</TableCell>
                                        <TableCell>{booking.email}</TableCell>
                                        <TableCell>{booking.phone}</TableCell>
                                        <TableCell>{booking.date}</TableCell>
                                        <TableCell>{booking.time}</TableCell>
                                        <TableCell className="text-center">{booking.guests}</TableCell>
                                        <TableCell>{booking.specialRequests || "N/A"}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </div>
        </Card>

    )
}

