

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

/*   apiKey: "AIzaSyB5GlZiCtz8AnYEPzqurkbBo5YeyEiMd1w",
  authDomain: "sabbir-hosain.firebaseapp.com",
  projectId: "sabbir-hosain",
  storageBucket: "sabbir-hosain.appspot.com",
  messagingSenderId: "294322388693",
  appId: "1:294322388693:web:abb88ba80afb470b2bec5c",
  img_hosting:"https://api.imgbb.com/1/upload" */

  apiKey: import.meta.env.VITE_apiKey,
  authDomain:import.meta.env.VITE_authDomain,
  projectId:import.meta.env.VITE_projectId,
  storageBucket:import.meta.env.VITE_storageBucket,
  messagingSenderId:import.meta.env.VITE_messagingSenderId,
  appId:import.meta.env.VITE_appId 
  
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig); 