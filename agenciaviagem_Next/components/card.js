import { useEffect , useState} from 'react';



 
export default function Card(props) {
const [pacotes, setPacotes] = useState([]);
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
    
 






/*                            ----->contratar pacote de usuario<-------                                      */







function Contratar(pacoteId) { 
 if(!(props.userId)) return alert("faça cadastro!!");

 
const dados = {
      idPacote: pacoteId,
      userId: props.userId
      
    };

   
    const configuracao = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dados),
    };

    // URL do seu endpoint
    const url = "http://localhost:8080/pacotes_user/"; // Substitua "123" pelo ID desejado

    // Enviar a solicitação
    fetch(url, configuracao)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Erro na solicitação: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log("Resposta do servidor:", data);
      
         
      })
      .catch(error => {
        console.error("Erro:", error);
        // Trate o erro conforme necessário
        alert("error "+ error)
      });
}












return(
  <>
 {pacotes.slice(0, quantidade).map((pacote, index) =>
  (
  
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
      <a href="#" className="btn btn-primary" onClick={ () => Contratar(pacote.id)}>CONTRATAR</a>
    </div>

  </div>

))

}
</>
)
}






