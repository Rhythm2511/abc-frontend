// import { useRouter } from "next/router";
// import { useState } from "react";
// import axios from "axios";
// import { useForm } from "react-hook-form";

// export default function AddTicket(){ 
//     const router = useRouter();
//     const{
//         register,
//         handleSubmit,

//     } = useForm();

//     const [success, setSuccess] = useState('')
//     const onSubmit = async (data) => {
//         const formData = new FormData();
//         formData.append('name', data.name);
//         formData.append('title', data.title);
//         formData.append('time', data.time);
//         formData.append('hall_no', data.hall_no);
//     }

//     axios.post("http://localhost:3000/ticket/add")


// return (
//     <>
//         <title>Add ticket</title>
//         <div>
//             <section>
//                 <div>
//                     <div>
//                         <div>
//                             <h1 className="ext-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">Add Ticket</h1>
//                             <form onSubmit={handleSubmit(onSubmit)}>

//                                 <div>
//                                     <label htmlFor="name">Name </label>
//                                     <input type="text" id="name" placeholder="name" required="" />
//                                     <div>
//                                         <label htmlFor="title">Title </label>
//                                         <input type="text" id="title" placeholder="Enter movie name" required="" />
//                                     </div>

//                                     <div>
//                                         <label htmlFor="time">Time </label>
//                                         <input type="text" id="time" placeholder="time" required="" />
//                                     </div>
//                                     <label htmlFor="hallno">HallNo </label>
//                                     <input type="text" id="hallno" placeholder="hallno" required="" />

//                                 </div>
//                                 <button type="submit" className="bg-blue-300 p-4 rounded-xl mt-3">Submit</button>
//                             </form>

//                         </div>

//                     </div>

//                 </div>
//             </section>
//         </div>


//     </>
//     );

// }





import { useForm } from 'react-hook-form';
import axios from "axios"
import { useState } from "react"
import { useRouter } from 'next/router'
import Header from './dashboard.components/Header';

export default function AddTicket() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const [success, setSuccess] = useState('');

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('title', data.title);
        formData.append('time', data.time);
        formData.append('hall_no', data.hall_no);

        try {
            const response = await axios.post(
                "https://ticketing-system-production.up.railway.app/ticket/add",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }

            );
            const data = await response.data;

            setSuccess('Ticket added successfully');
            reset();
        } catch (error) {
            console.log(error);
            setSuccess('Ticket add unsuccessful ' + error);
        }
    };


    return (
        <>
        <Header/>
            <div class="pt-2 w-full">
                <section>


                    <div class=" mx-auto py-2 px-2 bg-purple-400 my-1 rounded-lg">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 class="text-xl font-bold leading-tight tracking-tight text-black-100 md:text-2xl">
                                Add Ticket
                            </h1>
                            <p id="filled_success_help" class="mt-2 text-xs text-green-600 "><span class="font-medium"> {success}</span></p>

                            <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" class="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 ">Name</label>
                                    <input type="text" id="name" class="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5" placeholder="name" required=""

                                        {...register('name', { required: true })}
                                    />
                                    {errors.name &&
                                        <p id="outlined_error_help" class="mt-2 text-xs text-red-600 "><span class="font-medium">Name is required</span></p>
                                    }
                                </div>

                                <div>
                                    <label for="title" class="block mb-2 text-sm font-medium text-gray-900 ">Movie Name</label>
                                    <input type="text" id="title" class="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5" placeholder="Enter A Movie Name" required=""
                                        {...register('title', { required: true })}
                                    />
                                    {errors.name &&
                                        <p id="outlined_error_help" class="mt-2 text-xs text-red-600 "><span class="font-medium">Movie Name is required</span></p>
                                    }
                                </div>


                                <div>
                                    <label for="time" class="block mb-2 text-sm font-medium text-gray-900 ">Time</label>
                                    <input type="text" id="time" class="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5" placeholder="Enter Time" required=""
                                        {...register('time', { required: true })}
                                    />
                                    {errors.name &&
                                        <p id="outlined_error_help" class="mt-2 text-xs text-red-600 "><span class="font-medium">Time is required</span></p>
                                    }
                                </div>

                                <div>
                                    <label for="hall_no" class="block mb-2 text-sm font-medium text-gray-900">Hall No</label>
                                    <input type="text" id="hall_no" class="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5" placeholder="Enter hall no" required=""
                                        {...register('hall_no', { required: true })}
                                    />
                                    {errors.name &&
                                        <p id="outlined_error_help" class="mt-2 text-xs text-red-600 "><span class="font-medium">Hall no is required</span></p>
                                    }
                                </div>



                                <button type="submit" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Submit</button>
                            </form>
                        </div>
                    </div>

                </section>

            </div>

        </>
    );
}