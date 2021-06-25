import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Card, {
  ICardLayoutSettings,
  ImageStyle,
  LabelPosition,
} from "../components/Card/card";
import CardTitleEditor from "../components/CardTitleEditor/cardTitleEditor";
import CardTitles from "../components/CardTitles/cardTitles";
import { DeckTitleEditor } from "../components/DeckTitleEditor";
import ToolboxCard from "../components/ToolboxCard/toolboxCard";
import { IDeck } from "../state/deck/models/deck";
import { AppState } from "../state/store";
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}
const CreateDeckPage = () => {
  const history = useHistory();
  const state = useSelector((state: AppState) => state.deck) as IDeck;
  const { items, topic } = state;
  // TODO: move to the state
  const cardSettings: ICardLayoutSettings = {
    labelStyle: {
      color: false,
      transparency: true,
      position: LabelPosition.Center,
    },
    imageStyle: ImageStyle.Flat,
  };
  const { width, height } = getWindowDimensions();
  console.log(Object.keys(LabelPosition));
  return (
    <div className="h-100 d-flex flex-row justify-content-between align-items-center">
      <div style={{ width: `${width - 480}px` }}>
        {/* <CreateTopic />
          <CreateItem /> */}
        <div className="d-flex justify-content-center align-items-center">
          <Card width={426.95} settings={cardSettings} />
        </div>
      </div>
      {/* TODO media width */}
      <div
        id="card-style-control-bar"
        style={{
          backgroundColor: "#1B283B",
          position: "fixed",
          padding: 0,
          top: 0,
          right: 0,
          bottom: 0,
          overflowY: "scroll",
          width: "480px",
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
          <div className="mx-3 pb-3 bottom-border">
            <div>
              <label className="white-label">Word Style</label>
            </div>
            <div className="d-flex flex-row justify-content-around align-items-center">
              {Object.keys(LabelPosition).map(
                (p: string, i) =>
                  isNaN(Number(p)) && (
                    <ToolboxCard
                      isSelected={false}
                      width={95}
                      labelPosition={LabelPosition[LabelPosition[p]]}
                    />
                  )
              )}
            </div>
          </div>
          {/* image style */}
          {/* load images */}
        </div>
        {/* <Deck /> */}
      </div>
      <div
        style={{
          position: "fixed",
          right: 0,
          bottom: 0,
          background: "green",
          height: "3em",
          width: "480px",
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
