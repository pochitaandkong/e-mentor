import React from 'react';
import './Section2_1.css'
import sec2_1_background from '../../../img/sec2_1.png'

const Section2_1 = () => {
    return (
        <section className='section2-1'>
            <div className="container">
                <div className="sec2_1_box">
                    <h1>Практический курс по анимации<br/>
                        для начинающих motion-дизайнеров</h1>
                    <img src={sec2_1_background} alt=""/>
                    <h3>Мечтаете оживлять статичные картинки и интерфейсы? Тогда этот курс для вас!<br/>
                        На интенсивном 8-недельном курсе по анимации вы получите мощную базу.</h3>
                    <p>Анимация шейпов и текста, работа с векторными фигурами и растровыми изображениями, настройка<br/> программы After Effects и эффектный монтаж. Всему этому вы научитесь на курсе Motion Design. Вместе<br/> с преподавателями вы изучите принципы анимации и разберетесь с After Effects раз и навсегда.<br/><br/>
                        К концу курса вы сделаете несколько анимационных шотов и большой итоговый проект, соберете <br/>достойное портфолио. За 8 недель обучения вы получите полную базу по motion-дизайну, а наши <br/>кураторы будут помогать вам на протяжении всего обучения.<br/><br/>
                        Обучение проходит в небольших группах, к каждой привязан куратор, один из наших лучших <br/>выпускников. У вас всегда будет поддержка и обратная связь. Помимо фидбека от куратора, на каждое <br/>домашнее задание вы получаете разбор тренера.</p>
                </div>
            </div>
        </section>
    );
};

export default Section2_1;