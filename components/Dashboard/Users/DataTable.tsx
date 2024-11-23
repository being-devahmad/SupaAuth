"use client";

import { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getBookings } from "@/lib/actions/dashboard-actions/getBookings";

type Booking = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    date: string;
    guests: number;
};

export default function DataTable() {
    const [data, setData] = useState<Booking[]>([]);
    const [filter, setFilter] = useState("");
    const [filterBy, setFilterBy] = useState("name");

    // Fetch data using server action
    useEffect(() => {
        const fetchData = async () => {
            const result = await getBookings();
            console.log("fullName---->", result.formattedData)

            setData(result.formattedData || []);
        };

        fetchData();
    }, []);


    // Filtering logic
    const filteredData = data.filter((booking) => {
        const searchTerm = filter.toLowerCase();
        switch (filterBy) {
            case "name":
                return (
                    booking.firstName.toLowerCase().includes(searchTerm) ||
                    booking.lastName.toLowerCase().includes(searchTerm)
                );
            case "email":
                return booking.email.toLowerCase().includes(searchTerm);
            case "date":
                return booking.date.includes(searchTerm);
            default:
                return true;
        }
    });

    return (
        <Card className="w-full">
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
                                <TableHead className="font-bold">Guests</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredData.length > 0 ? (
                                filteredData.map((booking) => (
                                    <TableRow key={booking.id} className="hover:bg-gray-100 transition-colors">
                                        <TableCell className="font-medium">{`${booking.firstName} ${booking.lastName}`}</TableCell>
                                        <TableCell>{booking.email}</TableCell>
                                        <TableCell>{booking.phone}</TableCell>
                                        <TableCell>{booking.date}</TableCell>
                                        <TableCell className="text-center">{booking.guests}</TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={5} className="text-center">
                                        No data found
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
            </CardContent>
        </Card>
    );
}
