import 'bootstrap/dist/css/bootstrap.css';
import Footer  from '@/components/foot';
import { auth } from '@/conexao/firebaseConfig';
import { useState } from 'react';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/router';



export default function autenticacao() {
const [senha, setSenha] = useState('');
const [email, setEmail] = useState('');
const router = useRouter();
const [Loading, setLoading] = useState(false);
 

const login = async (e) => {
setLoading(true);


  e.preventDefault();
  try {
    await signInWithEmailAndPassword(auth, email, senha);
    //alert("Login bem-sucedido!");
     
    router.push('/');
  } catch (error) {
    console.error('Erro ao fazer login:', error.message);
    alert("Houve um erro ao fazer login");
    setLoading(false);


  }
};











return (
<> 




<header class="azul_fraco"> 
<h1 class="text-center">Login</h1>
<title>Login</title>
</header>




<nav aria-label="breadcrumb">
<ol class="breadcrumb">
<li class="breadcrumb-item"><a href="/">Home</a></li>
<li class="breadcrumb-item active" aria-current="page">Autenticacao</li>
</ol>
</nav>

{Loading &&
<div className="text-center">
<div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
</div>



}




 
 
<div class="modal-content w-50 mx-auto" >
<div class="modal-header">
<img src="img/FreeSpirit.svg" class="mx-auto d-block w-25" alt="..."/>
        
</div> 
<a  className="btn  btn-primary mx-auto" href='/autenticacao/cadastrar'    >CADASTRAR</a>
 
 


 
<div class="modal-body">
<form  onSubmit={login} >
<div class="mb-3">
<label for="recipient-name" class="col-form-label">Email:</label>
<input type="email" name="email" placeholder="seu email..." onChange={(e) => setEmail(e.target.value)}            className="form-control" id="recipient-name" required />





</div>
<div class="mb-3">
<label for="message-text" className="col-form-label">Senha:</label>
<input type="password" onChange={(e) => setSenha(e.target.value)}           name="senha" placeholder="seu senha..." class="form-control" id="recipient-name" required />
</div>
<button type="submit"   class="btn btn-info w-100" >ENTRAR</button>
</form>
</div>
<div class="modal-footer"  >
<button type="button" className="btn  btn-primary me-3"    data-bs-dismiss="modal">Facebook</button>
<button type="button" className="btn btn-danger"  >Google</button>
</div>
</div>
    
   

<Footer/>






</>)



}