"use client";

import useSWR, { mutate } from "swr";

const useUpdateTitle = (postId) => {
  const {
    data: post,
    error,
    isLoading,
  } = useSWR(`https://jsonplaceholder.typicode.com/posts/${postId}`);

  const updatePostTitle = async (newTitle) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
      {
        method: "PUT",
        body: JSON.stringify({ title: newTitle }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );

    const updatedPost = await response.json();

    if (!response.ok) {
      throw new Error(updatedPost.message);
    }

    return updatedPost;
  };

  const handleUpdateTitle = async (newTitle) => {
    const updatedPost = await updatePostTitle(newTitle);
    await mutate(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
      updatedPost
    );
  };

  return {
    handleUpdateTitle,
    post,
    error,
    isLoading,
  };
};

export default useUpdateTitle;
