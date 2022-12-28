import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import homeIcon from "./assets/homeIcon.png"
import { FcMindMap } from "react-icons/fc"
import { SiMinds } from "react-icons/si"
import { BsBarChartLineFill } from "react-icons/bs"
import { ImPower } from "react-icons/im"
import { TbMessageLanguage } from "react-icons/tb"
import { GiDiscussion } from "react-icons/gi"
import { GrUserExpert } from "react-icons/gr"


function App() {


  const navigate = useNavigate();



  function fetchHomepageCards() {
    return (
      <Container>
        <Row>
          <Col md={4} >
            <Card  style={{ width: '18rem', marginTop: "15px" }}>
              {/* <Card.Img variant="top" src={homeIcon} style={{height:"300px",width:"300px"}} /> */}
              <SiMinds style={{ width: "40px", height: "40px", margin: "20px", display: "flex", justifyContent: "center" }} />
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}><b>Creativity</b></Card.Title>
                <Card.Text>
                  You will get a chance on experimenting different approaches for coding a solution using your creativity!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} >
            <Card style={{ width: '18rem', marginTop: "15px" }}>
              {/* <Card.Img variant="top" src={homeIcon} style={{height:"300px",width:"300px"}} /> */}
              <BsBarChartLineFill style={{ width: "40px", height: "40px", margin: "20px" }} />
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}><b>Practice</b></Card.Title>
                <Card.Text>
                  Challenge yourself to practice everyday!
                  You will get pool of programming questions varying from difficulty levels.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} >
            <Card style={{ width: '18rem', marginTop: "15px" }}>
              {/* <Card.Img variant="top" src={<FcMindMap/>} style={{height:"300px",width:"300px"}} /> */}
              <ImPower style={{ width: "40px", height: "40px", margin: "20px" }} />
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}><b>Confidence</b></Card.Title>
                <Card.Text>
                  Boost your confidence by solving as many as questions you can!
                  <br />
                  <br />
                  <br />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}  >
            <Card style={{ width: '18rem', marginTop: "15px" }}>
              {/* <Card.Img variant="top" src={homeIcon} style={{height:"300px",width:"300px"}} /> */}
              <TbMessageLanguage style={{ width: "40px", height: "40px", margin: "20px" }} />
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}><b>Languages</b></Card.Title>
                <Card.Text>
                  Choose from popular programming languages like C++, Java, Python and much more!
                  <br />
                  <br />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} >
            <Card style={{ width: '18rem', marginTop: "15px" }}>
              {/* <Card.Img variant="top" src={homeIcon} style={{height:"300px",width:"300px"}} /> */}
              <GiDiscussion style={{ width: "40px", height: "40px", margin: "20px" }} />
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}><b>Discussion Forum</b></Card.Title>
                <Card.Text>
                  Having any doubts about a coding question? Discuss with your fellow coders on our discussion forum platform.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: '18rem', marginTop: "15px" }}>
              {/* <Card.Img variant="top" src={homeIcon} style={{height:"300px",width:"300px"}} /> */}
              <GrUserExpert style={{ width: "40px", height: "40px", margin: "20px" }} />
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}><b>Expert</b></Card.Title>
                <Card.Text>
                  We will help you be an expert in your chosen technology if you promise us to keep on practicing!
                  <br />
                  <br />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container >
    );
  }

  function fetchDescription() {
    return (
      <Row>
        <Col>
          <h1 style={{ marginTop: "100px", marginLeft: "30px", fontSize: "50px" }}>Welcome To GyaanDock.</h1>
          <h4 style={{ marginLeft: "30px", color: "rgb(0,152,186)", fontSize: "25px" }}>Bring your ships of curiosity here!</h4>
          <p style={{ marginLeft: "30px" }}>Enhance your coding skills with us in a variety of technical domains.</p>
        </Col>
        <Col>
          <img src={homeIcon} style={{ width: "500px", height: "500px" }} />
        </Col>
      </Row>
    );
  }

  return (
    <div >
      <Header />
      {/* <Container>
      <Row>
        <Col ></Col>
        <Col>
          <h4>Welcome To Gyaandock.</h4>

        </Col>
      </Row>
      </Container> */}

      <br />
      {
        fetchDescription()
      }

      {/* {
        fetchHomepageCards()
        
      } */}
      {
        fetchHomepageCards()
      }
      {/* <HomepageCards /> */}
    </div>
    // <Container>
    //   <Row className="justify-content-md-center">
    //     <Col xs lg="2">
    //       1 of 3
    //     </Col>
    //     <Col md="auto">Variable width content</Col>
    //     <Col xs lg="2">
    //       3 of 3
    //     </Col>
    //   </Row>
    //   <Row>
    //     <Col>1 of 3</Col>
    //     <Col md="auto">Variable width content</Col>
    //     <Col xs lg="2">
    //       3 of 3
    //     </Col>
    //   </Row>
    // </Container>
  );
}

export default App;
