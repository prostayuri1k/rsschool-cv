import React from 'react';
import s from './Main.module.css'
import SectionLeft from "./SectionLeft/SectionLeft";
import SectionRight from "./SectionRight/SectionRight";

const Main = () => {
    return (
        <main className={s.main}>
            <SectionLeft/>
            <SectionRight />
        </main>
    );
};

export default Main;