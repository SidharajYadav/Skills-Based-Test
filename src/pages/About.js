import React from 'react';

const About = ({ score }) => {
    return (
        <div>
            <h2>Your Score: {score}</h2>
            <p>Thank you for taking the test!</p>
        </div>
    );
};

export default About;
