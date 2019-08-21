import React, { Component } from "react";
import $ from 'jquery';
import ScrollMagic from 'scrollmagic';
import Img62 from "../assets/62.jpg";
import home1 from "../assets/home-1.png";
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';
import img7 from '../assets/7.jpg';
import img58 from '../assets/58.jpg';
import img63 from '../assets/63.jpg';
import img64 from '../assets/64.jpg';
import img10 from '../assets/img (5).jpg';
import img9 from '../assets/img (9).jpg';
import img25 from '../assets/img (25).jpg';
import img8 from '../assets/img (8).jpg';

import img66 from '../assets/66.jpg';
import img1 from '../assets/img (1).png'

export default class Home extends Component {

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
        return (
            <React.Fragment>
                <section
                    className="view intro-2 home"
                    style={{ backgroundImage: `url(${Img62})` }}
                >
                    <div className="mask">
                        <div className="container h-100 d-flex justify-content-center align-items-center">
                            <div className="row flex-center pt-5 mt-3">
                                <div className="col-md-12 col-lg-6 text-center text-md-left margins">
                                    <div className="dark-grey-text">
                                        <h1
                                            className="display-4 title mt-md-5 mt-lg-0 font-weight-bold wow fadeIn"
                                            data-wow-delay="0.3s"
                                            style={{
                                                visibility: "visible",
                                                animationName: "fadeIn",
                                                animationDelay: " 0.3s"
                                            }}
                                        >
                                            <strong>Creative agency</strong>
                                        </h1>
                                        <hr
                                            className="hr-light wow fadeIn"
                                            data-wow-delay="0.3s"
                                            style={{
                                                visibility: "visible",
                                                animationName: "fadeIn",
                                                animationDelay: " 0.3s"
                                            }}
                                        />
                                        <h6
                                            className="grey-text wow fadeIn"
                                            data-wow-delay="0.3s"
                                            style={{
                                                visibility: "visible",
                                                animationName: "fadeIn",
                                                animationDelay: " 0.3s"
                                            }}
                                        >
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Rem repellendus quasi fuga nesciunt dolorum nulla magnam
                                            veniam sapiente, fugiat! Commodi sequi non animi ea dolor
                                            molestiae iste.
                    </h6>
                                        <br />
                                        <a
                                            className="btn btn-outline-pink btn-rounded btn-white fadeIn font-weight-bold ml-lg-0 waves-dark waves-effect wow"
                                            data-wow-delay="0.3s"
                                            style={{
                                                visibility: "visible",
                                                animationName: "fadeIn",
                                                animationDelay: " 0.3s"
                                            }}
                                        >
                                            Portfolio
                    </a>
                                        <a
                                            className="btn btn-pink pink-gradient white-text btn-rounded font-weight-bold wow fadeIn waves-effect waves-light"
                                            data-wow-delay="0.3s"
                                            style={{
                                                visibility: "visible",
                                                animationName: "fadeIn",
                                                animationDelay: " 0.3s"
                                            }}
                                        >
                                            Learn more
                    </a>
                                    </div>
                                </div>

                                <div
                                    className="col-md-12 col-lg-6 wow fadeIn"
                                    data-wow-delay="0.3s"
                                    style={{
                                        visibility: "visible",
                                        animationName: "fadeIn",
                                        animationDelay: " 0.3s"
                                    }}
                                >
                                    <img src={home1} className="img-fluid mx-auto  w-75" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <main>  

                    <div className="container">

                        <section id="about" className="about mt-5 mb-5 py-3 wow fadeIn" data-wow-delay="0.2s" style={{ visibility: 'visible', animationName: 'fadeIn', animationDelay: '0.2s' }}>

                            <div className="row pt-2 mt-5">

                                <div className="col-lg-5 col-md-12 mb-3 wow fadeIn" data-wow-delay="0.4s" style={{ visibility: 'visible', animationName: 'fadeIn', animationDelay: '0.4s' }}>
                                    <img src={img66} className="img-fluid z-depth-1 rounded" alt="My photo" />
                                </div>

                                <div className="col-lg-6 ml-auto col-md-12 wow fadeIn" data-wow-delay="0.4s" style={{ visibility: 'visible', animationName: 'fadeIn', animationDelay: '0.4s' }}>

                                    <h3 className="mb-5 dark-grey-text title font-weight-bold wow fadeIn" data-wow-delay="0.2s" style={{ visibility: 'visible', animationName: 'fadeIn', animationDelay: '0.2s' }}>
                                        <strong>A transformative agency partner with creative spark.</strong>
                                    </h3>

                                    <p align="justify" className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo animi
                                      soluta ratione quisquam, dicta
                                      ab cupiditate iure eaque? Repellendus voluptatum, magni impedit delectus, beatae maxime temporibus
              maiores quibusdam.</p>
                                    <p align="justify" className="grey-text">Rem magnam ad perferendis iusto sint tempora ea voluptatibus iure,
                                      animi excepturi modi aut possimus
                                      in hic molestias repellendus illo ullam odit quia velit. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit.</p>
                                    <p align="justify" className="grey-text mb-5">Incidunt eligendi mollitia labore ipsum ex fugit explicabo saepe
                                      error neque beatae in, expedita
              eveniet quae aliquam assumenda voluptatibus!</p>

                                </div>

                            </div>

                        </section>

                        <hr />

                        <section id="features" className="mb-5 pb-4">

                            <h3 className="text-center title my-5 dark-grey-text font-weight-bold wow fadeIn" data-wow-delay="0.2s" style={{ visibility: 'visible', animationName: 'fadeIn', animationDelay: '0.2s' }}>
                                <strong>Why Us</strong>
                            </h3>

                            <p className="text-center w-responsive mx-auto my-5 grey-text wow fadeIn" data-wow-delay="0.2s" style={{ visibility: 'visible', animationName: 'fadeIn', animationDelay: '0.2s' }}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum quas, eos officia maiores ipsam ipsum
                                dolores reiciendis
          ad voluptas, animi obcaecati adipisci sapiente mollitia.</p>

                            <div className="row features-small wow fadeIn" data-wow-delay="0.4s" style={{ visibility: 'visible', animationName: 'fadeIn', animationDelay: '0.4s' }}>

                                <div className="col-lg-4 col-md-12">
                                    <div className="row mb-3">
                                        <div className="col-2">
                                            <i className="fas fa-edit pink-text fa-2x"></i>
                                        </div>
                                        <div className="col-10 mb-2">
                                            <h5 className="font-weight-bold title">Modern Tech</h5>
                                            <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores
                                              nam, aperiam
                                              minima.
                </p>
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col-2">
                                            <i className="fas fa-cogs pink-text fa-2x"></i>
                                        </div>
                                        <div className="col-10 mb-2">
                                            <h5 className="font-weight-bold title">Easy customize</h5>
                                            <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores
                                              nam, aperiam
                  minima assumenda.</p>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-2">
                                            <i className="fas fa-tablet-alt pink-text fa-2x"></i>
                                        </div>
                                        <div className="col-10 mb-2">
                                            <h5 className="font-weight-bold title">Responsive Work</h5>
                                            <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores
                  nam, aperiam.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-12 mb-1 text-center text-md-left">
                                    <img src={img1} alt="" className="z-depth-0 img-fluid" />
                                </div>

                                <div className="col-lg-4 col-md-12">
                                    <div className="row mb-3">
                                        <div className="col-2">
                                            <i className="fas fa-chart-line pink-text fa-2x"></i>
                                        </div>
                                        <div className="col-10 mb-2">
                                            <h5 className="font-weight-bold title">Optymized Quality</h5>
                                            <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores
                  nam, aperiam.</p>
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col-2">
                                            <i className="fas fa-users pink-text fa-2x"></i>
                                        </div>
                                        <div className="col-10 mb-2">
                                            <h5 className="font-weight-bold title">Technical support</h5>
                                            <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores
                                              nam, aperiam
                  minima assumenda.</p>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-2">
                                            <i className="far fa-gem pink-text fa-2x"></i>
                                        </div>
                                        <div className="col-10 mb-2">
                                            <h5 className="font-weight-bold title">High quality</h5>
                                            <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores
                                              nam, aperiam
                                              minima.
                </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </section>

                    </div>

                    <div className="streak streak-photo streak-long-2 rgba-pink-light" style={{ backgroundImage: `url(${img3})` }}>
                        <div className="flex-center mask rgba-pink-light">
                            <div className="container">

                                <h3 className="text-center mb-5 pb-4 white-text font-weight-bold wow fadeIn" data-wow-delay="0.2s" style={{ visibility: 'visible', animationName: 'fadeIn', animationDelay: '0.2s' }}>
                                    <strong>Some facts about us</strong>
                                </h3>

                                <div className="row text-center">

                                    <div className="col-md-3 mb-2">
                                        <h1 className="white-text mb-1 font-weight-bold">+950</h1>
                                        <p className="white-text">Happy clients</p>
                                    </div>

                                    <div className="col-md-3 mb-2">
                                        <h1 className="white-text mb-1 font-weight-bold">+150</h1>
                                        <p className="white-text">Projects completed</p>
                                    </div>

                                    <div className="col-md-3 mb-2">
                                        <h1 className="white-text mb-1 font-weight-bold">+85</h1>
                                        <p className="white-text">Winning awards</p>
                                    </div>

                                    <div className="col-md-3">
                                        <h1 className="white-text mb-1 font-weight-bold">+246</h1>
                                        <p className="white-text">Cups of coffee</p>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="container-fluid light-grey-background">
                        <div className="container py-4">

                            <section id="services" className="mt-3 mb-3 pb-3">

                                <h3 className="text-center title my-5 pt-4 pb-5 dark-grey-text font-weight-bold wow fadeIn" data-wow-delay="0.2s" style={{ visibility: 'visible', animationName: 'fadeIn', animationDelay: '0.2s' }}>
                                    <strong>Our services</strong>
                                </h3>

                                <div className="row wow fadeIn" data-wow-delay="0.4s" style={{ visibility: 'visible', animationName: 'fadeIn', animationDelay: '0.4s' }}>

                                    <div className="col-md-6 mb-4 text-center">

                                        <div className="card card-body text-left white hoverable">
                                            <p className="font-weight-bold title font-weight-bold dark-grey-text text-uppercase spacing mt-4 mx-4">
                                                <i className="fas fa-square pink-text mr-2" aria-hidden="true"></i>
                                                <strong>Business Strategy & Branding</strong>
                                            </p>
                                            <p className="grey-text font-small mx-4">Modern businesses require data-driven solutions. As a marketing agency, we take both a quantitative and qualitative approach to achieving business outcomes.</p>
                                            <ul className="font-small list-unstyled mx-4">
                                                <li className="services__point mb-2">Growth Strategy</li>
                                                <li className="services__point mb-2">Digital Strategy</li>
                                                <li className="services__point mb-2">Brand Strategy</li>
                                                <li className="services__point mb-2">Culture Strategy</li></ul>
                                            <p className="font-small font-weight-bold pink-text mx-4 mb-0 text-capitalize">
                                                <a>read more</a>
                                            </p>
                                            <p></p>
                                        </div>

                                    </div>

                                    <div className="col-md-6 mb-4 text-center">

                                        <div className="card card-body text-left white hoverable">
                                            <p className="font-weight-bold title font-weight-bold dark-grey-text text-uppercase spacing mt-4 mx-4">
                                                <i className="fas fa-square pink-text mr-2" aria-hidden="true"></i>
                                                <strong>Web Design & Development</strong>
                                            </p>
                                            <p className="grey-text font-small mx-4">Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                                              nesciunt sapiente earu
                                              proident. Ad vegan excepteur butcher vice lomo leggings.
                  </p> <ul className="font-small list-unstyled mx-4">
                                                <li className="services__point mb-2">Growth Strategy</li>
                                                <li className="services__point mb-2">Digital Strategy</li>
                                                <li className="services__point mb-2">Brand Strategy</li>
                                                <li className="services__point mb-2">Culture Strategy</li></ul>
                                            <p className="font-small font-weight-bold pink-text mx-4 mb-0 text-capitalize">
                                                <a>read more</a>
                                            </p>
                                            <p></p>
                                        </div>

                                    </div>

                                    <div className="col-md-6 mb-4 text-center">

                                        <div className="card card-body text-left white hoverable">
                                            <p className="font-weight-bold title font-weight-bold dark-grey-text text-uppercase spacing mt-4 mx-4">
                                                <i className="fas fa-square pink-text mr-2" aria-hidden="true"></i>
                                                <strong>Branding</strong>
                                            </p>
                                            <p className="grey-text font-small mx-4">Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                                              nesciunt sapiente earu
                                              proident. Ad vegan excepteur butcher vice lomo leggings.
                  </p> <ul className="font-small list-unstyled mx-4">
                                                <li className="services__point mb-2">Growth Strategy</li>
                                                <li className="services__point mb-2">Digital Strategy</li>
                                                <li className="services__point mb-2">Brand Strategy</li>
                                                <li className="services__point mb-2">Culture Strategy</li></ul>
                                            <p className="font-small font-weight-bold pink-text mx-4 mb-0 text-capitalize">
                                                <a>read more</a>
                                            </p>
                                            <p></p>
                                        </div>

                                    </div>

                                    <div className="col-md-6 mb-4 text-center">

                                        <div className="card card-body text-left white hoverable">
                                            <p className="font-weight-bold title font-weight-bold dark-grey-text text-uppercase spacing mt-4 mx-4">
                                                <i className="fas fa-square pink-text mr-2" aria-hidden="true"></i>
                                                <strong>Marketing & Communications</strong>
                                            </p>
                                            <p className="grey-text font-small mx-4">Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
                                              nesciunt sapiente earu
                                              proident. Ad vegan excepteur butcher vice lomo leggings.
                  </p> <ul className="font-small list-unstyled mx-4">
                                                <li className="services__point mb-2">Growth Strategy</li>
                                                <li className="services__point mb-2">Digital Strategy</li>
                                                <li className="services__point mb-2">Brand Strategy</li>
                                                <li className="services__point mb-2">Culture Strategy</li></ul>
                                            <p className="font-small font-weight-bold pink-text mx-4 mb-0 text-capitalize">
                                                <a>read more</a>
                                            </p>
                                            <p></p>
                                        </div>

                                    </div>

                                </div>

                            </section>

                        </div>
                    </div>

                    <div className="container">

                        <section className="mt-3 mb-5 pt-1 pb-5">

                            <h3 className="text-center title my-5 pt-4 pb-4 dark-grey-text font-weight-bold wow fadeIn" data-wow-delay="0.2s" style={{ visibility: 'visible', animationName: 'fadeIn', animationDelay: '0.2s' }}>
                                <strong>Our projects</strong>
                            </h3>

                            <div className="row">

                                <div className="col-md-12 d-flex justify-content-center mb-5 pb-2">

                                    <button type="button" className="btn btn-rounded btn-outline-pink font-weight-bold waves-effect waves-dark filter" data-rel="all">All</button>
                                    <button type="button" className="btn btn-rounded btn-outline-pink font-weight-bold waves-effect waves-dark filter" data-rel="1">Branding</button>
                                    <button type="button" className="btn btn-rounded btn-outline-pink font-weight-bold waves-effect waves-dark filter" data-rel="2">web design</button>

                                </div>

                            </div>

                            <div className="gallery" id="gallery">

                                <div className="mb-3 pics animation all 2">
                                    <img className="img-fluid" src={img58} alt="Card image cap" />
                                </div>

                                <div className="mb-3 pics animation all 1">
                                    <img className="img-fluid" src={img7} alt="Card image cap" />
                                </div>

                                <div className="mb-3 pics animation all 1">
                                    <img className="img-fluid" src={img4} alt="Card image cap" />
                                </div>

                                <div className="mb-3 pics animation all 2">
                                    <img className="img-fluid" src={img63} alt="Card image cap" />
                                </div>

                                <div className="mb-3 pics animation all 2">
                                    <img className="img-fluid" src={img64} alt="Card image cap" />
                                </div>

                                <div className="mb-3 pics animation all 1">
                                    <img className="img-fluid" src={img5} alt="Card image cap" />
                                </div>

                            </div>

                        </section>

                        <hr className="mt-5" />

                        <section className="team-section pb-5" id="team">

                            <h3 className="text-center title my-5 dark-grey-text font-weight-bold wow fadeIn" data-wow-delay="0.2s" style={{ visibility: 'visible', animationName: 'fadeIn', animationDelay: '0.2s' }}>
                                <strong>Our amazing team</strong>
                            </h3>

                            <p className="text-center w-responsive mx-auto my-5 grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing
                              elit. Fugit, error amet numquam iure provident voluptate
          esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur accusamus veniam.</p>

                            <div className="row text-center">

                                <div className="col-lg-3 col-md-6 mb-4">
                                    <div className="card card-body">
                                        <div className="avatar mx-auto mt-3 mb-3">
                                            <img src={img25} className="rounded-circle" alt="First sample avatar image" />
                                        </div>
                                        <h6 className="font-weight-bold title">Anna Deynah</h6>

                                        <p className="font-small grey-text">Graphic designer</p>

                                        <ul className="list-unstyled">
                                            <a className="p-2 m-2 fa-lg fb-ic">
                                                <i className="fab fa-facebook-f pink-text"> </i>
                                            </a>
                                            <a className="p-2 m-2 fa-lg tw-ic">
                                                <i className="fab fa-twitter pink-text"> </i>
                                            </a>
                                            <a className="p-2 m-2 fa-lg ins-ic">
                                                <i className="fab fa-instagram pink-text"> </i>
                                            </a>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 mb-4">
                                    <div className="card card-body">
                                        <div className="avatar mx-auto mt-3 mb-3">
                                            <img src={img9} className="rounded-circle" alt="First sample avatar image" />
                                        </div>
                                        <h6 className="font-weight-bold title">John Doe</h6>

                                        <p className="font-small grey-text">Web developer</p>

                                        <ul className="list-unstyled">
                                            <a className="p-2 m-2 fa-lg fb-ic">
                                                <i className="fab fa-facebook-f pink-text"> </i>
                                            </a>
                                            <a className="p-2 m-2 fa-lg ins-ic">
                                                <i className="fab fa-instagram pink-text"> </i>
                                            </a>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 mb-4">
                                    <div className="card card-body">
                                        <div className="avatar mx-auto mt-3 mb-3">
                                            <img src={img10} className="rounded-circle" alt="First sample avatar image" />
                                        </div>
                                        <h6 className="font-weight-bold title">Maria Smith</h6>

                                        <p className="font-small grey-text">Photographer</p>

                                        <ul className="list-unstyled">
                                            <a className="p-2 m-2 fa-lg fb-ic">
                                                <i className="fab fa-facebook-f pink-text"> </i>
                                            </a>
                                            <a className="p-2 m-2 fa-lg ins-ic">
                                                <i className="fab fa-instagram pink-text"> </i>
                                            </a>
                                            <a className="p-2 m-2 fa-lg ins-ic">
                                                <i className="fab fa-dribbble pink-text"> </i>
                                            </a>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 mb-4">
                                    <div className="card card-body">
                                        <div className="avatar mx-auto mt-3 mb-3">
                                            <img src={img8} className="rounded-circle" alt="First sample avatar image" />
                                        </div>
                                        <h6 className="font-weight-bold title">Tom Adams</h6>

                                        <p className="font-small grey-text">Backend developer</p>

                                        <ul className="list-unstyled">
                                            <a className="p-2 m-2 fa-lg fb-ic">
                                                <i className="fab fa-facebook-f pink-text"> </i>
                                            </a>
                                            <a className="p-2 m-2 fa-lg ins-ic">
                                                <i className="fab fa-github pink-text"> </i>
                                            </a>
                                        </ul>
                                    </div>
                                </div>

                            </div>

                        </section>

                        <hr />

                            <section id="contact" className="mb-5">

                                <h3 className="text-center title my-5 py-4 dark-grey-text font-weight-bold wow fadeIn" data-wow-delay="0.2s" style={{ visibility: 'visible', animationName: 'fadeIn', animationDelay: '0.2s' }}>
                                    <strong>Contact us</strong>
                                </h3>

                                <p className="text-center grey-text my-5 w-responsive mx-auto wow fadeIn" data-wow-delay="0.2s" style={{ visibility: 'visible', animationName: 'fadeIn', animationDelay: '0.2s' }}>Lorem ipsum dolor
                                  sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate
          esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur accusamus veniam.</p>

                                <div className="row wow fadeIn" data-wow-delay="0.4s" style={{ visibility: 'visible', animationName: 'fadeIn', animationDelay: '0.4s' }}>
                                    <div className="col-md-8 col-lg-9">
                                        <form>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="md-form">
                                                        <div className="md-form">
                                                            <input type="text" id="form41" className="form-control" />
                                                            <label htmlFor="form41" className="">Your name</label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="md-form">
                                                        <div className="md-form">
                                                            <input type="text" id="form52" className="form-control" />
                                                            <label htmlFor="form52" className="">Your email</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="md-form">
                                                        <input type="text" id="form51" className="form-control" />
                                                        <label htmlFor="form51" className="">Subject</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-12">

                                                    <div className="md-form">
                                                        <textarea type="text" id="form76" className="md-textarea form-control" rows="3"></textarea>
                                                        <label htmlFor="form76">Your message</label>
                                                    </div>

                                                </div>
                                            </div>
                                        </form>

                                        <div className="text-center text-md-left mb-5 mt-4">
                                            <a className="btn btn-rounded btn-outline-pink font-weight-bold waves-effect waves-dark">Send</a>
                                        </div>
                                    </div>

                                    <div className="col-md-4 col-lg-3">
                                        <ul className="text-center list-unstyled float-md-right">
                                            <li>
                                                <i className="fas fa-map-marker-alt fa-2x title"></i>
                                                <p>New York, NY 10012, USA</p>
                                            </li>

                                            <li>
                                                <i className="fas fa-phone fa-2x title"></i>
                                                <p>+ 01 234 567 89</p>
                                            </li>

                                            <li>
                                                <i className="fas fa-envelope fa-2x title"></i>
                                                <p>contact@gmail.com</p>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </section>

    </div>

  </main>

      </React.Fragment>
                );
              }
            }
