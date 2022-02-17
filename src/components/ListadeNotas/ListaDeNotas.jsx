import React, { Component } from "react";
import NoteCards from "../cardNota/CardNota";
import './ListaNotas.css'

class ListaDeNotas extends Component{
    render(){
        return(
            <section>
            <ul className="lista-notas">
                  {this.props.notas.map( (nota, index) => {
                      return(
                        <li className="lista-notas_item" key={index}>
                          <h1>CARDNOTAS</h1>
                        <NoteCards titulo={nota.titulo} texto={nota.texto}/>
                      </li>
                      );
                    }
                  )
                }
           </ul>
           </section>

        );
    }
}

export default  ListaDeNotas;