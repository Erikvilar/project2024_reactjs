
import { Card } from "./props";



function Box2 () {
    return (
      <section className="general-content" id="section-2">
        <h3>Conhecimentos</h3>
        <div className="second-content">
  
          <p className="note">Aqui estão alguns de meus conhecimentos mais utilizados hoje em dia no desenvolvimento, comecei a desenvolver estas tecnologias em 2018 e desde então venho aprimorando meus conhecimentos e me desafiando a sempre aprender mais para o mundo do desenvolvimento <b>WEB</b>.</p>
     
        </div>
        <div className="box-scrolling" >
          <div className="box-knowledges">
            <Card
              class="card"
              title="Java"
              text="Sendo uma das linguagens que mais tenho familiaridade, tive contato quando participei de uma maratona de programação na UFU e deste então venho desenvolvendo com ela, por ser uma linguagem verbal e tipada ela me preparou bem para conhecer outras linguagens como C# e C++ entre outras. Possuo pleno conhecimento de Java e suas funcionalidades sendo  que utilizo bastante no meu dia a dia."
              link="src/components/images/cards_main/card1.png"
  
            />
            <Card
              class="card"   
              title="SpringFramework"
              text="O framework spring foi um dos primeiros frameworks que tive contato, sendo ele o AngularJS e o ASP.NET, por ser baseado em JAVA EE aprendi rapidamente seus conceitos e suas funcionalidades no back-end, por ser muito robusto e ter uma dependência de segurança única, este framework foi o que mais trabalhei nesses anos tendo desenvolvido alguns dos projetos que irei mostrar abaixo."
              link="src/components/images/cards_main/card2.png"
  
            />
            <Card
              class="card"
              title="JavaScript"
              text="Essencialmente necessário para todo Desenvolvedor front-end o JavaScript me proporcionou um salto em conhecimento de renderização de páginas web, por ser de fácil aprendizado e muito maleável pode desenvolver até jogos com ele sendo Animations, é um jogo que imita o Pacman originalmente feito em assembly. Isso me abriu portas para o mundo do nodeJS"
              link="src/components/images/cards_main/card3.png"
            />
            <Card
              class="card"
              title="Node JS"
              text="O ambiente node entrou para minha caixinha de conhecimento quando tive que implementar aplicativo mobile com React, ele foi essencial para eu desenvolver a aplicação sendo o gerenciador NPM que particularmente é incrível e OpenSource. A iniciativa continua a abrir portas para mim, pois recentemente comecei a desenvolver uma API usando Express! "
              link="src/components/images/cards_main/card4.png"
            
            />
            <Card
              class="card"
              title="MySQL"
              text="Aprendi muitas formas de trabalhar com diversas tabelas e a co-relação delas no banco de dados, na faculdade atualmente estou desenvolvendo mais ainda meus conceitos de SQL me aprimorando cada vez mais, a API que construí usa o banco de dados SQL que para mim é realmente incrível."
              link="src/components/images/cards_main/card5.png"
          
            />
        
  
          </div>
        </div>
      </section>
    )
  };
  export default Box2;