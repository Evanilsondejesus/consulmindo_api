
import 'bootstrap/dist/css/bootstrap.css';
import Footer  from '@/components/foot'; 
import Card from '@/components/card';
import { useAutenticacao } from '@/conexao/autenticacaUser';
import { useEffect } from 'react';
 
 
 
 
export default function Contratado() {
const { userId, logado } = useAutenticacao();

 
  useEffect(() => { 
  
  
    import('bootstrap/dist/js/bootstrap').then(() => {
    }).catch((error) => {
    console.error('Erro ao carregar o Bootstrap:', error);
    });
   
    }, []);
  
   



  return (
    <>
      
<header className="azul_fraco border  border-end-0 border-bottom-1 border-top-0 border-1 border-start-0">
<h1 className="text-center">Pacotes contratado</h1>


</header>




<nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><a href="/">Home</a></li>
    <li className="breadcrumb-item active" aria-current="page">Contratados</li>
  </ol>
</nav>
 


{userId != null &&
<div className="container-fluid ">
<div className="d-flex flex-wrap">
<Card    url={"pacotes_user/"+ userId}    userId={userId}      />
</div>
</div>
}



{userId ==null &&
 <h2 className='text-center'>Faça o login ou cadastre!!</h2>
}


 


<Footer/>

 
    </>
  )
}
