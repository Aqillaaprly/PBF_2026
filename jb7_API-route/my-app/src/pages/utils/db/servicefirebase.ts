import app from "./firebase";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const db = getFirestore(app);

export async function retrieveData(collectionName: string) {
  const snapshot = await getDocs(collection(db, collectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
}