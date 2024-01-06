import 'bootstrap/dist/css/bootstrap.css'; 
import Cards from "@/components/card_simples";
import Footer  from '@/components/foot';



export default function Destino() {
{/*
Principal objetivo dessa pagina é o cliente ter mais conecimento do lugar pra onde vai viaja, por meio de fotos



*/}

 


return (
    <> 
 
 <header class="azul_fraco"> 
<h1 class="text-center">Destino</h1>
</header>




<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="/">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Destino</li>
  </ol>
</nav>






<div className="border border-1 border-black bg-primary-subtle text-center p-1">

Escolhar seu destino e veja fotos


</div>


<select name="" id="" class="w-100 text-center">


<option value="" class="bg-success border border-1 m-1 bg-success-subtle">
 
EUA
 </option>

<option value="">BRASIL</option>

<option value="">EUA</option>

</select>




<div class="container-fluid  azul_fraco">
 

<figure class="figure mx-auto d-block">
  
 <figcaption class="figure-captionrounded w-25 mx-auto d-block">EUA</figcaption>
<img src="img/eua.jpg" class="figure-img img-fluid rounded w-25 mx-auto d-block" alt="..."/>
  </figure>



<div class="d-flex  p-2 bg-danger-subtle overflow-scroll ">
 
<img src="img/eua_1.jpg" class="rounded  d-block w-25 me-3" alt="..."/>

<img src="img/eua_2.jpg" class="rounded  d-block w-25 me-3" alt="..."/>

<img src="img/eua_3.jpg" class="rounded  d-block w-25 me-3" alt="..."/>
 

<img src="img/eua_4.jpg" class="rounded  d-block w-25 me-3" alt="..."/>
 
<img src="havai.jpg" class="rounded  d-block w-25" alt="..."/>
 
</div>





<a href="#" class="btn btn-primary w-100">CONTRATAR PACOTE</a>
</div>













<div class=" mt-4 overflow-scroll ">
<h2>Veja outros fotos de outros lugares</h2>
  <div class="container-fluid  d-flex overflow-scroll flex-wrap">
 <Cards destino="Recife"   img="img/Recife.jpg" />
 <Cards destino="Bahia"   img="img/Bahia.jpg" /> 
 <Cards destino="Hawai"   img="img/Hawai.jpg" /> 
</div>
 
</div>



<Footer/>














 
 
    </>
  )
}
