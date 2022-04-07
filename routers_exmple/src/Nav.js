import { BrowserRouter as Router, Link } from 'react-router-dom';
function Nav() {
  return (
    <div className="App">
      <h1>Nav</h1>
      <nav style={{ display: "flex", background: "grey" }}>
        <Link to="/shop">
          <ul>shop</ul>
        </Link>
        <Link to="/about">
          <ul>About</ul>
        </Link>
      </nav>
    </div>
  );
}

export default Nav;