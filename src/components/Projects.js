// src/Projects.js
import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projVid1 from "../assets/vid/btsrkn.mp4";
import myImage from "../assets/img/projMasc.png";

export const Projects = () => {

    const projects = [
        {
            title: "meriam.id",
            description: "GSM Design for FnB UMKM",
            imgUrl: projImg1,
        },
        {
            title: "Anspro",
            description: "GSM Design for Cosmetic UMKM",
            imgUrl: projImg2,
        },
        {
            title: "Anspro",
            description: "GSM Design for Cosmetic UMKM",
            imgUrl: projImg3,
        },
    ];
    const video = [
        {
            title: "Rumah Kopi Nusantara",
            description: "Video Profile of RKN",
            videoUrl: projVid1,
        },
        {
            title: "Rumah Kopi Nusantara",
            description: "Video Profile of RKN",
            videoUrl: projVid1,
        },
    ];
    const advance = [
        {
            title: "meriam.id",
            description: "GSM Design for FnB UMKM",
            imgUrl: projImg1,
        },
        {
            title: "Anspro",
            description: "GSM Design for Cosmetic UMKM",
            imgUrl: projImg2,
        },
        {
            title: "Anspro",
            description: "GSM Design for Cosmetic UMKM",
            imgUrl: projImg3,
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Alpha Visual</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="sec">Alpha Video</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Alpha AdVance</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <div style={{ position: 'relative' }}>
                            <img 
                                src={myImage} 
                                alt="Description" 
                                style={{ 
                                position: 'absolute', 
                                bottom: '10px',
                                width: '20%',
                                transform: 'translate(-50%, -50%)' 
                                }} 
                            />
                        </div>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {projects.map((project, index) => (
                                        <ProjectCard key={index} {...project} />
                                    ))}
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="sec">
                                <Row>
                                    {video.map((project, index) => (
                                        <ProjectCard key={index} {...project} />
                                    ))}
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <Row>
                                    {advance.map((project, index) => (
                                        <ProjectCard key={index} {...project} />
                                    ))}
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="Background"/>
        </section>
    )
};
