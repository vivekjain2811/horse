import logo from "./logo.svg";
import "./App.css";
import Items from "./component/Items";
import ItemsDate from "./component/ItemsDate";
import Card from "./component/Card";

function App() {
  const response = [
    {
      itemname: "nirma",
      itemdate: "20",
      itemmonth: "june",
      itemyear: "1998",
    },
    {
      itemname: "surfexcel",
      itemdate: "202",
      itemmonth: "june22",
      itemyear: "1998",
    },
    {
      itemname: "nirm2a",
      itemdate: "202",
      itemmonth: "jun2e",
      itemyear: "19298",
    },
  ];

  return (
    <div>
      <Card>
        <Items name={response[0].itemname}>
          bhagwan jagne ki shakti do ,padne ki shakati do yr.
        </Items>
        <ItemsDate
          day={response[0].itemdate}
          month={response[0].itemmonth}
          year={response[0].itemyear}
        ></ItemsDate>
        <Items name={response[1].itemname}></Items>
        <ItemsDate
          day={response[1].itemdate}
          month={response[1].itemmonth}
          year={response[1].itemyear}
        ></ItemsDate>
        <Items name={response[2].itemname}></Items>
        <ItemsDate
          day={response[2].itemdate}
          month={response[2].itemmonth}
          year={response[2].itemyear}
        ></ItemsDate>
        <div className="App">
          {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}{" "}
        </div>
      </Card>
    </div>
  );
}

export default App;
