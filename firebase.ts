import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDRZJsBScAYp34rSFdAPc9RnftSveOXk4U",
  authDomain: "brightdata-yt-build.firebase",
  projectId: "broghtdata-yt-build",
  storageBucket: "brightdata-yt-build.appspot.com",
  messsagingSenderId: "171284234685",
  appId: "1:171284234685:web:6ac0141518c8dca3c3d2d4",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
