import React from 'react';
import styled from "styled-components";
import Tabs from "./Tabs";
import { useCoursesContext } from '../Context/courses_context';

const CourseList = () => {
  const {courses} = useCoursesContext();

  return (
    <CoursesListWrapper>
      <div className='container'>
        <div className='courses-list-top'>
        <h2>Explore Diverse Learning Paths</h2>
        <p>Embark on a journey of knowledge with our extensive selection of courses</p>
        </div>
        <Tabs courses = {courses} />
      </div>

    </CoursesListWrapper>
  )
}

const CoursesListWrapper = styled.div`
  padding: 40px 0;
  .courses-list-top p{
    font-size: 1.8rem;
  }
`;

export default CourseList