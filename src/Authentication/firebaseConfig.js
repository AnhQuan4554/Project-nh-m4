// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYTUBZWR3mwE-8x6IWepKxm0pWYWNTKZc",
  authDomain: "webweather-b7bae.firebaseapp.com",
  projectId: "webweather-b7bae",
  storageBucket: "webweather-b7bae.appspot.com",
  messagingSenderId: "127725636100",
  appId: "1:127725636100:web:95ce4a0d50245c3a388351"
};



// const firebaseConfig = {
//   apiKey: "AIzaSyDAk8dZKuGzWEOvcvipR2blUnGFRySfaDg",
//   authDomain: "test-8781e.firebaseapp.com",
//   projectId: "test-8781e",
//   storageBucket: "test-8781e.appspot.com",
//   messagingSenderId: "713208642558",
//   appId: "1:713208642558:web:db3f5a2feab0a2aa585eaf",
//   measurementId: "G-LWMB9CVM4D"
// };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
