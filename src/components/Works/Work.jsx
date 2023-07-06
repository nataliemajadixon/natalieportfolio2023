import React from "react";
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const Works = () => {
    return (
        <>
<div>
  <h1 style={{paddingTop: '20px', color: 'white'}}>Works</h1>
</div>
  
    <Row xs={1} md={2} className="g-4">

    <Col>
          <Card style={{marginLeft: '40px', marginTop: '20px', width: '40rem'}}>
          <a href="https://main.d1znh43aahnf9s.amplifyapp.com/"> <Card.Img variant="top" src={require('../../assets/digitalmarketing.png')} alt='online store' /> </a>
            <Card.Body>
              <Card.Title>Marketing Agency</Card.Title>
              <Card.Text>
              Created a Digital Marketing Agency website in React displaying different services. Deployed using AWS.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{marginLeft: '40px', marginTop: '20px', width: '40rem'}}>
          <a href="https://github.com/nataliemajadixon/theonestopshop"> <Card.Img variant="top" src={require('../../assets/onestopshop.png')} alt='online store' /> </a>
            <Card.Body>
              <Card.Title>One Stop Shop</Card.Title>
              <Card.Text>
              Full stack online store using an API. Including the ability to view products information and add to cart. Used React for Front-End and MongoDB for Back-End. 
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

      
        <Col>
          <Card style={{marginLeft: '40px', marginTop: '20px', width: '40rem'}}>
          <a href="https://github.com/nataliemajadixon/tradgard.git"> <Card.Img variant="top" src={require('../../assets/etrad.png')} alt='online store' /> </a>
            <Card.Body>
              <Card.Title>E Trädgård</Card.Title>
              <Card.Text>
              Built website for gardening company in Sweden using React. 
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
     
        <Col>
          <Card style={{marginRight: '20px', marginTop: '20px', width: '40rem'}}>
           <a href="https://github.com/nataliemajadixon/pokemon"> <Card.Img  variant="top" src={require('../../assets/pokemonappapi.png')} alt='pokemon creature searcher app' /> </a>
            <Card.Body>
              <Card.Title>Pokémon Creature Searcher</Card.Title>
              <Card.Text>
              Created an app with a Pokémon API. Users have the ability to search for any Pokémon and get information about their capabilities.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{marginLeft: '40px', width: '40rem'}}>
          <a href="https://github.com/nataliemajadixon/weather-app"> <Card.Img variant="top" src={require('../../assets/weatherapp.png')} alt='Weather app'  /> </a>
            <Card.Body>
              <Card.Title>Weather App</Card.Title>
              <Card.Text>
              An app where you allows it to access your current location. You can also type in a city you would like to see the weather for.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card style={{marginRight: '20px', width: '40rem'}}>
          <a href="https://github.com/nataliemajadixon/kobeBryantTimeline"> <Card.Img variant="top" src={require('../../assets/kobetimeline.png')} alt='Kobe Timeline' /> </a>
            <Card.Body>
              <Card.Title>Kobe Bryant Timeline</Card.Title>
              <Card.Text>
              Created a Black Mamba Timeline showing his history over the years using JS, HTML & CSS.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

    </Row>
  
    <video loop autoPlay muted id='video'>
    <source src={require('../../assets/darkmode.mp4')} type='video/mp4' />
</video>

        </>

        );
    };
    
    export default Works;