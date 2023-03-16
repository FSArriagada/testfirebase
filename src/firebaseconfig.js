// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore, doc, getDoc, query, where, addDoc} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbm0nY_qSkCEWrXXbvqKwgvJM-9NuBKpk",
  authDomain: "test-d6eff.firebaseapp.com",
  projectId: "test-d6eff",
  storageBucket: "test-d6eff.appspot.com",
  messagingSenderId: "520839891325",
  appId: "1:520839891325:web:53bc2cf0e4fa02889ee414"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export async function createUserForm(formData){

  const formCollectionRef = collection (db, "clients")
  const formDoc = await addDoc(formCollectionRef,formData)
}

export async function getAllClients(){
  //referimos a la colección
  const formCollectionRef = collection(db, "clients");

  const formDoc = await getDocs(formCollectionRef)

   return formDoc.docs.map( (item) => {
      return (item.data())
      
  });     
}


export default db;