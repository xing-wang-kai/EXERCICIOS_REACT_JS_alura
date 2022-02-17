import React, { Component } from "react";
import "./formularioCadastro.css"

class FormularioCadastro extends Component{

    constructor(props){
        super(props);
        this.titulo = "";
        this.texto = " ";
    }

    _handleTakeTitle(evento){
        evento.stopPropagation();
        this.titulo = evento.target.value
    }
    _handleTakeText(evento){
        evento.stopPropagation();
        this.texto = evento.target.value
    }
    
    _createNote(evento){
        evento.preventDefault();
        evento.stopPropagation();
        this.props.createNote(this.titulo, this.texto);
        
    }

    render(){
        return(
            <section >
                <form 
                onSubmit={this._createNote.bind(this)}
                className="form-cadastro">
                    <input 
                    
                    id='texto' 
                    type="text" 
                    placeholder='tilulo' 
                    className="form-cadastro_input"
                    onChange={this._handleTakeTitle.bind(this)}
                    />
                    <textarea 
                    onChange={this._handleTakeText.bind(this)}
                    rows={15}
                    placeholder='imput your note'
                    className="form-cadastro_input"
                    />
                    <button
                    
                    className="form-cadastro_inut form-cadastro_submit"
                    >INSERT YOUR NOTE</button>
                </form>
                
          </section>
        );
    }
}

export default FormularioCadastro;