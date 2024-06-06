// src/ProjectCard.js
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, videoUrl }) => {
    return(
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                {videoUrl ? (
                    <video width="50%" controls>
                        <source src={videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <img src={imgUrl} alt={title} />
                )}
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}
