import {createContext, useEffect, useState} from "react";
import {createUserDocumentFromAuth, onAuthStateChangedListener} from "../utils/firebase.utils";

export const UsersContext= createContext({
    currentUser:null,
    setCurrentUser:()=>null,
});

export const UserProvider=({children})=>{
    const [currentUser,setCurrentUser]=useState(null)
    const value= {currentUser,setCurrentUser}

    useEffect(()=>{
        return onAuthStateChangedListener((user) => {
            (user==="")?createUserDocumentFromAuth(user):setCurrentUser(user)
        });
    },[])
    return <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
}