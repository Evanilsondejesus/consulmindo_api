
import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import Footer  from '@/components/foot'; 
import Card from '@/components/card';



 
 
 
export default function Promocao() {
  return (
    <>
      
<header className="azul_fraco border  border-end-0 border-bottom-1 border-top-0 border-1 border-start-0">
<h1 className="text-center">Promoção</h1>


</header>




<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Promoção</li>
  </ol>
</nav>



    
<div class="container-fluid ">
<div class="d-flex flex-wrap">
<span class="h2">Principais  destaque  <i class="bi bi-arrow-right"></i></span>

<Card        url="promocao"  quantidade={5} />
 </div>
</div>
   







<Footer/>








 
    </>
  )
}
