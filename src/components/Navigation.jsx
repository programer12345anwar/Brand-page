import '../App.css';

const Navigation = () => {
  return (
    <>
    <div className="Navbar">
      <nav>
          <div className='logo'>
          <img src="/images/brand_logo.png" alt="logo" />
          </div>
          <ul>
            <li href='#'>Menu</li>
            <li href='#'>Location</li>
            <li href='#'>About</li>
            <li href='#'>Contact</li>
          </ul>
          <button id='login'>Login</button>
        </nav>
        </div>
    </>
  );
}

export default Navigation;
