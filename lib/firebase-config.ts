// lib/firebase-config.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// ⛳ Firebase コンソール > プロジェクト設定 > 一般 > "自分のアプリ" の設定からコピー
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "acky-household-app.firebaseapp.com",
  projectId: "acky-household-app",
  storageBucket: "acky-household-app.appspot.com",
  messagingSenderId: "228490034500",
  appId: "1:228490034500:web:97da33356a753539dc2b11"
};

// 🟢 初期化して Firestore 接続を export
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
