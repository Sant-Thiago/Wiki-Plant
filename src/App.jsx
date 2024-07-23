import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Components/Header/Header'
import './App.css'
import Rating from './Components/Rating/Rating'
import BarSocialMedia from './Components/BarSocialMedia/BarSocialMedia'
import Substances from './Components/Characteristics/Substances/Substances'
import Bar from './Components/Bar/Bar'
import Block from './Components/Block/Block'
import NavBar from './Components/NavBar/NavBar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='cotainerApp'>
      <NavBar />
      <div className='conatainerContent'>
        <Header/>
            <nav className='navPlants'>Plantas &gt; Wiki &gt; OG Tresure</nav>
        <section className='firstContainer'>
          <button className='btn_arrow'>
            <i className="bi-arrow-left-short"></i>
          </button>
          <div className='divImg'>
            <img 
              src="https://www.budzburn.com/cdn/shop/files/AnimalIceTHCAFlowercopy.png?v=1716581240" 
              alt="terraMagma" 
              className='imagemPlant'
            />
          </div>
          <div className='infosRap'>
            <div className='namesReview'>
              <div className='nameType'>
                <p className='typePlant'>
                  Hybrid
                </p>
                <Substances/>
              </div>
              <div>
                <div className='namePopName'>
                  <h1>OG Treasure</h1>
                  <span>AKA Treasure</span>
                </div>
                <Rating/>
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nihil dolor autem perspiciatis, enim voluptatibus omnis vitae? A iure odio dicta blanditiis repudiandae at deleniti sit officia! Delectus, unde natus.
              </div>
            </div>
          </div>
          <button className='btn_arrow'>
            <i className="bi-arrow-right-short"></i>
          </button>
        </section>
        <section className='infoSection'>
            <div className='containerSection'>
              <div className='containerBar'>
                <div className='containerTypes'>
                  <p>calming</p>
                  <p>energing</p>
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
          <div className='infoCarac'>
            <h2>caracteristicas</h2>
            <div></div>
          </div>
        </section>
        <section>
          <div className='infosPlant'>
            <div className='infoTabs'>
              <div className=''>
                <h2 className='tab selected'>Plant Infos</h2>
              </div>
              <div className='deselected'>
                <h2 className='tab'>Reviews</h2>
              </div>
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
          dicas
        </section>
        <div className='horizontal'></div>
        <section>
          ctts
        </section>
      </div>
    </div>
  </React.StrictMode>,
)


// merveille

// how to uploading artifacts to the Central Repository