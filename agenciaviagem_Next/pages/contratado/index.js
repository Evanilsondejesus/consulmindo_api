
import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import Footer  from '@/components/foot'; 
import Card from '@/components/card';

import { useEffect , useState} from 'react';
import { auth} from '@/conexao/firebaseConfig';

 
 
 
export default function Contratado() {
  const [userId, setUserId] = useState(null);

  const [user, setUser] = useState(false);




 
  useEffect(() => { 


    const unsubscribe = auth.onAuthStateChanged((user) => {
    if (user) {
    
    setUserId(user.uid)
    setUser(true)
    
 
    } else {
      
    }
    });
     
    
     import('bootstrap/dist/js/bootstrap').then(() => {
    }).catch((error) => {
    console.error('Erro ao carregar o Bootstrap:', error);
    });
    return () => unsubscribe();
    }, []);
    












  return (
    <>
      
<header className="azul_fraco border  border-end-0 border-bottom-1 border-top-0 border-1 border-start-0">
<h1 className="text-center">Pacotes contratado</h1>


</header>




<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Contratados</li>
  </ol>
</nav>



   



{userId != null &&
<div class="container-fluid ">
<div class="d-flex flex-wrap">
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
