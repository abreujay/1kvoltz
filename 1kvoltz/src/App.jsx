import "./App.css";
import mainIcon from "../public/1k.png";
import mixIcon from '../public/mixer.gif'
import beatIcon from '../public/musica.gif'
import featIcon from '../public/feat.gif'
import visualIcon from '../public/visual.gif'
import budgetIcon from '../public/money.gif'
import ahcensionzIcon from '../public/logobenev.png'
import benevPic1 from '../public/benev.jpg'
import shopIcon from '../public/shop.gif'
import { useState, useEffect } from "react";


function App() {
  const [ano, setAno] = useState('');

  useEffect(() => {
    const dataAtual = new Date();

    if (dataAtual.getMonth() === 0 && dataAtual.getDate() === 1) {
      setAno((dataAtual.getFullYear() + 1).toString());
    } else {
      setAno(dataAtual.getFullYear().toString());
    }
  }, []);

  return (
    <div className="App">
      <header>
        <img src={mainIcon} alt="1kvoltz icon" />
        <nav>
          <div className="navlinks">
            <ul>
              <a href="mailto:1kvoltzmob@gmail.com">Contate-nos</a>
              <a href="https://www.instagram.com/1kvoltz/">Gram</a>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        <section>
          <div className="imageSquare">
            <div className="imageIntro"></div>
          </div>
        </section>
        <div className="services">
          <h1>Work With Us</h1>
        </div>
        <section>
          <div className="mix-master">
            <h4>Mixagem e Masterização</h4>
            <img src={mixIcon} alt="Mix icon" />
            <p>Qualidade e Autenticidade no seu vocal, com engenheiros de áudio experientes e os melhores plug-ins do mercado atual.</p>
          </div>
          <div className="beat">
            <h4>Produção de instrumental</h4>
            <img src={beatIcon} alt="Mix icon" />
            <p>Beats exclusivos ou licenciados de produtores renomados. Catálogo amplo. Encomendas disponíveis. Explore já!</p>
          </div>
          <div className="feat">
            <h4>Featuring</h4>
            <img src={featIcon} alt="Mix icon" />
            <p>Destaque-se com nossas vendas de feat! Colabore com artistas renomados, com mais de um milhão de streams combinados. Saiba mais agora!</p>
          </div>
          <div className="efx">
            <h4>VFX</h4>
            <img src={visualIcon} alt="Mix icon" />
            <p>Conheça nossos editores VFX, responsáveis por projetos de destaque para artistas referência na cena. Aperfeiçoe sua produção com especialistas reconhecidos.</p>
          </div>
        </section>
        <section>
          <div className="contract">
            <h2>Por que nos contratar?</h2>
            <p>Desde 2019, o coletivo musical 1Kvoltz tem sido o epicentro do submundo do Underground brasileiro. Com artistas excepcionais que desafiam as convenções, eles elevam a música a novos patamares de inovação e autenticidade. Cada membro é uma estrela única, fundindo criatividade e originalidade em uma sinfonia de expressão pura.</p>
          </div>
        </section>
        <section>
          <div className="knowus">
            <h2>Conheça-nos</h2>
              <div className="video">
              <iframe width="1280" height="720" src="https://www.youtube.com/embed/Du4hPQ4SguI" title="This Is 1k" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
          </div>
        </section>
        <section>
          <div className="budget">
            <h2>Orçamento</h2>
            <p>Faça seu orçamento através do nosso e-mail</p>
           <a href="mailto:1kvoltzmob@gmail.com"> <img src={budgetIcon} alt="E-mail" /> </a>
          </div>
        </section>
        <section>
          <div className="ahcensionz">
            <div className="logoAhcensionz">
              <img src={ahcensionzIcon} alt="ahcensionz Icon" />
            </div>
          </div>
          <div className="ahcensionz-about">
            <p>No turbilhão do universo streetwear, uma marca emergiu com um propósito único e uma estética inconfundível: Ascensionz. Fundada e gerenciada por Nicolas Benevides, um nome que ressoa tanto nas batidas da música quanto nas costuras das roupas, Ascensionz transcendeu o conceito de simplesmente vestir-se para se tornar uma expressão autêntica de estilo e identidade.</p>
          </div>
          <div className="ahcensionz-pic">
            <img src={benevPic1} alt="Instagram" />
            <a href="https://www.instagram.com/ahcensionz/"><img src={shopIcon} id="btnShop" alt="Shop Icon" /></a>
          </div>
        </section>
        <footer>
          <div className="footer-container">
            <h4>1kvoltz {ano}©</h4>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
