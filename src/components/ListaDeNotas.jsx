import React, { Component } from "react";
import NoteCards from "./CardNota";

class ListaDeNotas extends Component{
    render(){
        return(
            <section>
            <ul>
                  {Array.of("work", "work", "study").map( item => {
                      return(
                        <li>
                          <h1>{item}</h1>
                        <NoteCards/>
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