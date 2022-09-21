import './App.css';
function Nav()
{
    return(
        <nav className="navbar navbar-dark" id="navbar">        
            <h2 className="navbar-brand"><img src="./SCP_Images/scp_logo.gif" alt="SCP logo" id='logo' /></h2> 
            <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#n_bar" aria-controls="navbarNavAltMarkup" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>            
            <div className="collapse navbar-collapse" id="n_bar">
                <ul className="navbar-nav nav-fill w-100" id="dropdown">                
                    <li className="nav-item "><a href="#SCP-6781">SCP-6781</a></li>
                    <li className="nav-item "><a href="#SCP-6784">SCP-6784</a></li>
                    <li className="nav-item "><a href="#SCP-6787">SCP-6787</a></li>
                    <li className="nav-item "><a href="#SCP-6790">SCP-6790</a></li>
                    <li className="nav-item "><a href="#SCP-5793">SCP-5793</a></li>
                    <li className="nav-item "><a href="#SCP-5794">SCP-5794</a></li>
                    <li className="nav-item "><a href="#SCP-5795">SCP-5795</a></li>
                    <li className="nav-item "><a href="#SCP-5796">SCP-5796</a></li>
                    <li className="nav-item "><a href="#SCP-5797">SCP-5797</a></li>
                    <li className="nav-item "><a href="#SCP-5798">SCP-5798</a></li>
                    <li className="nav-item "><a href="#SCP-5799">SCP-5799</a></li>
                    <li className="nav-item "><a href="#SCP-5800">SCP-5800</a></li>
                    <li className="nav-item "><a href="#SCP-5801">SCP-5801</a></li>
                    <li className="nav-item "><a href="#SCP-5803">SCP-5803</a></li>
                    <li className="nav-item "><a href="#SCP-5804">SCP-5804</a></li>
                    <li className="nav-item "><a href="#SCP-5805">SCP-5805</a></li>
                    <li className="nav-item "><a href="#SCP-5806">SCP-5806</a></li>
                    <li className="nav-item "><a href="#SCP-5807">SCP-5807</a></li>
                    <li className="nav-item "><a href="#SCP-5808">SCP-5808</a></li>
                    <li className="nav-item "><a href="#SCP-5809">SCP-5809</a></li>
                </ul> 
            </div>  
          
        </nav>)
}

export default Nav;

