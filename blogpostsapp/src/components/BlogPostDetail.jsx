import React from 'react'
import { useLoaderData } from 'react-router-dom'

function BlogPostDetail() {

    const data = useLoaderData()
    console.log(data);
    const {urlToImage, content} = data

    return (
        <div>
            <div class="card">
                <h1>hello</h1>
                <img src={urlToImage} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <p class="card-text">{content}</p>
                    </div>
            </div>
        </div>
    )
}

export default BlogPostDetail