import React from 'react'

export default function Noticia({noticia}) {
  const srcImagen = noticia.urlToImage ?  noticia.urlToImage : 'https://i.kinja-img.com/gawker-media/image/upload/s--4_Js8icQ--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/bwvsb0ubjhlr0cg0ry0h.jpg'
  const fecha = noticia.publishedAt.split("T")
  return (
    <div className="col-md-6">
        <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="card">
                <img src={srcImagen} className="card-img-top img-noticias img-fluid" alt={noticia.title} />
                <small className="text-muted">{fecha[0]}</small>
                <div className="card-body">
                    <h5 className="card-title">{noticia.title}</h5>
                    <p className="card-text">{noticia.description}</p>
                    <a href={noticia.url} className="btn btn-outline-dark btn-sm" target="_blank" rel="noopener noreferrer">
                      {noticia.source.name}
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}
