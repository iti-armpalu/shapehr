import TestimonialSwiper from "./testimonialSwiper";


function Testimonial() {
  return (
    <section id="testimonial-section">
      <div className="container">
        <div>
          <span>What We Do</span>
          <h2>Across 4 key pillars</h2>
        </div>

        <TestimonialSwiper />

      </div>
    </section>
  );
}

export default Testimonial;
