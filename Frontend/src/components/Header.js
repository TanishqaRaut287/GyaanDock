import React from "react";
import logo from "../assets/logo.png"
import { Button, Col, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import {FaUserAlt} from "react-icons/fa"

function Header() {

    const navigate = useNavigate();

    function getQuestions() {
        navigate('/questions')
    }
    function aboutUs() {
        navigate('/aboutUs')
    }

    function handleSignIn(){
        navigate('/signIn')
    }
    return (
        <div>
            <Row>
                <nav class="navbar navbar-light">
                    <a class="navbar-brand" href="#">
                        <img src={logo} style={{ textAlign: "right", height: "50px", width: "50px", marginLeft: "40px" }} />
                        &nbsp;&nbsp;Gyaandock
                    </a>
                    <Col md={7}>
                    </Col>
                    <Col md={1} style={{ marginTop: "20px" }}>
                        <Button variant="outline-primary" onClick={getQuestions}>Questions</Button>
                    </Col>
                    <Col md={1} style={{ marginTop: "20px" }}>
                        <Button variant="outline-primary" onClick={aboutUs}>About Us</Button>
                    </Col>
                    <Col md={1} style={{ marginTop: "20px" }}>
                        <Button variant="outline-primary" onClick={handleSignIn}><FaUserAlt/>Sign In</Button>
                    </Col>
                </nav>

            </Row>
            <br />

        </div>
    );

}

export default Header;
