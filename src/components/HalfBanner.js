import React, { Component } from "react";
import $ from 'jquery';
import ScrollMagic from 'scrollmagic';

export default class HalfBanner extends Component {

  componentDidMount(){
    var controller = new ScrollMagic.Controller();
    $('div').each(function(){
        // Create a scene for each project
        var myScene = new ScrollMagic.Scene({
        triggerElement: this,
        triggerHook: 0.7
        })
        .setClassToggle(this, 'load')
        .addTo(controller);
       });
  }

  render() {
    const { title, content } = this.props;
    return (
      <React.Fragment>
        <div className="container">
          <section id="features" className="mb-5 pb-4 halfBanner">
            <h3
              className="text-center title my-5 dark-grey-text font-weight-bold wow fadeIn"
              data-wow-delay="0.2s"
              style={{
                visibility: "visible",
                animationName: "fadeIn",
                animationDelay: "0.2s"
              }}
            >
              <strong>{title}</strong>
            </h3>

            <p
              className="text-center w-responsive mx-auto my-5 grey-text wow fadeIn"
              data-wow-delay="0.2s"
              style={{
                visibility: "visible",
                animationName: "fadeIn",
                animationDelay: "0.2s"
              }}
            >
              {content}
            </p>
          </section>
        </div>
      </React.Fragment>
    );
  }
}
