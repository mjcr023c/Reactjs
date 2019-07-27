import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

/*function Hello(props){
  return <h2>{props.title}</h2>
}*/

//const Hello = (props) => <h2>{props.title}</h2>

class Hello extends Component{
  render(){
    return <h2>{this.props.title}</h2>
  }
}
class Text extends Component{
  render(){
    const textoSegunBool = this.props.boolean ? 'Cierto':'Falso'
    return(
      <div>
        <p>{this.props.text}</p>
        <p>{this.props.number}</p>
        <p>{textoSegunBool}</p>
      </div>
    )
  }
}
Text.defaultProps={
  textoSegunBool:false,
  text:'vacio',
  number:0
}

class ArrayNumbers extends Component{
  render(){
    const {
      arrayOfNumbers,
      multiply,
      objectWithInfo,
      title
    } = this.props

    const mappedNumbers = arrayOfNumbers.map(multiply)
    return(
      <div>
        {title}
        <p>{mappedNumbers.join(',')}</p>
        <p>{objectWithInfo.key}</p>
      </div>
    )
  }
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello title='Welcome Reactjs'>  sasdasd</Hello>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body>
        <Text number={23} text='Texto en string' boolean={true}/>
        <ArrayNumbers
          arrayOfNumbers={[2,3,10]}
          objectWithInfo={{key:'First Value',key2:'otherValue'}}
          number={2}
          text='Texto String'
          multiply={(number) => number*2}
          title={<h1>Este es el titulo</h1>}
        />
        <Text/>
      </body>
    </div>
  );
}

export default App;
