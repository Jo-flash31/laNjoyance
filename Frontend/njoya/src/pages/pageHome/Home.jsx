import React from 'react'
import macafrik from '../../images/njoya/macafrik.jpg'
import gateauwax from '../../images/njoya/gateau-wax.jpg'
import eclairbanane from '../../images/njoya/eclair-banane.jpg'

// STYLES
import './Home.css'

const Home = () => {
  return (
    <>
      <section className="img">
        <div className="backgroundhome"></div>
      </section>

      <section className="sommaire">
        <div className="c-sommaire">

          <h1 className="home-title">Patisserie et Viennoiseries 100 % Faits Maison</h1>

          <div className="footer-top">
            <p className="home-intro">
              « Venez découvrir plus de <span className="font-bold">Bienvenue chez La Njoyance, où tradition africaine et art de la pâtisserie française se rencontrent pour créer des expériences uniques. Découvrez notre produit phare : le croissant à l’aloco, une fusion audacieuse et gourmande qui réinvente vos moments sucrés. Entre innovation et authenticité, chaque création est un voyage savoureux. Explorez nos délices et laissez-vous surprendre ! </span>! »
            </p>
          </div>

          <div className="c-sommaire-img">
            <div className="c-img">

              <img src={macafrik} alt="image macafrik" />
              <p>Patisseries</p>
              <p>Des classiques de la pâtisserie en version revisitée, et des créations exclusives ! </p>
              <button>Savourez</button>
            </div>


            <div className="c-img">
              <img src={gateauwax} alt="image gateau-wax" />

              <p>Gateaux</p>
              <p>Des Gateaux exclusifs qui font la difference</p>
              <button>Degustez</button>
            </div>

            <div className="c-img">
              <img src={eclairbanane} alt="image eclair-banane" />

              <p>Produits Exotic'</p>
              <p>Des saveurs authentiques de banane plantain transformées en pâtisseries uniques, pour un voyage gustatif inédit.</p>
              <button>Succombez</button>
            </div>
          </div>
        </div>
      </section>

      <section className="c-sponsort">
        <h2></h2>
        <div>
          <img src="" alt="" />
          <p></p>
        </div>
        <div>
          <img src="" alt="" />
          <p></p>
        </div>
        <div>
          <img src="" alt="" />
          <p></p>
        </div>
      </section>

    </>
  )
}

export default Home
