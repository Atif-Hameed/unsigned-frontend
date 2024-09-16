import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

//production
const firebaseConfig = {
    apiKey: "AIzaSyBc2BAeZjV_Y4DDVI5Bj_eW702yEdifgls",
    authDomain: "unsigned-9fbda.firebaseapp.com",
    projectId: "unsigned-9fbda",
    storageBucket: "unsigned-9fbda.appspot.com",
    messagingSenderId: "456004873531",
    appId: "1:456004873531:web:b9fbb50588753b56939b1e"
};


const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const realtimeDB = getDatabase(app);

// export const base_URL = "https://fusco-bot-tpyvqpchrq-uc.a.run.app"