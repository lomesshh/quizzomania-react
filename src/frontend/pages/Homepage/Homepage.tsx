import React from 'react'
import { Link } from 'react-router-dom'
import "../../stylesheets/homepage.css"

const Homepage = () => {
  return (
    <div>
        <div className="hero-section">
        <div className="hero-info">
            <h1>Empowering and inspiring all students to excel as life long learners.</h1>
            <p>Be transparent. Let's build a community that allows hard questions and honest conversations so we can stir up transformation in one another</p>
            <div className="hero-button">
                <Link to="/category"><button>Start solving</button></Link>
            </div>
        </div>
        <div className="hero-image">
            <img src="https://res.cloudinary.com/dgwzpbj4k/image/upload/v1651151558/quizzomania/heroImage_qujxqc.png" alt="hero-img" /> 
        </div>
    </div> 
    
    <div className="about-cards">
        <h1>How quizzomania work ?</h1>
        <div className="grid grid-responsive">
        <div className="card">
            <h3>Take the assessment</h3>
            <div className="about-image">
                <img src="https://res.cloudinary.com/dgwzpbj4k/image/upload/v1651151558/quizzomania/report1_sq4lbf.png" alt="about-img" />
            </div>
            <div className="about-info">
                <p>Spend less than 10 minutes answering all questions 
                    about your choosen topic. keep one thing in mind all 
                    question have time limit 
                </p>
            </div>
        </div>
        <div className="card">
            <h3>See how you scored</h3>
            <div className="about-image">
                <img src="https://res.cloudinary.com/dgwzpbj4k/image/upload/v1651151558/quizzomania/report3_qm8azw.png" alt="about-img" />
            </div>
            <div className="about-info">
                <p>You will immediately see your overall score, 
                    all question you have attempted and which of 
                    them are wrong or right everything  
                </p>
            </div>
        </div>
        <div className="card">
            <h3>Get your free report</h3>
            <div className="about-image">
                <img src="https://res.cloudinary.com/dgwzpbj4k/image/upload/v1651151558/quizzomania/report2_y4cb50.png" alt="about-img" />
            </div>
            <div className="about-info">
                <p>Get your personalized report in your profile 
                    to get deeper look at your results and it will 
                    help you to find your weakness
                </p>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export { Homepage }