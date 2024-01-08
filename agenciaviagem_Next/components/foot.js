

import { signOut } from "firebase/auth";
import { useAutenticacao } from '@/conexao/autenticacaUser';
import { auth} from '@/conexao/firebaseConfig';



export default function Footer(props) {
  const { logado } = useAutenticacao();






const deslogar = async () => {
 try {
      await signOut(auth);
     // alert("Deslogado com sucesso!");
      window.location.reload();
    } catch (error) {
      console.error('Erro ao deslogar:', error.message);
      alert(error.message)
    }
  };














    return (
      <>
         
<footer class="container-fluid  azul_fraco text-light  text-center w-100 ">

<div class="w-50 m-auto">
  Free<span class="text-danger">Spirit</span><br/>
  
  "Free to fly"<br/>


  


</div>
  

{logado &&
  <a href='#' className='w-100 btn bg-black text-white'    onClick={deslogar}        >SAIR</a>
  


}


</footer>

  
   
  
   
      </>
    )
  }