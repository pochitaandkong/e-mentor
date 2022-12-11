import React from 'react';
import './Section2_3.css'
import photo from '../../../img/photomain2sece.jpg'

const Section23 = () => {
    return (
        <section className='sec2_3'>
            <div className='container'>
                <div className="sec2_3_box">
                    <div className="sec2_3_left">
                        <h2>Актуальные знания</h2>
                        <p>Мы понимаем, как быстро меняются тренды и появляются<br/> обновления. Поэтому мы всегда следим за всеми новинками,<br/> добавляем в программу то, что требуют топовые компании.<br/> Мы предлагаем вам только актуальные знания, чтобы вы были<br/> впереди планеты всей. </p>
                        <button>Купить курс</button>
                    </div>
                    <div className="sec2_3_right">
                        <img src={photo} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section23;