import React from "react";
import "./Home.css";
import Product from "./Product" 

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://m.media-amazon.com/images/I/61vZERy-AeL._SX3740_.jpg"
          alt="background amazon"
        />
        <div className="home_row">
          <Product 
          id="78545122"
          title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses" 
          price={59.90} 
          image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
          rating={2} 
          />
          <Product 
           id="23454678"
           title="Relógio Xiaomi Amazfit GTS 2 mini A2018, preto " 
           price={73.49} 
           image='https://m.media-amazon.com/images/I/61dHtJrlcOL._AC_SY355_.jpg'
           rating={4} 
          />
           <Product 
          id="78545122"
          title="Hidratante Desodorante NIVEA Milk 400ml, Nivea " 
          price={5.99} 
          image='https://m.media-amazon.com/images/I/41sdpt0ns5S._AC_SX425_.jpg'
          rating={2} 
          />
          
        </div>

        <div className="home_row">
        <Product 
        id="123123124"
        title="
        The Last Wish: Introducing the Witcher: 1 Capa comum – 18 julho 2017
        " 
        price={20.0} 
        image='https://a-static.mlcdn.com.br/618x463/livro-o-ultimo-desejo-the-witcher-a-saga-do-bruxo-geralt-de-rivia/magazineluiza/223119400/169a2ca0fde57311ff7cf0f4e79fdcd4.jpg'
        rating={5} 
        />
        <Product 
        id="64546445"
        title="Echo (4ª Geração): Alexa, som premium, hub de casa inteligente e sensor de temperatura - Cor Preta " 
        price={59.99} 
        image='https://images.kabum.com.br/produtos/fotos/129093/smart-speaker-home-echo-dot-amazon-alexa-4-geracao-preto-b084dwczy6_1601639278_g.jpg'
        rating={5} 
        />
        <Product 
        id="98785451"
        title=" Casaco masculino original Pinguim separado " 
        price={180.9} 
        image='https://m.media-amazon.com/images/I/71cqhDxFsQL._AC_SX342_.jpg'
        rating={2} 
        />
        <Product 
          id="78545122"
          title="The Le Apple MacBook Air 13.3', Chip M1, 8GB RAM, 256GB SSD" 
          price={1500.00} 
          image='https://m.media-amazon.com/images/I/71vFKBpKakL._AC_SX425_.jpg'
          rating={2} 
          />
        </div>

        <div className="home_row">
        <Product 
        id="5456848"
        title="Novo Kindle Paperwhite: agora com tela de 6,8” e temperatura de luz ajustável" 
        price={60.0} 
        image='https://m.media-amazon.com/images/I/71wpB3KIVKL._AC_UL320_.jpg'
        rating={3} 
        />
        <Product 
          id="78545122"
          title="Apple iPhone 13 Pro Max (128 GB) - Azul Sierra" 
          price={59.90} 
          image='https://m.media-amazon.com/images/I/41G6Hlu3TBL._AC_UL320_.jpg'
          rating={2} 
          />
        </div>

      </div>
    </div>
    
  );
}

export default Home;
