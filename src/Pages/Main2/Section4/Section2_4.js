import React from 'react';
import './Section2_4.css'
import ikon from '../../../img/icon.svg'
import ikon1 from '../../../img/icon(1).svg'
import ikon2 from '../../../img/icon(2).svg'
import ikon3 from '../../../img/icon(3).svg'

const Section24 = () => {
    return (
        <section className='Section2_4'>
            <div className="container">
                <h2>На курсы вы научитесь</h2>
                <div className="sec2_4_box">
                    <div className="sec2_4_box_1">
                        <div className="sec2_3_box_box">
                            <img src={ikon} alt=""/>
                            <h3>Анимировать объекты</h3>
                        </div>
                        <p>Узнаете принципы создания<br/> инфографики, персонажной 2D<br/> флэт-анимации.</p>
                    </div>
                    <div className="sec2_4_box_1">
                        <div className="sec2_3_box_box">
                            <img src={ikon1} alt=""/>
                            <h3>Работать с кадром</h3>
                        </div>
                        <p>Изучите основные принципы<br/> анимации и работы с объектами,<br/> их движением в кадре.</p>
                    </div>
                    <div className="sec2_4_box_1">
                        <div className="sec2_3_box_box">
                            <img src={ikon2} alt=""/>
                            <h3>Работать в After Effects</h3>
                        </div>
                        <p>Научитесь реализовывать ваши<br/> идеи с помощью популярной<br/> программы для анимации</p>
                    </div>
                    <div className="sec2_4_box_1">
                        <div className="sec2_3_box_box">
                            <img src={ikon3} alt=""/>
                            <h3>Работать со звуком</h3>
                        </div>
                        <p>Освоите инструменты работы,<br/> сможете редактировать музыку<br/>
                            в своем проекте.</p>
                    </div>
                </div>
                <button>Программа курса</button>
            </div>
        </section>


    );
};

export default Section24;