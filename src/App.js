import React, {useEffect, useState} from 'react';
import Main from "./Pages/Main/Main";
import Layout from "./Layout/Layout";
import {Routes,Route} from "react-router-dom"
import Main2 from "./Pages/Main2/Main2";
import axios from "axios";
import Courses from './Pages/Courses/Course'
import Teachers from "./Pages/Teachers/Teachers";


const App = () => {
    const[courses,setCourses] = useState([])
    useEffect(()=>{
        axios('http://localhost:8080/courses')
            .then(({data})=>setCourses(data))
    },[])
    const[teachers,setTeachers] = useState([])
    useEffect(()=>{
        axios('http://localhost:8080/teachers')
            .then(({data})=>setTeachers(data))
    },[])
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path='' element={<Main/>}/>
                    <Route path='/secondpage' element={<Main2/>}/>
                    <Route path='/thirdpage' element={<Courses courses={courses}/>}/>
                    <Route path='/fourthpage' element={<Teachers teachers={teachers}/>}/>
                    </Route>

            </Routes>
        </>

    );
};

export default App;