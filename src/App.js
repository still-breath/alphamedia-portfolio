// src/App.js
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Projects } from './components/Projects';
import { Company } from './components/Company';

function App() {
    const [content, setContent] = useState('home');

    const loadPage = (page) => {
        setContent(page);
    };

    const renderContent = () => {
        switch (content) {
            case 'home':
                return (
                    <>
                        <Banner />
                        {/* Other home components can be added here */}
                    </>
                );
            case 'company':
                return <Company />;
            case 'projects':
                return <Projects />;
            default:
                return (
                    <>
                        <Banner />
                        {/* Other home components can be added here */}
                    </>
                );
        }
    };

    return (
        <div className="App">
            <NavBar onNavClick={loadPage} />
            {renderContent()}
        </div>
    );
}

export default App;
