import React from 'react';
import './Teachers.css'
const Teachers = ({teachers}) => {
    return (
        <section className='teachers'>
            <div className="container">
                {teachers.map((el)=>{
                    return(
                        <div className='teacher'>
                            <img src={el.img} alt=""/>
                            <h1>{el.price}</h1>
                            <h2>{el.title}</h2>
                        </div>
                    )
                })}
            </div>
        </section>
    );
};

export default Teachers;