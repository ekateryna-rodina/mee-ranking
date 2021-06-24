import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Card from "../components/Card";
import CardTitleEditor from "../components/CardTitleEditor/cardTitleEditor";
import CardTitles from "../components/CardTitles/cardTitles";
import { DeckTitleEditor } from "../components/DeckTitleEditor";
import { IDeck } from "../state/deck/models/deck";
import { AppState } from "../state/store";
const CreateDeckPage = () => {
  const history = useHistory();
  const state = useSelector((state: AppState) => state.deck) as IDeck;
  const { items, topic } = state;
  return (
    <div className="row h-100" style={{ position: "relative" }}>
      <main id="add-section" className="col-md-8">
        <div className="container">
          {/* <CreateTopic />
          <CreateItem /> */}
          <Card
        </div>
      </main>
      <div
        id="card-style-control-bar"
        className="col-md-3"
        style={{
          backgroundColor: "#1B283B",
          position: "fixed",
          padding: 0,
          top: 0,
          right: 0,
          bottom: 0,
          overflowY: "scroll",
        }}
      >
        <div>
          {/* deck name creation */}
          <div className="py-3 bottom-border">
            <DeckTitleEditor />
          </div>
          {/* deck cards creation */}
          <CardTitles />
          {/* card title edit  */}
          <div className="pb-3 bottom-border">
            <CardTitleEditor />
          </div>
          {/* word style */}
          <div className="pb-3 bottom-border">
            <div>
              <label className="white-label">Word Style</label>
            </div>
          </div>
          {/* image style */}
          {/* load images */}
        </div>
        {/* <Deck /> */}
      </div>
      <div
        className="col-md-3"
        style={{
          position: "fixed",
          right: 0,
          bottom: 0,
          background: "green",
          height: "3em",
        }}
      >
        <div className="flex">{/* buttons */}</div>
      </div>
    </div>
  );
};

export default CreateDeckPage;

// import React from "react";
// import { useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
// import CreateItem from "../components/CreateItem";
// import CreateTopic from "../components/CreateTopic";
// import Deck from "../components/Deck";
// import { IDeck } from "../state/deck/models/deck";
// import { AppState } from "../state/store";
// const CreateDeckPage = () => {
//   const history = useHistory();
//   const state = useSelector((state: AppState) => state.deck) as IDeck;
//   const { items, topic } = state;
//   return (
//     <div className="row">
//       <div id="add-section" className="col-md-8">
//         <div className="container">
//           <CreateTopic />
//           <CreateItem />
//         </div>
//       </div>
//       {/* <div id="list-section" className="col-md-4"> */}
//       <aside id="card-style-control-bar">
//         <Deck />
//         <button
//           className={`btn btn-primary ${
//             Object.keys(items).length < 2 ? "disabled" : ""
//           }`}
//           onClick={() => history.push(`/ranking/${topic.id}`)}
//         >
//           Start ranking
//         </button>
//       </aside>
//     </div>
//   );
// };

// export default CreateDeckPage;
