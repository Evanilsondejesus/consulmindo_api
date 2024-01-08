import { useEffect , useState} from 'react';
import { Contratar, Remover } from './configCard';

 


 /*    ----->contratar pacote vindo do servidor<-------    */
export default function Card(props) {
 

const [pacotes, setPacotes] = useState([]);
//const [atual, setAtual] = useState(false);

const quantidade = props.quantidade; //repeticão do elemento
  

useEffect(() => {

  
const fetchData = async () => {
const data = await fetchPacotes();
setPacotes(data); 
quantidade == false? data.length: quantidade;
  
};
    
fetchData();
}, []);  


  async function fetchPacotes() {
  const response = await fetch(`http://localhost:8080/`+props.url);
  const data = await response.json();
  return data;
  }
    
 

















 

 

 


return(
  <>
 {pacotes.slice(0, quantidade).map((pacote, index) =>(
  
  <div className="card me-1" style={{ width: '18rem' }}  key={index}>

  <img src={pacote.img} className="card-img-top" alt="..." />
  <div className="card-body">
  <h5 className="card-title">{pacote.destino}</h5>
  </div>

   <ul className="list-group list-group-flush">
   <li className="list-group-item"><i className="bi bi-airplane"> 3 novembro </i></li>
   <li className="list-group-item"><i className="bi bi-people-fill"></i> acompanhante</li>
   <li className="list-group-item"><i className="bi bi-eye-fill"></i>: <a href="#"> ver </a></li>
   </ul>


  

<div className="card-body">
<a href="#" className={props.url == "pacotes"|| props.url == "promocao"   ?"btn btn-primary": "btn btn-danger"} 
 onClick={ () => {props.url == "pacotes" ||  props.url == "promocao"  ?  Contratar(props, pacote.id):   Remover(props, pacote.id)  }                             }
 > {props.url ==  "pacotes" ||  props.url == "promocao"  ?"CONTRATAR": "REMOVER" }       </a>
</div>

 
 
</div>

))

}
</>
)
}






