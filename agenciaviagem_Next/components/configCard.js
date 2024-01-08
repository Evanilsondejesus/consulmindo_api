import { useRouter } from 'next/router';



export function Contratar(props, pacoteId) {
  

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
       window.location.reload();
      
      
         
      })
      .catch(error => {
        console.error("Erro:", error);
       
        alert("error "+ error)
      });
}












export function Remover(props, pacoteId) {
 
   if (!props.userId) return alert("Faça o cadastro!!");

  const configuracao = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };


  const url = `http://localhost:8080/pacotes_user/${pacoteId}`;

  fetch(url, configuracao)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Erro na solicitação: ${response.status}`);
      }
      console.log("Exclusão bem-sucedida!");
    window.location.reload();
      // Lógica adicional após a exclusão, se necessário

       
    })
    .catch(error => {
      console.error("Erro:", error);
      alert("Erro " + error);
    });
}


















    
  







































 
  