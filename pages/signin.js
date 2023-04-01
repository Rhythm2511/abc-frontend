import Link from "next/link";

export default function(){
    return(
        <>
        <div>
            <h1>Sign In</h1>
            <form>
                
                <label htmlFor="email">Email:</label> &nbsp;
                <input type="email" id="email" name ="email"/><br></br><br></br>
           
                <label htmlFor="password">Password:</label> &nbsp;
                <input type="password" name ="password"/><br></br><br></br>

                <button>Sign In</button>
    
            </form>          
            <br></br>
            <p>Don't have an account yet? <Link href="/signup">Sign Up</Link></p>

            
        </div>
        
        </>
    )
}