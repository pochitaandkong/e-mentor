import React from 'react';
import './course.css'

const Course = ({courses}) => {

    return (
        <section className='courses'>
        <div className="container">
            {courses.map((el)=>{
                return(
                    <div className='course'>
                        <img src={el.img} alt=""/>
                        <h2>{el.title}</h2>
                        <h1>{el.price}</h1>
                        <p>{el.comment}</p>
                    </div>
                )
            })}
        </div>
        </section>
    );
};

export default Course;