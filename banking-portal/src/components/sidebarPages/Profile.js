import React from "react"
import { Link} from "react-router-dom";
import { Button, Container, Row, Col, Card } from "react-bootstrap"
import Sidebar from "../dashboardcomponents/Sidebar"
import "../../styles/Dashboard.css"



export default function Profile () {
    return (
        <div className="Dashboard">
        <Container fluid>
            <Row>
                <Col>
                    <Sidebar/>
                </Col>
                <Col>
                    <Card classname="header">
                        <h2>Profle</h2>
                        <br></br>
                        <strong>USER: test@testtest.com</strong>
                    </Card>
                </Col>
            </Row>
        </Container>
        <div className="Settings">
        <Container fluid>
          <Button block bsSize="large" >
            <Link to = "/ChangePassword">Change Password</Link>
          </Button>
        </Container>
        </div>
        </div>
    )
}