  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBeZvdx4PO72tqZmsYNsoPVyTJPMGPEpGQ",
    authDomain: "studentbehaviourtrackingsystem.firebaseapp.com",
    projectId: "studentbehaviourtrackingsystem",
    storageBucket: "studentbehaviourtrackingsystem.appspot.com",
    messagingSenderId: "25791104038",
    appId: "1:25791104038:web:b53680f69051e44c4792e7",
    measurementId: "G-M465W2RKBJ"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);