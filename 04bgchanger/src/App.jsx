import { useState } from "react";
import ColorButton from "./component/ColorButton";

function App() {
  const [color, setColor] = useState("yellow");

  return (
    <>
      <div className="w-full  h-screen " style={{ backgroundColor: color }}>
        <div className="fixed  flex flex-wrap bottom-12 justify-center inset-x-0  px-2 ">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <ColorButton btncolor="red" setColor={setColor} />
            <ColorButton btncolor="yellow" setColor={setColor} />
            <ColorButton btncolor="green" setColor={setColor} />
            <ColorButton btncolor="blue" setColor={setColor} />
            <ColorButton btncolor="purple" setColor={setColor} />
            <ColorButton btncolor="silver" setColor={setColor} />
            <ColorButton btncolor="olive" setColor={setColor} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
