import React from 'react';
import './Footer.css'
import facebook1 from '../../img/facebook1.svg'
import vk1 from '../../img/vk1.svg'
import ikon from '../../img/logotype (1).svg'
import insta from '../../img/insa1.svg'

const Footer = () => {
    return (
        <footer className='Footer1'>
            <div className='container'>
                <div className="footer-box">
                    <div className="footer-box-up">
                        <div className="footer-box-up-left">
                            <img src={ikon} alt=""/>
                            <p>Образовательная онлайн-платформа<br/> для развития и тренировки навыков<br/>
                                в сфере информационных технологий</p>
                            <div className="footer-box-up-left-img">
                                <img src={facebook1} alt=""/>
                                <img className='footer-img' src={vk1} alt=""/>
                                <img src={insta} alt=""/>
                            </div>
                        </div>
                        <ul className='ul1'>
                            <li>Обучение</li>
                            <li>Курсы</li>
                            <li>Вебинары</li>
                            <li>Тренажеры</li>
                            <li>Воркшопы</li>
                        </ul>
                        <ul className='ul2'>
                            <li>О нас</li>
                            <li>О платформе</li>
                            <li>Преподаватели</li>
                            <li>Тарифы</li>
                            <li>Отзывы</li>
                        </ul>
                        <ul className='ul3'>
                            <li>Контакты</li>
                            <li>Связаться с нами</li>
                            <li>Консультация</li>
                            <li>Реквизиты</li>
                            <li>Поддержка</li>
                        </ul>
                        <div className="footer-box-up-right">
                            <p className='footer__first__p'>Возникли вопросы?</p>
                            <p>Напишите нам на почту
                                education@ementor.info</p>
                        </div>
                    </div>
                    <div className="footer-box-down">
                        <p>E-Mentor © 2021 Все права защищены</p>
                        <div className="footer-2-down">
                            <ul>
                                <li>Политика обработки персональных данных</li>
                                <li>Публичная оферта</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;