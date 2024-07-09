import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header/Header'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <section>
      <div className='divImg'>
        <img src="" alt="" />
        <p>font</p>
      </div>
      <div className='divInfoMain'>
        <div className='infosRap'>
          <h1>Name</h1>
          <p>tipo</p>
          <span>avaliação</span>
          <span>PopName</span>
        </div>
        <h2>Porcentagens THC/CBD</h2>
        <div className='areaBar'>
          <div className='infoBar'>
            <p>calm</p>
            <p>energy</p>
          </div>
          <span>barra</span>
        </div>
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
    <section>
      ctts
    </section>
  </React.StrictMode>,
)
