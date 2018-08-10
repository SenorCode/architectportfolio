import React, { Component } from "react";
import NavTabs from "./Navbar";
//import Footer from "./Footer";
import Home from "./pages/Home";
import About from "./pages/About";
//import Blog from "./pages/Blog";
//import Contact from "./pages/Contact";

class PortfolioContainer extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };


  renderPage = () => {
    switch(this.state.currentPage) {
      case "Home":
        return <Home />;
      case "About":
        return <About />;
      
      default:
      return (<h3>no page found </h3>)
    }
  }
  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}

       
      </div>

    );
  }
}

export default PortfolioContainer;
