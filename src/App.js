
import './App.css';
import Row from "./Row";
import requests from './request';
import Nav from './Nav';
import Banner from './Banner';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Banner />

        <Row
          title="Netfix Original" fetchUrl={requests.fetchNetflixOriginals}
        />
        <Row
          title="Tranding Now" fetchUrl={requests.fetchTrending}
        />
        <Row
          title="Netfix TopRated" fetchUrl={requests.fetchTopRated}
        />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title=" Documentaries" fetchUrl={requests.fetchDocumentaries} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <p>Design By Shoaib Qureshi</p>
        <p>shoaib.saq@gmail.com</p>

      </header>
    </div>
  );
}

export default App;
