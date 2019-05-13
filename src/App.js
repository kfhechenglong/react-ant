import React, { Component }  from 'react';
import logo from './logo.svg';
import './App.scss';
import Button from 'antd/lib/button';
import { HashRouter as Router,Route} from 'react-router-dom'
function Home() {
    return  <p>首页</p>
}
function Profile() {
    return  <p>个人中心</p>
}
function User() {
    return  <p>用户中心</p>
}


class App extends Component {
  render() {
    return (
      <Router>
          <div>
              {/*exact确切为/时，才会匹配。否则在下面2个路由中，都会显示第一个路由*/}
              <Route path='/' exact={true}  component={Home}></Route>
              <Route path={'/profile'} component={Profile}></Route>
              <Route path={'/user'} component={User}></Route>
          </div>
      </Router>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       {/* <img src={logo} className="App-logo" alt="logo" />*/ }
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <Button type="primary">Button</Button>
//       </header>
//     </div>
//   );
// }

// export default App;
