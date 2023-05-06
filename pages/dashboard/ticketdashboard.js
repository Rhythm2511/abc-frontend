import Link from "next/link"

export default function ticketDashboard() {

  return (
    <>
    <h1>Ticket Dashboard</h1>

  <Link href="/dashboard/getticket">See All Ticket</Link>
  <br></br>
  <Link href="/dashboard/findticket">Find Ticket by ID</Link>
    </>
  )
}