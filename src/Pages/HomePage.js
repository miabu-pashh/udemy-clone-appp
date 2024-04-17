import React from 'react';
import Hero from "../Components/Hero";
import CoursesList from "../Components/CourseList";
import CategoriesList from "../Components/CategoriesList";

const HomePage = () => {
  return (
    <div className='holder'>
      <Hero/>
      <CoursesList />
      <CategoriesList />
    </div>
  )
}

export default HomePage