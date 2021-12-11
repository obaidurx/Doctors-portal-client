import { initializeApp } from "firebase/app";
import firebaseConfig from "./FireBaseConfig";
const initializeFirebase = () => {
  initializeApp(firebaseConfig);
};
export default initializeFirebase;
