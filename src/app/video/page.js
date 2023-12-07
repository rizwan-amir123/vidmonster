import HeaderSearch from '../components/HeaderSearch.js'
import Player from '../components/Player.js'
import Footer from '../components/Footer.js'
import Recommender from '../components/Recommender.js'
import LogoImg from '../../../public/logo.png'

import E1Img from '../../../public/mark.jpg'
import E2Img from '../../../public/dan.webp'
import E3Img from '../../../public/dudeperfect.webp'
import E4Img from '../../../public/smosh.jpg'
import E5Img from '../../../public/preston.png'

import Svg1Img from '../../../public/down.png'
import AvatarImg from '../../../public/avatar.png'

export default function Main() {
  return (
    
    <div>
      <HeaderSearch src={LogoImg}/>
      <Player src={AvatarImg} svgsrc={Svg1Img} />
      {/*<CarouselNew />*/}
      {/*<Karousel src1={E1Img} src2={E2Img} src3={E3Img} src4={E4Img}/>*/}

      
     
      <Recommender text={"Creators Trending"} src={[E1Img, E2Img, E3Img, E4Img, E5Img]}/>
      <Recommender text={"Creators on the Rise"} src={[E1Img, E2Img, E3Img, E4Img, E5Img]}/>
      <Footer src={LogoImg}/>

    </div>

  );
};
