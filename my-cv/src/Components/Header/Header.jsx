import React from 'react';
import s from './Header.module.css';
import avatar from '../../assets/avatar.jpeg';
import telegram from '../../assets/social/telegram.png';
import discord from '../../assets/social/discord.png';
import mail from '../../assets/social/mail.png';
import phone from '../../assets/social/phone.png';


const Header = () => {
    return (
        <header className={s.resume_header}>
            <div className={s.header_photo}>
                <img src={avatar} alt="Yury Hrymats" />
            </div>
            <div className={s.header_info}>
                <h1>Yury Hrymats</h1>
                <nav>
                    <ul className={s.contacts}>
                        <li>
                            <a href={'https://t.me/iuragrimot'} target='_blank'>
                                <img className={s.contacts_img} src={telegram} alt="Telegram"/>
                                <span>@iuragrimot</span>
                            </a>
                        </li>
                        <li>
                            <a href={'mailto:yury.hrymats@icloud.com'} target='_blank'>
                                <img className={s.contacts_img} src={mail} alt="Mail"/>
                                yury.hrymats@icloud.com
                            </a>
                        </li>
                        <li>
                            <a href={'tel:+375336677798'} target='_blank'>
                                <img className={s.contacts_img} src={phone} alt="Phone"/>
                                +375 (33) 66-777-98
                            </a>
                        </li>
                        <li>
                            <a href={'https://discordapp.com/users/prostayuri1k/'} target='_blank'>
                                <img className={s.contacts_img} src={discord} alt="Discord"/>
                                prostayuri1k
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;