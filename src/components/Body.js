import React from 'react';

import {Container, Row, Col} from 'reactstrap';
import Sidebar from './Sidebar';

const Body = () => {
    return (
        <Container>
            <Row>
                <Col sm="2">
                    <Sidebar />
                </Col>
            </Row>
        </Container>
    );
}

export default Body;