import React from 'react';
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';



function Footer() {

    return(
        <div className="container-fluids bg-black text-white footer text-center ">
        <div className="container pb-4 ">
        <div className="row ">
          <div className="col-md-3 col-sm-6  ">
          <div className="fmain">
            <div className="fhead "> Explore</div>
            <div className="fdata "><Link to="/" >Home</Link></div>
            <div className="fdata"><Link to="/aboutus" >About Us</Link></div>
            <div className="fdata"><Link to="/contactus" >Contact Us</Link></div>
            <div className="fdata"><Link to="/login" >Admin Dashboard  </Link></div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6   ">
          <div className="fmain">
          <div className="fhead">Useful Links</div>
            <div className="fdata">Terms & Conditions</div>
            <div className="fdata">Privacy Policy</div>
            <div className="fdata">Refund Policy</div>
            
          </div>
          </div>
          <div className="col-md-3 col-sm-6   ">
          <div className="fmain">
          <div className="fhead">Opening Hour</div>
            <div className="fdata">Monday-Saturday</div>
            <div className="fdata">6:00 AM - 12:00 AM</div>
            <div className="fdata">6:00 PM - 9:00 PM</div>
            <div className="fdata">Sunday 6:00 AM - 10:00 Am</div>
          </div>
          </div>
          <div className="col-md-3 col-sm-6   ">
          <div className="fmain">
          <div className="fhead">Contact Us</div>
            <div className="fdata"><b>Call us at</b> </div>
            <div className="fdata">+91 9568485787</div>
            <div className="fdata"><b>Email us at</b></div>
            <div className="fdata">Care@marvelgym.com </div>
          </div>
          </div>
        </div>
        </div>
        <hr/>
        <div className="container mt-4 ">
        <div className="row">
          <span className='col-md-6' >Copyright @ MarvelGym.com</span>
          <span className='col-md-6' >Developed by Darshan & Kirit</span>
        </div>
        </div>
        </div>
        
        
        
    )
}

export default Footer



