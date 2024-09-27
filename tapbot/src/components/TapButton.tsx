import axios from 'axios'
import '../css/TapButton.css'
import '../css/Coins.css'
import { useEffect, useState } from 'react'

function TapButton (){
const [coins ,setCoins]=useState<number>(0)

const queryParams = new URLSearchParams(window.location.search);
const id = queryParams.get('telegram_id'); 

useEffect(()=>{
    axios.get(`https://telbot-backend-0a6u.onrender.com/user/${id}/coins`).
    then((res)=>setCoins(res.data.coins)).
    catch((err)=>alert(err.message))
},[id])

const handleClick = async () => {
    try {
      
      const response = await axios.patch(`https://telbot-backend-0a6u.onrender.com/user/${id}/increment`);

      setCoins(response.data.coins); 
    } catch (err:any) {
        alert(err.message);
    }
    
  };


    return(
        <>
        <div className='coin'>
            {coins}
        </div>
        <hr style={{width:"100%",marginTop:"20px"}}></hr>
        <div onClick={()=>handleClick()} className="tap_button">
            <img src="./tap.svg"/>
        </div>
        </>
    )
}

export default TapButton