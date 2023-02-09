import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPfM-DKE_UBh1lGdFEdfViG_YwIjxI_rs",
  authDomain: "authentication-ed176.firebaseapp.com",
  projectId: "authentication-ed176",
  storageBucket: "authentication-ed176.appspot.com",
  messagingSenderId: "598698173895",
  appId: "1:598698173895:web:66afdbf4e7c0db2dfb25e2",
  measurementId: "G-SG85X20DLV",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { auth, app };
