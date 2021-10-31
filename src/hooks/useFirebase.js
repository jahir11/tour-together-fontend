import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged ,signOut} from "firebase/auth";
import { useEffect, useState } from 'react';
import firebaseInitializationApp from '../firebase/firebase.init';


firebaseInitializationApp()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const auth = getAuth();
    const handleGoogleSignIn = () =>{
        const googleProvider = new GoogleAuthProvider()
       return signInWithPopup(auth, googleProvider)
        
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if(user){
                setUser(user)
            }else{
                setUser({})
            }
        })
    }, [])

    const handleLogOut = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            setError(error)
        })
    }
    return {
        user,
        error,
        handleGoogleSignIn,
        handleLogOut
        
    };
};

export default useFirebase;