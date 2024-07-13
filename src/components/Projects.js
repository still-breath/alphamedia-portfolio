// src/Projects.js
import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/design1_kpbawang.svg";
import projVid1 from "../assets/vid/konten1_segonyimut.mp4";
import projVid2 from "../assets/vid/btsrkn.mp4";
import projVid3 from "../assets/vid/konten2_segonyimut.mp4";
import projAdv1 from "../assets/img/adv1_segonyimutsby.png";
import notfound from "../assets/img/404notfound.png";
import myImage from "../assets/img/projMasc.png";

export const Projects = () => {

    const projects = [
        {
            title: "Kampung Bawang Simokerto",
            description: "GSM Project for Kampung Bawang Simokerto",
            imgUrl: projImg1,
        },
    ];
    const video = [
        {
            title: "Sego Nyimut Surabaya",
            description: "Starterpack APD by Sego Nyimut Surabaya",
            videoUrl: projVid1,
            href: "https://www.instagram.com/reel/C8jzdQYJZsN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        },
        {
            title: "Sego Nyimut Surabaya",
            description: "Cek Khodam by Sego Nyimut Surabaya",
            videoUrl: projVid3,
            href: "https://www.instagram.com/reel/C81wAcjJe_x/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        },
        {
            title: "Rumah Kopi Nusantara",
            description: "Profile video still in progress",
            videoUrl: projVid2,
        },
    ];
    const advance = [
        {
            title: "Sego Nyimut Surabaya",
            description: "The outcome of implementing adVance at Sego Nyimut Surabaya",
            imgUrl: projAdv1,
        },
        {
            title: "404: Not Found",
            description: "Advance projects have not yet been found",
            imgUrl: notfound,
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
