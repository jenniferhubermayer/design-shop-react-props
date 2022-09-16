import './App.css';

// IMPORT COMPONENTS
import Header from "./Components/Header";
import Article from "./Components/Article"
import Footer from "./Components/Footer"

// IMPORT IMAGES
import image1 from "./img/01-Home.png"
import image2 from "./img/29-Lifestyle_b-o.png"
import image3 from "./img/01-Books.png"
import image4 from "./img/02-Lifestyle.png"
import image5 from "./img/46-Home_bm.png"
import image6 from "./img/45-Home_hem.png"

// COMPONENT
function App() {
  return (
    <div className="App">
      <Header />
      <main>
      <Article imageUrl={image1} articleTitle="Vifa Copenhagen 2.0 Loudspeaker" articlePrice="$799.00"/>
      <Article imageUrl={image2} articleTitle="Bang & Olufsen Wireless Headphones" articlePrice="$174.00"/>
      <Article imageUrl={image3} articleTitle="Poketo: Creative Spaces" articlePrice="$25.00"/>
      <Article imageUrl={image4} articleTitle="Ucon Acrobatics Hajo Backpack" articlePrice="$79.00"/>
      <Article imageUrl={image5} articleTitle="Summer Print bv Bratislav Milenkovic" articlePrice="$27.00"/>
      <Article imageUrl={image6} articleTitle="Palo Modular Corner Sofa by Hem" articlePrice="$3,699.00"/>
      </main>
      <Footer />
      </div>
  );
}

export default App;