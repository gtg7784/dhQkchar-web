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
  }

  componentDidMount() {
    axios
      .get(
        "http://ec2-3-16-138-58.us-east-2.compute.amazonaws.com:4000/api/signal/info"
      )
      .then((res: any) => this.setState({ signal: res }));
    console.log(this.state.signal[0].color);
    axios
      .get(
        "http://ec2-3-16-138-58.us-east-2.compute.amazonaws.com:4000/api/car/info"
      )
      .then((res: any) => this.setState({ data: res }));
    console.log(this.state.data);
    this.setState({});
  }
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
              src="http://openimage.interpark.com/goods_image_big/8/5/3/3/5476048533_l.jpg"
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
            <div>
              <h1>난곡사거리</h1>
              <div>
                <div>현재 신호: red</div>
                <div>점등 시간: 10초</div>
              </div>
            </div>
            <div>
              <h1>가산디지털단지역 사거리</h1>
              <div>
                <div>현재 신호: red</div>
                <div>점등 시간: 10초</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
