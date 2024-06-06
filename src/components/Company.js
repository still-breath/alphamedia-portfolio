// src/components/Company.js
import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import aisas from "../assets/img/aisas.png";
import compprof from "../assets/img/compprofile.png";

export const Company = () => {
    return(
        <section className="company" id="profile">
            <Container>
                <Row>
                    <Col xs={12} md={6} xl={5}>
                    </Col>            
                    <Col xs={12} md={6} xl={7}>
                        <div className="firstpara">
                            <h1>Alpha Media</h1>
                            <p>Alpha Media adalah perusahaan pemasaran digital yang mengutamakan platform TikTok, menggunakan Artificial Intelligence sebagai komponen utama dalam efisiensi produksi. Dengan fokus pada transformasi digital UMKM di Indonesia, terutama di bidang FnB dan kosmetik, Alpha Media mampu melakukan analisis pasar yang mendalam, mengidentifikasi audiens target, dan menciptakan konten relevan secara efisien.</p>
                            <img 
                                src={aisas} 
                                alt="Description"   
                                style={{ 
                                position: 'relative', 
                                bottom: '50px',
                                width: '30%',
                                transform: 'translate(-50%, -50%)' 
                                }} 
                            />
                        </div>
                    </Col>        
                </Row>
            </Container>
        </section>
    );
};
