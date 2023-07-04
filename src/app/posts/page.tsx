"use client";

import React from "react";
import { useRouter } from "next/navigation";
import InfiniteScroll from "react-infinite-scroll-component";

import { fetcher } from "@/utils";
import { Post } from "@/components";

import useSWRInfinite from "swr/infinite";

import styles from "./Posts.module.css";

const Posts = () => {
  const router = useRouter();

  const getPaginatedData = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.length) return null;

    return `https://jsonplaceholder.typicode.com/posts?_page=${pageIndex + 1}`;
  };

  const { data, error, isLoading, setSize, size } = useSWRInfinite(
    getPaginatedData,
    fetcher
  );

  const posts = data?.flatMap((page) => page) || [];

  if (error) return <div>Error fetching data...</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Posts Page</h1>
      <InfiniteScroll
        next={() => setSize(size + 1)}
        hasMore={data?.[data?.length - 1]?.length === 10}
        loader={<>Loading More...</>}
        dataLength={posts.length}
        className={styles.infiniteScrollWrapper}
      >
        {posts.map((post) => (
          <div key={post.id}>
            <Post {...post} />
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default Posts;
