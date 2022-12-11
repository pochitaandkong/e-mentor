import React from 'react';
import './Section5.css'
import motion_design from '../../../img/motion_design.png'
import circles from '../../../img/circles.png'
import gragh from '../../../img/gragh.png'
import phone from '../../../img/phone.png'

const Section5 = () => {
    return (
        <section className='Section5'>
            <div className='container'>
                <h2>Популярные курсы</h2>
                <div className="sec5-box">
                    <div className="sec5-box-1">
                        <img src={motion_design} alt=""/>
                        <p>Motion design</p>
                    </div>
                    <div className="sec5-box-1">
                        <img src={circles} alt=""/>
                        <p>Таргет в Instagram</p>
                    </div>
                    <div className="sec5-box-1">
                        <img src={gragh} alt=""/>
                        <p>Эффектные презентации</p>
                    </div>
                    <div className="sec5-box-1">
                        <img src={phone} alt=""/>
                        <p>SMM-стратегия</p>
                    </div>
                </div>
                <div className="sec5-bottom">
                    <button>Все курсы</button>
                </div>
            </div>
        </section>
    );
};

export default Section5;