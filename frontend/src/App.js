import {Component} from "react";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    clients: [{id: 1, name: "John Doe", email: "jonh.doe@mail.com"}]
  };

  async componentDidMount() {
    const response = await fetch('/clients');
    const body = await response.json();
    console.log(body);
    this.setState({clients: body});
  }

  render() {
    const {clients} = this.state;
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="App-intro">
              <h2>Clients</h2>
              {clients && clients.map(client =>
                  <div key={client.id}>
                    {client.name} ({client.email})
                  </div>
              )}
            </div>
          </header>
        </div>
    );
  }
}


export default App;
