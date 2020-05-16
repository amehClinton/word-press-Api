import React, { useEffect, useState } from "react";
import PostItem from "./PostItem";
import Spinner from "../Layout/Spinner";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Pagination from "../Pagination";
import { Link } from "react-router-dom";

import { getPosts } from "../../actions/postActions";

const Posts = ({ posts, loading, getPosts }) => {
  const [showPage, setShowPage] = useState(10);
  useEffect(() => {
    getPosts(showPage);

    // eslint-disable-next-line
  }, []);

  const ShowPage = (showPage) => {
    getPosts(showPage);
  };
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className='grid-3'>
        {posts.map((post) => {
          return (
            <div>
              <Link to={`/post/${post.id}`}>
                <PostItem key={post.id} post={post} />
              </Link>
            </div>
          );
        })}

        <Pagination pages={showPage} ShowPage={ShowPage} />
      </div>
    );
  }
};

Posts.propTypes = {
  loading: PropTypes.bool.isRequired,
  posts: PropTypes.array.isRequired,
  getPosts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  posts: state.post.posts,
  loading: state.post.loading,
});

export default connect(mapStateToProps, { getPosts })(Posts);
