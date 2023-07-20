import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import kruti from '../../assets/images/kruti.jpg';
import '../../assets/css/about.css';

function About () {
    return (
        <section className="flex-row justify-center vw100">
            <div className="w75 bg-dark section-container flex-row justify-center">
                <h2 className="text-center w100 mb-2">about<span className="text-primary">Me</span></h2>
                <div className="text-center" id="my-picture">
                    <img className="circle" id="profile-pic" src={kruti} alt="Kruti Patel of krutipatel07" />
                    <a href="https://github.com/krutipatel07" target="_blank">
                        <FontAwesomeIcon icon={faGithubAlt} className="mx-2 icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/tokruti/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} className="mx-2 icon" />
                    </a>
                </div>
                <div className="w75" id="about-me">
                    <p>
                        Hello! My name is <span className="bold text-primary">Kruti Patel</span>. I am MERN stack developer.
                    </p>
                    <p>
                        In APril 2021, I embarked on a 24-week journey to become a full stack developer.  It was not planned.  Prior to that, I was a Web Developer.  My degree was in Computer Science.  
                    </p>
                    <p>
                        To reiterate: I spontaneously decided to devote six months of my life to a coding boot camp despite having an established career, having no prior experience, and having no idea if I would even enjoy this kind of work.
                    </p>
                    <p>
                        So why did I decide to put myself through this?  And why am I telling you all of this now?
                    </p>
                    <p>
                        I can't really say what compelled me to take up coding.  Maybe I wanted a challenge.  (Understatement of the year.)  Maybe I had an inkling that, given my science and math background, I would enjoy it.  Whatever it was, I have no regrets.  I took to coding like a fish to water.  And I'm telling you all of this now because it's easy to say that I am a fast learner and a dedicated worker.
                    </p>
                    <p>
                        Hello, my name is Kruti Patel.  Web Developer.  Developer.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;