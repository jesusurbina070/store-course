// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  sendPasswordResetEmail
} from "firebase/auth";
import {getFirestore, collection, getDocs, doc, getDoc, setDoc, disableNetwork  } from "firebase/firestore"
import {getStorage} from "firebase/storage"
 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
  measurementId: import.meta.env.VITE_MEASUREMENTID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
export const storage = getStorage(app)

export const signup = (email, password) => 
  createUserWithEmailAndPassword(auth, email, password);

export const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password)

export const resetPassword = (email) => sendPasswordResetEmail(auth, email)

export const authGoogle = () => {
  const googleProvider = new GoogleAuthProvider();
  return signInWithPopup(auth, googleProvider);
};

export const logOut = () => {
  signOut(auth)
}


// const docRef = doc(db, "users", "5b06qTzWrCUls9CkWgiUmYutIsG3")
// const docSnap = await getDoc(docRef)
// const user = docSnap.data()
// console.log(user)


// let response = await setDoc(doc(db, "users", initialUser.uid), initialUser)
// console.log(response)

// let newUserRef = doc(db, "users", initialUser.uid)
// let response = 
// console.log(response)

// export async function handleAuthData(uid, dataForm, user, setData){
//   let {name, email} = dataForm
  
  
  
//   if(dataUser.exists()){
//     const userFetch = dataUser.data()
//     setData({...userFetch})
   
//   }else{
//    if(dataForm.name !== ""){
//    let  newUser = {...initialUser, name, email, uid}
//     creatNewUser(newUser)
//     setData(newUser)

//     // cambiar el estado
//    }
    // const newUSer = {...initialUser, name: dataForm}
    

