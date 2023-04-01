import Link from "next/link"

export default function SignUp(){
    return(
        <>
        <div>
            <h1>SignUp</h1><br></br>
            <form>
                <label htmlFor="name">Name:</label> &nbsp;
                <input type="text" name ="name"/><br></br><br></br>
           
                <label htmlFor="email">Email:</label> &nbsp;
                <input type="email" id="email" name ="email"/><br></br><br></br>
           
                <label htmlFor="password">Password:</label> &nbsp;
                <input type="password" name ="password"/><br></br><br></br>     

                <button>Sign Up</button>
            </form>
            <br></br>
            <p>Already have an account? <Link href="/signin">Sign In</Link></p>
        </div>
        </>
    )
}