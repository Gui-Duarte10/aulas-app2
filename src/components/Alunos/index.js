import React from 'react';
import { Table } from 'react-bootstrap';

class Alunos extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      Alunos: [
        {'id':1, 'nome':'Luiz Fernando','email':'luiz@teste.com'},
        {'id':2, 'nome':'João Felipe','email': 'joaofefe@teste.com'}
      ]
    }
  }
  render(){
    return(
      <div>
        <Table striped bordered hover>
          <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Opções</th>
          </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.state.Alunos[0].nome}</td>
              <td>Luiz@gmail.com</td>
              <td>Editar  Remover</td>
              </tr>
              <tr>
              <td>João</td>
              <td>jaozinho@gmail.com</td>
              <td>Editar  Remover</td>
              </tr>
          </tbody>
        </Table>
      </div>
    )
  }
}


export default Alunos;