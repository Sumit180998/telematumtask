import axios from "axios";
import React,{createContext, useEffect, useState} from "react"

export const UserContext=createContext();

function UserProvider({children}){
   const [Patientdata, setPatientdata]=useState(null)
   function  Patient(){
    axios.get(`https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json`)
    .then((res)=>{
        // console.log(res.data.appointments)
        setPatientdata(res.data.appointments)
    })
    .catch((error)=>console.log(error))
   }
// const Patientdata='hjkf'
// const setPatientdata='jh'
useEffect(()=>{
    Patient()
},[])
    return(
        <UserContext.Provider value={{Patientdata,setPatientdata}}>
        {children}
        </UserContext.Provider>

   )
}
export default UserProvider