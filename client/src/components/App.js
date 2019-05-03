import React, { Component } from "react";
import NBA from "./NBA";
import MLB from "./MLB";
import "./app.scss";

class App extends Component {
  state = { show: "NBA", classNBA: "active", classMLB: "" };

  renderPage = () => {
    return this.state.show === "NBA" ? <NBA /> : <MLB />;
  };

  render() {
    return (
      <>
        <div class="ui two item menu">
          <a
            class={`${this.state.classNBA} item`}
            onClick={() =>
              this.setState({ show: "NBA", classNBA: "active", classMLB: "" })
            }
          >
            NBA
          </a>
          <a
            class={`${this.state.classMLB} item`}
            onClick={() =>
              this.setState({ show: "", classNBA: "", classMLB: "active" })
            }
          >
            MLB
          </a>
        </div>
        <div className="parent">
          <div className="wrapper">{this.renderPage()}</div>
        </div>
      </>
    );
  }
}

export default App;
