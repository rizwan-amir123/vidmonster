import HeaderSearch from './components/HeaderSearch.js'
import Hero from './components/Hero.js'
import Features from './components/Features.js'
import Stats from './components/Stats.js'
import Herosecond from './components/Herosecond.js'
import Herothird from './components/Herothird.js'
import Faq from './components/Faq.js'
import Footer from './components/Footer.js'
import LogoImg from '../../public/logo.png'
import HeroImg from '../../public/hero-1.png'
import E1Img from '../../public/e1.jpg'
import E2Img from '../../public/e2.jpg'
import E3Img from '../../public/e3.jpg'
import E4Img from '../../public/e4.jpg'
import HeroSecondImg from '../../public/hero2.png'

export default function Home() {
  return (
    <div>
      <HeaderSearch src={LogoImg}/>
      
      <Hero src={HeroImg}/>
      
      <Herosecond src={HeroSecondImg}/>
      <Features />
      <Herothird src={HeroSecondImg} src1={E1Img} src2={E2Img} src3={E3Img} src4={E4Img}/>
      <Stats />
      <Faq />
      <Footer src={LogoImg}/>
    </div>
  );
};
