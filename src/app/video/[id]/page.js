import HeaderSearch from '../../components/HeaderSearch.js'
import CustomPlayer from '../../components/CustomPlayer.js'
import Footer from '../../components/Footer.js'
import Recommender from '../../components/Recommender.js'
import LogoImg from '../../../../public/logo.png'

import E1Img from '../../../../public/mark.jpg'
import E2Img from '../../../../public/dan.webp'
import E3Img from '../../../../public/dudeperfect.webp'
import E4Img from '../../../../public/smosh.jpg'
import E5Img from '../../../../public/preston.png'

import E6Img from '../../../../public/nigahiga.jpeg'
import E7Img from '../../../../public/valkyrae.webp'
import E8Img from '../../../../public/blippi.webp'
import E9Img from '../../../../public/felipeneto.jpeg'
import E10Img from '../../../../public/auronplay.jpg'

import Svg1Img from '../../../../public/down.png'
import AvatarImg from '../../../../public/avatar.png'

export default function Main({params}) {
  return (
    
    <div>
      <HeaderSearch src={LogoImg}/>
      <CustomPlayer src={AvatarImg} svgsrc={Svg1Img} params={params} />
      {/*<CarouselNew />*/}
      {/*<Karousel src1={E1Img} src2={E2Img} src3={E3Img} src4={E4Img}/>*/}

      
     
      <Recommender text={"Creators Trending"} margin={0} src={[E1Img, E2Img, E3Img, E4Img, E5Img]} names={["Markiplier", "DanTDM", "Dude Perfect", "Smosh", "Preston"]}/>
      <Recommender text={"Creators on the Rise"} margin={10} src={[E6Img, E7Img, E8Img, E9Img, E10Img]} names={["nigahiga", "Valkyrae", "Blippi", "Felipe Neto", "AuronPlay"]}/>
      <Footer src={LogoImg}/>

    </div>

  );
};
