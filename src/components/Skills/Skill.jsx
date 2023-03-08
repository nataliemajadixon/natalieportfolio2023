import React from 'react';
// import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './Skills.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


{/* <Card.Body> */}
const Skills = () => {
  return (
    <>
    <section>
      <div className='d-flex align-items-center fullvHeight'>
       <div>
        <div className='skillsheader'>
          <h1 className='skillstop'>Skills</h1>
        </div>

        <div className='skillsinfo'>

        <Row xs={1} md={3} className="g-4">
    <Col>
        <Card style={{ width: '18rem' }} className='cardonhover'>
      <Card.Body>
        <Card.Title style={{ fontWeight: '700' }}>Front-End Developer</Card.Title>
        <Card.Text>
          2022 Skillspire MERN Full-Stack Developer Bootcamp 
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Javascript </ListGroup.Item>
        <ListGroup.Item>HTML</ListGroup.Item>
        <ListGroup.Item>CSS</ListGroup.Item>
        <ListGroup.Item>React</ListGroup.Item>
        <ListGroup.Item>Redux</ListGroup.Item>
        <ListGroup.Item>Node.js</ListGroup.Item>
        <ListGroup.Item>Bootstrap</ListGroup.Item>
        <ListGroup.Item>Material UI</ListGroup.Item>
        <ListGroup.Item>Animate.CSS</ListGroup.Item>
        <ListGroup.Item>Tailwind CSS</ListGroup.Item>
        <ListGroup.Item>Skeleton</ListGroup.Item>
       
      </ListGroup>
      {/* <Card.Body>
        
      </Card.Body> */}
    </Card>
    </Col>

    <Col>
    <Card style={{ width: '18rem' }} className='cardonhover'>
      <Card.Body>
        <Card.Title style={{ fontWeight: '700' }}>Back-End Developer</Card.Title>
        <Card.Text>
        Experience building websites for companies in local area in Sweden.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>MongoDB</ListGroup.Item>
        <ListGroup.Item>Express.js</ListGroup.Item>
        <ListGroup.Item>Git</ListGroup.Item>
        <ListGroup.Item>Rest API</ListGroup.Item>
        <ListGroup.Item>Postman</ListGroup.Item>
        <ListGroup.Item>MySQL</ListGroup.Item>
        <ListGroup.Item>NoSQL</ListGroup.Item>
        <ListGroup.Item>Python</ListGroup.Item>
      </ListGroup>
      {/* <Card.Body>
        
      </Card.Body> */}
    </Card>
    </Col>

    <Col>

    <Card style={{ width: '18rem' }} className='cardonhover'>
      <Card.Body>
        <Card.Title style={{ fontWeight: '700' }}>Marketing</Card.Title>
        <Card.Text>
          Seattle University BA in Marketing(3.8 GPA)
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Microsoft Office Specialist Excel Certification (365 Apps & Office 2019)</ListGroup.Item>
        <ListGroup.Item>Business Analysis</ListGroup.Item>
        <ListGroup.Item>Social Media Marketing</ListGroup.Item>
        <ListGroup.Item>SEO/User Experience</ListGroup.Item>
        <ListGroup.Item>Supply Chain Management</ListGroup.Item>
        <ListGroup.Item>Project Management</ListGroup.Item>
        
        <ListGroup.Item>Business Finance</ListGroup.Item>
        
      </ListGroup>
      {/* <Card.Body>
        
      </Card.Body> */}
    </Card>
    </Col>
      </Row>


        </div>
        </div>
      </div>
    </section>

<video loop autoPlay muted id='video'>
    <source src={require('../../assets/darkmode.mp4')} type='video/mp4' />
</video>

    </>
  );
}

export default Skills;

