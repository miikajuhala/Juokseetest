
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database'
import {API_KEY,AUTH_DOMAIN,DATABASE_URL,PROJECT_ID,STORAGE_BUCKET,MESSAGING_SENDER_ID,APP_ID,MEASUREMENT_ID} from "../config"

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app)

module.exports = { db, app }