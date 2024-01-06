import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';



 
export default function Card(props) {
  return (
    <>
  <div className="card" style={{ width: '18rem' }} >
  <img src={props.img}  className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.destino}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary w-100">ver</a>
  </div>
</div>





 



 
    </>
  )
}
