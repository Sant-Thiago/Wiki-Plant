import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header/Header'
import './App.css'
import Rating from './Rating/Rating'
import LikeButton from './Buttons/LikeButton/LikeButton'
import Substances from './Characteristics/Substances/Substances'
import Bar from './Bar/Bar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Header/> */}
    <nav className='navPlants'>Plantas  Wiki  OG Tresure</nav>
    <section>
      <div className='divImg'>
        <img src="" alt="" />
        <p>font</p>
        <LikeButton/>
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
        <Bar/>
        <div>
          <div className='prinEffc'>
            <p>effects</p>
            <p>effect1</p>
            <p>effect2</p>
            <p>effect3</p>
          </div>
          <div className='prinFlv'>
            <p>flavors</p>
            <p>flavor1</p>
            <p>flavor2</p>
            <p>flavor3</p>
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
