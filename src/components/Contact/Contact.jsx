import './Contact.css';
import { useState } from 'react';
import { send } from 'emailjs-com';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';



const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
    
  });
  const onSubmit = (e) => {
    e.preventDefault();
    send(
        'service_r7uywtt',
        'template_ijdqmfr',
        toSend,
        'VOEgubFj7KbYfWllu'
      )
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
        })
        .catch((err) => {
          console.log('FAILED...', err);
        });
    };
   
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };


  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Your message has been sent!</Popover.Header>
      <Popover.Body>
         <strong>Awesome!</strong> We will be in touch!
        
      </Popover.Body>
    </Popover>
  );
  

    return (
        <>

      <h6 style={{color: 'white', paddingTop: '60px'}}>Get in Touch</h6>
        <h1 style={{color: 'white',paddingBottom: '60px'}}>Contact Me</h1>

        <h4 style={{color: 'white', paddingBotton: '20px'}}>Send a Message</h4>
        
         <form className="formcontact" onSubmit={onSubmit}>

         <div class="form-group col-md-6">
    
    <input type="text" className="form-control" name='from_name' id="formName" placeholder="Name" value={toSend.from_name}
    onChange={handleChange}/>
  </div>

        
  <div class="form-group col-md-6 ">
  <textarea className="form-control" cols="40" rows="5" id="formMessage"  name='message' placeholder="Message"  value={toSend.message}
    onChange={handleChange}></textarea>
    
  </div>
  
  <OverlayTrigger trigger="click" placement="right" overlay={popover}>
<button className="messagesubmit" type='submit' id='submit'>Send Message</button>
</OverlayTrigger>


</form>

<video loop autoPlay muted id='video'>
    <source src={require('../../assets/darkmode.mp4')} type='video/mp4' />
</video>

          </>
    );
  };

  export default Contact;