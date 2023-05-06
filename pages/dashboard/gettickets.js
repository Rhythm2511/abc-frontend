import Link from "next/link"
import axios from "axios";


export default function GetTickets({ data }) {
    
  return (
      <>
      <h1>All Users</h1>
      <ul>
          {[data].map(item => (
            <li key={item.id}>
             <p>Name: {item.name}</p> 
             <p>Title: {item.title}</p>   
             <p>Time: {item.time}</p>   
             <p>HallNo: {item.hall_no}</p>   
             <Link href={"/dashboard/getticket"+item.id}>{item.name}</Link>
            </li>
          ))}
        </ul>
    </>
  );
  }
  
 export async function getServerSideProps() {
 
      const response = await axios.get('http://localhost:3000/ticket');
      const data = await response.data;
    
  return { props: { data } }
  }