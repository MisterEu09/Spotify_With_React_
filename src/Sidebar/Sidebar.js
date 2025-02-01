import React from "react";
import './Sidebar.css';
import logo from '../assets/icons/logo-spotify.png'



const SideBar = () => {
    return (
        <div className="sidebar">
        <nav className="sidebar_navigation">
            <div className="logo">
                <a href="#">
                    <img src={logo} alt="logo-spotify"/> 
                </a>
            </div>
        
            <ul>
                <li>
                    <a href="#">
                        <span className="fa fa-home"></span>
                        <span>Inicio</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className="fa fa-search"></span> 
                        <span>Buscar</span>
                    </a>
                </li>
            </ul>
        </nav>

        
        <div className="library">
            <div className="library__content">
                <button className="library__button">
                    <span className="fa fas fa-book"></span> 
                    <span>Sua biblioteca</span>
                </button>
                <span className="fa fa-plus"></span>
            </div>
            
            <section className="section-playlist-off">
                <div className="section-playlist-off__content">
                    <span className="text title">Crie sua primeira playlist</span>
                    <span className="text subtitle">É fácil, vamos te ajudar.</span>
                    <button className="section-playlist__button">
                        <span>Criar playlist</span>
                    </button>
                </div>
            </section>
        </div>
    </div>
    )
};
export default SideBar;