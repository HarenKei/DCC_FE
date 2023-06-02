import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider,signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'

//파이어베이스 연결 부분
export const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENTID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

//Google2로 가는 코드입니다
export const googleProvider = new GoogleAuthProvider();

//구글 로그인 시 가지고 올 데이터
export const signInWithGoogleInConfig = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
        console.log(result);
        const name = result?.user?.displayName;
        const email = result?.user?.email;
        const profilePic = result?.user?.photoURL;

        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);
    }).catch((error) => {
        console.log(error);
    })
}

//파이어스토어와, 스토리지 export
export const db = getFirestore(app);
export const storage = getStorage(app);