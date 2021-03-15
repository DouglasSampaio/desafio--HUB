import React, { useEffect, useState } from 'react';
import './style.css'
import axios from 'axios';
//import { Comeco } from '../Cadastro/Comeco'
import { useHistory } from 'react-router-dom'


//import { Button, Form } from "react";
import { Form, Button, Container, Row } from 'react-bootstrap';
export default function Login() {
    const history = useHistory();
    const [email, setEmail] = useState()
    const [password, setSenha] = useState()
    const [name, setName] = useState()
    const [path, setPath] = useState()
    const [path2, setPath2] = useState()
    //const [id, setId] = useState()

    const [users, setUsers] = useState()
    const [users1, setPassword] = useState()
    const [id, setIdUser] = useState()

    const routeChange = () => {
        let path = `/Tasks1`;
        history.push(path);
    }

    const routeChange2 = () => {
        let path2 = `/CadastroUser`

        history.push(path2);
    }
    var cadastroRota = async function () {
        routeChange2()
    }

    var Login = async function (e) {
        e.preventDefault()

        const response = await axios.get(
            `http://localhost:3333/users`,
            { email, password }
        )

        //console.log(response.data)
        //{id: 4, name: "daniel", email: "daniel@teste.com", password: "wredgf"} == "email@gmail.com"
        let user = response.data.find((x) => x.email == email)

        if (user == null) { // usuario nao encontrado
            alert("Usuario inexistente!")
            return;
        }
        //console.log(user)
        //console.log(response.data)
        if (user.password !== password) {
            alert("senha invalida")
            return;
        }
        localStorage.setItem('id', user.id)
        localStorage.setItem('name', user.name)

        const id = localStorage.getItem('id')
        routeChange();



    }

    useEffect(() => {
        async function listagem() {
            const response = await axios.get(
                `http://localhost:3333/users`
            );
            // setUsers(response.data.map((x) => x.email));
            // setPassword(response.data.map((x) => x.password))
            // setIdUser(response.data.map((x) => x.id))
            // setName(response.data.map((x) => x.name))
            //setUsers(response.data.map((x) => x.password));
            //await verificar();
        }
        listagem();
    }, []);


    return (
        <Container className="mt-5  w-25 p-3 " >
            <div class=" card "  >
                <div class="card-header text-center">
                    <div><h3>Cadastro de Usuario</h3></div>
                </div>
                <div class="card-body ">
                    <Row className="justify-content-md-center">
                        <Form onSubmit={Login}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => {
                                    setEmail(e.target.value)
                                }} />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Senha</Form.Label>
                                <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => {
                                    setSenha(e.target.value)
                                }} />
                            </Form.Group>

                            <Button variant="primary" type="submit" onClick={Login} >Entrar  </Button> {' '} 
                            <Button variant="primary" type="submit" onClick={cadastroRota}> Cadastrar-se </Button>
                        </Form>
                    </Row>
                </div>
            </div>
        </Container>


    );
}