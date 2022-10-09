import Footer from './Components/Common/Footer';
import Header from './Components/Common/Header';
import HeaderMobile from './Components/Common/HeaderMobile';
import HomePage from './Components/HomePage';
import { isHandheld } from './utils';

function App() {
  console.log(isHandheld);
  return (
    <div className="App">
      { isHandheld ? <HeaderMobile/> : <Header/> }
    <HomePage/>
    <Footer/>
    </div>
  );
}

export default App;
