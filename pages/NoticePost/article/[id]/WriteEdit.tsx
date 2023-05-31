import { useEffect, useState } from "react";
import EditForm from "../../EditForm";
import { useRouter } from "next/router";
import { doc, getDoc } from "@firebase/firestore";
import { db } from "@/pages/Google2/fbconfig";

const WriteEdit = () =>{
  const [initialValues,setInitialValues] = useState();
  const router = useRouter();
  
  useEffect(()=>{
    getDoc(doc(db,'Post',router.query.id))
    .then(doc =>{
      const data = doc.data();
      setInitialValues(data);
    })
  },[]);
  return(
    <div>
      <h1>게시물 수정</h1>
      {initialValues && <EditForm initialValues={initialValues}/>}
    </div>
  );
}

export default WriteEdit