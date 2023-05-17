import { auth, googleProvider, signInWithGoogleInConfig, db } from './fbconfig';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import MovieList from './MovieList';
import { collection, setDoc, doc } from 'firebase/firestore';

export default function Google2() {
  // console.log(auth?.currentUser?.email+"asdf");
  // console.log(typeof(auth?.currentUser?.photoURL+"asdf"));
  //이 주석 부분은 안보셔도 됩니다.
  // return(
  //   <div style={{width: "500px", margin: "100px", paddingTop: "30px"}}>
  //     <button onClick={signInWithGoogleInConfig}>Sign In With Google</button>
  //     {/* <h1>{email}</h1>
  //     <h1>{name}</h1>
  //     <img src={profilePic}/> */}
  //   </div>
  // )
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //이메일로 로그인 가능하게 만들어 둔 코드입니다.
  //근데 파베에는 허용 안해뒀으니까 쓰지마세요
  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);  
    } catch (error) {
     console.error(error); 
    }
  };

  let userid : any = "";
  let userName : any = "";

  const addUsers = async (ref : any) => {
    try {
      await setDoc(ref,{
        name : userName
      });
    } catch (error) {
      console.error(error);
    }
  }

  //구글 로그인 버튼입니다 로그인 창이 팝업으로 뜸니당.
  //누르고 콘솔 가보시면 로그인 한 사용자 정보 뜸
  const signInWithGoogle = async () => {
    try {
      await signInWithGoogleInConfig();
    } catch (error) {
     console.error(error); 
    }
  };

  //로그인 한 사람 uid 가져오기
  onAuthStateChanged(auth, async(user) => {
    if (user) {
      // User logged in already or has just logged in.
      console.log(user.uid+''+user.displayName);
      userid = user.uid;
      userName = user.displayName;
      const UsersDocRef = doc(db, "Users", userid);
      await addUsers(UsersDocRef);
    } else {
      // User not logged in or has just logged out.
    }
  });

  //로그아웃버튼임다
  const logout = async () => {
    try {
      await signOut(auth);
      location.reload();  
    } catch (error) {
     console.error(error); 
    }
  };
  return (
    <div style={{width: "500px", margin: "100px", paddingTop: "30px"}}>
      <input placeholder='Email...' onChange={(e) => setEmail(e.target.value)}/>
      <input placeholder='Password' onChange={(e) => setPassword(e.target.value)} type='password'/>
      <button onClick={signIn}>Sign In with Email</button>

      <button onClick={signInWithGoogle}>Sign In With Google</button>
      <button onClick={logout}>Log Out</button>
      <MovieList />
      <hr />
    </div>
  )
};
  