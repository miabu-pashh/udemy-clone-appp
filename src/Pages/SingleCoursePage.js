import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useCoursesContext } from "../Context/courses_context";
import StarRating from "../Components/StarRating";
import { MdInfo } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { FaShoppingCart } from "react-icons/fa";
import { RiClosedCaptioningFill } from "react-icons/ri";
import { BiCheck } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/cart_context";

import { other_images } from "../utils/images";



const SingleCoursePage = () => {
  const { id } = useParams();
  const { fetchSingleCourse, single_course } = useCoursesContext();
  const { addToCart } = useCartContext();

  useEffect(() => {
    fetchSingleCourse(id);
  }, []);

  const {
    id: courseID,
    category,
    image,
    course_name,
    description,
    rating_count,
    rating_star,
    students,
    creator,
    updated_date,
    lang,
    actual_price,
    discounted_price,
    what_you_will_learn: learnItems,
    content,
  } = single_course;

  console.log(other_images.PythonVideo);

  return (
    <SingleCourseWrapper>
      <div className="course-intro mx-auto grid">
        <div className="course-img">
          <img src={image} alt={course_name} />
        </div>

        <div className="course-details">
          <div className="course-category bg-white text-dark text-capitalize fw-6 fs-12 d-inline-block">
            {category}
          </div>
          <div className="course-head">
            <h5>{course_name}</h5>
          </div>
          <div className="course-body">
            <p className="course-para fs-18">{description}</p>
            <div className="course-rating flex">
              <span className="rating-star-val fw-8 fs-16">{rating_star}</span>
              <StarRating rating_star={rating_star} />
              <span className="rating-count fw-5 fs-14">({rating_count})</span>
              <span className="students-count fs-14">{students}</span>
            </div>

            <ul className="course-info">
              <li>
                <span className="fs-14">
                  Created by <span className="fw-6 opacity-08">{creator}</span>
                </span>
              </li>
              <li className="flex">
                <span>
                  <MdInfo />
                </span>
                <span className="fs-14 course-info-txt fw-5">
                  Last updated {updated_date}
                </span>
              </li>
              <li className="flex">
                <span>
                  <TbWorld />
                </span>
                <span className="fs-14 course-info-txt fw-5">{lang}</span>
              </li>
              <li className="flex">
                <span>
                  <RiClosedCaptioningFill />
                </span>
                <span className="fs-14 course-info-txt fw-5">
                  {lang} [Auto]
                </span>
              </li>
            </ul>
          </div>

          {/* <div className='course-foot'>
            <div className='course-price'>
              <span className='new-price fs-26 fw-8'>${discounted_price}</span>
              <span className='old-price fs-26 fw-6'>${actual_price}</span>
            </div>
          </div>

          <div className='course-btn'>
            <Link to = "/cart" className='add-to-cart-btn d-inline-block fw-7 bg-purple' onClick={() => addToCart(courseID, image, course_name, creator, discounted_price, category)}>
              <FaShoppingCart /> Add to cart
            </Link>
          </div> */}
        </div>
      </div>
      <div className="course-types">
        <h3>This course can be veiwed in these format</h3>
      </div>
      <div className="course-format">

        <div className="course-video">
        <Link to="/Mvideo">
        <img
            src="https://www.goplayout.tv/images/videofile.png"
            alt="E-Book"
            style={{ 
              width: '300px', // Set the width to 300 pixels
              height: '200px', // Set the height to 200 pixels
              transition: "transform 0.3s ease", borderRadius: "10px" }}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          />
          <br></br>

          <h4>This is the video section</h4>
          </Link>
        </div>

        <div className="course-audio">
        <Link to="/Maudio">
          
          <img
            src="https://images.pexels.com/photos/5939401/pexels-photo-5939401.jpeg?auto=compress&cs=tinysrgb&w=800
"
            alt="E-Book"
            style={{ 
              width: '300px', // Set the width to 300 pixels
              height: '200px', // Set the height to 200 pixels
              transition: "transform 0.3s ease", borderRadius: "10px" }}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          ></img>
          <br></br>
          <h4>This is the Audio section</h4>
          </Link>
        </div>

        <div className="course-book">
        <Link to="/Book">
          <img
            src="https://images.pexels.com/photos/762687/pexels-photo-762687.jpeg"
            alt="E-Book"
            style={{ 
              width: '300px', // Set the width to 300 pixels
              height: '200px', // Set the height to 200 pixels
              transition: "transform 0.3s ease", borderRadius: "10px" }}
            onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
            onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          />
          <br></br>

          <h4>This is the E-Book section</h4>
          </Link>
        </div>
      </div>

      <div className="course-full bg-white text-dark">
        <div className="course-learn mx-auto">
          <div className="course-sc-title">What you'll learn</div>
          <ul className="course-learn-list grid">
            {learnItems &&
              learnItems.map((learnItem, idx) => {
                return (
                  <li key={idx}>
                    <span>
                      <BiCheck />
                    </span>
                    <span className="fs-14 fw-5 opacity-09">{learnItem}</span>
                  </li>
                );
              })}
          </ul>
        </div>

        <div className="course-content mx-auto">
          <div className="course-sc-title">Course content</div>
          <ul className="course-content-list">
            {content &&
              content.map((contentItem, idx) => {
                return (
                  <li key={idx}>
                    <span>{contentItem}</span>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </SingleCourseWrapper>
  );
};

const SingleCourseWrapper = styled.div`
  background: var(--clr-dark);
  color: var(--clr-white);

  .course-types {
    // background-color: #adb5bd;
    width: 100%;
    text-align: center;
    height: 50px;
  }
  .course-format {
    margin-top: 10px;
    background-color: #343a40;
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: space-around;

    .course-video {
      width: 300px;
      height: 300px; /* Set the height to your desired value */
      background-color: #343a40;
      // background: url("/Users/maibupash/Desktop/Spring 2024/Human Computer-Interface/Clone-udemy/UdemyClone/udemy-clone-appp/src/assets/images/videos/python-video.mp4")
      //   center/cover no-repeat;
      // display: flex;
      padding :10px;
      align-items: center;
      justify-content: center;
      color: white; /* Text color for content within the video section */
      text-align: center;
      border-radius: 10px; /* Rounded corners for the video section */
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Optional: Add shadow for a raised effect */
    }
    .course-audio {
      width: 300px;
      padding: 10px;
      background-color: #343a40;
      height: 300px; /* Set the height to your desired value */
      //  display: flex;
      align-items: center;
      justify-content: center;
      color: white; /* Text color for content within the video section */
      text-align: center;
      border-radius: 10px; /* Rounded corners for the video section */
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Optional: Add shadow for a raised effect */
    }
    .course-book {
      width: 300px;
      background-color: #343a40;
      padding: 10px;
      height: 300px; /* Set the height to your desired value */
      // display: flex;
      align-items: center;
      justify-content: center;
      color: white; /* Text color for content within the video section */
      text-align: center;
      border-radius: 10px; /* Rounded corners for the video section */
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Optional: Add shadow for a raised effect */
    }
  }

  .course-intro {
    padding: 40px 16px;
    max-width: 992px;

    .course-details {
      padding-top: 20px;
    }

    .course-category {
      padding: 0px 8px;
      border-radius: 6px;
    }

    .course-head {
      font-size: 38px;
      line-height: 1.2;
      padding: 12px 0 0 0;
    }
    .course-para {
      padding: 12px 0;
    }
    .rating-star-val {
      margin-right: 7px;
      padding-bottom: 5px;
      color: var(--clr-orange);
    }
    .students-count {
      margin-left: 8px;
    }
    .rating-count {
      margin-left: 6px;
      color: #d097f6;
    }
    .course-info {
      li {
        margin-bottom: 2px;
        &:nth-child(2) {
          margin-top: 10px;
        }
      }
      .course-info-txt {
        text-transform: capitalize;
        margin-left: 8px;
        margin-bottom: 4px;
      }
    }
    .course-price {
      margin-top: 12px;
      .old-price {
        color: #eceb98;
        text-decoration: line-through;
        margin-left: 10px;
      }
    }
    .course-btn {
      margin-top: 16px;
      .add-to-cart-btn {
        padding: 12px 28px;
        span {
          margin-left: 12px;
        }
      }
    }

    @media screen and (min-width: 880px) {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 40px;
      .course-details {
        padding-top: 0;
      }
      .course-img {
        order: 2;
      }
    }

    @media screen and (min-width: 1400px) {
      grid-template-columns: 60% 40%;
    }
  }

  .course-full {
    padding: 40px 16px;
    .course-sc-title {
      font-size: 22px;
      font-weight: 700;
      margin: 12px 0;
    }
    .course-learn {
      max-width: 992px;
      border: 1px solid rgba(0, 0, 0, 0.2);
      padding: 12px 28px 22px 28px;

      .course-learn-list {
        li {
          margin: 5px 0;
          display: flex;
          span {
            &:nth-child(1) {
              opacity: 0.95;
              margin-right: 12px;
            }
          }
        }

        @media screen and (min-width: 992px) {
          grid-template-columns: repeat(2, 1fr);
        }
      }
    }

    .course-content {
      max-width: 992px;
      margin-top: 30px;
      border: 1px solid rgba(0, 0, 0, 0.2);
      padding: 12px 28px 22px 28px;

      .course-content-list {
        li {
          background-color: #f7f9fa;
          padding: 12px 18px;
          border: 1px solid rgba(0, 0, 0, 0.2);
          margin-bottom: 10px;
          font-weight: 800;
          font-size: 15px;
        }
      }
    }
  }
`;

export default SingleCoursePage;
