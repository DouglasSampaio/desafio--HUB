import React, { useState } from 'react';
import { Form, Button, Col,Row } from 'react-bootstrap';
import axios from 'axios';
export default function CadastroUser() {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [users, setUsers] = useState()
    const teste = async function (e) {
        e.preventDefault();
        await getUser();
    }
    ////////////////////////////////////////////////////////
    async function getUser() {
        const response = await axios.post(
            `http://localhost:3333/users/`,
            { name, email, password }
        );
        setUsers(response.data.map((x) => x.name));
    }
   
    return (
        <Form >
            <Row className="justify-content-md-center">

                <Form>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="nome" placeholder="Enter name"  value={name} onChange={(e) => {
                            setName(e.target.value)
                        }} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email"  value={email} onChange={(e) => {
                            setEmail(e.target.value)
                        }} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => {
                            setPassword(e.target.value)
                        }} />
                    </Form.Group>
                </Form>


                
                <Button variant="primary" type="submit" onSubmit={teste}>
                    Cadastrar
  </Button>

            </Row>
            
        </Form>
    );
}