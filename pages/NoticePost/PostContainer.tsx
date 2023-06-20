import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NoticeCard from "@/src/Common/NoticeCard";
import Link from "next/link";

const PostContainer = ({ data }: any) => {
  return (
    <div>
      <MainBodyContainer>
        {data.map((post: any) => (
          <Link href={`/NoticePost/article/${post.id}/WritePostView`}>
            <NoticeCard
              key={post.id}
              major={post.category}
              title={post.title}
              writer={post.userName}
              date={post.writeDate}
            />
          </Link>
        ))}
      </MainBodyContainer>
    </div>
  );
};
const MainBodyContainer = styled.div`
  padding: 1rem;
  margin: 2rem auto;
  width: 90%;
  height: auto;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-flow: row wrap;
`;
export default PostContainer;
