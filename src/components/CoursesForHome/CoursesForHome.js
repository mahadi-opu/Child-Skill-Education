import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useData from '../../hooks/useData';
import Course from '../Course/Course';


// Display Course for Home 
const CoursesForHome = () => {
    const [data] = useData();

    return (
        <Row xs={1} md={3} className="g-4 py-5">
        {
            data.map((course,index) => {
                if(index < 6){
                return <Course
                key={course.key}
                course={course}
            ></Course>
            }
        })
        }
    </Row>
    );
};

export default CoursesForHome;