import React from 'react';
import s from "../Main.module.css";
import codewars from '../../../assets/codewars.png'

const SectionRight = () => {
    return (
        <section className={s.right}>
            <div className={s.block}>
                <h2>About myself</h2>
                <p>
                    I am passionate about software development and studying languages like TypeScript and JavaScript. I enjoy solving logical problems and creating projects that can help people. In my free time, I ride my bike and spend time with my family. My goal is to become a professional developer.
                </p>
            </div>
            <div className={s.block}>
                <h2>Code examples:</h2>
                <ul>
                    <li>
                        <a href={'https://github.com/prostayuri1k/you_tube_spa'} target="_blank">
                            YouTubeSPA (in progress)
                        </a>
                    </li>
                    <li>
                        <a href={'https://github.com/prostayuri1k/to-do-list/tree/RTK-API'} target="_blank">
                            To_Do List with React and RTK
                        </a>
                    </li>
                    <li>
                        <a href={'https://www.codewars.com/users/yury_hrymats'} target="_blank">CodeWars</a>
                        <div className={s.block_image}>
                            <img src={codewars} alt="Code Wars" />
                        </div>
                    </li>
                    <li>
                        <code>

                        </code>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default SectionRight;