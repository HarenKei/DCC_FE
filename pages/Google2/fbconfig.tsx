import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider,signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'

//파이어베이스 연결 부분
const firebaseConfig = {
    apiKey: "AIzaSyAoEV-1EWZxk2pD9EzwEg0QZ6uOpenfH4o",
    authDomain: "test-4407e.firebaseapp.com",
    projectId: "test-4407e",
    storageBucket: "test-4407e.appspot.com",
    messagingSenderId: "565993418841",
    appId: "1:565993418841:web:c8e82bc815216841408148",
    measurementId: "G-PGGWK39CGG"
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