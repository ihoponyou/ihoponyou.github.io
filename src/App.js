import logo from './logo.svg';
import './App.css';
import ImageGallery from './ImageGallery';

function importAll(context) {
  return context.keys().map(context)
}

function App() {
  const picturePaths = importAll(require.context(`./media/pictures`, false, /\.(png|jpe?g|svg)$/));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ImageGallery image_paths={picturePaths} />
      </header>
    </div>
  );
}

export default App;
