import React from 'react';
import './About.css';
import Card from 'react-bootstrap/Card';

function About() {
    return (
      <>
   <video loop autoPlay muted id='video'>
      <source src={require('../../assets/darkmode.mp4')} type='video/mp4' />
  </video>
  
  <Card style={{marginTop:'40px', width:'80vw', alignItems:'center', display: "flex",
    justifyContent: 'center', justifySelf: 'center', marginLeft: '140px', backgroundColor:'#2218A799', color:'white'}} className='cardabout' >

<Card.Body className='bodyofcard' >
           
     
           <Card.Text>
           <div className='aboutmeheader'>About Me</div> 
 
 <div>Hey, I'm Natalie Dixon, a Full-Stack Web Developer, currently living in Lidköping, Sweden. I recently completed a
    coding bootcamp to further my skills in MERN Web Developing. 
    I enjoy learning and coding has become one of my passions. I consider myself creative, 
    adaptable and have an uncanny attention to detail.  
  </div>
     
      
 
 <p> A little about me, I graduated from Seattle University with a Bachelor's in
      Business Administation with a focus in Marketing. I am 
      a professional football player in Sweden and 
      am searching for a remote job.
   I grew up in California and am able to speak English and Swedish fluently.
 Throughout my education, I also took six years of Spanish. 
    </p>
 
 
 <p>In my free time I like to read, journal, go hiking and have coffee with friends.  </p>
           </Card.Text>
 
           </Card.Body>
         
         </Card> 
 
         <div>
           <img src={require('../../assets/beachphoto.jpg')} alt='hawaiibeachphoto' style={{ height: "420px", width:'340px', borderRadius: '50%', paddingTop: '20px'
     }}/>
         </div>

         </>

)
}
export default About