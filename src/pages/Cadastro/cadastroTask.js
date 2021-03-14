import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row } from 'reactstrap';

class AddEditForm extends React.Component {
    state = {
        id: 0,
        name: '',
        description: '',
        data: '',
        status: '',
        user_id: ''
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitFormAdd = () => {
        fetch(`http://localhost:3333/task/${localStorage.getItem('id')}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                description: this.state.description,
                data: this.state.data,
                status: this.state.status,

            })
        })
            .then(response => response.json())
            .then(item => {
                if (Array.isArray(item)) {
                    this.props.addItemToState(item[0])
                    this.props.toggle()
                } else {
                    console.log('falha')
                }
            })
            .catch(err => console.log(err))
            alert("Task Criada com Sucesso!")
    }

    submitFormEdit = e => {
        e.preventDefault()
        fetch(`http://localhost:3333/tasks${id}}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: this.state.id,
                name: this.state.name,
                description: this.state.description,
                data: this.state.data,
                status: this.state.status,
            })
        })
            .then(response => response.json())
            .then(item => {
                if (Array.isArray(item)) {
                    // console.log(item[0])
                    this.props.updateState(item[0])
                    this.props.toggle()
                } else {
                    console.log('Falha')
                }
            })
            .catch(err => console.log(err))
    }

    componentDidMount() {
        // if item exists, populate the state with proper data
        if (this.props.item) {
            const { id, name, description, data, status, user_id } = this.props.item
            this.setState({ id, name, description, data, status, user_id })
        }
    }

    render() {
        return (
            
        <><div><h3 className="mt-5">Cadastre Suas Task</h3>
            <Container className="mt-5">
            <Row className="center">
            <Form onSubmit={this.props.item ? this.submitFormEdit : this.submitFormAdd}>
                <FormGroup>
                    <Label for="name">Nome</Label>
                    <Input type="text" name="name" id="name" onChange={this.onChange} value={this.state.name === null ? '' : this.state.name} />
                </FormGroup>
                <FormGroup>
                    <Label for="description">Descrição</Label>
                    <Input type="text" name="description" id="description" onChange={this.onChange} value={this.state.description === null ? '' : this.state.description} />
                </FormGroup>
                <FormGroup>
                    <Label for="data">Data</Label>
                    <Input type="date" name="data" id="data" onChange={this.onChange} value={this.state.data === null ? '' : this.state.data} />
                </FormGroup>
                <FormGroup>
                    <Label for="status">Status</Label>
                    <select name="status" id="status"  onChange={this.onChange}  value={this.state.status === null ? '' : this.state.status} >
                        <option  name="status" id="status">NOT_DONE</option>
                        <option  name="status" id="status">IN_PROGRESS</option>
                        <option  name="status" id="status">DONE</option>
                    </select>
                </FormGroup>
                <Button>Submit</Button>
            </Form>
            </Row>

        </Container>
        </div>
        </>
        );
    }
}

export default AddEditForm