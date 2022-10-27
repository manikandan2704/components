import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import App2 from './class lifcycle';
// import Main from './class-props';







// import React, { Component } from 'react';
// Class // 

// function Main(){
//   return <div>Manikandan</div>
// }

// class Second extends React.Component{
//   render(){
//       return <div> second </div>
//   }
// }

// class First extends React.Component{
//   render(){
//       return <div> first <Second /></div>
//   }
// }

// class Main extends React.Component{
//   render(){
//       return <div> Main <First /></div>
//   }
// }

// Props //

function First(props) {
  return (
    <div>Heyyy {props.name}</div>
  );
}

function SampleFun(props) {
  console.log("props", props);
  return <div>function {props.name} <First name={props.name}/></div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SampleFun name="mani" age="21" />);

// Class Props 

// class First extends React.Component {
//   render(){
//     console.log("this",this);
//     return <div>First Class Component {this.props.name}</div>
//   }
// }

// class SampleFun extends React.Component {
//   render(){
//     console.log("this",this);
//     return <div>Class Component {this.props.name} <First name = {this.props.name}/></div>
//   }
// }


// root.render(<SampleFun name="mani" age="21" />);


// export default Main;


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <React.StrictMode>
//         <App2/>
//         {/* <Main/> */}
//         </React.StrictMode>
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
