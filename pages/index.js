import Link from "next/link"


export default function Home() {
  return (
    <>
      <div>
        <h1>Welcome to the Cineplex web application</h1>
        <nav>
          <ul>
            <li><Link href="/signup">SignUp</Link></li>
            <li><Link href="/signin">SignIn</Link></li>
            <li><Link href="/dashboard">Dashboard</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        </nav>
      </div>
    </>
  )
}
