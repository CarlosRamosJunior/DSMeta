import logo from "../../assets/img/logo.svg";

import "./styles.css";

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-conteiner">
                <img src={logo} alt="DSMeta" />
                <h1>DSMeta</h1>
                <p>
                    Desenvolvido por mim 
                    <a href="https://www.instagram.com/cr3junior/"> @cr3junior</a>
                </p>
            </div>

        </header>
    )
}

export default Header;