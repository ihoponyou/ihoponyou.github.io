import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Layout from "../components/Layout";
import ProjectPage from "../components/ProjectPage";
import PROJECTS from "../projects";

export const IMAGES = require.context("../assets/pictures", true);

// console.log(IMAGES.keys()); // location in project
// console.log(IMAGES.keys().map((value) => IMAGES(value))); // actual location when served
// console.log(IMAGES.keys().filter((path) => path.includes("roblox")))

function App() {
  const projectRoutes: React.ReactElement[] = [];
  for (const [title, data] of Object.entries(PROJECTS)) {
    const newProjectRoute =
      <Route
        key={title}
        path={`/${title.trim().replaceAll(/\s+/g, "-")}`}
        element={
          <ProjectPage
            title={title}
            data={data}
            imagePaths={
              IMAGES.keys()
                .filter((path) => path.includes(title.trim().replaceAll(/\s+/g, "-")))
                .map((value) => IMAGES(value) as string)
            }
          />
        }
      />

    projectRoutes.push(newProjectRoute);
  }

  return (
    <BrowserRouter basename="portfolio">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="*"
            element={<p className="text-center">Path not resolved</p>}
          />
          {projectRoutes}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
