import { Grid, MuiThemeProvider, Button } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import axios from 'axios';
import MaterialTable from "material-table";


export default class GerenciamentoAlunos extends React.Component {

  constructor(props) {
    super(props);

    this.handleClick.bind(this);
  }

  componentWillMount() {
    this.setState({
      columns: [
        { title: 'Id', field: 'id' },
        { title: 'cpf', field: 'cpf', initialEditValue: 'cpf' },
        { title: 'matricula', field: 'matricula', type: 'numerico' },
        { title: 'nome', field: 'nome' },
        { title: 'endereco', field: 'idEndereco', type: 'numerico' },
        { title: 'curso', field: 'curso' }
      ],
      data: []
    });
    //this.handleClick
  }

  async handleClick(e) {
    
    try {
      const alunos = await axios.get("http://demo8362306.mockable.io/");
      this.setState({columns: alunos});
    } catch(e) {
      console.log(e.message)
    }

    console.log("Aqui")

    // axios
    //   .get("http://demo8362306.mockable.io/")
    //   .then(response => {

    //     // create an array of contacts only with relevant data
    //     //console.log(response.data.lista);
    //     const alunos = response.data.lista.map(c => {
    //       return {
    //         id: c.id,
    //         cpf: c.cpf,
    //         matricula: c.matricula,
    //         nome: c.nome,
    //         idEndereco: c.idEndereco,
    //         curso: c.curso
    //       };
    //     });

    //     // create a new "State" object without mutating 
    //     // the original State object.
    //     //console.log(alunos)
    //     //console.log(this)
        
    //     //console.log(alunos[0]);
    //     //this.
    //     this.state({columns: alunos});
    //     //this.state.se()
    //     //this.setData(alunos);
    //   })
    //   .catch(error => console.log(error));
  }

  handleCreate(newData) {
    axios
      .post("http://localhost:8080/TemplateWS/rest/ws/cadastraAluno", {
        "id": newData.id,
        "cpf": newData.cpf,
        "matricula": newData.matricula,
        "nome": newData.nome,
        "idEndereco": newData.idEndereco,
        "curso": newData.curso
      })
      .then(function (response) {
        console.log('salvo com sucesso')
      });
  }

  render() {
    return (
      [
        <Button id="aew" color="primary" onClick={() => this.handleClick()}>Consulta</Button>,
        <MaterialTable
          title="Gerenciamento de Alunos"
          columns={this.state.columns}
          data={this.state.data}
          editable={{
            onRowAdd: newData =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  this.handleCreate(newData)
                  this.setData([...this.state.data, newData]);

                  this.resolve();
                }, 1000)
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataUpdate = [...this.state.data];
                  const index = oldData.tableData.id;
                  dataUpdate[index] = newData;
                  this.setData([...dataUpdate]);

                  this.resolve();
                }, 1000)
              }),
            onRowDelete: oldData =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataDelete = [...this.state.data];
                  const index = oldData.tableData.id;
                  dataDelete.splice(index, 1);
                  this.setData([...dataDelete]);

                  this.resolve()
                }, 1000)
              }),
          }}
        />]
    )
  }
}