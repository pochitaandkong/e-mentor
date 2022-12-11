import React from 'react';
import './Section3.css'
import img1 from '../../../img/img1.jpg'
import img2 from '../../../img/img2.jpg'
import img3 from '../../../img/img3.jpg'
import img4 from '../../../img/img4.jpg'
import img5 from '../../../img/img5.jpg'
import img6 from '../../../img/img6.jpg'

const Section3 = () => {
    return (
        <section className='sec3'>
        <div className='container'>
            <div className="sec3__box">
                <div className="sec3-left">
                    <h2>Учитесь у лучших</h2>
                    <p>Наши преподаватели – профессионалы, которые добились<br/> успеха в своей области. Лид-дизайнеры известных студий,<br/> маркетологи крупнейших компаний, редакторы популярных<br/> медиа: получайте опыт из первых рук, в любое время.<br/><br/>
                        Кураторы курсов – наши лучшие выпускники, будут помогать  <br/>   и поддерживать вас на протяжении всего обучения. </p>
                    <button>Все преподаватели</button>
                </div>
                <div className="sec3-right">
                    <div className="sec3_right_top">
                        <div className="sec3-1">
                            <img src={img1} alt=""/>
                            <p>Катя, ведущий дизайнер <br/>TailGroup</p>
                        </div>
                        <div className="sec3-1">
                            <img src={img2} alt=""/>
                            <p>Марина, маркетолог <br/>Headers Market</p>
                        </div>
                        <div className="sec3-1">
                            <img src={img3} alt=""/>
                            <p>Сава, PR-менеджер <br/>Central Media</p>
                        </div>
                    </div>
                    <div className="sec3_right_bottom">
                        <div className="sec3-1">
                            <img src={img4} alt=""/>
                            <p>Паша, основатель <br/>LeadCompany</p>
                        </div>
                        <div className="sec3-1">
                            <img src={img5} alt=""/>
                            <p>Саша, главный <br/>редактор Just Journal</p>
                        </div>
                        <div className="sec3-1">
                            <img src={img6} alt=""/>
                            <p>Лёня, ведущий разработчик <br/>Ymail</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </section>
    );
};

export default Section3;