import styles from "./testimonialSwiper.module.css";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

function TestimonialSwiper() {
  const prevRef = useRef();
  const nextRef = useRef();

  return (
    <div className={styles.swiperContainer}>
      <div ref={prevRef}></div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          prevEl: prevRef?.current,
          nextEl: nextRef?.current,
        }}
        pagination={{ clickable: true, dynamicBullets: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        style={{
          "--swiper-navigation-color": "#0575BC",
          "--swiper-pagination-bullet-inactive-color": "#0575BC",
          "--swiper-pagination-color": "#0575BC",
        }}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <div className="d-flex flex-column">
            <div className={styles.description}>
              <p>
                <span>
                  <FontAwesomeIcon icon={faQuoteLeft} className="me-2" />
                </span>
                  Simon Heath was my sponsor as part of the Elevate UK Leadership
                Program in 2022, which is a leadership program for Black women
                across WPP and various agencies such as MediaCom, Group M, and
                Ogilvy. It was a great experience! At first, I was apprehensive,
                as I felt there were too many differences between us, and I
                questioned whether he would be able to understand my experience
                as a Black woman in the workplace. However, Simon was an ally;
                he was open, transparent, and came from a place of learning.
              </p>
              {/* <p>
                Simon has a gift of being able to hold you accountable while at
                the same time validating your feelings. There were times when I
                was unsure or going through a difficult time, and Simon was able
                to provide unbiased guidance and support. His sponsorship led to
                opportunities in Ghana which took me outside of my comfort zone
                and challenged me in my role.
              </p> */}
              <p>
                I would wholeheartedly recommend Simon for any coaching and/or
                mentoring.
                <span>
                  <FontAwesomeIcon icon={faQuoteRight} className="ms-2" />
                </span>
              </p>
            </div>
            <div className="d-flex flex-row mt-3 align-items-center justify-content-center">
              <div className={styles.photo}>
                <img src="images/testimonials/Zahira.jpg" />
              </div>

              <div className="ms-4">
                <img
                  className={`${styles.logo} mb-2`}
                  src="images/brand/WPP-logo.png"
                  alt=""
                />
                <h6 className={styles.author}>
                  Zahira Salami <span>·</span> People Manager
                </h6>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide className={styles.swiperSlide}>
          <div className="d-flex flex-column">
            <div className={styles.description}>
              
              <p className="mb-3">
              <span>
                <FontAwesomeIcon icon={faQuoteLeft} className="me-2" />
              </span>
                Simon is the best!
              </p>
              <p className="mb-3">
                
              </p>
              <p className="mb-3">
                <span>
                <FontAwesomeIcon icon={faQuoteRight} className="ms-2" />
              </span>
              </p>
              
            </div>
            <div className="d-flex flex-row mt-3 align-items-center justify-content-center">
              <div className={styles.photo}>
                <img src="images/testimonials/Roy.jpeg" />
              </div>

              <div className="ms-4">
                <img
                  className={`${styles.logo} mb-2`}
                  src="images/brand/WPP-logo.png"
                  alt=""
                />
                <h6 className={styles.author}>
                  Roy Armale <span>·</span> SVP Product & Platform
                </h6>
              </div>
            </div>
          </div>
        </SwiperSlide> */}
        <SwiperSlide className={styles.swiperSlide}>
          <div className="d-flex flex-column">
            <div className={styles.description}>
              <p>
                <span>
                  <FontAwesomeIcon icon={faQuoteLeft} className="me-2" />
                </span>
                Simon is a true HR professional-efficient, transparent,
                strategic in view and committed to identifying and nurturing the
                best talent. 
                </p>
                <p>
                Simon is not a procrastinator, always striving to
                make things happen without unnecessary delay. He puts people
                centre stage and that drives value for the company he
                represents. 
                </p>
                <p>
                I really enjoyed working with Simon and would
                recommend him highly to any company seeking to build a global HR
                centre of excellence.
                <span>
                  <FontAwesomeIcon icon={faQuoteRight} className="ms-2" />
                </span>
                </p>
              
              
         
            </div>
            <div className="d-flex flex-row mt-3 align-items-center justify-content-center">
              <div className={styles.photo}>
                <img src="images/testimonials/Janet.jpeg" />
              </div>

              <div className="ms-4">
                <img
                  className={`${styles.logo} mb-2`}
                  src="images/brand/BVCA.svg"
                  alt=""
                />
                <h6 className={styles.author}>
                  Janet Titterton <span>·</span> Head of Marketing, Publishing
                  and Membership Communications
                </h6>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <div className="d-flex flex-column">
            <div className={styles.description}>
              <p>
                <span>
                  <FontAwesomeIcon icon={faQuoteLeft} className="me-2" />
                </span>
                  Simon is a passionate and motivated HR professional, one of the
                few that has a track record of getting things done! 
                </p>
                <p>
                Always open for conversation and challenge, certainly enjoys the role and
                helps support a fun but challegning environment. 
                </p>
                <p>
                Works well at a strategic level managing peers and dealing with egos while
                having a great rapport with other teams.
                <span>
                  <FontAwesomeIcon icon={faQuoteRight} className="ms-2" />
                </span>
              </p>
            </div>
            <div className="d-flex flex-row mt-3 align-items-center justify-content-center">
              <div className={styles.photo}>
                <img src="images/testimonials/Steve.jpeg" />
              </div>

              <div className="ms-4">
                <img
                  className={`${styles.logo} mb-2`}
                  src="images/brand/DataIntellect.png"
                  alt=""
                />
                <h6 className={styles.author}>
                  Steve Turner <span>·</span> Chief Executive Officer
                </h6>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <div className="d-flex flex-column">
            <div className={styles.description}>
              <p>
                <span>
                  <FontAwesomeIcon icon={faQuoteLeft} className="me-2" />
                </span>
                Simon stands out in the HR community as a true business leader
                with a strong commercial focus. A tough negotiator who
                nevertheless understands value is the aim over the lowest price.
                His energetic personality means he is a pleasure to deal with
                even on those occasions he has no assignments for us!
                <span>
                  <FontAwesomeIcon icon={faQuoteRight} className="ms-2" />
                </span>
              </p>
            </div>
            <div className="d-flex flex-row mt-3 align-items-center justify-content-center">
              <div className={styles.photo}>
                <img src="images/testimonials/David.jpeg" />
              </div>

              <div className="ms-4">
                <img
                  className={`${styles.logo} mb-2`}
                  src="images/brand/AnabolGroup.jpeg"
                  alt=""
                />
                <h6 className={styles.author}>
                  David Jensen <span>·</span> Chief Executive Officer
                </h6>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div ref={nextRef}></div>
    </div>
  );
}

export default TestimonialSwiper;
