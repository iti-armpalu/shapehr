import { useRef } from "react";
import styles from "./reviewSwiper.module.css";

// Import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

function ReviewSwiper(props) {
  const { reviews } = props;

  const prevRef = useRef();
  const nextRef = useRef();

  return (
    <div
      className={styles.swiperContainer}
      data-aos="fade-up"
      data-aos-delay="100"
    >
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
        <div>
          {reviews.map((review) => (
            <SwiperSlide 
              key={review.id}
              className={styles.swiperSlide}
            >
              <div className="d-flex flex-column">
                <div className={styles.description}>
                  <p>
                    <span>
                      <FontAwesomeIcon icon={faQuoteLeft} className="me-2" />
                    </span>
                    {review.description}
                    <span>
                      <FontAwesomeIcon icon={faQuoteRight} className="ms-2" />
                    </span>
                  </p>
                </div>
                <div className="d-flex flex-row mt-3 align-items-center justify-content-center">
                  <div className={styles.photo}>
                    <img src={review.image} />
                  </div>
                  <div className="ms-4">
                    <img
                      className={`${styles.logo} mb-2`}
                      src={review.logo}
                      alt=""
                    />
                    <h6 className={styles.author}>
                      {review.name}
                      <span> · </span>
                      {review.title}
                    </h6>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      <div ref={nextRef}></div>
    </div>
  );
}

export default ReviewSwiper;
