import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import ImageGallery from "../components/ImageGallery";
import Layout from "../components/Layout";
import Section from "../components/Section";


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