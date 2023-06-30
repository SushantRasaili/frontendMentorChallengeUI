import React from 'react';
import "./components.css";
import { useRef,useState,useEffect } from 'react';
import Button from './Button';
import  Success from "./Success";
import desktopImg from "../images/illustration-sign-up-desktop.svg";
import mobileImg from "../images/illustration-sign-up-mobile.svg";
import listIcon from "../images/icon-list.svg";

const Subscribe = () => {

  const [ifError,setIfError] = useState(false);
  const [successful,setSuccessful] = useState(false);
  const [windowWidth,setWindowWidth] = useState(window,innerWidth);
  const mailValue = useRef("");


  useEffect(() => {

    const handleWidth =() => {
      setWindowWidth(window.innerWidth);
    }

  handleWidth();
    
    window.addEventListener('resize',handleWidth);


    return () => removeEventListener('resize',handleWidth);
  },[]);


  const handleClick =(event) => {
      event.preventDefault();
      const regex = /[!#$%^&*]/;
      const value = mailValue.current.value;

      if(!value || regex.test(value) || !value.includes("@") || value.lastIndexOf(".") === value.length-1)
        setIfError(true);
        else {
          setIfError(false);
          setSuccessful(true);
        }
  }

  return (<>
  {successful ? <Success /> : 
    <div className='subscribeContainer'>
      <div className='textContainer'>
    <h1 className='title'>Stay updated!</h1>
    <p className='subTitle'>Join 60,000+ product managers recieving monthly updates on:</p>
   
    <ul className='lists'>
      <li className='list'> 
      <img src={listIcon} alt="mobile" />  
 <span>Product discovery and building what matters</span>
 </li>
      <li className='list'> 
<img src={listIcon} alt="mobile" />
 <span> Measuring to ensure updates are a success</span>
 </li>
      <li className='list'> 
<img src={listIcon} alt="mobile" />
 <span>And much more!</span>
 </li>
    </ul>

    <form className='form'>
      <div className='formLabel'>
        <p className="labelText">Email address</p>
        {ifError && <p className="errorMessage">Valid email required</p>}
      </div>
      <input type="email" name="email" 
      className={`mailInput  ${ifError && "mailInputErr"}`} ref={mailValue} 
      placeholder="email@company.com"/>
      <Button click={handleClick} text="Subscribe to monthly newsletter" />
    </form>
      </div>
      
      <div className='imgContainer'>
{
  windowWidth < 900 ?
<img src={mobileImg} alt="mobile" />
:
<img src={desktopImg} alt="subscribe" />

}
      
      </div>
    </div> 
  }
    </>
  )
  }

export default Subscribe;
