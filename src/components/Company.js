// src/components/Company.js
import React from 'react';
import { Col, Container, Row } from "react-bootstrap";

export const Company = () => {
    const points = [
        "Memberdayakan UMKM dengan solusi pemasaran digital terdepan yang mengutamakan platform TikTok dan kecerdasan buatan (AI), guna membantu menghadapi tantangan transformasi digital.",
        "Menyediakan layanan desain, produksi video, dan pengelolaan iklan TikTok berkualitas tinggi untuk membantu UMKM memperkuat visibilitas dan daya tarik merek mereka di pasar digital.",
        "Menjadi mitra strategis bagi UMKM dengan menyediakan strategi pemasaran yang efektif, membantu mereka bersaing lebih baik dalam pasar digital yang kompetitif.",
        "Terus menggabungkan keahlian dalam pemasaran digital dan teknologi AI untuk memberikan solusi inovatif yang mengoptimalkan potensi pasar digital bagi klien kami."
    ];

    return (
        <section className="company" id="profile">
            <Container>
                <Row>
                    <Col xs={12} md={6} xl={5}>
                        <div className="secpara">
                        <h1>VISI</h1>
                            <p>Menjadi katalisator pertumbuhan bisnis berkelanjutan bagi UMKM di Indonesia dengan memadukan keahlian dalam pemasaran digital dan teknologi AI, menciptakan lanskap pemasaran digital yang inovatif dan berkelanjutan untuk memperluas jangkauan UMKM dan meningkatkan kehadiran digital.</p>
                            <h1>MISI</h1>
                            <ol>
                                {points.map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ol>
                        </div>
                    </Col>            
                    <Col xs={12} md={6} xl={7}>
                        <div className="firstpara">
                            <h1>Alpha Media</h1>
                            <p>Alpha Media adalah perusahaan pemasaran digital yang mengutamakan platform TikTok, menggunakan Artificial Intelligence sebagai komponen utama dalam efisiensi produksi. Dengan fokus pada transformasi digital UMKM di Indonesia, terutama di bidang FnB dan kosmetik, Alpha Media mampu melakukan analisis pasar yang mendalam, mengidentifikasi audiens target, dan menciptakan konten relevan secara efisien.</p>  
                            <p>Layanan utama Alpha Media mencakup desain, produksi video, dan pengelolaan TikTok Ads. Selain menyediakan konten berkualitas, Alpha Media juga menawarkan strategi pemasaran yang efektif, memperkuat kehadiran digital UMKM, dan membantu mereka bersaing lebih baik di pasar digital. Dengan demikian, Alpha Media bukan sekadar mitra pemasaran biasa, tetapi juga menjadi katalisator pertumbuhan bisnis berkelanjutan bagi UMKM di Indonesia, memadukan keahlian dalam pemasaran digital dan teknologi AI untuk memenuhi kebutuhan klien dan mengoptimalkan potensi pasar digital.</p>              
                        </div>
                    </Col>        
                </Row>
            </Container>
        </section>
    );
};
