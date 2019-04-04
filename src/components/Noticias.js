import React from 'react'
import Noticia from './Noticia';

export default function Noticias({noticias}) {

  return (
    <div className="row mb-2">
        {
            noticias.map( (noticia, indice) => {
                return <Noticia key={indice} noticia={noticia} ></Noticia>                
            })
        }
        
    </div>
  )
}
