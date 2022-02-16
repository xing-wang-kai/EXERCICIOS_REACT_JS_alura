import React, { Component } from "react";

class FormularioCadastro extends Component{
    render(){
        return(
            <section>
                <input id='texto' type="text" placeholder='tilulo'/>
                <textarea placeholder='imput your note'></textarea>
                <button>INSERT YOUR NOTE</button>
          </section>
        );
    }
}

export default FormularioCadastro;