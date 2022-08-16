import React from 'react';

const Home = () => {
    return (
        <div className='home-container'>
            <div className="home-card-container">
                <div className="home-front-page"></div>
                <div className="home-img-container"></div>
                <div className='home-text-container'>
                    <h1>Hola soy Leo</h1>
                    <p>Desarrollador Frontend</p>
                </div>
                <div className="home-icons-container">
                    <a href="https://www.facebook.com/profile.php?id=1783522575"><i className="fa-brands fa-square-facebook"></i></a>
                    <a href="https://www.linkedin.com/in/leodavila/"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="https://www.instagram.com/liodavila1/"><i className="fa-brands fa-square-instagram"></i></a>
                </div>
            </div>
        </div>
    );
};

export default Home;