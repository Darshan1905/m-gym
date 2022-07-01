import {BrowserRouter,Switch,Route,Redirect} from "react-router-dom";
import Home from "./Pages/Home";
import View from "./Pages/View";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";



import './App.css';

function App() {


  return (

    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      <Route path="/aboutus" component={AboutUs}/>
      <Route path="/contactus" component={ContactUs}/>
      <Route  path="/view"  component={View}/>
      <Redirect to="/"/>
    </Switch>
     
    </BrowserRouter>
  );
}

export default App;
