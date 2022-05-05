import {createContext,useState} from "react";

export const UsersContext= createContext({
    currentUser:null,
    setCurrentUser:()=>null,
});

export const UserProvider=({children})=>{
    const [currentUser,setCurrentUser]=useState(null)
    const value= {currentUser,setCurrentUser}
    return <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
}