import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import ModalForm from './Botoes'
import DataTable from './Tabela'

class Comeco extends Component {
  state = {
    items: []
  }

  getItems(){
    fetch(`http://localhost:3333/tasks/${localStorage.getItem('id')}`)
      .then(response => response.json())
      .then(items => this.setState({items}))
      .catch(err => console.log(err))
  }

  addItemToState = (item) => {
    this.setState(prevState => ({
      items: [...prevState.items, item]
    }))
  }

  updateState = (item) => {
    const indexItem = this.state.items.findIndex(data => data.id === item.id)
    const newArray = [
    // destructure all items from beginning to the indexed item
      ...this.state.items.slice(0, indexItem),
    // add the updated item to the array
      item,
    // add the rest of the items to the array from the index after the replaced item
      ...this.state.items.slice(indexItem + 1)
    ]
    this.setState({ items: newArray })
  }

  deleteItemFromState = (id) => {
    const updatedItems = this.state.items.filter(item => item.id !== id)
    this.setState({ items: updatedItems })
  }

  componentDidMount(){
    this.getItems()
  }

  render() {
    const nomeUsuario = localStorage.getItem('name');
const UpperCase = nomeUsuario[0].toUpperCase() + nomeUsuario.substr(1)
    return (
      
      <Container className="Comeco">
        <Row>
          <Col>
            <h1 style={{margin: "20px 0"}}>Bem Vindo {UpperCase}</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <DataTable items={this.state.items} updateState={this.updateState} deleteItemFromState={this.deleteItemFromState} />
          </Col>
        </Row>
        <Row>
          <Col>
            <ModalForm buttonLabel="Adicionar Task" addItemToState={this.addItemToState}/>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Comeco