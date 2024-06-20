// src/components/Company.js
import React from 'react';
import { Container } from "react-bootstrap";

export const Company = () => {
    return (
        <section className="company" id="profile">
            <Container>
                <div className="iframe-container">
                    <iframe
                        src="https://online.pubhtml5.com/gmlvu/veyu/"
                        seamless="seamless"
                        allowTransparency="true"
                        allowFullScreen="true"
                    ></iframe>
                </div>
            </Container>
        </section>
    );
};
