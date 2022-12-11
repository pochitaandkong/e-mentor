import React from 'react';
import sec4_img from '../../../img/sec4-photo.jpg'
import './Section4.css'

const Section4 = () => {
    return (
        <section className='Section4'>
            <div className='container'>
                <div className="sec4_box">
                    <div className="sec4_box_left">
                        <img src={sec4_img}alt=""/>
                    </div>
                    <div className="sec4_box_right">
                        <h2>Выбирайте свой<br/> формат обучения</h2>
                        <p>Смотрите видео-лекции в удобное для вас время, обучайтесь<br/>    на тренажере, участвуйте в интенсивных воркшопах<br/>
                            с командой или проходите курс с гибким расписанием.<br/>
                            На нашей платформе каждый найдет подходящий формат.</p>
                        <button>Все курсы</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section4;