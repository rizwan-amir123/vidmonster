import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import Login from '../components/Login.js'
import LogoImg from '../../../public/logo.png'

export default function Main() {
  return (
    <div>
      <Header src={LogoImg}/>
      <Login />
      <Footer src={LogoImg}/>

    </div>
  );
};
