import React from 'react';
import { Table, Button } from 'react-bootstrap';

class Sobre extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 1, descricao: 'Diárias de Refeição', valor: 90, codigo: 'DES0000000019', conta: '4.2.2.05.00004 LANCHES E REFEIÇÃO' },
        { id: 2, descricao: 'Outro Item', valor: 50, codigo: 'DES0000000020', conta: '4.2.2.05.00005 OUTRO ITEM' }
      ]
    };

    this.handleEditar = this.handleEditar.bind(this);
    this.handleRemover = this.handleRemover.bind(this);
  }

  handleEditar(id) {
    // Lógica para editar o item
    console.log('Editar item com id:', id);
    // Aqui você pode implementar a lógica para editar o item com o id fornecido
  }

  handleRemover(id) {
    // Lógica para remover o item
    console.log('Remover item com id:', id);
    // Aqui você pode implementar a lógica para remover o item com o id fornecido
    this.setState(prevState => ({
      items: prevState.items.filter(item => item.id !== id)
    }));
  }

  render() {
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Descrição do item</th>
              <th>Valor</th>
              <th>Código do item</th>
              <th>Conta razão</th>
              <th>Opções</th>
            </tr>
          </thead>
          <tbody>
            {this.state.items.map(item => (
              <tr key={item.id}>
                <td>{item.descricao}</td>
                <td>{item.valor}</td>
                <td>{item.codigo}</td>
                <td>{item.conta}</td>
                <td>
                  <div style={{ display: 'flex' }}>
                    <Button variant="primary" onClick={() => this.handleEditar(item.id)}>
                      Editar
                    </Button>{' '}
                    <Button variant="danger" onClick={() => this.handleRemover(item.id)}>
                      Remover
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Sobre;