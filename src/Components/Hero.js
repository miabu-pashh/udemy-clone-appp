import React from 'react';
import styled from "styled-components";
import { other_images } from '../utils/images';

const Hero = () => {
  return (
    <HeroWrapper className = "bg-black">
      <div className='container h-100 flex'>
      <div className="hero-content">
        <h1>Unlock Your Potential with Comprehensive Learning</h1>
        <h3>Explore a World of Knowledge Through Videos, Audio, and eBooks</h3>
      </div>
      </div>
    </HeroWrapper>
  )
}



const HeroWrapper = styled.div`
  background: url(${other_images.Background}) center/cover no-repeat;
  height: 500px;

  .container{
    .hero-content{
      background-color: var(--clr-white);
      max-width: 900px;
      width: 100%;
      margin-left: 0;
      padding: 20px;

      h1{
        font-size: 32px;
        margin-bottom: 5px;
        white-space: nowrap;
      }
      p{
        font-size: 15px;
      }
    }
  }
`;

export default Hero