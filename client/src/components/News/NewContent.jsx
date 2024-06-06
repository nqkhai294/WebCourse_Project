import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import './News.css';

const NewspaperPage = () => {
    const { id } = useParams();
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

    let newItem = newsList.find(newItem => newItem.id == id);
    if (!newItem) {
        return <div>not found</div>;
    }

    return (
        <div className="container-fluid bg-light p-5 news">
            <div className="p-4 shadow-sm ">
                <div className="d-flex justify-content-between align-items-baseline">
                    <h1 className="display-4 text-center text-white">{newItem.title}</h1>
                    <h5 className="text-muted text-white">{newItem.authorName}</h5>
                </div>
                <img className="img-fluid mb-4 cover-img" src={newItem.coverImg} alt={newItem.title} />
                <div className="content text-white">
                    <ReactMarkdown>{newItem.content}</ReactMarkdown>
                </div>
            </div>
        </div>
    );
}

export default NewspaperPage;
