import React, {useEffect} from 'react';

import './Home.css'
import Typewriter from 'typewriter-effect';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease",
      once: false,
    });
  });
    return (
       <>

       <section >
       <div className='profile-container'>
        <div className='profile-parent'>
          <div className='profile-details'>
            <div className='colz'>
              <div className='colz-icon'>
                
              </div>
            <div className='profile-details-name'>
              <span className='primary-text' >
                {" "} 
                Hello, I'm <span className='highlighted-text'>Natalie</span>
              </span>
            </div>
            <div className='profile-details-role'>
              <span className='primary-text'>
              {" "}
              <h1>
              <Typewriter 

onInit={(typewriter) => {
 typewriter.typeString("Full Stack Web Developer ")

 .pauseFor(1000)
 .deleteAll()
 .typeString("React/ React Native Dev  ")
 .pauseFor(1000)
 .deleteAll()
 .typeString("Back-End Guru ")
 
 .pauseFor(1000)
 .deleteAll()
 .typeString("Creative CSS Styler ")
 
 .pauseFor(1000)
 .deleteAll()
 .typeString("Brilliant Bug Catcher")

 .pauseFor(1000)
 .deleteAll()
 .typeString("MERN Stack Developer")
 
 .start();
}}
/>
              </h1>

      <span className='profile-role-tagline'>
        Skillful in building inovative applications with front and back end operations.
      </span>
              </span>

</div>
<div className='profile-options'>
  <button className='btn primary-btn' id='hiremebtn'>
    <a style={{color:"white"}} href='/contact'> Hire Me</a>
   
  </button>
</div>
</div>
<div className='profile-picture'>
  <div className='profile-picture-background'>

  </div>
 
   
</div>

          </div>
          
        </div>
       </div>
       <div >
       <img className='homeimg' src={require('../../assets/profilepic.JPG')} alt='profile pic' 
    style={{ height: "390px", width:'340px', borderRadius: '50%'
    }}/>
    </div>
   
       </section>


  <video loop autoPlay muted id='video'>
    <source src={require('../../assets/newbg.mp4')} type='video/mp4' />
  </video>



   

    
    <section id="stick">
    <div className='homeskills' data-aos="zoom-in-down">
     <div id='toptext'>
          <h1 >
            I am a Full-Stack Web Developer. 
          </h1>
          </div>
          
          <br></br>
          <h1 className='homeskillstitle'>
            My skills include: 
          </h1>
          <p data-aos="fade-right"
     data-aos-offset="50"
     data-aos-duration="600"
     data-aos-easing="ease-in-sine">Javascript</p>

          <p data-aos="fade-left"
     data-aos-offset="50"
     data-aos-duration="600"
     data-aos-easing="ease-in-sine">React</p>

          <p data-aos="fade-right"
     data-aos-offset="50"
     data-aos-duration="600"
     data-aos-easing="ease-in-sine">HTML</p>
     
          <p data-aos="fade-left"
     data-aos-offset="50"
     data-aos-duration="600"
     data-aos-easing="ease-in-sine">CSS</p>

          <p data-aos="fade-right"
     data-aos-offset="50"
     data-aos-duration="600"
     data-aos-easing="ease-in-sine">MongoDB</p>

          <p data-aos="fade-left"
     data-aos-offset="50"
     data-aos-duration="600"
     data-aos-easing="ease-in-sine">Express</p>

          <p data-aos="fade-right"
     data-aos-offset="50"
     data-aos-duration="600"
     data-aos-easing="ease-in-sine">Node.js</p>

          <p data-aos="fade-left"
     data-aos-offset="50"
     data-aos-duration="600"
     data-aos-easing="ease-in-sine">GitHub</p>

          <p data-aos="fade-right"
     data-aos-offset="50"
     data-aos-duration="600"
     data-aos-easing="ease-in-sine">Redux</p>

          <p data-aos="fade-left"
     data-aos-offset="50"
     data-aos-duration="600"
     data-aos-easing="ease-in-sine">Rest API</p>

          <p data-aos="fade-right"
     data-aos-offset="50"
     data-aos-duration="600"
     data-aos-easing="ease-in-sine">Postman</p>

          <p data-aos="fade-left"
     data-aos-offset="50"
     data-aos-duration="600"
     data-aos-easing="ease-in-sine">CSS Frameworks</p>

          <p data-aos="fade-right"
     data-aos-offset="50"
     data-aos-duration="600"
     data-aos-easing="ease-in-sine">MySQL</p>

          <p data-aos="fade-left"
     data-aos-offset="50"
     data-aos-duration="600"
     data-aos-easing="ease-in-sine">NoSQL</p>

          <p data-aos="fade-right"
     data-aos-offset="50"
     data-aos-duration="600"
     data-aos-easing="ease-in-sine">Python</p>

          <button className='homeskillsbtn' ><a style={{color:"white"}} href='/skills'>See All Skills</a></button>
          </div>
        </section>



       <section>
  <div className='d-flex align-items-center fullvHeight'>
    <div>
        <div className='workborder'>
        <h1 style={{color: "white"}} className='worksheader'>My Work</h1>
        </div>
       
  <div className='skillsdiv' data-aos="flip-right" data-aos-duration="10000">

       <Row xs={1} md={4} className="g-3">



       <Col>
    <Card border="warning" style={{ width: '18rem', height: '18.7rem' }} className='cardstyle'>
      <Card.Img variant="top" src={require('../../assets/digitalmarketing.png')} alt='Weather app' />
      <Card.Body>
        <Card.Title>Marketing Agency</Card.Title>
        <Card.Text>
          Created a Digital Marketing Agency website in React displaying different services. Deployed using AWS.
        </Card.Text>
       
      </Card.Body>
    </Card>
    </Col>

       <Col>
    
    <Card  border="info" style={{ width: '18rem' }} className='cardstyle' >
    
      <Card.Img variant="top" src={require('../../assets/onestopshop.png')} alt='online store' />
      <Card.Body>
        <Card.Title>One Stop Shop</Card.Title>
        <Card.Text>
          Built a full stack online store with products from an API. Used React and MongoDB. 
        </Card.Text>
        
      </Card.Body>
      
      
    </Card>
    </Col>

    <Col>
    <Card border="danger" style={{ width: '18rem' }} className='cardstyle'>
      <Card.Img variant="top" src={require('../../assets/pokemonappapi.png')} alt='pokemon creature searcher app' />
      <Card.Body>
        <Card.Title>Pokémon Creature Searcher</Card.Title>
        <Card.Text>
          Created an app with Pokémon API. Users can search for any Pokémon and get information about it.
        </Card.Text>
        
      </Card.Body>
    </Card>
    </Col>

    <Col>
    <Card border="primary" style={{ width: '18rem' }} className='cardstyle'>
      <Card.Img variant="top" src={require('../../assets/weatherapp.png')} alt='Weather app' />
      <Card.Body>
        <Card.Title>Weather App</Card.Title>
        <Card.Text>
          An app that tells you the weather in your current location or you can search for a city.
        </Card.Text>
        
      </Card.Body>
    </Card>
    </Col>
    
   

    </Row>
</div>
<div><button style={{color: "white"}} className='workbutton'>  <a style={{color:"white"}} href='/works'> See More Works</a>
</button></div>
</div>
</div>
   
    
       </section>
        
{/* <section>
<div className='d-flex align-items-center fullvHeight'>
<div>
<h1>About Me</h1>
</div>
  
  <div>
  <img  src={require('../../assets/beachphoto.jpg')} alt='profile pic' 
    style={{ height: "390px", width:'340px', 
    }}/>
    </div>
    </div>
</section> */}


        {/* <section className='footer'>
        <h1>Let's end the application with this Footer</h1>
        
      </section> */}

       </>
       
    );
};

export default Home;