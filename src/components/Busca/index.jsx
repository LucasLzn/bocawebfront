export const Busca = ({busca, buscaODA}) => {
    return(

        <div className = 'busca'>

          <input
            name= 'busca'
            type = 'text'
            value={busca}
            placeholder='O que deseja buscar'
            onChange={buscaODA}

          />
        </div>
    )
    
    
}