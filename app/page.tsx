import React from 'react';

const HomePage = () => {
    return (
        <div>
            {/* Hero Section */}
            <header className="hero">
                <h1>Welcome to MyPassportPic</h1>
                <p>Your one-stop solution for professional passport photos at the comfort of your home.</p>
                <a href="#features" className="cta-button">Get Started</a>
            </header>

            {/* Features Section */}
            <section id="features">
                <h2>Features</h2>
                <ul>
                    <li><strong>High Quality:</strong> Ensure top-notch quality with our professional tools.</li>
                    <li><strong>Easy Customization:</strong> Customize your photos to meet professional standards.</li>
                    <li><strong>Fast Service:</strong> Get your photos in minutes!</li>
                    <li><strong>Affordable Pricing:</strong> Competitive prices without compromising quality.</li>
                </ul>
            </section>

            {/* Footer Section */}
            <footer>
                <p>&copy; 2026 MyPassportPic. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default HomePage;
