import Link from "next/link"

export default function SignUp(){
    return(
        <>
        <div>
            <h1>SignUp</h1><br></br>
            <form>
                <fieldset>
                <br />
                <label htmlFor="name">Name:</label> &nbsp;
                <input type="text" name ="name" placeholder="Enter your name"/> <br /> <br />

                <label htmlFor="dob">Date of Birth:</label> &nbsp;
                <input type="date" name="dob"/><br /><br />

                <label htmlFor="gender">Gender:</label> &nbsp;
                <input type="radio" name="gender" id="male" value="Male" />Male &nbsp;
                <input type="radio" name="gender" id="female" value="Female" />Female <br /><br />
                
                <label htmlFor="phone">Phone Number: </label> &nbsp;
                <input type="tel" name="phone" placeholder="Enter your phone number" /><br /> <br />

                <label htmlFor="email">Email:</label> &nbsp;
                <input type="email" id="email" name ="email" placeholder="Enter your email address"/><br /><br />
           
                <label htmlFor="password">Password:</label> &nbsp;
                <input type="password" name ="password" placeholder="Enter your password"/><br /><br />  

                <button>Sign Up</button>
                <br /><br />
                </fieldset>
            </form>
            <br></br>
            <p>Already have an account? <Link href="/signin">Sign In</Link></p>
        </div>
        </>
    )
}