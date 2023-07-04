"use client";

import useSWR from "swr";

import React, { useState } from "react";
import styles from "./Post.module.css";
import { fetcher } from "@/utils";
import { useUpdateTitle } from "@/hooks";

const Post = ({ id, title, body, userId }) => {
  const { handleUpdateTitle, isLoading, post } = useUpdateTitle(id);
  const currentTitle = post?.title
    ? post.title.toUpperCase()
    : title.toUpperCase();
  const [editMode, setEditMode] = useState<boolean>(false);

  const [value, setValue] = useState<string>(currentTitle);

  const { data } = useSWR(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
    fetcher
  );

  const editHandler = async (newTitle) => {
    await handleUpdateTitle(newTitle);
    setEditMode(false);
  };

  if (!data) return null;
  if (isLoading) return <div className={styles.container}>Loading...</div>;

  return (
    <div className={styles.container}>
      <div className={styles.infoWrapper}>
        <p>{data.name}</p>
        <p>{data.address.city}</p>
      </div>

      {!editMode ? (
        <h3 onClick={() => setEditMode(true)} className={styles.title}>
          {currentTitle}
        </h3>
      ) : (
        <div className={styles.editModeWrapper}>
          <input
            value={value as string}
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={() => editHandler(value)}>Edit</button>
          <button
            onClick={() => {
              setEditMode(false);
              setValue(currentTitle);
            }}
          >
            Cancel
          </button>
        </div>
      )}

      <p className={styles.body}>{body}</p>
    </div>
  );
};

export interface IPostProps {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export default Post;
