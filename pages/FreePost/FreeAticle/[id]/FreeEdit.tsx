import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { doc, getDoc } from "@firebase/firestore";
import { db } from "@/pages/Google2/fbconfig";
import styled from "styled-components";
import FreeEditForm from "../../FreeEditForm";


const FreeEdit = () =>{
  const [initialValues,setInitialValues] = useState();
  const router:any = useRouter();
  
  useEffect(()=>{
    getDoc(doc(db,'FreePost',router.query.id))
    .then(doc =>{
      const data:any = doc.data();
      setInitialValues(data);
    })
  },[]);
  return(
    <div>
      <EditHead><h1>게시물 수정</h1></EditHead>
      {initialValues && <FreeEditForm initialValues={initialValues}/>}
    </div>
  );
}
const EditHead = styled.div`
  width: 90vw;
  margin: 0 auto;
  margin-right: 16px;
  margin-top: 7px;
`
export default FreeEdit;