import Link from "next/link";

export default function(){
    return(
        <>
        <div className="p-4">
            <h1>Sign In</h1>
            <br />
            <form className="border-solid border-4 border-light-blue-500">  
                <fieldset>
                    <br />
                <label htmlFor="email">Email:</label> &nbsp;
                <input type="email" id="email" name ="email"/> <br /><br />
           
                <label htmlFor="password">Password:</label> &nbsp;
                <input type="password" name ="password"/> <br /><br />

                <button>Sign In</button>
                <br /> <br />
                </fieldset>
            </form>          
            <br></br>
            <p>Don't have an account yet? <Link href="/signup">Sign Up</Link></p>

            
        </div>
        
        </>
    )
}