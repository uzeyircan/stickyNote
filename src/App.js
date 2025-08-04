import { useRef, useState, useEffect } from "react";
import "./App.css";
import logo from "./img/basliksiz.jpg";
import MainContext from "./MainContext";
import LeaveComponentText from "./component/LeaveComponentText";
import Note from "./component/Note";
import NoteBox from "./component/NoteBox";

function App() {
  const screen = useRef(null);
  const [mod, setMode] = useState(false);
  const [notes, setNotes] = useState([
    {
      id: "1",
      note: "Bu bir test notudur.",
      color: "blue",
      position: { x: 250, y: 300 },
    },
  ]);

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const [boxVisible, setBoxVisible] = useState(false);
  const [boxPosition, setBoxPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    screen.current.focus();
  }, []);

  const handleKeyUp = (e) => {
    if (e.key === "c") {
      setMode(!mod);
      setBoxVisible(false);
    }
  };

  const handleMouseMove = (e) => {
    if (mod) {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    }
  };
  const handleClick = (e) => {
    if (mod) {
      setBoxPosition({
        x: position.x,
        y: position.y,
      });
      setBoxVisible(true);
    }
  };
  const data = { position, boxPosition, setMode, notes };

  return (
    <MainContext.Provider value={data}>
      <div
        onClick={handleClick}
        ref={screen}
        tabIndex={0}
        onMouseMove={handleMouseMove}
        onKeyUp={handleKeyUp}
        className={`screen ${mod && "editable"}`}
      >
        <img src={logo} alt="Uygulama logosu" />
        {mod && <LeaveComponentText />}

        {mod && <div> Yorum Modu Aktif</div>}
        {notes && notes.map((note) => <Note {...note} />)}
        {boxVisible && <NoteBox />}
      </div>
    </MainContext.Provider>
  );
}

export default App;
