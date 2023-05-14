
import Link from "next/link"


export default function Header() {
  return (
    <>
      <div className="flex justify-between align-center bg-purple-300 py-4 px-2">
        <h1 className="text-3xl font-bold">Welcome to the movie web application</h1>
        <nav>
          <ul className="flex text-xl">
            <li className="ms-2"><Link href="/signup">SignUp</Link></li>
            <li className="ms-2"><Link href="/signin">SignIn</Link></li>
            <li className="ms-2"><Link href="/dashboard">Dashboard</Link></li>
            <li className="ms-2"><Link href="/about">About</Link></li>
          </ul>
        </nav>
      </div>

    </>
  )
}