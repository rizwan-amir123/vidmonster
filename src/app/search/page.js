import HeaderSearch from '../components/HeaderSearch.js'
import Player from '../components/Player.js'
import Footer from '../components/Footer.js'
import Recommender from '../components/Recommender.js'
import LogoImg from '../../../public/logo.png'
import E1Img from '../../../public/e1.jpg'
import E2Img from '../../../public/e2.jpg'
import E3Img from '../../../public/e3.jpg'
import E4Img from '../../../public/e4.jpg'
export default function Main() {
  return (
    
    <div>
      <HeaderSearch src={LogoImg}/>
      {/*<Player />*/}
      {/*<CarouselNew />*/}
      {/*<Karousel src1={E1Img} src2={E2Img} src3={E3Img} src4={E4Img}/>*/}
      {/*<Recommender text={"Search Results"} src1={E1Img} src2={E2Img} src3={E3Img} src4={E4Img}/>*/}
      {/*<Recommender text={"Trending"} src1={E1Img} src2={E2Img} src3={E3Img} src4={E4Img}/>*/}
      {/*<Recommender text={"Creators on the Rise"} src1={E1Img} src2={E2Img} src3={E3Img} src4={E4Img}/>*/}
      <Footer src={LogoImg}/>

    </div>

  );
};
