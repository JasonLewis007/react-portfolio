import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import myResume from '../../assets/pdf/Kruti_resume_ SE.pdf';
import experience from '../../lib/resume';
import '../../assets/css/resume.css';

function Resume() {
    return (
        <section className="flex-row justify-center vw100">
            <div className="w75 bg-dark section-container flex-row justify-center">
                <div className="side-container">
                    <div className="resume-block">
                        <h2 className="mb-1">Kruti <span className="text-primary">Patel</span></h2>
                        <h4>software Developer</h4>
                        <form method="get" action={myResume} target="_blank">
                            <button type="submit" className="btn">
                                <FontAwesomeIcon icon={faFileDownload} className="mr-1" />
                                Download Resume
                            </button>
                        </form>
                    </div>
                    <div className="resume-block">
                        <h5>Skills</h5>
                        Node.js, Express.js, React, MongoDB, Mongoose, MySQL, Sequelize, JavaScript, JQuery, HTML, CSS, Bootstrap, Materialize, AJAX, REST API, Git
                    </div>
                    <div className="resume-block">
                        <h5>Education</h5>
                        <ul className="resume-list">
                            <li>Full-stack Coding Boot Camp Certificate</li>
                            <li>Bachelore of Enginerring in Computer Secience</li>
                        </ul>
                    </div>
                    <div className="resume-block">
                        <h5>Certifications</h5>
                        <ul className="resume-list">
                            <li>
                                Java development <br />
                                <span className="italic text-small">Java Development at university</span>
                            </li>
                            <li>
                                Android development<br />
                                <span className="italic text-small">Android trainning at It compmny</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="experience-container">
                    <h3>Experience</h3>
                    {/* renders job experience from experience array in lib folder */}
                    {experience.map(job => (
                        <div className="resume-block" key={job.id}>
                            <h4 className="text-primary">{job.title}</h4>
                            <h5>{job.company}</h5>
                            <h5 className="resume-date">{job.dates}</h5>
                            <ul className="experience-list">
                                {job.description.map(listItem => (
                                    <li>{listItem}</li>))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Resume;