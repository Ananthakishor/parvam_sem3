import "./hello.css";
function App() {
  return (
    <>
      <div className="flex justify-between p-4">
        <div>
          left menu
          <div className="">item1</div>
          <div className="">item2</div>
          <div className="">item3</div>
        </div>
        <div>logo</div>
        <div>
          right menu
          <div className="">home</div>
          <div className="">item2</div>
          <div className="">item3</div>
          <div className="">item4</div>
          <div className="">item5</div>
        </div>
      </div>
    </>
  );
}

export default App;
