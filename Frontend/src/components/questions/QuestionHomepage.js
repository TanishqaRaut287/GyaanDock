import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Button, Dropdown, Table } from "react-bootstrap";
import Header from "../Header";
import url from "../../Uri";
import "./QuestionHomepage.css"
import { useNavigate } from "react-router-dom";

function QuestionHomepage() {

    const [questions, SetQuestions] = useState([]);
    const [filteredQuestions, SetFilteredQuestions] = useState([]);
    const [areQuestionsFetched, SetAreQuestionsFetched] = useState(false);
    const [category, SetCategory] = useState([]);



    const navigate = useNavigate();

    useEffect(() => {
        if (!areQuestionsFetched) {
            axios.get(url + "/api/v1/question").then(function (response) {
                console.log("success:", response.data);
                var set = new Set();
                response.data.data.question.map((question) => {
                    questions.push(question);
                    set.add(question.category);
                    filteredQuestions.push(question);
                })
                SetCategory([...set]);
                SetAreQuestionsFetched(true);
            }).catch(function (error) {
                console.log(error);
            })
        }
    })

    function fetchQuestionDetails(question) {
        // alert("Question clicked:"+question.id)
        if (localStorage.getItem("jwtToken") == null) {
            alert("Please login to attempt the question");
            return;
        } else {
            localStorage.setItem("question", JSON.stringify(question));
            navigate('/questions/' + question.id)

        }


    }

    function handleEasyClick() {
        // alert("Easy Clicked");
        var arr = [];
        questions.map((question) => {
            if (question.difficulty == "easy") {
                arr.push(question);
            }
        })
        SetFilteredQuestions([...arr]);
    }

    function handleMediumClick() {
        // alert("Medium Clicked");
        var arr = [];
        questions.map((question) => {
            if (question.difficulty === "medium") {
                arr.push(question);
            }
        }
        )
        SetFilteredQuestions([...arr]);
    }

    function handleHardClick() {
        // alert("Hard Clicked");
        var arr = [];
        questions.map((question) => {
            if (question.difficulty === "hard") {
                arr.push(question);
            }
        }
        )
        SetFilteredQuestions([...arr]);

    }

    function handleAllClick() {
        // alert("All Clicked");
        SetFilteredQuestions([...questions]);
    }

    function handleSolvedClick() {
        alert("Solved Clicked");
    }

    function handleUnsolvedClick() {
        alert("Unsolved Clicked");
    }

    function handleCategoryClick(cat) {
        // alert("Category Clicked:"+cat);
        var arr = [];
        questions.map((question) => {
            if (question.category === cat) {
                arr.push(question);
            }

        })
        SetFilteredQuestions([...arr]);

    }

    return (
        <div>
            <Header />
            <>
                <Dropdown className="d-inline mx-4">
                    <Dropdown.Toggle >
                        Difficulty Level
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#" onClick={handleEasyClick}>Easy</Dropdown.Item>
                        <Dropdown.Item href="#" onClick={handleMediumClick}>Medium</Dropdown.Item>
                        <Dropdown.Item href="#" onClick={handleHardClick}>Hard</Dropdown.Item>
                        <Dropdown.Item href="#" onClick={handleAllClick}>All</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;

                {/* <Dropdown className="d-inline mx-5">
                    <Dropdown.Toggle >
                        Status
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#" onClick={handleSolvedClick}>Solved</Dropdown.Item>
                        <Dropdown.Item href="#" onClick={handleUnsolvedClick}>Unsolved</Dropdown.Item>
                        <Dropdown.Item href="#" onClick={handleAllClick}>All</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown> */}

                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;

                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                &emsp;&emsp;

                <Dropdown className="d-inline mx-5">
                    <Dropdown.Toggle>
                        Category
                    </Dropdown.Toggle>

                    {/* <Dropdown.Menu>
                        <Dropdown.Item href="#">String</Dropdown.Item>
                        <Dropdown.Item href="#">Classes</Dropdown.Item>
                        <Dropdown.Item href="#">STL</Dropdown.Item>
                        <Dropdown.Item href="#">Inheritance</Dropdown.Item>
                    </Dropdown.Menu> */}
                    <Dropdown.Menu>
                        {
                            category.map((cat) => {
                                return (
                                    <Dropdown.Item href="#" onClick={() => handleCategoryClick(cat)}>{cat}</Dropdown.Item>
                                )
                            })
                        }
                        <Dropdown.Item href="#" onClick={handleAllClick}>All</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <p></p>

            </>
            {
                filteredQuestions.map((question) => {
                    return (
                        <div>
                            <Card className="question" style={{ width: "1200px", marginLeft: "20px" }} onClick={() => fetchQuestionDetails(question)}>
                                <Card.Body>
                                    <Card.Title>{question.title}</Card.Title>
                                    <Card.Text>
                                        Difficulty:{question.difficulty}&nbsp;&nbsp;|&nbsp; Score:{question.score}&nbsp;&nbsp;|&nbsp;Category:{question.category}
                                    </Card.Text>
                                    <Card.Text className="overflow-wrap">
                                        {question.description}&nbsp;
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <br />
                        </div>
                    );
                })
            }
        </div>
    );
}

export default QuestionHomepage;