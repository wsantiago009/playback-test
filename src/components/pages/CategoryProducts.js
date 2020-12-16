import React, { useState } from 'react';

import { Container, Row, Col, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Link } from 'react-router-dom'
import buttons from '../../stylesheet/buttons.module.css';
import form from '../../stylesheet/form.module.css';

const CategoryProducts = () => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <>
            <div className="d-flex align-items-center justify-content-between">
                <h4 style={{color:'#EA1979'}} className="py-3">Category Products</h4>
                <div>
                    <button onClick={toggle} className={`${buttons.primaryBtn} mr-3 py-2 px-4`} style={{borderRadius:'53px'}}>Add Products</button>
                    <Link to="/category">
                        <button className={`${buttons.primaryBtn} py-2 px-4`} style={{borderRadius:'100px'}}>Back to categories</button>
                    </Link>
                </div>
            </div>
            <Container className="rounded my-3 p-3 ContentBorder">
                <Row>
                    <Col xs="4">
                        <h6>Category Name</h6>
                    </Col>
                    <Col xs="4">
                        <h6 className="text-center">Product Name</h6>
                    </Col>
                    <Col xs="4">
                        <h6 className="text-center">Action</h6>
                    </Col>
                </Row>
            </Container>

            
            <Modal isOpen={modal} fade={false} toggle={toggle} >
                <ModalHeader toggle={toggle}>Add products to category</ModalHeader>
                <ModalBody>
                    <input type="text" name="" id="" className={form.SearchInput} placeholder="Search products..." />
                </ModalBody>
            </Modal>
        </>
    );
}

export default CategoryProducts