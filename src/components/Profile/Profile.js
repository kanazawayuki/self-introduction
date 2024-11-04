import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Profile.css';
import SnsData from './SnsData.json';
import ProfileImage from "../../Images/profile.jpg";

const Profile = ({ profileImage }) => {
    const [firstText, setFirstText] = useState('');
    const [secondText, setSecondText] = useState('');
    const [snsData, setSnsData] = useState([]);

    useEffect(() => {
        const firstTextToShow = "Hello, I'm Yuki Kanazawa";
        const secondTextToShow = "Server Side Engineer";
        let currentIndex = 0;

        const intervalId = setInterval(() => {
            if (currentIndex <= firstTextToShow.length) {
                setFirstText(firstTextToShow.substring(0, currentIndex));
                currentIndex++;
            } else if (currentIndex <= firstTextToShow.length + secondTextToShow.length + 6) {
                setSecondText(secondTextToShow.substring(0, currentIndex - firstTextToShow.length - 6));
                currentIndex++;
            } else {
                clearInterval(intervalId);
            }
        }, 100);

        setSnsData(SnsData);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    //問い合わせがあるページ下部へ移動処理
    const scrollToBottom = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    };

    //SNS画像のimport処理
    const getImagePath = (imageName) => {
        try {
            return require(`../../Images/${imageName}`);
        } catch (error) {
            console.error(`Image not found: ${imageName}`, error);
            return null;
        }
    };

    return (
        <Container fluid className="profile-container">
            <Row className="justify-content-center align-items-center">
                <Col xs={12} md={4} className="profile-title-container">
                    <h2 className="title-text">{firstText}</h2>
                    <h2 className="title-text">{secondText}</h2>
                </Col>
                <Col xs={12} md={4} className="text-center">
                    <div className="profile-image-container">
                        <img src={ProfileImage} className="profile-image" alt="Profile" />
                    </div>
                </Col>
                <Col xs={12} className="text-center mt-3">
                    <button className="contact-button" onClick={scrollToBottom}>
                        Contact Me
                    </button>
                </Col>
                <Col xs={12} className="text-center mt-3">
                    <div className="d-inline-block">
                        {snsData.map((item, index) => (
                            <a key={index} href={item.url} target="_blank" rel="noopener noreferrer">
                                <img src={getImagePath(item.image)} className="sns-image" alt={item.name} />
                            </a>
                        ))}
                    </div>
                    <p className="scroll-down-text">Scroll down for more!</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Profile;
