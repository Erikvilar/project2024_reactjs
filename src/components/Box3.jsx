import { Card,Attribute } from "./props";
import { paragraph, alink, style_subtitle,style_subtitle_h3 } from "./InLineStyles";
function Box3 () {
    return (
      <section className="general-content" id="section-3">
        <h3>Projetos desenvolvidos</h3>
        <div className="second-content">
          <p style={paragraph} className="note2">
            Nesta seção gostaria de mostrar alguns projetos que desenvolvi este ano, no caso eu sempre gostei de desenvolver projetos fullStack eles são excelente quando queremos lidar com problemas reais e além disso se desenvolve uma noção do comportamento de sistemas como lado cliente e lado servidor.
          </p>
        </div>
        <div className="second-content">
          <h4 style={style_subtitle}>API - JWT Security</h4>
          <p>Está API foi construida em ambiente baseado em JAVA EE, contem diversas funcionalidades de segurança e autenticação do usuario que o  <i>String boot 3.2.5</i> oferece,
            neste sistema o usuario realiza seu login por meio de uma pagina em React e a depender da autenticação do usuario ele e direcionado para o sistema, no caso usuarios com uma regra que esta
            nomeada como <b>ADMIN</b> possui privilegios administrativos superiores do que os usuarios que estão com a regra <b>USER</b>, esse processo ocorre no banco de dados onde um usuario <b>ADMIN</b>
            e inserido no banco de dados via SQL ou também no caso de testes usei o ThunderCliente para fazer as requisições, com um usuario <b>ADMIN</b> inserido a partir dele podemos fazer a inserção de outros usuarios,
            usando um token retornado no <i>Header</i>, pegamos esse token relacionado ao <b>ADMIN</b> e adicionamos ao Bearer então fazemos a inserção de novos usuarios.
          </p>
          <p>
            Além de funcionalidades de autenticação, esse serviço prove cadastro de produtos onde por meio de um JSON dados são inseridos na tabela, e possivel registrar neste banco o seguinte template JSON.
          </p>
          <div className="contentJsonBox">
            <div className="contentJson">
              <h4>Tabela Produtos</h4>
              <Attribute
                item="ID: "
                attribute=" '1',"
              />
              <Attribute
                item="name_item: "
                attribute="'produto1',"
              />
              <Attribute
                item="exists_item: "
                attribute="'Não',"
              />
              <Attribute
                item="image_item: "
                attribute="'./prod.png',"
              />
              <Attribute
                item="type_item: "
                attribute="'C',"
              />
              <Attribute
                item="condition_item: "
                attribute="'Usado',"
              />
              <Attribute
                item="code_item: "
                attribute="'479462823',"
              />
              <Attribute
                item="description_item: "
                attribute="'Produto 15',"
              />
            </div>
  
            <div className="contentJson">
              <h4>Tabela Usuarios</h4>
              <Attribute
                item="ID:"
                attribute="'28fd-a6fa-4dd4-9529-e60a5f'"
              />
              <Attribute
                item="login:"
                attribute="'UserAdmin'"
              />
              <Attribute
                item="password:"
                attribute="'123456789'"
              />
              <Attribute
                item="role:"
                attribute="'ADMIN' / 'USER'"
              />
            </div>
  
  
          </div>
  
  
  
      <p>Por meio desse JSON enviado em um request GET em uma das rotas dessa API no caso da: 
        [ http://localhost:3308/api/auth/registers ] e possivel visualizar todos usuarios já cadastrados, para ver 
        produtos cadastrados basta acessar a rota pelo metodo GET [ http://localhost:3308/api/product/return] 
        esta rota retorna todos os itens no banco de dados e assim por diante no total até o momento atual dessa versão do 
        serviço ele possui 13 rotas que podem ser usadas, O gerenciador de banco de dados que estou usando e o Workbench e
         para poder usar deve se acessar o <i>application.properties</i> e mudar parametros que descrevo na documentação completa deste projeto,  para mais informações sobre este projeto ele pode ser encontrado no meu <a style={alink} target="_blank" href="https://github.com/Erikvilar/API-LTAD">Github</a>.</p>
        </div>
        <div className="box-scrolling">
          <div className="box-knowledges">
            <Card
              class="project"
              title="Front-End"
              link="src/assets/images/img_pages/project1Front.jpg"
  
            />
            <Card
              class="project"
              title="Back-End"
              link="src/assets/images/img_pages/project1BackEnd.png"
  
            />
            <Card
              class="project"
              title="Database"
              link="src/assets/images/img_pages/project1Database.jpg"
  
            />
          </div>
        </div>
        <div className="second-content">
          <h4 style={style_subtitle}>API - ORM Hibernate</h4>
          <p>Já faz alguns anos desde que venho desenvolvendo sistemas para WEB comecei por volta de 2018 com simples
            scripts e pequenos projetos em Javascript e cada projeto que construo ganho mais dominio na linguagem e na
            forma de escrever seguindo as boas praticas de um bom web-site.</p>
  
        </div>
        <div className="box-scrolling">
          <div className="box-knowledges">
            <Card
              class="project"
              title="Front-End"
              link="src/assets/images/img_pages/project2-1.jpg"
  
            />
            <Card
              class="project"
              title="Front-End"
              link="src/assets/images/img_pages/project2-2.jpg"
  
            />
            <Card
              class="project"
              title="Back-End"
              link="src/assets/images/img_pages/project2-3.jpg"
  
            />
            <Card
              class="project"
              title="Database"
              link="src/assets/images/img_pages/project2-4.jpg"
  
            />
          </div>
        </div>
        <div className="second-content">
          <h4 style={style_subtitle} >Projeto Java - OOP simples</h4>
          <p>Já faz alguns anos desde que venho desenvolvendo sistemas para WEB comecei por volta de 2018 com simples
            scripts e pequenos projetos em Javascript e cada projeto que construo ganho mais dominio na linguagem e na
            forma de escrever seguindo as boas praticas de um bom web-site.</p>
  
        </div>
        <div className="box-scrolling">
          <div className="box-knowledges">
            <Card
              class="project"
              title="Front-End"
              link="src/assets/images/img_pages/project3.jpg"
  
            />
  
          </div>
        </div>
        <div className="second-content">
          <h3 style={style_subtitle_h3}>Jogos Desenvolvidos</h3>
          <h4 style={style_subtitle}>Pacman em JS</h4>
          <p>Já faz alguns anos desde que venho desenvolvendo sistemas para WEB comecei por volta de 2018 com simples
            scripts e pequenos projetos em Javascript e cada projeto que construo ganho mais dominio na linguagem e na
            forma de escrever seguindo as boas praticas de um bom web-site.</p>
  
        </div>
      </section>
    )
  };
  export default Box3;
  
