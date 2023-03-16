import { doc, updateDoc } from "firebase/firestore";
import { db } from "../Firebase/firebase";

export async function updateUser(id, data) {
  try{
    debugger;
    await updateDoc(doc(db, "users", id), {
      rol: data,
    });
  }catch (err){
      console.log(err)
  }
}
