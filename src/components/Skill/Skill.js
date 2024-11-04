import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Skill.css';
import skillData from './SkillData.json';

const Skill = () => {
    const [skills, setSkills] = useState({ mainSkills: [], subSkills: [] });

    useEffect(() => {
        setSkills(skillData);
    }, []);

    const getImagePath = (imageName) => {
        try {
            return require(`../../Images/${imageName}`);
        } catch (error) {
            console.error(`Image not found: ${imageName}`, error);
            return null;
        }
    };

    const renderSkills = (skillList) => {
        return skillList.map((skill, index) => (
            <Col key={index} xs={12} md={2} lg={2} className="text-center mb-4 skill-col">
                <figure className="skill-section">
                    <img src={getImagePath(skill.image)} className="skill-image" alt={skill.name} />
                    <figcaption className="skill-name">{skill.name}</figcaption>
                    <figcaption className="skill-caption">{skill.caption}</figcaption>
                </figure>
            </Col>
        ));
    };

    return (
        <Container fluid className="skill-container">
            <Row className="justify-content-md-center align-items-stretch">
                <Col xs={12} className="text-center mb-4">
                    <h2 className="skill-title">Main-Skill</h2>
                </Col>
                {renderSkills(skills.mainSkills)}
                <Col xs={12} className="text-center mb-4">
                    <h2 className="skill-title">Sub-Skill</h2>
                </Col>
                {renderSkills(skills.subSkills)}
            </Row>
        </Container>
    );
}

export default Skill;
