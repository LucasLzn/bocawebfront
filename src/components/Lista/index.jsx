export const Lista = ({key,nome,usuario,descricao,data_inclusao, palavras_chave, odas}) => {
    return(
      <div className="boxODAS">

        <div className="blockODAS">
        
          <div className='dadosODA' key={key}>
              <h1> nome: {nome} </h1>
              <p> usuário: {usuario} </p>
              <p> descrição: {descricao} </p>
              <p> data de inclusão: {data_inclusao} </p>
              <p> palavras chave: {palavras_chave} </p>
          </div>
        
        </div>

      </div>
    )
    
    
}




