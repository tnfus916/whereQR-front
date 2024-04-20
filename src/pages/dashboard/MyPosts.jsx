import React from "react";
import PostList from "../../components/dashboard/PostList";
import { PageContainer } from "../account/MyPage";

function MyPosts() {
  return (
    <PageContainer>
      <PostList />
    </PageContainer>
  );
}

export default MyPosts;
