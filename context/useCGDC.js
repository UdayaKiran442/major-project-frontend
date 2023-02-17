import React, { useContext } from "react";

import CGDCContext from "./context";

import { getCGDCPostsApi } from "../api/cgdc";

const useCGDC = () => {
  const { posts, setPosts } = useContext(CGDCContext);
  const getPosts = async () => {
    const resposne = await (await getCGDCPostsApi()).data;
    if (resposne.success) {
      setPosts(resposne.results);
    } else {
      alert(resposne.error);
    }
  };
  return { posts, setPosts, getPosts };
};

export default useCGDC;
