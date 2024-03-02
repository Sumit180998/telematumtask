import { useContext } from "react";
import {UserContext} from "./UserProvider";

export default function UserConsumer(){ return( 
    useContext(UserContext)
)} 

// export default function UserConsumer(){
//     return useContext(UserContext)
//  }