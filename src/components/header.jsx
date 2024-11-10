import { useEffect, useState } from 'react';
import logo from './favicon.ico'

export default function Header(){
  const [time, setTime ] = useState('') 
  const now = new Date();

  // useEffect(()=>{
    // },[now])
   setInterval(() => {
      setTime(now.toLocaleTimeString())
    //   Now.toLocaleTimeString()
    }, 1000);
    return(
      <header>
        <img src={logo} alt="" />
        {/* <h2>Logo</h2> */}
        <span>Время сейчас { time }</span>
        </header>
    )
  }