import Link from "next/link"

export default function Dashboard(){
    return(
        <>
        <div>
            <h1>Dashboard</h1>
            <nav>
                <ul>
                    <li><Link href = "/dashboard/profile">Profile</Link></li>
                    <li><Link href = "/dashboard/settings">Settings</Link></li>
                    <li><Link href = "/dashboard/orders">Orders</Link></li>
                    <li><Link href = "/dashboard/ticket">Tickets</Link></li>
                    <li><Link href = "/dashboard/customers">Customers</Link></li>                    
                    <li><Link href = "/dashboard/ticketdashboard">TicketDashboard</Link></li>                    

                </ul>
            </nav>
            <h3>Welcome to your dashboard!</h3>
        </div>
        
        </>
    )
}