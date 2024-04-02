// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";

// Firebase Firestore (for Firestore database)
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJhKhLHX-mfPLDXoNn2gsS5b6PgvyzhUQ",
  authDomain: "sliike-payment.firebaseapp.com",
  projectId: "sliike-payment",
  storageBucket: "sliike-payment.appspot.com",
  messagingSenderId: "62089300667",
  appId: "1:62089300667:web:e1097937f40658cdbaf79e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firestore
const db = getFirestore(app);

// Function to fetch all documents from the "Ontario" collection
async function fetchAllDocuments() {
  const querySnapshot = await getDocs(collection(db, 'Ontario'));
  let dataDict = {};
  querySnapshot.forEach((doc) => {
    dataDict[doc.id] = doc.data();
  });
  return dataDict;
}

fetchAllDocuments().then(dataDict => {
  var number1 = 40000;
  var number2;
  console.log(parseFloat(dataDict['1']['number1'][2]) + (40500 - parseFloat(dataDict['1']['number1'][0]))*(parseFloat(dataDict['1']['number1'][3]/100)));
});