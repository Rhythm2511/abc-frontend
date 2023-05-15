
import Footer from "../components/footer";
import Header from "./dashboard.components/Header";

export default function Dashboard(){
    const date = new Date();
    console.log(date);
    const hour = date.getHours();
    let message = "";
    if(hour>=6 && hour<12){
        message = "Good morning!! Manager."
    } else if(hour>=12 && hour<16){
        message = "Good afternoon!! Manager."
    } else if(hour>=16 && hour<20){
        message = "Good evening!! Manager."
    } else{
        message = "Good night!! Manager."
    }
    return(
        <>
        <Header/>
        <h1 className="text-3xl font-bold">{message}</h1>
        <h3>Welcome to your dashboard!</h3>
        <Footer/>
        </>
    )
}