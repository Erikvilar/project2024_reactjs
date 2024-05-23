import React from "react";

const element = (str) => {
    return str;
}
function Header() {
    return (
        <header>
            <Navigator />
            <Hero />
        </header>

    )
};
export const Navigator = () => {
    return (
        <nav  className="top-nav">
        
            <input id="menu-toggle" type="checkbox" />
            <label className='menu-button-container' htmlFor="menu-toggle">
            <div className='menu-button'></div>
            </label>
            <ul className="menu">
                <li><a href="#menu" target="_self" >Menu</a></li>
                <li><a href="#section-1" target="_self" >Quem sou eu?</a></li>
                <li><a href="#section-2" target="_self" >Conhecimentos</a></li>
                <li><a href="#section-3" target="_self" >Projetos desenvolvidos</a></li>
                <li><a href="#section-4" target="_self" >Jogo desenvolvido</a></li>
   
              
             

               
            </ul>
        </nav>
    )
};
export const Hero = () => {
    return (
        <div className="hero" id="menu">
            <span id="datetime"></span>
            <h1>PORTIFOLIO 2024</h1>
            <p className="animated-hello">{element("<Seja_")}<span></span></p>
            <h2>Em busca de soluções para o futuro.</h2>
            <div className="quote">
                <span>"Às vezes são as pessoas que ninguém pode imaginar que fazem coisas que ninguém pode imaginar"</span>
                <span>Alan Turing</span>
            </div>
            <a className="link_button" href="#section-1"><button href="#section-1" className="button">Vamos começar</button></a>
        </div>
    )

};
export default Header   