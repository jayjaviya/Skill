import React, { useEffect, useRef } from 'react';
import './Home.css';

const Home = () => {
  const counterSectionRef = useRef(null);
  const swiperRef = useRef(null);

  // Counter animation function
  const animateCounter = (element, targetNumber) => {
    let currentNumber = 0;
    const speed = 100;

    const updateCounter = () => {
      const increment = targetNumber / speed;
      if (currentNumber < targetNumber) {
        currentNumber += increment;
        element.textContent = Math.ceil(currentNumber);
        requestAnimationFrame(updateCounter);
      } else {
        element.textContent = targetNumber;
      }
    };
    updateCounter();
  };

  useEffect(() => {
    // Counter animation observer
    const counters = document.querySelectorAll('.count p');
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
          counters.forEach(counter => {
            const targetNumber = parseInt(counter.textContent, 10);
            counter.textContent = '0';
            animateCounter(counter, targetNumber);
          });
          entry.target.classList.add('animated');
        }
      });
    }, {
      threshold: 0.5
    });

    if (counterSectionRef.current) {
      observer.observe(counterSectionRef.current);
    }

    // Initialize Swiper if it's available
    const initializeSwiper = () => {
      if (window.Swiper && !swiperRef.current) {
        swiperRef.current = new window.Swiper(".mySwiper", {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            768: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
          }
        });
      }
    };

    // Check if Swiper is already loaded, otherwise wait for it
    if (window.Swiper) {
      initializeSwiper();
    } else {
      // Wait for Swiper to be loaded from CDN
      const checkSwiper = setInterval(() => {
        if (window.Swiper) {
          initializeSwiper();
          clearInterval(checkSwiper);
        }
      }, 100);

      // Cleanup interval after 5 seconds
      setTimeout(() => clearInterval(checkSwiper), 5000);
    }

    // Cleanup function
    return () => {
      if (counterSectionRef.current) {
        observer.unobserve(counterSectionRef.current);
      }
      if (swiperRef.current) {
        swiperRef.current.destroy();
        swiperRef.current = null;
      }
    };
  }, []);

  return (
    <>
      {/* Homepage Hero Section */}
      <section className="homepage">
        <div className="container">
          <div className="home_detail">
            <h2>Learn Anything, AnyWhere.</h2>
            <h4>Accelerate Your Future.</h4>
            <p>We believe everyone has the capacity to be creative. Skill is a place where<br />people develop their own potential.</p>
            <div className="home_detail_btn">
              <a href="" className="btn_1_theme">BECOME A TEACHER</a>
              <a href="" className="btn_2">COURSES</a>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Section */}
      <section className="teach">
        <div className="container">
          <div className="teach_component">
            <div className="teach_detail">
              <h2 className="teach_title">How we Teach?</h2>
              <p className="teach_contain">We amplify important ideas in mathematics education to help teachers grow their practice and our profession. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim beatae, facilis voluptatibus repellendus totam autem?</p>
              <a href="" className="btn_1_theme join_community">join our community</a>
            </div>
            <div className="teach_box">
              <div className="box_detail">
                <img src="/detail_img/img1.png" alt="Join Community" />
                <div className="detail_rigth_side">
                  <h4>Step 01</h4>
                  <h2>Join Community</h2>
                  <p>Lorem ipsum dolor sit, icing elit. Nemo veritatis omnis quae quaerat totam culpa odit repellendus reiciendis, aliquid vero, necessitatibus aliquid iure illum quis maxime ducimus veritatis enim.</p>
                </div>
              </div>

              <div className="box_detail">
                <img src="/detail_img/img2.png" alt="Learning" />
                <div className="detail_rigth_side">
                  <h4>Step 02</h4>
                  <h2>Learning</h2>
                  <p>Lorem ipsum dolor sit, icing elit. Nemo veritatis omnis quae quaerat totam culpa odit repellendus reiciendis, aliquid vero, necessitatibus aliquid iure illum quis maxime ducimus veritatis enim.</p>
                </div>
              </div>

              <div className="box_detail">
                <img src="/detail_img/img3.png" alt="Get the Best Job" />
                <div className="detail_rigth_side">
                  <h4>Step 03</h4>
                  <h2>Get the Best Job</h2>
                  <p>Lorem ipsum dolor sit, icing elit. Nemo veritatis omnis quae quaerat totam culpa odit repellendus reiciendis, aliquid vero, necessitatibus aliquid iure illum quis maxime ducimus veritatis enim.</p>
                </div>
              </div>

              <div className="box_detail">
                <img src="/detail_img/img4.png" alt="Community" />
                <div className="detail_rigth_side">
                  <h4>Step 04</h4>
                  <h2>Community</h2>
                  <p>Lorem ipsum dolor sit, icing elit. Nemo veritatis omnis quae quaerat totam culpa odit repellendus reiciendis, aliquid vero, necessitatibus aliquid iure illum quis maxime ducimus veritatis enim.</p>
                </div>
              </div>
            </div>
          </div>   
        </div>
      </section>

      {/* Counter Section */}
      <section className="autoplay_counter" ref={counterSectionRef}>
        <div className="container">
          <div className="counter_element">
            <div className="count">
              <i className="fa-regular fa-face-smile-beam"></i>
              <p>196</p>
              <h4>Complete Courses</h4>
            </div>
            <div className="count">
              <i className="fa-solid fa-graduation-cap"></i>
              <p>96</p>
              <h4>Certified Teachers</h4>
            </div>
            <div className="count">
              <i className="fa-solid fa-clock-rotate-left"></i>
              <p>25</p>
              <h4>Years of Experience</h4>
            </div>
            <div className="count">
              <i className="fa-solid fa-users"></i>
              <p>890</p>
              <h4>Students Enrolled</h4>
            </div>
          </div>
        </div>   
      </section>

      {/* Programs Section */}
      <section className="our_programs">
        <div className="container">
          <div className="program_detail">
            <div className="program_title">
              <h2>Our Programs</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cumque distinctio eveniet tempore delectus totam ratione repudiandae ipsum vel molestias?</p>
            </div>
            <div className="program_all_boxes">
              <div className="program_box">
                <div className="box_icon">
                  <img src="/program_box_img/box-img1.png" alt="Group Seminars" />
                </div>
                <h2 className="program_box_title">Group Seminars</h2>
                <p className="program_box_text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. In itaque vel libero.</p>
                <ul>
                  <li className="box_point">
                    <i className="fa-regular fa-circle"></i>
                    <p>Our job is to make your life easier.</p>
                  </li>
                  <li className="box_point">
                    <i className="fa-regular fa-circle"></i>
                    <p>Our job is to make your life easier.</p>
                  </li>
                  <li className="box_point">
                    <i className="fa-regular fa-circle"></i>
                    <p>Our job is to make your life easier.</p>
                  </li>
                  <li className="box_point">
                    <i className="fa-regular fa-circle"></i>
                    <p>Our job is to make your life easier.</p>
                  </li>
                </ul> 
                <div className="program_box_btn">
                  <a href="" className="btn_1_theme">Learn More</a>
                </div>        
              </div>

              <div className="program_box">
                <div className="box_icon">
                  <img src="/program_box_img/box-img2.png" alt="Trending Courses" />
                </div>
                <h2 className="program_box_title">Trending Courses</h2>
                <p className="program_box_text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. In itaque vel libero.</p>
                <ul>
                  <li className="box_point">
                    <i className="fa-regular fa-circle"></i>
                    <p>Our job is to make your life easier.</p>
                  </li>
                  <li className="box_point">
                    <i className="fa-regular fa-circle"></i>
                    <p>Our job is to make your life easier.</p>
                  </li>
                  <li className="box_point">
                    <i className="fa-regular fa-circle"></i>
                    <p>Our job is to make your life easier.</p>
                  </li>
                  <li className="box_point">
                    <i className="fa-regular fa-circle"></i>
                    <p>Our job is to make your life easier.</p>
                  </li>
                </ul>  
                
                <div className="program_box_btn">
                  <a href="" className="btn_1_theme">Learn More</a>
                </div>
              </div>

              <div className="program_box">
                <div className="box_icon">
                  <img src="/program_box_img/box-img3.png" alt="Large Library" />
                </div>
                <h2 className="program_box_title">Large Library</h2>
                <p className="program_box_text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. In itaque vel libero.</p>
                <ul>
                  <li className="box_point">
                    <i className="fa-regular fa-circle"></i>
                    <p>Our job is to make your life easier.</p>
                  </li>
                  <li className="box_point">
                    <i className="fa-regular fa-circle"></i>
                    <p>Our job is to make your life easier.</p>
                  </li>
                  <li className="box_point">
                    <i className="fa-regular fa-circle"></i>
                    <p>Our job is to make your life easier.</p>
                  </li>
                  <li className="box_point">
                    <i className="fa-regular fa-circle"></i>
                    <p>Our job is to make your life easier.</p>
                  </li>
                </ul> 

                <div className="program_box_btn">
                  <a href="" className="btn_1_theme">Learn More</a>
                </div>      
              </div>

              <div className="program_box">
                <div className="box_icon">
                  <img src="/program_box_img/box-img4.png" alt="Expert Teachers" />
                </div>
                <h2 className="program_box_title">Expert Teachers</h2>
                <p className="program_box_text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. In itaque vel libero.</p>
                <ul>
                  <li className="box_point">
                    <i className="fa-regular fa-circle"></i>
                    <p>Our job is to make your life easier.</p>
                  </li>
                  <li className="box_point">
                    <i className="fa-regular fa-circle"></i>
                    <p>Our job is to make your life easier.</p>
                  </li>
                  <li className="box_point">
                    <i className="fa-regular fa-circle"></i>
                    <p>Our job is to make your life easier.</p>
                  </li>
                  <li className="box_point">
                    <i className="fa-regular fa-circle"></i>
                    <p>Our job is to make your life easier.</p>
                  </li>
                </ul> 
                
                <div className="program_box_btn">
                  <a href="" className="btn_1_theme">Learn More</a>
                </div>
              </div>
            </div>   
          </div>
        </div>
      </section>

      {/* Business Section */}
      <section className="start_business">
        <div className="container">
          <div className="business_lessons">
            <h2>Start your Business today<br />with this professional<br />template.</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae sapiente<br />facere amet quas quae,inventore, dolore modi,delectus illum<br />velit magni quod blanditiis nam quasi perspiciatis. Quod <br /> cupiditate eum sit!</p>
            <a href="">about us</a>
          </div>
        </div>
      </section>

      {/* Students Review Section */}
      <section className="Students_say">
        <div className="container">
          <div className="Student_review">
            <h2 className="review_title">What our Students Say</h2>
            
            {/* Swiper */}
            <div className="swiper mySwiper">
              <div className="swiper-wrapper">
                {/* Slide 1 */}
                <div className="swiper-slide">
                  <div className="review_detail">
                    <div className="review_img">
                      <img src="/student_img/img1.png" alt="Student" />
                    </div>
                    <div className="review_right">
                      <i className="fa-solid fa-quote-left"></i>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sit id accusantium officia quod quasi necessitatibus perspiciatis Harum error provident quibusdam tenetur.</p>
                      <h2>Adam Ster</h2>
                      <h4>Web Development Student</h4>
                    </div>
                  </div>
                </div>
                
                {/* Slide 2 */}
                <div className="swiper-slide">
                  <div className="review_detail">
                    <div className="review_img">
                      <img src="/student_img/img2.png" alt="Student" />
                    </div>
                    <div className="review_right">
                      <i className="fa-solid fa-quote-left"></i>
                      <p>The instructors are incredibly knowledgeable and supportive. I've learned so much in such a short time and feel confident in my new skills. Highly recommend this program!</p>
                      <h2>Dennis Jack</h2>
                      <h4>UX/UI Design Student</h4>
                    </div>
                  </div>
                </div>
                
                {/* Slide 3 */}
                <div className="swiper-slide">
                  <div className="review_detail">
                    <div className="review_img">
                      <img src="/student_img/img3.png" alt="Student" />
                    </div>
                    <div className="review_right">
                      <i className="fa-solid fa-quote-left"></i>
                      <p>The curriculum is well-structured and the projects are challenging but rewarding. The career support team helped me land my dream job within a month of completing the course.</p>
                      <h2>Camillae</h2>
                      <h4>Data Science Student</h4>
                    </div>
                  </div>
                </div>
                
                {/* Slide 4 */}
                <div className="swiper-slide">
                  <div className="review_detail">
                    <div className="review_img">
                      <img src="/student_img/img4.png" alt="Student" />
                    </div>
                    <div className="review_right">
                      <i className="fa-solid fa-quote-left"></i>
                      <p>As someone with no prior experience, I was nervous about starting, but the learning path was perfect. The community is amazing and always willing to help when you get stuck.</p>
                      <h2>Charlotte</h2>
                      <h4>Full Stack Development Student</h4>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Navigation buttons */}
              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="join_us">
        <div className="join_us_content">
          <div className="join_us_left">
            <div className="join_us_left_content">
              <h2>Join us for FREE to get instant email updates!</h2>
              <p>Subscribe and get notified at first on the latest update and offers!</p>
              <div className="join_us_left_btn">
                <input type="text" placeholder="Your email here" />
                <a href="" className="btn_1_theme Subscribe">Subscribe</a>
              </div>
            </div>  
          </div>
          <div className="join_us_right">
            <img src="/join_us_img/image.png" alt="Join Us" />
          </div>
        </div>
      </section>

    </>
  );
};

export default Home;