import './App.css';
import React from 'react';
// import ComponentA from './components/ComponentA';
// import Hello from './components/Hello';
// import MyClass from './components/MyClass';
// import Name from './components/Name';
// import Example from './components/Example';
// import Example2 from './components/Example2';
// import Form from './components/Form';
// import MyFragment from './components/MyFragment';
import Statefunc from './components/Statefunc';

// export const MyContext = React.createContext()

function App(props) {
  return (
    <div className="container">
      {/* <MyFragment /> */}
      {/* <MyContext.Provider value="This is from context">
      <ComponentA />
      </MyContext.Provider> */}
      <Statefunc />
    </div>
  );
}

export default App;
