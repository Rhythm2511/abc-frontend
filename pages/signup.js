import Link from "next/link"
import Header from "./components/Header"
import { useForm } from "react-hook-form";


export default function SignUp(){
    
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
      };

    return(
        <>
        <Header></Header>
        <div className="max-w-xl mx-auto py-3 px-3 bg-purple-200 my-3 rounded-lg">
            <h1 className="text-xl font-bold text-blue-500 mx-auto">SignUp</h1><br></br>
            <form onSubmit={handleSubmit(onSubmit)}> 
                <fieldset>
                <label htmlFor="name" className="w-28">Name:</label> &nbsp;
                <input type="text" name ="name" placeholder="Enter your name" required="" {...register('name', { required: true })}/>
        
                {errors.name && <p class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">Name is required</span></p>
                }
                 <br /> <br />

                <label htmlFor="dob">Date of Birth:</label> &nbsp;
                <input type="date" name="dob" required="" {...register('dob', { required: true })}
                /><br /><br />

                {errors.dob && <p class="text-xs text-red-600 dark:text-red-400"><span class="font-medium">Date of birth is required</span></p>
                }


                <label htmlFor="gender">Gender:</label> &nbsp;
                <input type="radio" name="gender" id="male" value="Male" />Male &nbsp;
                <input type="radio" name="gender" id="female" value="Female" />Female <br /><br />
                
                <label htmlFor="phone">Phone Number: </label> &nbsp;
                <input type="tel" name="phone" placeholder="Enter your phone number" /><br /> <br />

                <label htmlFor="email">Email:</label> &nbsp;
                <input type="email" id="email" name ="email" placeholder="Enter your email address" required="" {...register('email', { required: true })}/>
        
                {errors.name && <p class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">Email is required</span></p>}
                <br /><br />
           
                <label htmlFor="password">Password:</label> &nbsp;
                <input type="password" name ="password" placeholder="Enter your password" required="" {...register('email', { required: true })}/><br /><br />  


                {errors.name && <p class="mt-2 text-xs text-red-600 dark:text-red-400"><span class="font-medium">Password cannot be empty</span></p>}
                <br /><br />
                <button type="submit" className="bg-blue-500 text-white p-3 rounded-lg">Sign Up</button>
                <br /><br />
                </fieldset>
            </form>
            <br></br>
            <p>Already have an account? <Link href="/signin">Sign In</Link></p>
        </div>
        </>
    )
}