import "./Header.css";

const Header = () => {
  return (
    <header>
      <h1>The Design Shop</h1>
      <nav>
        <div>
        <ul>
          <li><a href="#">Featured</a></li>
          <li><a href="#">Lifestyle</a></li>
          <li><a href="#">Books</a></li>
          <li><a href="#">Digital</a></li>
        </ul>
        </div>
        <hr />
        {/* <span></span> */}
        <div>
        <ul>
          <li><a href="#">Weekly Picks</a></li>
          <li><a href="#">The Design Blog</a></li>
        </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;