import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export const OrderDetails = ({ match }) => {
  const { postId } = match.params;

  const post = useSelector((state) =>
    state.posts.find((post) => post.orderNumber === postId)
  );

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  return (
    
    <section>
       <Link to="/"> Back to Order Details</Link> 
      <article className="post">
        <h2>{post.title}</h2>
        <table className="table"> 
        <tr>  
          <th> Order Number </th>
          <th> {post.orderNumber}</th>
        </tr>
        <tr>  
          <th> Order Date </th>
          <th> {post.date}</th>
        </tr>
        <tr>  
          <th> Shipping Address </th>
          <th> {post.shippingAddress}</th>
        </tr>
        <tr>  
          <th> Billing Address </th>
          <th> {post.billingAddress}</th>
        </tr>
        <tr>  
          <th> Payment Method </th>
          <th> {post.paymentMethod}</th>
        </tr>
        </table>
        <div>
          <img src ={post.orderItemImage} alt="order image"/>
        </div>
       
        <p className="post-content">Order Item : {post.orderItem}</p>      </article>
    </section>
  );
};
