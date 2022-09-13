import React from 'react'
import Counter from './Counter'

// Class Component
class App extends React.Component {

  state = {
    counter: 0,
    background: 'green'
  }

  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({counter: this.state.counter + 1})
    }, 1000);
  }

  handleClick() {
    if(this.state.background === 'green') {
      this.setState({background: 'blue'})
    } else {
      this.setState({background: 'green'})
    }
  }

  render() {
    return (
      <div style={{ background: this.state.background, padding: 20 }}>
        <Counter counter={this.state.counter} />
        <button onClick={this.handleClick}>Change Background</button>
      </div>
    )
  }
}

// Functional Component
// const App = () => {
//   return  (
//     <h1>Hello World</h1>
//   )
// }

export default App