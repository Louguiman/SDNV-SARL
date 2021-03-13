import React, { Component } from "react";

export class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoURL: "img/intro-bg.webm",
    };
  }

  render() {
    return (
      <header id="header">
        <video id="background-video" loop autoPlay>
          <source src={this.state.videoURL} type="video/webm" />
          
          Votre navigateur ne peut pas lire cette video.
        </video>
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
                  <h1>
                    {this.props.data ? this.props.data.title : "Loading"}
                    <span></span>
                  </h1>
                  <p>
                    {this.props.data ? this.props.data.paragraph : "Loading"}
                  </p>
                  <a
                    href="#services"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    En savoir Plus
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
