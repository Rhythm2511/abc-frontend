

// export default function GetTickets({ data }) {
    
//   return (
//       <>
//       <div>
//       <h1 className="text-2xl font-semibold">All Ticket List</h1>
//       <table className="w-9/12  mx-auto table-auto border-collapse border border-slate-500">
//         <tr className="bg-purple-300 p-3">
//           <th className="border border-slate-600">ID</th>
//           <th className="border border-slate-600">Name</th>
//           <th className="border border-slate-600">Movie Name</th>
//           <th className="border border-slate-600">Time</th>
//           <th className="border border-slate-600">Hall No.</th>
//         </tr>
//         {data.map(item =>(
//         <tr className="text-center p-3" key={item.id}>
//             <td className="border border-slate-700">{item.id}</td>
//             <td className="border border-slate-700">{item.name}</td>
//             <td className="border border-slate-700">{item.title}</td>
//             <td className="border border-slate-700">{item.time}</td>
//             <td className="border border-slate-700">{item.hall_no}</td>
//         </tr>
//         ))}
//       </table>
//       </div>
      
      
//       {/* <ul>
//         {data.map(item => (
//            <li key={item.id}>
//            <p>ID: {item.id}</p>
//            <p>Name: {item.name}</p> 
//            <p>Title: {item.title}</p>   
//            <p>Time: {item.time}</p>   
//            <p>HallNo: {item.hall_no}</p>   
//           </li>
//         ))}
//       </ul> */}
//     </>
//   );
//   }
  
//   export async function getServerSideProps() {
   
//     const response = await fetch('http://localhost:3000/ticket/findAll');
//     const data = await response.json();
  
// return { props: { data } }
// }



import Link from "next/link"
import axios from "axios";
import { useRouter } from 'next/router'
export default function GetTickets({ data }) {
  const router = useRouter();
  return (
    <div>    
      <title>Tickets</title>
      <div class=" p-2">
        <h1 class="text-xl font-bold mx-auto text-black">
        All Tickets
              </h1>
      {/* <ul>
        {data.map(item => (
          <li key={item.id}>
      
           <div className="font-bold text-blue-600/100 bg-gray-200 px-16 m-10"
            >{item.name}</div>
            <div className="font-bold text-blue-600/100 bg-gray-200 px-16 m-10"
            >{item.title}</div>
            
            </li>
        ))}
      </ul> */}


      <table className="w-9/12  mx-auto table-auto border-collapse border border-slate-500">
        <tr className="bg-purple-300 p-3">
          <th className="border border-slate-600">ID</th>
           <th className="border border-slate-600">Name</th>
           <th className="border border-slate-600">Movie Name</th>
           <th className="border border-slate-600">Time</th>
           <th className="border border-slate-600">Hall No.</th>
         </tr>
         {data.map(item =>(
        <tr className="text-center p-3" key={item.id}>
            <td className="border border-slate-700">{item.id}</td>
            <td className="border border-slate-700">{item.name}</td>
            <td className="border border-slate-700">{item.title}</td>
            <td className="border border-slate-700">{item.time}</td>
            <td className="border border-slate-700">{item.hall_no}</td>
        </tr>
        ))}
      </table>
      
        </div>
        
    </div>
  );
  }
  
 export async function getServerSideProps() {
 
      const response = await axios.get('https://ticketing-system-production.up.railway.app/ticket/findAll');
      const data = await response.data;
    
  return { props: { data } }
  }