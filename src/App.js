import logo from './logo.svg';import './vars.css';
import './App.css';
import Header from './Header/Header';
import SideBar from './Sidebar/Sidebar';
import Footer from './Footer/Footer';
import Playlist from './Playlist/Playlist';

function App() {
  return (
    <>
      <Header />
      <SideBar />
      <Playlist/>
      <Footer/>
    </>
    );
    ReactDOM.render(
      <React.StrictMode>
        <HashRouter>
          <App />
        </HashRouter>
      </React.StrictMode>,
      document.getElementById('root')
    );
}

export default App;
