
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Section from './Section';
import ImageGallery from './ImageGallery';

function importAll(context) {
  return context.keys().map(context)
}

function App() {
  const picturePaths = importAll(require.context(`../media/pictures`, false, /\.(png|jpe?g|svg)$/));

  return (
    <BrowserRouter basename="portfolio">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/rogue-lineage-tycoon' element={
            <Section title="rogue lineage tycoon">
              <ImageGallery image_paths={picturePaths} />
            </Section>
          } />
          <Route path="*" element={<p className='text-center'>Path not resolved</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
