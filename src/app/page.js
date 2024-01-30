import HeaderSearch from './components/HeaderSearch.js'
import Hero from './components/Hero.js'
import Features from './components/Features.js'
import Stats from './components/Stats.js'
import Herosecond from './components/Herosecond.js'
import Herothird from './components/Herothird.js'
import Faq from './components/Faq.js'
import Footer from './components/Footer.js'
import LogoImg from '../../public/logo.webp'
import HeroImg from '../../public/hero-1.png'

import HeroSecondImg from '../../public/hero2.png'

import E1Img from '../../public/mark.jpg'
import E2Img from '../../public/dan.webp'
import E3Img from '../../public/dudeperfect.webp'
import E4Img from '../../public/smosh.jpg'
import E5Img from '../../public/preston.png'

export default function Home() {
  return (
    <div>
      <HeaderSearch src={LogoImg}/>
      
      <Hero src={HeroImg}/>
      
      <Herosecond src={HeroSecondImg}/>
      <Features />
      <Herothird src={[E1Img, E2Img, E3Img, E4Img, E5Img]}/>
      <Stats />
      <Faq />
      <Footer src={LogoImg}/>
    </div>
  );
};
