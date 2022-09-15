import SearchIcon from "@mui/icons-material/Search";

export const Busca = ({busca, buscaODA}) => {
    return(

        <div className = 'busca'>

          <span className="spanBusca">
            
            <SearchIcon className="iconBusca" />

            <input
              name= 'busca'
              type = 'text'
              value={busca}
              placeholder='O que deseja buscar'
              onChange={buscaODA}

            />
          
          </span>

        </div>
    )
    
    
}
