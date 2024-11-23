import { DataTable } from '@/components/Dashboard/Users/DataTable'
import Sidebar from '@/components/Dashboard/Sidebar'
import React from 'react'

const Users = () => {
    return (
        <div className="flex h-screen bg-black text-gray-100">
            <Sidebar />
            <DataTable />
        </div>
    )
}

export default Users
