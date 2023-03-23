import {Link} from 'react-router-dom';


function Navbar() {
    return (

       <nav className="nav-container">
        <div className="nav-brand">Your Logo</div>
        <div className="nav-links"> 
            <a><Link to="/">Home</Link></a>
            <a><Link to="/Product">Product</Link></a>
            <a><Link to="/ContactPage">Contact</Link></a>
        </div>

        <div class="nav-sign">
            <button className="btn-text">Sign In</button>
            <button className="btn-border">Sign Up</button>
        </div>
    </nav>
    )
}

export default Navbar;