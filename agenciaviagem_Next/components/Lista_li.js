import Link from 'next/link';
 
export default function Lista(props) {
  return (
    <>
      
<li class="nav-item"> 
<Link  className='nav-link  text-white ' href={props.link} >
{props.nome_link}
</Link>
</li>
 

 

 
    </>
  )
}
