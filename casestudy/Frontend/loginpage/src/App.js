import Login from "./component/Login";
import Navbar from "./component/Navbar";
import Register from "./component/Register";
//import {BrowserRouter as Router,Switch,Route,Routes,Link} from "react-router-dom";
import { BrowserRouter as Router, Switch, Route,Routes } from "react-router-dom";
import Home from "./component/Home";
import Couponsview from "./component/Couponsview";
import About from "./component/About";
import Footer from "./component/Footer";
import LogOut from "./Logout";
import Payment from "./component/Payment";
import Payment2 from "./component/Payment2";


function App() {
  return (
   <div>

     
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/registration" element={<Register/>}/>
      <Route path='/Couponsview' element={<Couponsview />} />
      <Route path='/about' element={<About/>} />
      <Route path='/logout' element={<LogOut/>} />
      <Route path='/payment' element={<Payment/>} />
      <Route path='/payment2' element={<Payment2/>} />

      </Routes> 
      <Footer/>
   </div>
  );
}

export default App;
