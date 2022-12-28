import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import url from "../../../Uri";
import userLogo from "../../../assets/User_logo.png"

function Comment() {

    const [comments, setComments] = useState([]);
    const [areCommentsFetched, SetAreCommentsFetched] = useState(false);

    const urlString = useLocation().pathname;

    const split = urlString.split("/")

    useEffect(() => {
        if (!areCommentsFetched) {
            axios.get(url + "/api/v1/question/" + split[2] + "/comment")
                .then(function (response) {
                    console.log(response.data)
                    setComments(response.data.data.comment);
                    SetAreCommentsFetched(true)
                }).catch(function (error) {
                    console.log(error)
                })
        }
    })

    const [newComment, SetNewComment] = useState("");
    const [newCode, SetNewCode] = useState("");

    function inputComment(event) {
        SetNewComment(event.target.value);
    }

    function inputCode(event) {
        SetNewCode(event.target.value);
    }

    function handleAddComment() {
        if (newComment === "" || newCode === "") {
            alert("Please fill all fields")
        } else {
            // console.log(localStorage.getItem("jwtToken"))
            // const data = JSON.stringify({ inputComment, inputCode });
            // axios.post(url + "/api/v1/question/" + split[2] + "/comment", data, {
            //     headers: {
            //         "Content-Type": "application/json",
            //         "Authorization": localStorage.getItem("jwtToken"),
            //         "Access-Control-Allow-Origin": "*",
            //     }
            // })
            //     .then(function (response) {
            //         console.log(response.data);
            //         window.location.reload()
            //     }).catch(function (error) {
            //         console.log("Error:", error);
            //     })
            // alert("Comment added")
            var arr=[];

            // var arr= comments;
            arr.push({comment: newComment, code: newCode, user: {name: "Tanishqa Raut", profilePic: ""}})
            arr.push(...comments)
            setComments([...arr])
            // window.location.reload()
        }
    }

    function addComment() {
        return (
            <Card>
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicName" onChange={inputComment}>
                            <Form.Label>Comment</Form.Label>
                            <Form.Control type="text" placeholder="Enter Comment" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicName" onChange={inputCode}>
                            <Form.Label>Code</Form.Label>
                            <Form.Control type="text" placeholder="Enter Code" />
                        </Form.Group>
                        <Button variant="primary" onClick={handleAddComment}>Add Comment</Button>
                    </Form>
                </Card.Body>
            </Card>
        )
    }

    return (
        <>
            {
                addComment()
            }
            <p></p>
            {
                (areCommentsFetched == true) ? (
                    comments.map(c => {
                        return (
                            <>
                                <Card style={{ background: "rgba(0,152,186,0.2)" }}>
                                    {/* {
                                        (c.user.name!=null)(
                                            <Card.Text><img src={userLogo} style={{ textAlign: "right", height: "50px", width: "50px" }} /> &emsp;{c.user.name}</Card.Text>
                                        ):(
                                            <Card.Text><img src={userLogo} style={{ textAlign: "right", height: "50px", width: "50px" }} /> &emsp;</Card.Text>
                                        )
                                    } */}
                                        <Card.Text><img src={userLogo} style={{ textAlign: "right", height: "50px", width: "50px" }} /> &emsp;{c.user.name}</Card.Text>
                                   
                                    
                                    <Card.Title style={{ margin: "20px" }}>{c.comment}</Card.Title>
                                    <Card className="text-white" style={{ background: "rgba(120,120,120,0.8)", margin: "20px" }}>
                                        <Card.Body>{c.code.split("\n").map((item) => {
                                            return (
                                                <span>{item}<br /></span>
                                            )
                                        })}</Card.Body>
                                    </Card>
                                </Card>
                                <p></p>
                            </>

                        )
                    })
                ) : (
                    null
                )
            }



        </>

    )
}

export default Comment;