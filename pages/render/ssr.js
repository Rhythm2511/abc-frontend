export default function SSR({ data }) {
    
    return (
        <>
        <h1>This SSR request!</h1>
        <ul>
          {data.map(item => (
            <li key={item.id}>
             <p>ID: {item.id}</p>
             <p>Name: {item.name}</p> 
             <p>Title: {item.title}</p>   
             <p>Time: {item.time}</p>   
             <p>HallNo: {item.hall_no}</p>   
            </li>
          ))}
        </ul>
      </>
    );
    }
    
   export async function getServerSideProps() {
   
        const response = await fetch('https://ticketing-system-production.up.railway.app/ticket/findAll');
        const data = await response.json();
      
    return { props: { data } }
    }