import React from "react";
import "../App.css";
import AboutSection from "../Components/AboutSection";
import Banner from "../Components/Banner";
import JoinUs from "../Components/JoinUs";
import Membership from "../Components/Membership";
import OurPrograms from "../Components/OurPrograms";
import Header from "../Components/Header";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../Components/Footer";




const Home = () => {

    let history = useHistory();

    useEffect(() => {
          
        const token = localStorage.getItem("user-info")
        if(token == null){
          history.push("/");
        }else{
    
        history.push("/view");
        }
        },[])
      

    return (
       <div>
    <Header/>
    <Banner/>
    <AboutSection/>
    <JoinUs/>
    <Membership/>
    <OurPrograms/>
    <Footer/>
    </div>
    )

  
}

export default Home;