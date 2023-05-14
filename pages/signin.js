import Link from "next/link";
import Header from "./components/Header";

export default function(){
    return(
        <>
        <Header></Header>
        <div className="max-w-xl mx-auto py-3 px-3 bg-purple-200 my-3 rounded-lg">
        
            <h1 className="text-xl font-bold text-blue-500 mx-auto">Sign In</h1>
            <br />
            <form>  
                <fieldset>
                    <br />
                {/* <label htmlFor="email">Email:</label> &nbsp;
                <input className="border-solid border-2 border-blue-500" type="email" id="email" name ="email"/> <br /><br />
           
                <label htmlFor="password">Password:</label> &nbsp;
                <input className="border-solid border-2 border-blue-500" type="password" name ="password"/> <br /><br /> */}
                <table>
                    <tr className="p-2">
                        <td className="p-2"><label htmlFor="email">Email:</label></td>
                        <td className="p-2"><input className="border-solid border-2 border-blue-500" type="email" id="email" name ="email" required/></td>
                    </tr>
                    <tr className="p-2">
                        <td className="p-2"><label htmlFor="password">Password:</label></td>
                        <td className="p-2"><input className="border-solid border-2 border-blue-500" type="password" name ="password" required/></td>
                    </tr>
                </table>

                <button className="bg-blue-500 text-white p-3 rounded-lg">Sign In</button>
                <br /> <br />
                </fieldset>
            </form>          
            <br></br>
            <p>Don't have an account yet? <Link className="text-blue-700" href="/signup">Sign Up</Link></p>

            
        </div>
        
        </>
    )
}