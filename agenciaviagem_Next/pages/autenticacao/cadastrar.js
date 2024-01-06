import 'bootstrap/dist/css/bootstrap.css';
import Footer  from '@/components/foot';
import { useState } from 'react';
import { auth, createUserWithEmailAndPassword } from '@/conexao/firebaseConfig';
import { useRouter } from 'next/router';


export default function Cadastrar() {

  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');
  const router = useRouter();
  const [Loading, setLoading] = useState(false);
 


const criarContar = async (e) => {
  setLoading(true);



e.preventDefault();
try {
 await createUserWithEmailAndPassword(auth, email, senha);
//alert("Conta criada com sucesso!!");
router.push('/');
} catch (error) {
  setLoading(false);

//alert("Houver um error ap criar conta")
}
         
};
    







return (
<> 

<header class="azul_fraco"> 
<h1 class="text-center">Cadastrar</h1>
<title>Cadastrar</title>
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
<img src="/FreeSpirit.svg" class="mx-auto d-block w-25" alt="..."/>
        
</div> 
<a  className="btn  btn-primary mx-auto" href='/autenticacao'>LOGIN</a>
 
 


 
<div class="modal-body">
<form   onSubmit={criarContar} >

<div class="mb-3">
  <label for="recipient-name" className="col-form-label">Email:</label>
  <input type="email"  onChange={(e) => setEmail(e.target.value)}            name="email" placeholder="seu email..." className="form-control" id="recipient-name" required />
           

    </div>
    <div class="mb-3">
    <label for="message-text" className="col-form-label">Senha:</label>
    <input type="password"  onChange={(e) => setSenha(e.target.value)}       name="senha" placeholder="sua senha..." class="form-control" id="recipient-name" required />
           

            </div>
            <button type="submit"   className="btn btn-info w-100" >CADASTRAR</button>
         
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