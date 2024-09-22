import { artists } from './best-selling-music-artists';
import Header from './components/Header';
import ArtistCard from './components/ArtistCard';

function App() {

  const ArtistList = artists.map(artists => <ArtistCard artists={artists} />);

  return (
    <div className="app">
        <Header/>
        <div>
          {ArtistList}
        </div>
        
    </div>
  );
}
export default App;
