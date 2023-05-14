import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
export default function MyPage({ data }) {
  const [inputValue, setInputValue] = useState();
  const router = useRouter();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // redirect to the same page with query params containing the input value
      }
  
  return (
    <>
     <div class="p-44 sm:ml-64">


      <form onSubmit={handleFormSubmit}>   
    <label for="default-search">Search</label>
    <div class="relative">

            <input type="search" value={inputValue} onChange={handleInputChange}
              id="default-search" placeholder="Search user by id" required />
        <button type="submit" >Search</button>
    </div>
</form>


    
   {data.status == null? 
    <TicketLayout filename={data.filename}
   name={data.name}
   title={data.title}
   time={data.time}
   hall_no={data.hall_no}/>
       : data.status}
     
        </div>
        
    </>
  );
}

export async function getServerSideProps({ query }) {
  const inputValue = query.inputValue;
  try {
  const response = await axios.get('http://localhost:3000/ticket/find/'+inputValue);
  const data = await response.data;

  return {
    props: {
      data
    }
  };
  
  } catch (error) {

  return {
    props: {
      data: {status:"enter valid user id"}
    }
  };
}
}