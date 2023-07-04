"use client"

import React from 'react';
import {useRouter} from "next/navigation";

const Posts = () => {
    const router = useRouter()

    const dummyArr =  [
        {
            id:0,
            title: 'Title 1'
        },
        {
            id:1,
            title: 'Title 2'
        },
        {
            id:2,
            title: 'Title 3'
        },
    ]


    const renderDummyArr = dummyArr.map((item) => {
        return (
            <div key={item.id}>
                <button onClick={() => router.push(`/posts/${item.id}`)}>Title: {item.title}</button>
            </div>
        )
    })

    return (
        <div>
            <h1>Posts Page</h1>
            {renderDummyArr}
        </div>
    );
};

export default Posts;
