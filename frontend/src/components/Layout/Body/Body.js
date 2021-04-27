import { Component } from 'react';
import Register from './Register';
import Login from './Login';
import Footer from '../Layout/Footer/Footer';
import Showallpackages from '../Layout/Adminpannel/Adminpannel';
import { Container, Row, Col } from "react-bootstrap";
import { Route } from 'react-router-dom';


class body extends Component {
    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col>
                            <Route path='/login' component={Login} />
                            <Route path='/register' component={Register} />
                            <Route path='/Showallpackages' component={Showallpackages} />
                        </Col>
                    </Row>
                </Container>
                <Footer></Footer>
            </>
        )
    }
}
export default body;