import React from 'react';
import './App.css'

class App extends React.Component {
  constructor () {
    super();
    this.state = {header: '', input: '', messageFromServer: undefined};
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:3001/api/hello')
    const text = await response.text();
    this.setState({header: text});
  }

  handleInputChange(e) {
    this.setState({input: e.target.value})
  }

  async handleSubmit(e) {
    e.preventDefault();
    const response = await fetch('http://localhost:3001/api/world', {
      method: "POST",
      headers: { 
        "Content-Type": "application/json", 
        "Cache-Control": "no-cache",
      },
      body: JSON.stringify({
        input: this.state.input
      })
    });
    const text = await response.text();
    this.setState({messageFromServer: text})
  }

  render() {
    return (
      <>
        <h2>{this.state.header}</h2>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <h3>Post to Server</h3>
          <input value={this.state.input} name="input" onChange={(e) => this.handleInputChange(e)}/>
          <button type="submit">Submit</button>
        </form>
        {this.state.messageFromServer && <span>{this.state.messageFromServer}</span>}
      </>
    )
  }
}

export default App
