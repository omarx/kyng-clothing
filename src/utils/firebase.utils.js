import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig ={
    apiKey: 'AIzaSyAXJfuZNZk06nVMxiGQzRS57ehGRpOnElA',
    authDomain: 'kyng-clothing-db.firebaseapp.com',
    projectId: "kyng-clothing-db",
    storageBucket: "kyng-clothing-db.appspot.com",
    messagingSenderId: "223493029081",
    appId: "1:223493029081:web:39e06edcd6b5db269392c8",
    measurementId: "G-H69XPR6NLW"
};
// eslint-disable-next-line
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth=getAuth();
export const signInWithGooglePopup=()=>signInWithPopup(auth,provider);


export const db= getFirestore();

export const createUserDocumentFromAuth= async(userAuth,additionalInfo={})=> {
    if(!userAuth)return;
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);
   if (!userSnapshot.exists()){
       const {displayName,email}=userAuth;
       const createdAt= new Date();

       try {
           await setDoc(
               userDocRef, {
                   displayName,
                   email,
                   createdAt,
                   ...additionalInfo,
               }
           );
       }catch(error){
           console.log('error creating the user',error.message);
       }
   }
   return userDocRef;
}
export const createAuthUserWithEmailAndPassword=async (email,password)=>{
    if(!email || !password)return;
   return await createUserWithEmailAndPassword(auth,email,password)
}

export const signInAuthUserWithEmailAndPassword=async (email,password)=>{
    if(!email || !password)return;
    return await signInWithEmailAndPassword(auth,email,password)
}

export const signOutUser=async()=>await signOut(auth);

export const onAuthStateChangedListener=(func)=>onAuthStateChanged(auth,func );