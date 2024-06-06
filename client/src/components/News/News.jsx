import React from 'react';
import { Link } from 'react-router-dom';
import './News.css';

const News = () => {
    
    const newsList = [
        {
            id: 1,
            title: 'new 1',
            desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            coverImg: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/876c22100707927.5f0ec9851cb08.png',
            content: 'Intro to Web3 Day 1: Intro to Web3 ...',
            authorName: 'John Doe',
        },
        {
            id: 2,
            title: 'new 2',
            desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            coverImg: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/876c22100707927.5f0ec9851cb08.png',
            content: 'Intro to Web3 Day 1: Intro to Web3 ...',
            authorName: 'John Doe',
        },
        {
            id: 3,
            title: 'new 3',
            desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            coverImg: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/876c22100707927.5f0ec9851cb08.png',
            content: 'Intro to Web3 Day 1: Intro to Web3 ...',
            authorName: 'John Doe',
        },
        {
          id: 4,
          title: 'new 4',
          desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          coverImg: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/876c22100707927.5f0ec9851cb08.png',
          content: 'Intro to Web3 Day 1: Intro to Web3 ...',
          authorName: 'John Doe',
        }
    ];

    return (
        <div className="news">
            <div className="container">
                <div className="row">
                    {newsList.map((newsItem) => (
                        <div key={newsItem.id} className="col-lg-4 col-md-6 mb-4">
                            <Link to={`/news/${newsItem.id}`} className="text-decoration-none text-white">
                                <div className="card bg-dark text-white shadow-sm">
                                    <img className="card-img-top" src={newsItem.coverImg} alt={newsItem.title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{newsItem.title}</h5>
                                        <p className="card-text">{newsItem.desc}</p>
                                    </div>
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
