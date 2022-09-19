import './App.css';
import {Component} from 'react';
import { Busca } from './components/Busca';
import { Lista } from './components/Lista';
import { Cabecalho } from './components/Cabecalho';
import { Rodape } from './components/Rodape';
import DocumentMeta from "react-document-meta";

class App extends Component{

  state = {

    busca: '',
    odas: []

  }

  componentDidMount(){
    this.carregaODAs();
  }

  carregaODAs(){
    const {busca} = this.state;
    fetch('https://www.bocaweb.com.br/apibocaweb?nome='+busca)
    .then(response => response.json())
    .then(odas => this.setState({odas}))
    console.log({busca})
  }

  buscaODA = (evento) => {
    this.setState({busca: evento.target.value});
    this.carregaODAs()
  }

  render(){

    const meta = {
      title: "BocaWebFront",
      description: "n/a ideais",
      meta: {
        charset: "utf-8",
        name: {
          viewport: "width=device-width, scale=1"
        }
      }
    };

    const {busca,odas} = this.state;
    return (

      <DocumentMeta {...meta}>
      
        <section className = "container">

          <Cabecalho />

          <Busca 
          
            busca={this.state.busca}
            buscaODA={this.buscaODA}

          />

          <div className = 'lista'> 
              <p className="lengthODAS"> {odas.length} odas </p>
              {odas.map(oda => (
                <Lista
                  key = {oda.id}
                  nome = {oda.nome} 
                  usuario = {oda.usuario} 
                  descricao = {oda.descricao} 
                  data_inclusao = {oda.data_inclusao}
                  palavras_chave = {oda.palavras_chave}
                />
              ))}
          </div>

          <Rodape />      
          

        </section>

      </DocumentMeta>

    )
  }
}

export default App;
