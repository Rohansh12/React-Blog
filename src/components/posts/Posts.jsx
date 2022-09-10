import { useState } from "react";
import "./posts.css";
import { Link } from "react-router-dom";

export default function Posts({ posts }) {
  const [textSearch, setTextSearch] = useState("");
  const [filter, setFilter] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setTextSearch(e.target.value);
  };
  const PF = "http://localhost:5000/images/";
  const filter_categories = ["tech", "entertainment", "community"];

  return (
    <div className="wrapper">
      <div className="search-wrapper">
        <label htmlFor="search-form">
          <input
            type="search"
            className="search-input"
            placeholder="Search here ..."
            value={textSearch}
            onChange={handleChange}
          />
          {/* <i className="fa fa-search"></i> */}
        </label>

        <div className="select">
          <select
            onChange={(e) => setFilter(e.target.value)}
            className="custom-select"
            aria-label="Filter Posts by Category"
          >
            <option value="">Filter By Categories</option>
            {filter_categories.map((item) => (
              <option value={item}>Filter By {item}</option>
            ))}
          </select>
          <span className="focus"></span>
        </div>
      </div>
      <div className="posts">
        {posts
          .filter((obj) =>
            obj.title
              .toLowerCase()
              .replace(/\s+/g, "")
              .includes(textSearch.toLowerCase().replace(/\s+/g, ""))
          )
          .filter((obj) => obj.cate.includes(filter))
          .map((post) => (
            <>
              <div className="post">
                {post.photo && (
                  <img className="postImg" src={PF + post.photo} alt="" />
                )}
                <div className="postInfo">
                  <div className="postCats">
                    <span className="postCat">{post.cate}</span>
                  </div>
                  <Link to={`/post/${post._id}`} className="link">
                    <span className="postTitle">{post.title}</span>
                  </Link>
                  <hr />
                  <span className="postDate">
                    {new Date(post.createdAt).toDateString()}
                  </span>
                </div>
                <p className="postDesc">{post.desc}</p>
              </div>
            </>
          ))}
      </div>
    </div>
  );
}