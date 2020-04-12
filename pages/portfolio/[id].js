import React, { Component } from "react";
import { withRouter } from "next/router";
import axios from "axios";

class Portfolio extends Component {
  static async getInitialProps(context) {
    let post = {};
    const postId = context.query.id;
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      post = response.data;
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    return { post };
  }
  render() {
    const { post } = this.props;

    return (
      <div>
        <h1>Portfolio</h1>
        <h2>{post.title}</h2>
      </div>
    );
  }
}
export default withRouter(Portfolio);
