
import './App.css';
import AddBanner from './Components/AddBanner';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import Furniture from './Components/Furnithure/Furnithure';
import Header from './Components/Header/Header';
import Review from './Components/Review/Review';
import SearchItem from './Components/SearchesItem/SearchItem';
import TodayHotDeal from './Components/TodayDeal/TodayHotDeal';
import addbannerimg1 from './Assets/image/Component 1.png'
import addbannerimg2 from './Assets/image/Rectangle 3.png'
function App() {
  return (
    <div className="App ">
      <Header/>
      <Banner/>
      <AddBanner img={addbannerimg1} />
      <TodayHotDeal/>
      <SearchItem/>
      <AddBanner img={addbannerimg2} />
      <Furniture/>
      <Review/>
      <Footer/>
    </div>
  );
}

export default App;
