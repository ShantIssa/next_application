import React from 'react';
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

const Post = ({ params }: { params: { id: string } }) => {
    const routingHistory = [
        {
           label: 'Posts',
           href: "/posts"
        },
        {
            label: `Posts ${params.id}`,
            href:`${params.id}`
        }
    ]

    return (
        <div>
            <Breadcrumbs routingHistory={routingHistory}/>
            <h1>Post page</h1>
        </div>
    );
};

export default Post;
