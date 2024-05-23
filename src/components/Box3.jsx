import { Card, Attribute } from "./props";
import { paragraph, alink, style_subtitle, style_subtitle_h3, note_paragraph } from "./InLineStyles";
function Box3() {
  return (
    <section className="general-content" id="section-3">
      <h3>Projetos desenvolvidos</h3>
      <div className="second-content">
        <p style={paragraph} className="note">
        Nesta seção gostaria de mostrar alguns projetos que desenvolvi este ano, no caso eu sempre gostei de desenvolver projetos fullStack eles são excelentes quando queremos lidar com problemas reais e além disso se desenvolve uma noção do comportamento de sistemas como lado cliente e lado servidor.
        </p>
      </div>
      <div className="second-content">
        <h4 style={style_subtitle}>REST API-JWT Security</h4>
        <p> A API foi construida em ambiente baseado em JAVA EE, contém diversas funcionalidades de segurança e autenticação do usuário que o  <i>String boot 3.2.5</i> oferece,
          neste sistema o usuário realiza seu login por meio de uma página em React e a depender da autenticação do usuário ele é direcionado para o sistema, no caso usuários com uma regra que está
          nomeada como <b>ADMIN</b> possui privilégios administrativos superiores do que os usuários que estão com a regra <b>USER</b>, esse processo ocorre no banco de dados onde um usuário <b>ADMIN</b>
          e inserido no banco de dados via SQL ou também no caso de testes usei o ThunderCliente para fazer as requisições, com um usuário <b>ADMIN</b> inserido a partir dele podemos fazer a inserção de outros usuários,
          usando um token retornado no <i>Header</i>, pegamos esse token relacionado ao <b>ADMIN</b> e adicionamos ao Bearer então fazemos a inserção de novos usuários.
        </p>
        <p>
        Além de funcionalidades de autenticação, esse serviço prove cadastro de produtos onde por meio de um JSON dados são inseridos na tabela, é possível registrar neste banco o seguinte template JSON.
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
          [ http://localhost:3308/api/auth/registers ] é possível visualizar todos usuários já cadastrados, para ver
          produtos cadastrados basta acessar a rota pelo método GET [ http://localhost:3308/api/product/return]
          esta rota retorna todos os itens no banco de dados e assim por diante no total até o momento atual dessa versão do
          serviço ele possui 13 rotas que podem ser usadas, O gerenciador de banco de dados que estou usando e o Workbench e
          para poder usar deve se acessar o <i>application.properties</i> e mudar parâmetros que descrevo na documentação completa deste projeto, abaixo a algumas imagens descrevendo melhor este projeto.</p>
      </div>
      <div className="box-project">
        <div className="box-projects">
          <Card
            class="project"
            title="Front-End"
            link="src/components/images/img_pages/project1Front.jpg"

          />
          <Card
            class="project"
            title="Back-End"
            link="src/components/images/img_pages/project1back.png"

          />
          <Card
            class="project"
            title="Database"
            link="src/components/images/img_pages/project1Database.jpg"

          />
        </div>
        <p style={note_paragraph}>Note que no banco de dados a senha do usuário e criptografada em HMAC256 e o ID do usuário está como UUID único, isso garante segurança e na hora de autenticar caso o HASH seja o mesmo do banco e concedido o token ao usuário e seus acesso ao sistema, para mais informações sobre este projeto ele pode ser encontrado no meu <a style={alink} target="_blank" href="https://github.com/Erikvilar/API-LTAD">Github</a>.</p>
      </div>

      <div className="second-content">
        <h4 style={style_subtitle}>API ORM - Anime Friends</h4>
        <p>Sendo mais básica do que a API com JWT este projeto também desenvolvido em Spring Boot possui semelhantes com outros projetos sendo este um CRUD mais "Básico", mostrada porém com sutis diferenças como, inserção de link e imagens no banco de dados, por meio de uma request POST é enviado um link de imagem remota e quando o GET e realizado a imagem e indexada ao corpo da página juntamente com um estilo CSS3 semelhante a muitas API de visualização de imagens, além disso é possível alterar o layout conforme o usuário desejar.</p>
        <p>O estilo e design deste site projetei no Photoshop juntamente ao canvas trazendo uma melhor comodidade ao usuário desse serviço. Abaixo confira algumas imagens sobre este projeto.</p>
      </div>
      <div className="box-project">
        <div className="box-projects">
          <Card
            class="project"
            title="Front-End"
            link="src/components/images/img_pages/project2-1.jpg"

          />
          <Card
            class="project"
            title="Front-End"
            link="src/components/images/img_pages/project2-2.jpg"

          />
          <Card
            class="project"
            title="Back-End"
            link="src/components/images/img_pages/project2-3.jpg"

          />
          <Card
            class="project"
            title="Database"
            link="src/components/images/img_pages/project2-4.jpg"

          />
        </div>
        <p style={note_paragraph}>Neste banco de dados é possível visualizar um grande número de registros feitos via POST pelo front-end, e na terceira coluna onde tem o nome de <i>Icon</i> é possível ver os links remotos que serão indexados na página ao serem chamados, uma outra solução de indexação de imagem que pode ser usado e o LONGBLOB que e um tipo do SQL que suporta imagens. Veja mais sobre este projeto neste link<a style={alink} target="_blank" href="https://github.com/Erikvilar/API-LTAD">Github</a>.</p>
      </div>
      <div className="second-content">
        <h4 style={style_subtitle} >Consult Movies - Java</h4>
        <p>Este projeto fiz ele pela curiosidade de entender como o Java se comporta quando se usa orientação a objeto e condicionais para fazer registros em um TXT que é o caso neste projeto, sobre o que hipoteticamente este projeto faz e registrar um usuario com UUID único nome e CPF, a partir desses dados o cliente entra no sistema podendo ver as seções de filmes ativas e pode escolher e pagar, implementei um sistema de wallet neste projeto onde o cliente começa com um valor e conforme pagar pelos produtos dentro do serviço e registrado no sistema como na imagem-2 mostra, é possível fazer avaliação sobre o filme assistido, deletar a conta, criar uma nova, e pagar pelo filme após o filme ser escolhido. </p>

      </div>
      <div className="box-project">
        <div className="box-projects">
          <Card
            class="project"
            title="Code View"
            link="src/components/images/img_pages/project3.jpg"

          />
          <Card
            class="project"
            title="Code View"
            link="src/components/images/img_pages/project3-1.jpg"

          />

        </div>
      </div>

      <div className="second-content" id="section-4">
        <h3 style={style_subtitle_h3}>Jogo Desenvolvido</h3>
        <p c  lassName="note">Nesta seção irei apresentar brevemente este game desenvolvido em JS, para desenvolvê-lo tive como base um projeto em <i>Python</i> já que mesmo procurando na internet não encontrei a versão original desenvolvida na linguagem <i>Assembly</i> mas mesmo assim pude desenvolver 70% do jogo original, abaixo falo um pouco de como foi desenvolvido.</p>
        <h4 style={style_subtitle}>Pacman em JS</h4>
        <p>Este jogo para qualquer pessoa é bastante desafiador por envolver conceitos de bits sendo representados em <i>blocksize</i>, cada bloco dentro do canvas corresponde a um bit, sabendo deste conceito é possível construir absolutamente qualquer jogo dos anos 80 e 90 no JS.</p>
        <div className="gamebox">
          <Card
            class="game"
            title="Game"
            link="src/components/images/img_pages/pacman1-1.jpg"
          />
          <Card
            class="game"
            title="Game"
            link="src/components/images/img_pages/pacman1-2.jpg"
          />
          <Card
            class="game"
            title="Game"
            link="src/components/images/img_pages/pacman1-3.jpg"
          />
          <Card
            class="game"
            title="Game"
            link="src/components/images/img_pages/pacman1-4.jpg"
          />
        </div>
        <p>Primeiramente para construir precisamos primeiro fazer o canvas ou seja desenhar bit a bit o campo onde o jogo ocorre (foi extremamente complexa essa parte) em seguida por meio do canvas fill.rect fazemos o preenchimento do blocos dando cor ao campo e o mesmo conceito é usado para os <i>Foods</i> presentes no campo, após isso definimos intervalos para o jogo acontecer como, iniciar, pausar, e reiniciar, tudo feito com <i>set.interval, clear.interval e set.timeout.</i></p>
        <div className="gamebox">
          <Card

            class="game"
            title="Game"
            link="src/components/images/img_pages/pacmanSchema.jpg"
          />
          <Card

            class="game"
            title="Game"
            link="src/components/images/img_pages/pacmanSchema1.jpg"
          />
          <Card

            class="game"
            title="Game"
            link="src/components/images/img_pages/pacmanSchema2.jpg"
          />
        </div>
        <p>A parede ou seja as walls são esquematizadas em bits correspondentes entre (0 e 1) o 0 indica passagem livre e o 1 indica que a uma box impedindo a passagem, dessa forma e possivel criar um canvas para este jogo como no exemplo acima. Já as animações do pacman e os ghosts são feitos por recortes chamada de keys, e animadas com a propriedade do JS chamada AnimationFrame (CanvasContext), claro existe bem mais conceitos visto que uma parte avançada na linguagem JS.</p>
        <p>Apos isso a inteligência dos ghosts é baseada na posição do pacman, no caso se o pacman estiver no bloco 2 na horizontal e no 2 na vertical o ghost possui uma função chamada fila (queue) que muda conforme o pacman se move pelo campo. Alguns conceitos que apliquei usei da lógica da ideia original do criador onde varias condicionais e postas para melhorar mais ainda a inteligência dos ghosts e finalmente a captura do pacman, infelizmente um sistema de leveling não foi possível implementar pela complexidade do projeto, é possível ver mais no meu portfólio deste projeto <a style={alink}  href="">Github</a></p>

        <h3 style={style_subtitle_h3}>Finalização</h3>
        <p>Este foi meu portfólio espero que tenham gostado, caso dúvidas ou sugestões me contatem, gostei muito de desenvolver esse portfólio o conhecimento que objetive por meio deste projeto foi imenso assim como outros projetos que desenvolvi, espero poder criar mais projetos complexos e desafiadores, lembrando este portfólio foi feito inteiramente em <b>React,CSS3,SWC,HTML5</b> sendo totalmente disponível em dispositivos móveis nos mais variados tipos de tela tanto portrait e landscape, testem!</p>
        <a className="link_button" href="#menu"><button href="#menu" className="button">Voltar ao topo</button></a>
      </div>
    </section>
  )
};
export default Box3;

