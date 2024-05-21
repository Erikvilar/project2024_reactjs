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
        <nav className="top-nav">
            <div className='menu-button'></div>
            <label className='menu-button-container' htmlFor="menu-toggle">
                <input id="menu-toggle" type="checkbox" />
            </label>
            <ul className="menu">
                <li><a href="#section-1" target="_self" >About me</a></li>
                <li><a href="#section-2" target="_self" >Conhecimentos</a></li>
                <li><a href="#section-3" target="_self" >Projetos Games</a></li>

                <li>Four</li>
                <li>Five</li>
            </ul>
        </nav>
    )
};
export const Hero = () => {
    return (
        <div className="hero">
            <span id="datetime"></span>
            <h1>PORTIFOLIO 2024</h1>
            <p className="animated-hello">{element("<Seja ")}<span></span></p>
            <h2>Em busca de soluções para o futuro.</h2>
            <div className="quote">
                <span>"Às vezes são as pessoas que ninguém pode imaginar que fazem coisas que ninguém pode imaginar"</span>
                <span>Alan Turing</span>
            </div>
            <a className="link_button" href="#section-1"><button href="#section-1" className="button">Vamos começar</button></a>
        </div>
    )

}
export default Header   