import {initializeApp} from 'firebase/app'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, getDocs, addDoc, getDoc,setDoc, updateDoc, doc } from 'firebase/firestore/lite';
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { useState } from 'react';


const firebaseConfig = {
    apiKey: "AIzaSyClMitpi6tZnmjJ2f0Sv55UWWL4VyBO_UU",
    authDomain: "ticketscy.firebaseapp.com",
    projectId: "ticketscy",
    storageBucket: "ticketscy.appspot.com",
    messagingSenderId: "22737860273",
    appId: "1:22737860273:web:1f83c95fce7060138a9490",
    measurementId: "G-S6GP9PPSYZ"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const storage = getStorage(app);
  const auth = getAuth(app);
  //get Events
  async function getEvents(){
      const snapshot = await getDocs(collection(db,'events'))
      const eventList = snapshot.docs.map(doc => doc.data())
      return eventList;
  }
  async function addEvent(details){
    

  try {
      const docRef = await addDoc(collection(db,'events'), {
        "name" : details.name,
        "price" : details.price,
        "location" : details.location,
        "Date" : details.Date,
        "Time" : details.Time,
        "description" : details.description,
      })
      let newUrl = await addImage(details.image, docRef.id);

      const _docRef = await updateDoc(doc(db,'events',docRef.id),{
          'id': docRef.id,
          'image': newUrl,
      })
      console.log("Document written with ID: ", _docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  }

  async function getPopular(){
    const snapshot = await getDocs(collection(db,'general'))
    getDoc()
    const eventList = snapshot.docs.map(doc => doc.data())
      return eventList;
  }
  async function addImage(image, id){
    let blob = await fetch(image).then(r => r.blob());
    var newURl = '';
      const posterRef = ref(storage, `posters/${id}`);
      let snapshot = await uploadBytes(posterRef, blob)
        console.log('Uploaded a blob or file!');
      newURl = await getDownloadURL(snapshot.ref)
      console.log('new url is:', newURl);
      return newURl;
  }

  async function signIn(email, pass){
    console.log('function called');
    var success = true;
    var errorMessage = '';
    let userCredentials = await signInWithEmailAndPassword(auth, email, pass).catch((e) =>{
      success = false;
      errorMessage = e.message;
    })
    return {
      'success' : success,
      'errorMessage': errorMessage,
    }
  }
  async function createUser(userDetails, pass){
    console.log('function called', userDetails, 'and pass is', pass);
    var success = true;
    let errormessage = '';
    try {
      
    let userCredentials = await createUserWithEmailAndPassword(auth,userDetails.email, pass).catch((e) => {
      success = false;
      errormessage = e.message;
    })
if(success){
  await setDoc(doc(db,'users',userCredentials.user.uid), userDetails);
  setUser(userCredentials);
  console.log('The user id id:', userCredentials.providerId, 'doc reference is:')
} 
    } catch (error) {
      success = false;
      console.log(error);
    }
    return {
      'success' : success,
      'errorMessage': errormessage,
    }
  }

  async function setUser(userCredentials){
  //TODO: finish function to set user
  }
  async function getUserDetails(id){
    const snapShot = await getDoc(doc(db,'users',id));
    const data = snapShot.data();
    console.log(data);
    return data;

  }

  export {getEvents,addEvent, addImage, createUser, getPopular,signIn, getUserDetails}