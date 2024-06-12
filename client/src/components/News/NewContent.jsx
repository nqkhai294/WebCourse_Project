import React from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { NavLink } from "react-router-dom";
import { imgUrl } from "../../constant/constants";
import "../News/News.css";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const NewspaperPage = ({ news }) => {
  const { id } = useParams();
  const newsList = news.data || [];
  const newsItem = newsList.find((newsItem) => newsItem.id == id);
  if (!newsItem) {
    return <div>not found</div>;
  }

  return (
    <div className="container-fluid bg-light p-5 news">
      <div className="p-4 shadow-sm ">
        <button className="btn-back">
          <NavLink to="/news" className="btn">
          &#60;&#60; Back
          </NavLink>
        </button>
        <div className="d-flex justify-content-between align-items-baseline">
          <h1
            className="title-newscontent display-4 text-center text-white"
            style={{}}
          >
            {newsItem.attributes.newsTitle}
          </h1>
          <div className="flex-grow-1"></div>
          <h5 className="text-white">{newsItem.attributes.newsAuthor}</h5>
        </div>
        <img
          className="img-newscontent mb-4 w-1/2 h-1/2 mx-auto"
          src={`${imgUrl}${newsItem.attributes.coverImg.data.attributes.url}`}
          alt={`${imgUrl}${newsItem.attributes.coverImg.data.attributes.url}`}
        />
        <div className="content-newscontent prose mx-auto my-10 text-white">
          <BlocksRenderer content={newsItem.attributes.newsContent} />
        </div>
      </div>
    </div>
  );
};

export default NewspaperPage;
