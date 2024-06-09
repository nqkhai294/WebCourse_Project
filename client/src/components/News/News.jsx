import React from 'react';
import { Link } from 'react-router-dom';
import './News.css';
import { imgUrl } from '../../constant/constants';
const News = ({ news }) => {

    const newsData = news.data || [];
    return (
        <div className="news">
            <div className="container">
                <div className="row">
                    {newsData.map((newsItem) => (
                        <div key={newsItem.id} className="col-lg-4 col-md-6 mb-4">
                            <Link to={`/news/${newsItem.id}`} className="text-decoration-none text-white">
                                <div className="card bg-dark text-white shadow-sm">
                                    <img className="card-img-top" src={`${imgUrl}${newsItem.attributes.coverImg.data.attributes.url}`} alt={`${imgUrl}${newsItem.attributes.coverImg.data.attributes.url}`} />
                                        <h5 className="card-title">{newsItem.attributes.newsTitle}</h5>
                                        <p className="card-text">{newsItem.attributes.newsDesc}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default News;
