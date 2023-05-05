import { db } from "../firebase-config";
import {
  doc,
  addDoc,
  collection,
  deleteDoc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";

const bookCollectionRef = collection(db, "books");

export const bookService = {
  getAllBooks: () => {
    return getDocs(bookCollectionRef);
  },
  addBook: (newBook) => {
    return addDoc(bookCollectionRef, newBook);
  },
  deleteBook: (id) => {
    return deleteDoc(doc(db, "books", id));
  },
  updateBook: (id, newBook) => {
    return setDoc(doc(db, "books", id), newBook);
  },
};
