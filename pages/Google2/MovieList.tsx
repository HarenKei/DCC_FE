import { useEffect, useState } from "react";
import { db, auth, storage } from "./fbconfig";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import { onAuthStateChanged } from "firebase/auth";

export default function MovieList() {
  const [movieList, setMovieList] = useState([]);

  //new movie state
  //파이어스토어에서 무비리스트를 가지고 옵니다
  const [newMovieTitle, setNewMovieTitle] = useState("");
  const [newReleaseDate, setNewReleaseDate] = useState(0);
  const [isNewMovieOscar, setIsNewMovieOscar] = useState(false);
  
  const [userid, setUserId] = useState("uid");
  //이 부분은 노션 참고 + 검색 꼭 해볼것 doc 관련 함수가 매우 많음
  //`users/{userid}/todo/{todo.id}` 이런식으로 깊은 레벨까지 도달 가능
  const moviesCollectionRef = collection(db, `Users/${userid}/depth`);

  //update title state
  const [updatedTitle, setUpdatedTitle] = useState("");
  //file upload state
  const [fileUpload, setFileUpload] = useState(null);

  const getMovieList = async () => {
    try {
      const data = await getDocs(moviesCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMovieList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

const deleteMovie = async (id: string) => {
    const movieDoc = doc(db, `Users/${userid}/depth`, id);
    await deleteDoc(movieDoc);
    getMovieList();
  };
  const updateMovieTitle = async (id: string) => {
    const movieDoc = doc(db, `Users/${userid}/depth`, id);
    await updateDoc(movieDoc, { title: updatedTitle });
    getMovieList();
  };

  //파이어베이스 스토리지 기능
  //md 파일 업로드 가능 확인.
  //받아오는건 아직 못함
  const uploadFile = async () => {
    if (!fileUpload) return;
    const fileFolderRef = ref(storage, `projectFiles/${fileUpload.name}`);
    try {
      await uploadBytes(fileFolderRef, fileUpload);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth,async (user) => {
      if(user){
        setUserId(user.uid);
        getMovieList();
      } else {}
    })
  },[])
  useEffect(() => {
    getMovieList();
  }, [userid]);

  const onSubmitMovie = async () => {
    try {
      await addDoc(moviesCollectionRef, {
        title: newMovieTitle,
        releaseDate: newReleaseDate,
        oscarReceived: isNewMovieOscar,
        //firebase auth에 저장된 userid 이게 개별 토큰 같군요
        userId: auth?.currentUser?.uid,
      });
      getMovieList();
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <div>
        {/* 영화 제목과 개봉년도, 오스카 수상여부 인데 대충 아무거나 넣세요 */}
        <input
          placeholder="Movie title..."
          onChange={(e) => setNewMovieTitle(e.target.value)}
        />
        <input
          placeholder="Release Date..."
          type="number"
          onChange={(e) => setNewReleaseDate(Number(e.target.value))}
        />
        <input
          type="checkbox"
          checked={isNewMovieOscar}
          onChange={(e) => setIsNewMovieOscar(e.target.checked)}
        />
        <label>Received an Oscar</label>
        <button onClick={onSubmitMovie}>Submit Movie</button>
      </div>
      <div>
        {movieList.map((movie) => (
          // eslint-disable-next-line react/jsx-key
          <div>
            <h1 style={{ color: movie.oscarReceived ? "green" : "red" }}>
              {movie.title}
            </h1>
            <p>date : {movie.releaseDate}</p>
            <button onClick={() => deleteMovie(movie.id)}>Delete movie</button>
            <input
              placeholder="new Title..."
              onChange={(e) => setUpdatedTitle(e.target.value)}
            />
            <button onClick={() => updateMovieTitle(movie.id)}>
              Update Title
            </button>
          </div>
        ))}
      </div>
      <div>
        {/* 파일 업로드인데 업로드가 된다 까지만 확인 됬습니다 md 파일 올라감 댓글과 제목 등은 다시 생각해볼것*/}
        <input type="file" onChange={(e) => setFileUpload(e.target.files[0])} />
        <button onClick={uploadFile}>Upload File</button>
      </div>
    </div>
  );
}
