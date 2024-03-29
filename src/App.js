import logo from './logo.svg';
import './App.css';
import ImageGallery from './Slideshow';

function importAll(context) {
  return context.keys().map(context)
}

function App() {
  const fileNames = importAll(require.context(`./media/pictures`, false, /\.(png|jpe?g|svg)$/));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ImageGallery image_paths={fileNames} />
      </header>
    </div>
  );
}

export default App;
