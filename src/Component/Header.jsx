import InputField from '../Component/InPut'
function Header() {
    return (
        <header>
            <div className="Header">
                <div className="Header-left">
                    <h1>WELCOME TO MY HOME</h1>

                    <div className="Header-left-input">
                        <input className="Header-left-input-search" placeholder="Search...."></input>

                        <div className="Header-left-input-icon">
                            <i className="fa fa-user icon">
                            </i>
                        </div>
                    </div>
                </div>

                <div className="Header-right">
                    <div className="Header-right-avartar"></div>
                    <p>Vịt Bối dối </p>

                </div>
            </div>
        </header>
    );
}

export default Header;