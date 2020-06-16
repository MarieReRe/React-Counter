import React from 'react';
import Footer from'./components/Footer';
import Header from './components/Header';
import Main from './components/Main';






//app rendering using different components
class App extends React.Component{
  render() {
    // <> is a Fragment; can't return multiple things
    return (
      <>
       <Header/>
       <Main />
        <Footer />
      </>
    );
  }
}

export default App;
