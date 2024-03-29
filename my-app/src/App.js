import "./App.css";
import Accordian from "./components/accordion";
import MultiSelection from "./components/accordion/MultiSelection";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/Slideshow";
import LoadMoreData from "./components/load-more-data";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import QRCodeGenerator from "./components/qr-code";
import LightDarkMode from "./components/light-dark-mode";
import ScrollIndicator from "./components/scroll-indicator";
import TabTest from "./components/tab/tab-test";
import ModalTest from "./components/custom-modal-popup/modal-test";
import GithubProfileFinder from "./components/github-finder";
import SearchAutocomplete from "./components/search-autocomplete";
import TicTacToe from "./components/tic-tact-toe";

function App() {
  return (
    <div className="App">
      {/* <Accordian /> */}
      {/* <MultiSelection /> */}
      {/* <RandomColor/> */}
      {/* <StarRating nuOfStars={10}/> */}
      {/* <ImageSlider url ={"https://picsum.photos/v2/list"} /> */}
      {/* <LoadMoreData /> */}
      {/* <TreeView menus={menus}/> */}
      {/* <QRCodeGenerator/> */}
      {/* <LightDarkMode /> */}
      {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'} /> */}
      {/* <TabTest /> */}
      {/* <ModalTest /> */}
      {/* <GithubProfileFinder /> */}
      {/* <SearchAutocomplete /> */}
      <TicTacToe />
    </div>
  );
}

export default App;
