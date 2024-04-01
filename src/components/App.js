
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Section from './Section';
import ImageGallery from './ImageGallery';

export function importAll(context) {
  return context.keys().map(context)
}

function App() {
  const picturePaths = importAll(require.context(`../media/pictures`, false, /\.(png|jpe?g|svg)$/));
  // console.log(require.context(`../media/pictures`, false, /\.(png|jpe?g|svg)$/));
  // console.log(require.context(`../media/pictures`, false, /\.(png|jpe?g|svg)$/).keys());
  // console.log(picturePaths);

  return (
    <BrowserRouter basename="portfolio">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/rogue-lineage-tycoon' element={
            <Section title="rogue lineage tycoon">
              <div className="row">
                <div className="col-md-6">
                  <ImageGallery image_paths={picturePaths} />
                </div>
                <div className="col-md-6">
                  asdfjnasdf
                </div>
              </div>
              <Link to="/">Back</Link>
            </Section>
          } />
          <Route path="*" element={<p className='text-center'>Path not resolved</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
