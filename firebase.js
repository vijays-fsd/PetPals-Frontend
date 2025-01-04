
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "firestore-8334c.firebaseapp.com",
  projectId: "firestore-8334c",
  storageBucket: "firestore-8334c.appspot.com",
  messagingSenderId: "479413859272",
  appId: "1:479413859272:web:f645f530bc907e4b7286fd"
};


const app = initializeApp(firebaseConfig);


const storage = getStorage(app);

export { storage, getDownloadURL, ref, uploadBytes };
