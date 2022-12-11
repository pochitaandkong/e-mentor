    import React from 'react';
import facebook from '../../../img/facebook.svg'
import vk from '../../../img/vk.svg'
import insta from '../../../img/insta.svg'
import ikon from '../../../img/icon.png'
import img1 from '../../../img/1.jpg'
import img2 from '../../../img/2.jpg'
import mentor from '../../../img/e-mentor.png'
import arrow from '../../../img/down.png'
import './Section1.css'


const Section1 = () => {
    return (
        <section className='sec1'>
            <div className='container'>
            <div className="sec1__box">
                <div className="sec1__left">
                    <div className="sec1__left__top">
                        <img src={facebook} alt=""/>
                        <img src={vk} alt=""/>
                        <img src={insta} alt=""/>
                    </div>
                    <div className="sec1__left__bottom">
                        <img src={img1} alt=""/>
                    </div>
                </div>
                <div className="sec1__center">
                    <img src={ikon} alt=""/>
                    <img src={mentor} alt=""/>
                    <h1>Образовательная<br/>
                        онлайн-платформа</h1>
                    <p>Курсы и видео-лекции по дизайну, копирайтингу,<br/>
                        SMM, таргету и многим другим направлениям</p>
                    <button>Все направления</button>
                </div>
                <div className="sec1__right">
                    <img src={img2} alt=""/>
                    <div className='sec1__right__bottom'>
                    <p>Листайте вниз</p>
                    <img src={arrow} alt=""/>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Section1;