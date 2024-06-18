import { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/mascot.png";
import logoAlpha from "../assets/img/logo-alpha-brand.svg";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    const tick = useCallback(() => {
        const toRotate = ["Crafting", " Creatively", " One-Click Away"];
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }, [isDeleting, loopNum, text.length, period]);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [tick, delta]);

    const handleWhatsAppClick = () => {
        window.open("https://wa.me/6285186866256", "_blank");
    };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <img src={logoAlpha} className="logotag" alt="Logo-AlphaMedia" />
                        {/*<span className="tagline">Alpha Media</span>*/}
                        <h1><span className="wrap">{text}</span></h1>
                        <p>Alpha Media adalah perusahaan pemasaran digital yang mengutamakan platform TikTok, menggunakan Artificial Intelligence sebagai komponen utama dalam efisiensi produksi.</p>
                        <button onClick={handleWhatsAppClick}>Let's Connect <ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} className="mascot" alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
