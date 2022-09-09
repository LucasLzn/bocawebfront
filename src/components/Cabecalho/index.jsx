import logobocaweb from '../../logobocaweb.png';
export const Cabecalho = () => {

    return(
        <header>

                <div className="logo">		
					<img  src={logobocaweb} alt="logo do bocaweb"/>
	    	    </div>     
            
                <div className="nomedosite flex"> 
                
                    <h2> BOCA WEB FRONT </h2> 
            
                </div>
        </header>
    )
    
    
}