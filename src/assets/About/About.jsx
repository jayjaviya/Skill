import React, { useEffect, useRef } from 'react' 
import './About.css'

const About = () => {
  const counterSectionRef = useRef(null); 

  // Add the animation functions
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

    return () => {
      if (counterSectionRef.current) {
        observer.unobserve(counterSectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <section className='Welcome'>
        <div className='container'>
          <div className='education_theme'>
            <div className='theme_left'>
              <h2 className='theme_left_title'>Welcome to the Professional Education Theme!</h2>
              <div className='themes'>
                <div className='theme_detail'>
                  <i className="fa-regular fa-face-smile"></i> {/* Fixed: className instead of class */}
                  <h2>Group Seminars</h2>
                  <p>consectetur adipisicing elit, sed do eiusmod tempor</p>
                </div>
                <div className='theme_detail'>
                  <i className="fa-solid fa-graduation-cap"></i>
                  <h2>Trending Courses</h2>
                  <p>consectetur adipisicing elit, sed do eiusmod tempor</p>
                </div>
                <div className='theme_detail'>
                  <i className="fa-solid fa-clock-rotate-left"></i>
                  <h2>Large Library</h2>
                  <p>consectetur adipisicing elit, sed do eiusmod tempor</p>
                </div>
                <div className='theme_detail'>
                  <i className="fa-solid fa-users"></i>
                  <h2>Expert Teachers</h2>
                  <p>consectetur adipisicing elit, sed do eiusmod tempor</p>
                </div>
              </div>
            </div>
            <img src="/about/welcome.png" alt="Welcome" />
          </div>
        </div>
      </section>

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

      <section className='teachers'>
  <div className='container'>
    <div className='teacher_detail'>
      <h1 className='teacher_title'>Meet Our Teachers</h1>
      <p className='teacher_title_detail'>Vestibulum volutpat non eros ut vulputate. Nunc id risus accumsan Donec mi nulla, auctor nec sem a, ornare auctor mi.</p>
      <div className='teacher_boxes'>
        
        <div className='teacher_box'>
          <div className='teacher_image_container'>
            <div className='teacher_image_wrapper'>
              <img src="/about/teachers/teacher1.png" alt="Teacher George" />
            </div>
            <div className='teacher_box_detail'>
              <h2>George</h2>
              <p>Director</p>
              
              <div className='teacher_social_icons'>
                <a href="#" className='social_icon'>
                  <i className='fab fa-facebook-f'></i>
                </a>
                <a href="#" className='social_icon'>
                  <i className='fab fa-linkedin-in'></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='teacher_box'>
          <div className='teacher_image_container'>
            <div className='teacher_image_wrapper'>
              <img src="/about/teachers/teacher2.png" alt="Teacher Michael" />
            </div>
            <div className='teacher_box_detail'>
              <h2>Michael</h2>
              <p>Managing Director</p>
              
              <div className='teacher_social_icons'>
                <a href="#" className='social_icon'>
                  <i className='fab fa-facebook-f'></i>
                </a>
                <a href="#" className='social_icon'>
                  <i className='fab fa-linkedin-in'></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='teacher_box'>
          <div className='teacher_image_container'>
            <div className='teacher_image_wrapper'>
              <img src="/about/teachers/teacher3.png" alt="Teacher Victoria" />
            </div>
            <div className='teacher_box_detail'>
              <h2>Victoria</h2>
              <p>Designer</p>
              
              <div className='teacher_social_icons'>
                <a href="#" className='social_icon'>
                  <i className='fab fa-facebook-f'></i>
                </a>
                <a href="#" className='social_icon'>
                  <i className='fab fa-linkedin-in'></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='teacher_box'>
          <div className='teacher_image_container'>
            <div className='teacher_image_wrapper'>
              <img src="/about/teachers/teacher4.png" alt="Teacher Marco" />
            </div>
            <div className='teacher_box_detail'>
              <h2>Marco</h2>
              <p>Designer</p>
              
              <div className='teacher_social_icons'>
                <a href="#" className='social_icon'>
                  <i className='fab fa-facebook-f'></i>
                </a>
                <a href="#" className='social_icon'>
                  <i className='fab fa-linkedin-in'></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='teacher_box'>
          <div className='teacher_image_container'>
            <div className='teacher_image_wrapper'>
              <img src="/about/teachers/teacher1.png" alt="Teacher George" />
            </div>
            <div className='teacher_box_detail'>
              <h2>George</h2>
              <p>Director</p>
              
              <div className='teacher_social_icons'>
                <a href="#" className='social_icon'>
                  <i className='fab fa-facebook-f'></i>
                </a>
                <a href="#" className='social_icon'>
                  <i className='fab fa-linkedin-in'></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className='teacher_box'>
          <div className='teacher_image_container'>
            <div className='teacher_image_wrapper'>
              <img src="/about/teachers/teacher2.png" alt="Teacher Michael" />
            </div>
            <div className='teacher_box_detail'>
              <h2>Michael</h2>
              <p>Managing Director</p>
              
              <div className='teacher_social_icons'>
                <a href="#" className='social_icon'>
                  <i className='fab fa-facebook-f'></i>
                </a>
                <a href="#" className='social_icon'>
                  <i className='fab fa-linkedin-in'></i>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

      <section className='contact'>
        <div className='container'>
          <div className='contact_detail'>
            <h1>We are true to ourselves, and commit to always perform at our best.</h1>
            <a href="">CONTACT US</a>
          </div>
        </div>
      </section>    

      <section className='want_to_join'>
        <div className='container'>
          <div className='joining_detail'>
            <h1>Want to Join?</h1>
            <p>Lorem ipsum dolor sit amet elit. Nisi facere reprehenderit!</p>
            <div className='join_btns'>
              <a href="" className='beacome_teacher'>Beacome a teacher</a>
              <a href="" className='join_signup'>sign up</a>
            </div>
          </div>
        </div>
      </section>  
    </>
  )
}

export default About