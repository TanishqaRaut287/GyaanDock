import React, { useEffect, useState } from "react";
import Header from "../Header";
import { Card, Button, DropdownButton, Dropdown, Nav, Row, Col, Container, CardGroup } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
// import Editor from "@monaco-editor/react";
import url from "../../Uri";
import "./SolveQuestion.css"
import Navbar from "./Navbar";
import Compiler from "./Compiler";
import Comment from "./comments/Comment";


function SolveQuestion() {

    const[isQuestion,SetIsQuestion] = useState(true);

    function showComments(){
        if(showQuestion!=false)
            SetIsQuestion(false)
    }

    function showQuestion(){
        if(showQuestion!=true)
            SetIsQuestion(true)
    }

    var question = JSON.parse(localStorage.getItem("question"));

    console.log("Question:", question)


    function QuestionDetails() {
        return (
            <>
            <Card>
                <Card.Body>
                    <Card.Title>{question.title}</Card.Title>
                    <Card.Text>
                        {question.description}
                    </Card.Text>

                    <Card.Title>Input Format</Card.Title>
                    <Card.Text>
                        {question.input_format}
                    </Card.Text>
                    <Card.Title>Output Format</Card.Title>
                    <Card.Text>
                        {question.output_format}
                    </Card.Text>
                    <Card.Title>Sample Input</Card.Title>
                    <Card.Text>
                    {
                        question.sample_input.split("\n").map((item) => {
                            return(
                                <span>{item}<br/></span>
                            )
                        })
                    }
                    {/* {
                        question.sample_input
                    } */}
                    </Card.Text>
                    <Card.Title>Sample Output</Card.Title>
                    <Card.Text>
                    {
                        question.sample_output.split("\n").map((item) => {
                            return(
                                <span>{item}<br/></span>
                            )
                        })
                    }
                    </Card.Text>
                </Card.Body>
            </Card>
            <br/>
            <br/>

            </>
        )
    }

    

    function fetchQuestionDetails() {
        return (
            <Container>
                <Card className="questionData" >
                    <Card.Header>
                        <Nav justify variant="tabs" defaultActiveKey="/home">
                            <Nav.Item>
                                <Nav.Link eventKey="questionData" onClick={showQuestion}>Description</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Comment" onClick={showComments}>Comment</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Card.Header>
                    <Card.Body>
                        
                        {
                            (isQuestion==true)?(
                                
                                QuestionDetails()
                                
                            ):(
                               <Comment/>
                            )
                            // QuestionDetails()
                        }
                    </Card.Body>
                </Card>
            </Container>
        )
    }

    return (

        <>

            <Header />
            <CardGroup >
                <Card border="white">
                    <Card.Body>
                        {
                            fetchQuestionDetails()
                        }
                    </Card.Body>
                </Card>
                <Card border="white">
                    <Card.Body>
                        <Compiler />
                    </Card.Body>
                </Card>
            </CardGroup>


            <br />
            <br />
        </>


    );
}

export default SolveQuestion;
