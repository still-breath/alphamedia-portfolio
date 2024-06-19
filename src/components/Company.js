// src/components/Company.js
import React from 'react';
import { Container } from "react-bootstrap";

export const Company = () => {
    return (
        <section className="company" id="profile">
            <Container>
                <iframe
                    style={{ width: '1200px', height: '700px', paddingTop: '10px'}}
                    src="https://online.pubhtml5.com/gmlvu/veyu/"
                    seamless="seamless"
                    allowTransparency="true"
                    allowFullScreen="true"
                ></iframe>
            </Container>
        </section>
    );
};
