import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header/Header'
import './App.css'
import Rating from './Rating/Rating'
import BarSocialMedia from './BarSocialMedia/BarSocialMedia'
import Substances from './Characteristics/Substances/Substances'
import Bar from './Bar/Bar'
import Block from './Block/Block'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Header/> */}
    <section>
      <div className='divImg'>
        <nav className='navPlants'>Plantas &gt; Wiki &gt; OG Tresure</nav>
        <img 
          src="https://terramagna.com.br/wp-content/uploads/2022/09/Planta-jovem-luz-solar.jpg" 
          alt="terraMagma" 
          className='imagemPlant'
        />
        <div className='containerSocialMedia'>
          <BarSocialMedia/>
        </div>
      </div>
      <div className='vertical'></div>
      <div className='divInfoMain'>
        <div className='infosRap'>
          <div className='namesReview'>
            <div className='nameType'>
              <p className='typePlant'>
                Hybrid
              </p>
              <div className='namePopName'>
                <h1>OG Treasure</h1>
                <span>AKA Treasure</span>
              </div>
            </div>
            <Rating/>
          </div>
        </div>
        <Substances/>
        <div className='containerBar'>
          <div className='containerTypes'>
            <p>calm</p>
            <p>energy</p>
          </div>
          <Bar/>
        </div>
        <div className='containerBlocks'>
          <div>
            effects: 
            <Block/>
          </div>

          <div>
            flavors: 
            <Block/>
          </div>
        </div>
        <p>relatos</p>
      </div>
    </section>
    <div className='horizontal'></div>
    <section className='sec2'>
      <div className='infosPlant'>
        <div className='reviews'>
          <h2>Plant Infos</h2>
          <h2>Reviews</h2>
        </div>
        <p className='infos'>
          SEQUENCIA ::
          beneficios,
          caracteristicas,
          surgimento/historia,
          ambiente/condições para plantar,
          info floração/colheita,
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ea fuga alias sit numquam est non sapiente praesentium corrupti rerum cupiditate iusto suscipit soluta, inventore eum culpa fugit in dolorum?
        </p>
      </div>
      <div className='infoCarac'>
        <h2>caracteristicas</h2>
        <div></div>
      </div>
    </section>
    <section>
      dicas
    </section>
    <div className='horizontal'></div>
    <section>
      ctts
    </section>
  </React.StrictMode>,
)
