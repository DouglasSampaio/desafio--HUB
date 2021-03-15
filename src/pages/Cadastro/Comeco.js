import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import ModalForm from './Modal'
import DataTable from './DataTable'

class Comeco extends Component {
  state = {
    items: []
  }


  getItems() {
    fetch(`https://desafio-hub.herokuapp.com/${localStorage.getItem('id')}`)
      .then(response => response.json())
      .then(items => this.setState({ items }))
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
      ...this.state.items.slice(0, indexItem),
      item,
      ...this.state.items.slice(indexItem + 1)
    ]
    this.setState({ items: newArray })
  }

  deleteItemFromState = (id) => {
    const updatedItems = this.state.items.filter(item => item.id !== id)
    this.setState({ items: updatedItems })
  }

  componentDidMount() {
    this.getItems()
  }

  render() {
    const nomeUsuario = localStorage.getItem('name');
    const UpperCase = nomeUsuario[0].toUpperCase() + nomeUsuario.substr(1)
    return (
      <Container>
        <div class=" card "  >
          <div class="card-body ">
            <Row>
              <Col>
                <h5 style={{ margin: "20px 0" }}>Bem Vindo {UpperCase}</h5>
              </Col>
            </Row>
            <Row>
              <Col>
                <DataTable items={this.state.items} updateState={this.updateState} deleteItemFromState={this.deleteItemFromState} />
              </Col>
            </Row>
            <Row>
              <Col>
                <ModalForm buttonLabel="Adicionar Task" addItemToState={this.addItemToState} />
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    )
  }
}

export default Comeco