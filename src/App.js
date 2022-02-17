import React from 'react';
import FormularioCadastro from './components/formularioCadastro/formularioCadastro';
import ListaDeNotas from './components/ListadeNotas/ListaDeNotas';
import './assets/App.css';
import './assets/index.css'
import { Component } from 'react';


class App extends Component {

  constructor(){
    super();
    this.state ={
      notas:[]
    }
  }
  createNote(titulo, texto){
    const novaNota = {titulo, texto};
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novostatus = {
      notas :novoArrayNotas
    }
    this.setState(novostatus)
  
  }
  render(){
    
    return (
      <section className='conteudo'>
            <FormularioCadastro createNote={this.createNote.bind(this)}/>
            <ListaDeNotas notas={this.state.notas}/>
      </section>
      
    );
  }
}

export default App;
