import React from "react";
import axios from "axios";
import "./App.scss";

interface Props {}
interface State {
  data: any;
  signal: any;
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    axios.defaults.baseURL = "http://3.16.138.58:4000/api";

    this.state = {
      data: [
        {
          _id: "5e10e07e48b1a018769d8498",
          type: "benz",
          manufacture: 2019,
          average: 60,
          number: 9999,
          __v: 0
        }
      ],
      signal: [
        { _id: "5e10e98b48b1a018769d89af", color: "GREEN", time: 37, __v: 0 }
      ]
    };

    this.onDataUpdate = this.onDataUpdate.bind(this);
  }

  componentDidMount() {
    setInterval(() => this.onDataUpdate(), 20);
    // return this.onDataUpdate();
  }

  onDataUpdate = async () => {
    axios
      .get("/signal/info")
      .then((res: any) => this.setState({ signal: res.data }));
    console.log(this.state.signal);
    axios
      .get("/car/info")
      .then((res: any) => this.setState({ data: res.data }));
    console.log(this.state.data);
  };

  render() {
    const { data, signal } = this.state;
    return (
      <div className="App">
        <header>
          <h1>오빠 char</h1>
        </header>
        <div>
          <div>
            <img
              src="http://item.ssgcdn.com/01/15/12/item/1000024121501_i1_1200.jpg"
              alt=""
            />
            <div>차종: {data.type}</div>
            <div>연식: {2020 - data.manufacture}</div>
            <div>평균 시속: {data.average}km</div>
            <div>번호: {data.number}</div>
          </div>
          <div>
            <div>
              <h1>G-CAMP</h1>
              <div>
                <div>현재 신호: {signal.color}</div>
                <div>점등 시간: {signal.time}초</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
