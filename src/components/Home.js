
import { Link } from "react-router-dom";
import { importAll } from "./App";

function GridCard({ title, text, project_title, children }) {
  const thumbnail = importAll(require.context(`../media/pictures`, false, /\.(png|jpe?g|svg)$/));

  return (
    <div className="col">
      <div className="card">
        <Link to="/rogue-lineage-tycoon">
          <img src={thumbnail[0]} className="card-img-top" alt="project thumbnail" />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
        </div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="row row-cols-2 row-cols-md-4 g-4">
      <GridCard
        title="rogue lineage tycoon"
        project_title="rogue-lineage-tycoon" >
      </GridCard>
      <GridCard
        title="rogue lineage tycoon"
        project_title="rogue-lineage-tycoon" >
      </GridCard>
      <GridCard
        title="rogue lineage tycoon"
        project_title="rogue-lineage-tycoon" >
      </GridCard>
      <GridCard
        title="rogue lineage tycoon"
        project_title="rogue-lineage-tycoon" >
      </GridCard>
      <GridCard
        title="rogue lineage tycoon"
        project_title="rogue-lineage-tycoon" >
      </GridCard>
    </div>
  );
}

export default Home;
