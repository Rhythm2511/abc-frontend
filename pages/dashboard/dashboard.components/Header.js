import Link from "next/link"


export default function Header() {
    return (
        <>
        <div className="flex justify-between align-center px-2 py-2 bg-purple-300">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <nav>
                <ul className="flex">
                    <li className="ms-4"><Link href="/dashboard/profile">Profile</Link></li>
                    <li className="ms-4"><Link href="/dashboard/settings">Settings</Link></li>
                    <li className="ms-4"><Link href="/dashboard/orders">Orders</Link></li>
                    <li className="ms-4"><Link href="/dashboard/addticket">Tickets</Link></li>
                    <li className="ms-4"><Link href="/dashboard/customers">Customers</Link></li>
                    <li className="ms-4"><Link href="/dashboard/ticketdashboard">TicketDashboard</Link></li>

                </ul>
            </nav>

        </div>
        </>
    )
}