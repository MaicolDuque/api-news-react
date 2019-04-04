import React, { Component } from 'react'
import Header from './Header';
import Noticias from './Noticias';
import Footer from './Footer';
import "./Main.css"
import  {API_URL, API_COUNTRY, API_KEY} from "../config"

export default class Main extends Component {

  state = {
    articulos: []
  }

  componentDidMount() {
    this.getNoticias("general")
    
  }

  getNoticias = (categoria = "general") => {
  
    const URL = `${API_URL}?country=${API_COUNTRY}&category=${categoria}&apikey=${API_KEY}`

    fetch(URL)
    .then(res => res.json())
    .then(data => this.setState({articulos: data.articles }))
    .catch(error => console.log(error))    
    
  }

  render() {
    return (
        <React.Fragment>
            <div className="container">
                <Header getNoticias={this.getNoticias}></Header>
                <Noticias noticias={this.state.articulos}></Noticias>
                <Footer></Footer>                
            </div>
        </React.Fragment>
    )
  }
}
