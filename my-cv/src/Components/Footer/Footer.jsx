import React from 'react';
import s from './Footer.module.css'
import gitHub from "../../assets/social/github.png";
import rollingScopes from './../../assets/rs-school-logo.svg'

const Footer = () => {
    return (
        <footer className={s.footer}>
            <ul className={s.footerList}>
                <li>
                    <a href={'https://github.com/prostayuri1k'} target='_blank' rel='noopener noreferrer'>
                        <img className={s.footerImg} src={gitHub} alt="GitHub"/>
                        <span>prostayuri1k</span>
                    </a>
                </li>
                <li>2025</li>
                <li>
                    <a href={'https://rs.school/courses/javascript-ru'} target='_blank' rel='noopener noreferrer'>
                        <img src={rollingScopes} alt={'Rolling Scopes'} className={`${s.footerImg} ${s.rollingScopesLogo}`}/>
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;