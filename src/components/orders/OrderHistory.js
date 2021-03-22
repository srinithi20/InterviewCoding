import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


export const PostsList = () => {
  const posts = useSelector((state) => state.posts)

  // Sort posts in reverse chronological order by datetime string
  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date))

  const renderedPosts = orderedPosts.map((post) => {
    return (
      <article className="post-excerpt" key={post.orderNumber}>
        <table className="table"> 
        <tr>  
          <th> Order Number </th>
          <th> {post.orderNumber}</th>
        </tr>
        <tr>  
          <th> Date </th>
          <th> {post.date}</th>
        </tr>
        <tr>  
          <th> Status </th>
          <th> {post.status}</th>
        </tr>
        <tr>  
          <th> Total </th>
          <th> {post.total}</th>
        </tr>
        <Link to={`/orderdetail/${post.orderNumber}`} className="button muted-button">
          View Order Details
        </Link>
        </table>
      </article>
    )
  })

  return (
    <section className="posts-list">
      <h2>Order Details</h2>
      {renderedPosts}
    </section>
  )
}
