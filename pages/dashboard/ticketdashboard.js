import Link from "next/link"
import Footer from "../components/footer"
import Header from "./dashboard.components/Header"

export default function ticketDashboard() {

  return (
    <>
    <Header/>
    <h1 className="text-2xl font-bold ms-4">Ticket Dashboard</h1>

  <div className="flex justify-start align-center mt-3">
    <Link href="/dashboard/gettickets" className=" bg-red-300 p-3 ms-4 text-white rounded-lg">See All Ticket</Link>
    <br></br>
    <Link href="/dashboard/findticket" className=" bg-red-300 p-3 ms-4 text-white rounded-lg">Find Ticket by ID</Link>
  </div>
  <Footer></Footer>
    </>
  )
}