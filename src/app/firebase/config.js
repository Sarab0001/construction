import { initializeApp } from "firebase/app";
import { confirmPasswordReset, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

let oobCode = "b1D8Q9FEZ7XuSP0EwzNC6Z-jBjBnbIkfNPm29_B-7V8AAAGSHrGAOg";
export const confirmThePasswordReset = (oobCode, newPassword) => {
  return confirmPasswordReset(auth, oobCode, newPassword);
};
