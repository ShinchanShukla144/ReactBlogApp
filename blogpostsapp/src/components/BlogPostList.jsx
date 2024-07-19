import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function BlogPostList() {

    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [pages, setPages] = useState(1)

    async function getNewsAPIData() {
        setLoading(true)
        await axios.get(`https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
            .then(res => {
                setPosts(res.data.articles)
            })
            .catch(err => {
                console.log(err)
            })
        setLoading(false)
    }

    useEffect(() => {
        getNewsAPIData()
    }, [])

    function pageHandler(slectedPage) {
        setPages(slectedPage)
    }

    //const {urlToImage, content} = posts
    return (
        <div>
            {loading ? "Loading..." : <div>

                {
                    posts.slice(pages * 10 - 10, pages * 10).map((post, name) => (
                        <Link to={`/post/${post.source.name}`} className='link' key={post.id}>
                            <div class="card">
                                <div class="card-body" >
                                    <h5 class='card-title' >{post.title}</h5>
                                    <p class='card-text'>{post.description}</p>
                                    <small class="text-muted">{post.publishedAt}</small>
                                </div>
                            </div>
                        </Link>

                    ))
                }
                {
                    posts.length > 0 && <div className='pagination'>
                        <button>◀️</button>
                        {[...Array(posts.length / 10)].map((_, i) => {
                            return <button className={pages === i + 1 ? "selPage" : ""} onClick={() => pageHandler(i + 1)}>{i + 1}</button>
                        })}
                        <button>▶️</button>
                    </div>
                }
            </div>}
        </div>
    )
}

export default BlogPostList