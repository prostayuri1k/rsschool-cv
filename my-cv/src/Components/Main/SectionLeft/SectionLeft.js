import React from 'react';
import s from "../Main.module.css";

const SectionLeft = () => {
    return (
        <section className={s.left}>
            <div className={s.block}>
                <h2>Skills</h2>
                <ul>
                    <li>HTML5, CSS3</li>
                    <li>JavaScript</li>
                    <li>Git, GitHub</li>
                    <li>React, Redux, RTK</li>
                    <li>VS Code, IntelliJ IDEA</li>
                    <li>Figma, Adobe Photoshop</li>
                </ul>
            </div>
            <div className={s.block}>
                <h2>Education</h2>
                <p>Belarusian State University of Transport</p>
                <p>Faculty of Transportation Process Management</p>
                <p>Specialty: Organization of transportation and traffic management in railway transport</p>
            </div>
            <div className={s.block}>
                <h2>Languages</h2>
                <ul>
                    <li>Belarusian - native</li>
                    <li>Russian - native</li>
                    <li>English - A2</li>
                </ul>
            </div>
        </section>
    );
};

export default SectionLeft;