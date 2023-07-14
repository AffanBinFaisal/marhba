import { collection, addDoc } from "firebase/firestore";
import db from "./db";

const query = () => {
  db.collection("customersData").onSnapshot((snapshot) => {
    setTimings(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data()
      }))
    );
  });
};
export default query;
