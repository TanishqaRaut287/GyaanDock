import axios from "axios";
import React, { useState } from "react";
import { Button, Card, CardGroup, InputGroup, Form, Row, Col } from "react-bootstrap";
import url from "../../Uri";
import logo from "../../assets/logo.png"

function UserProfile() {

    const [name, setName] = useState(localStorage.getItem("userName"));
    const [email, setEmail] = useState(localStorage.getItem("userEmail"));
    const [education, setEducation] = useState(localStorage.getItem("userEducation"));
    const [password, setPassword] = useState("");
    var sc = 0;
    if (localStorage.getItem("userScore") != null) {
        sc = localStorage.getItem("userScore");
    }
    const [score, setScore] = useState(sc);
    const [nosOfSolvedQuestions, setNosOfSolvedQuestions] = useState(0);
    const [isUserDetailsFetched, setIsUserDetailsFetched] = useState(false);

    function handleLogOut() {
        localStorage.removeItem("jwtToken");
        localStorage.removeItem("userName");
        localStorage.removeItem("userEmail");
        localStorage.removeItem("userScore");
        window.location.reload();
    }

    const updateUserName = () => {

        const callUpdateUserName = async () => {
            try {
                const res = await fetch('api/v1/user/updateMe', {
                    method: "PATCH",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        "Authorization": localStorage.getItem("jwtToken")
                    },
                    credentials: "include"
                });
                const data = await res.json();
                console.log(data);

            } catch (err) {
                console.log(err);
            }
        }

    }

    return (
        <div>
            <Card style={{ padding: "30px", background: "rgba(0,152,186,0.2)" }}>
                <Card.Body>
                    <Row>
                        <Col md={3}>
                            <img src={logo} style={{ textAlign: "right", height: "100px", width: "100px", marginLeft: "40px" }} />
                        </Col>
                        <Col md={{ span: 4, offset: 0 }}>
                            <Card.Title>
                                <h2 >Name: {name}</h2>
                            </Card.Title>
                            <Card.Text><h3>Email:  {email}</h3></Card.Text>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            <br />
            <Card className="text-center" style={{ height: "100px", background: "rgba(0,152,186,0.2)" }}>
                <br />
                <Card.Text><h3>Score:{score}</h3></Card.Text>
            </Card>

            <br />
            {/* <Card style={{ padding: "30px", background: "rgba(0,152,186,0.2)" }}>
                <br />
                <Card.Title>Change User name</Card.Title>
                <Card.Body>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="User Name"
                            aria-label="Small"
                            aria-describedby="inputGroup-sizing-sm"
                        />
                    </InputGroup>
                </Card.Body>
                <div className="d-grid gap-2">
                    <Button size="md" onClick={handleLogOut}>Update User Name</Button>
                </div>
            </Card>
            <br />
            <Card style={{ padding: "10px", background: "rgba(0,152,186,0.2)" }}>
                <br />
                <Card.Title>Change Password</Card.Title>
                <Card.Body>
                    <Form.Group className="mb-3" controlId="formBasicPassword" >
                        <Form.Control type="password" placeholder="Current Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword" >
                        <Form.Control type="password" placeholder="New Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword" >
                        <Form.Control type="password" placeholder="Confirm New Password" />
                    </Form.Group>
                </Card.Body>
                <div className="d-grid gap-2">
                    <Button size="md" onClick={handleLogOut}>Update Password</Button>
                </div>
            </Card>

            <br /> */}


            <div className="d-grid gap-2">
                <Button size="lg" onClick={handleLogOut}>Log Out</Button>
            </div>


        </div >
    );
}

export default UserProfile;