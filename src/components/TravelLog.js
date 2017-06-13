import React, { Component } from 'react'
// import $ from 'jquery'
// window.jQuery = $
// import '../vendor/bootstrap/css/bootstrap.min.css'
import '../vendor/bootstrap/css/bootstrap.css'
import profile from '../img/profile.png'
// import cabin from '../img/portfolio/cabin.png'
// import cake from '../img/portfolio/cake.png'
// import circus from '../img/portfolio/circus.png'
// import game from '../img/portfolio/game.png'
// import safe from '../img/portfolio/safe.png'
// import submarine from '../img/portfolio/submarine.png'

import '../styles/freelancer.min.css'
import '../styles/log.css'

import TextArea from './TextArea'
import Photo from './Photo'
import MapLog from './MapLog'
import db from '../db'
import Loading from './Loading'
import store from '../store'
import { observer } from 'mobx-react'
import {
  Link,
  NavLink
} from 'react-router-dom'

// import '../vendor/jquery/jquery.min.js'
// import '../vendor/bootstrap/js/bootstrap.min.js'
// import 'https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js'
// import '../js/jqBootstrapValidation.js'
// import '../js/contact_me.js'
// import '../js/freelancer.min.js'
// import '../styles/vendor/font-awesome/css/font-awesome.min.css'

@observer
class TravelLog extends Component {
  state = {
    lat: 0,
    lng: 0,
    zoom: 0,
    loaded: false
  }

  componentDidMount () {
    this.updateLocation()
    console.log('travellog from sign in')
  }

  componentWillReact () {
    this.updateLocation()
  }

  updateLocation () {
    this.dbRefObject = db.ref(`/users/${store.user.uid}/logs/${store.date}/location`)
    this.dbRefObject.once('value', snapshot => {
      let log = snapshot.val()
      console.log({log})
  //  if (log !== null) {
      this.setState({
        lat: log.lat,
        lng: log.lng,
        zoom: log.zoom,
        loaded: true
      })
  //  }
    })
  // }
  }
  render () {
    return <div className='TravelLog'>
      {/* <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Freelancer - Start Bootstrap Theme</title> */}

      {/* <!-- Bootstrap Core CSS --> */}
      {/* <link href='vendor/bootstrap/css/bootstrap.min.css' rel='stylesheet' /> */}
      {/* <!-- Theme CSS --> */}
      {/* <link href='css/freelancer.min.css' rel='stylesheet' /> */}
      {/* <!-- Custom Fonts --> */}
      {/* <link href='vendor/font-awesome/css/font-awesome.min.css' rel='stylesheet' type='text/css' /> */}
      {/* <link href='https://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css' /> */}
      {/* <link href='https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic' rel='stylesheet' type='text/css' /> */}

      {/* <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
     <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]--> */}
      {/* </head> */}

      {/* <body id="page-top" class="index"> */}
      <div id='skipnav'><a href='#maincontent'>Skip to main content</a></div>

      {/* <!-- Navigation --> */}
      <nav id='mainNav' className='navbar navbar-default navbar-fixed-top navbar-custom'>
        <div className='container'>
          {/* <!-- Brand and toggle get grouped for better mobile display --> */}
          <div className='navbar-header page-scroll text-center'>
            {/* <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1'> */}
            {/* <span className='sr-only'>Toggle navigation</span> Menu <i className='fa fa-bars' /> */}
            {/* </button> */}
            <div className='text-center'>
              {/* <h2><a className='navbar-brand' href='#page-top'>Log</a> </h2> */}
              {/* </div> */}
              {/* <div className='text-center'> */}
              <NavLink className='navbar-brand' to='/blog'> Entries </NavLink>
              <NavLink className='navbar-brand' to='/'> Exit </NavLink>
            </div>
          </div>

          {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
          <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
            {/* <ul className='nav navbar-nav navbar-right'>
              <li className='hidden'>
                <a href='#page-top' />
              </li>
              <li className='page-scroll'>
                <a href='#portfolio'>Portfolio</a>
              </li>
              <li className='page-scroll'>
                <a href='#about'>About</a>
              </li>
              <li className='page-scroll'>
                <a href='#contact'>Contact</a>
              </li>
            </ul> */}
          </div>
          {/* <!-- /.navbar-collapse --> */}
        </div>
        {/* <!-- /.container-fluid --> */}
      </nav>

      {/* <!-- Header --> */}
      <header>
        <div className='container' id='maincontent' tabIndex='-1'>
          <div className='row'>
            <div className='col-lg-12'>
              <img className='img-responsive' src={profile} alt='' />
              <div className='intro-text'>
                <h1 className='name'>Travel Log</h1>
                <hr className='star-light' />
                <span className='skills'>Need a Vacation?</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* <!-- Portfolio Grid Section --> */}
      <section id='portfolio'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 text-center'>
              <h2>Trip Information</h2>
              <hr className='star-primary' />
            </div>
          </div>
          {/* <div className='row'> */}
          <div className='row'>
            <div className='col-lg-12 text-center'>
              <Photo />
              <hr className='star-primary' />
            </div>
          </div>
          {/* </div> */}

          <div className='row'>
            <div className='col-lg-12 text-center'>
              <MapLog center={{lat: this.state.lat, lng: this.state.lng}}
                zoom={this.state.zoom} />
              <hr className='star-primary' />
            </div>
          </div>

          <div className='row'>
            <div className='col-lg-12 text-center'>
              <TextArea />
              <hr className='star-primary' />
            </div>
            {/* </div> */}
          </div>
        </div>
      </section>

      {/* <!-- About Section --> */}
      <section className='success' id='about'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 text-center'>
              <h2>About</h2>
              <hr className='star-light' />
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-lg-offset-2'>
              <p>Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional LESS stylesheets for easy customization.</p>
            </div>
            <div className='col-lg-4'>
              <p>Whether you're a student looking to showcase your work, a professional looking to attract clients, or a graphic artist looking to share your projects, this template is the perfect starting point!</p>
            </div>
            <div className='col-lg-8 col-lg-offset-2 text-center'>
              <a href='#' className='btn btn-lg btn-outline'>
                <i className='fa fa-download' /> Download Theme
                    </a>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Contact Section --> */}
      <section id='contact'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 text-center'>
              <h2>Contact Me</h2>
              <hr className='star-primary' />
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-8 col-lg-offset-2'>
              {/* <!-- To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. --> */}
              {/* <!-- The form should work on most web servers, but if the form is not working you may need to configure your web server differently. --> */}
              <form name='sentMessage' id='contactForm' noValidate>
                <div className='row control-group'>
                  <div className='form-group col-xs-12 floating-label-form-group controls'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' className='form-control' placeholder='Name' id='name' required data-validation-required-message='Please enter your name.' />
                    <p className='help-block text-danger' />
                  </div>
                </div>
                <div className='row control-group'>
                  <div className='form-group col-xs-12 floating-label-form-group controls'>
                    <label htmlFor='email'>Email Address</label>
                    <input type='email' className='form-control' placeholder='Email Address' id='email' required data-validation-required-message='Please enter your email address.' />
                    <p className='help-block text-danger' />
                  </div>
                </div>
                <div className='row control-group'>
                  <div className='form-group col-xs-12 floating-label-form-group controls'>
                    <label htmlFor='phone'>Phone Number</label>
                    <input type='tel' className='form-control' placeholder='Phone Number' id='phone' required data-validation-required-message='Please enter your phone number.' />
                    <p className='help-block text-danger' />
                  </div>
                </div>
                <div className='row control-group'>
                  <div className='form-group col-xs-12 floating-label-form-group controls'>
                    <label htmlFor='message'>Message</label>
                    <textarea rows='5' className='form-control' placeholder='Message' id='message' required data-validation-required-message='Please enter a message.' />
                    <p className='help-block text-danger' />
                  </div>
                </div>
                <br />
                <div id='success' />
                <div className='row'>
                  <div className='form-group col-xs-12'>
                    <button type='submit' className='btn btn-success btn-lg'>Send</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Footer --> */}
      <footer className='text-center'>
        <div className='footer-above'>
          <div className='container'>
            <div className='row'>
              <div className='footer-col col-md-4'>
                <h3>Location</h3>
                <p>3481 Melrose Place
                            <br />Beverly Hills, CA 90210</p>
              </div>
              <div className='footer-col col-md-4'>
                <h3>Around the Web</h3>
                <ul className='list-inline'>
                  <li>
                    <a href='#' className='btn-social btn-outline'><span className='sr-only'>Facebook</span><i className='fa fa-fw fa-facebook' /></a>
                  </li>
                  <li>
                    <a href='#' className='btn-social btn-outline'><span className='sr-only'>Google Plus</span><i className='fa fa-fw fa-google-plus' /></a>
                  </li>
                  <li>
                    <a href='#' className='btn-social btn-outline'><span className='sr-only'>Twitter</span><i className='fa fa-fw fa-twitter' /></a>
                  </li>
                  <li>
                    <a href='#' className='btn-social btn-outline'><span className='sr-only'>Linked In</span><i className='fa fa-fw fa-linkedin' /></a>
                  </li>
                  <li>
                    <a href='#' className='btn-social btn-outline'><span className='sr-only'>Dribble</span><i className='fa fa-fw fa-dribbble' /></a>
                  </li>
                </ul>
              </div>
              <div className='footer-col col-md-4'>
                <h3>About Freelancer</h3>
                <p>Freelance is a free to use, open source Bootstrap theme created by <a href='http://startbootstrap.com'>Start Bootstrap</a>.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='footer-below'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                        Copyright &copy; Your Website 2016
                    </div>
            </div>
          </div>
        </div>
      </footer>

      {/* <!-- Scroll to Top Button (Only visible on small and extra-small screen sizes) --> */}
      <div className='scroll-top page-scroll hidden-sm hidden-xs hidden-lg hidden-md'>
        <a className='btn btn-primary' href='#page-top'>
          <i className='fa fa-chevron-up' />
        </a>
      </div>

      {/* <!-- Portfolio Modals --> */}
      <div className='portfolio-modal modal fade' id='portfolioModal1' tabIndex='-1' role='dialog' aria-hidden='true'>
        <div className='modal-content'>
          <div className='close-modal' data-dismiss='modal'>
            <div className='lr'>
              <div className='rl' />
            </div>
          </div>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8 col-lg-offset-2'>
                <div className='modal-body'>
                  <h2>Project Title</h2>
                  <hr className='star-primary' />
                  {/* <img src='img/portfolio/cabin.png' className='img-responsive img-centered' alt='' /> */}
                  <p>Use this area of the page to describe your project. The icon above is part of a free icon set by <a href='https://sellfy.com/p/8Q9P/jV3VZ/'>Flat Icons</a>. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!</p>
                  <ul className='list-inline item-details'>
                    <li>Client:
                                    <strong><a href='http://startbootstrap.com'>Start Bootstrap</a>
                                    </strong>
                    </li>
                    <li>Date:
                                    <strong><a href='http://startbootstrap.com'>April 2014</a>
                                    </strong>
                    </li>
                    <li>Service:
                                    <strong><a href='http://startbootstrap.com'>Web Development</a>
                                    </strong>
                    </li>
                  </ul>
                  <button type='button' className='btn btn-default' data-dismiss='modal'><i className='fa fa-times' /> Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='portfolio-modal modal fade' id='portfolioModal2' tabIndex='-1' role='dialog' aria-hidden='true'>
        <div className='modal-content'>
          <div className='close-modal' data-dismiss='modal'>
            <div className='lr'>
              <div className='rl' />
            </div>
          </div>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8 col-lg-offset-2'>
                <div className='modal-body'>
                  <h2>Project Title</h2>
                  <hr className='star-primary' />
                  {/* <img src='img/portfolio/cake.png' className='img-responsive img-centered' alt='' /> */}
                  <p>Use this area of the page to describe your project. The icon above is part of a free icon set by <a href='https://sellfy.com/p/8Q9P/jV3VZ/'>Flat Icons</a>. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!</p>
                  <ul className='list-inline item-details'>
                    <li>Client:
                                    <strong><a href='http://startbootstrap.com'>Start Bootstrap</a>
                                    </strong>
                    </li>
                    <li>Date:
                                    <strong><a href='http://startbootstrap.com'>April 2014</a>
                                    </strong>
                    </li>
                    <li>Service:
                                    <strong><a href='http://startbootstrap.com'>Web Development</a>
                                    </strong>
                    </li>
                  </ul>
                  <button type='button' className='btn btn-default' data-dismiss='modal'><i className='fa fa-times' /> Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='portfolio-modal modal fade' id='portfolioModal3' tabIndex='-1' role='dialog' aria-hidden='true'>
        <div className='modal-content'>
          <div className='close-modal' data-dismiss='modal'>
            <div className='lr'>
              <div className='rl' />
            </div>
          </div>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8 col-lg-offset-2'>
                <div className='modal-body'>
                  <h2>Project Title</h2>
                  <hr className='star-primary' />
                  {/* <img src='img/portfolio/circus.png' className='img-responsive img-centered' alt='' /> */}
                  <p>Use this area of the page to describe your project. The icon above is part of a free icon set by <a href='https://sellfy.com/p/8Q9P/jV3VZ/'>Flat Icons</a>. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!</p>
                  <ul className='list-inline item-details'>
                    <li>Client:
                                    <strong><a href='http://startbootstrap.com'>Start Bootstrap</a>
                                    </strong>
                    </li>
                    <li>Date:
                                    <strong><a href='http://startbootstrap.com'>April 2014</a>
                                    </strong>
                    </li>
                    <li>Service:
                                    <strong><a href='http://startbootstrap.com'>Web Development</a>
                                    </strong>
                    </li>
                  </ul>
                  <button type='button' className='btn btn-default' data-dismiss='modal'><i className='fa fa-times' /> Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='portfolio-modal modal fade' id='portfolioModal4' tabIndex='-1' role='dialog' aria-hidden='true'>
        <div className='modal-content'>
          <div className='close-modal' data-dismiss='modal'>
            <div className='lr'>
              <div className='rl' />
            </div>
          </div>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8 col-lg-offset-2'>
                <div className='modal-body'>
                  <h2>Project Title</h2>
                  <hr className='star-primary' />
                  {/* <img src='img/portfolio/game.png' className='img-responsive img-centered' alt='' /> */}
                  <p>Use this area of the page to describe your project. The icon above is part of a free icon set by <a href='https://sellfy.com/p/8Q9P/jV3VZ/'>Flat Icons</a>. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!</p>
                  <ul className='list-inline item-details'>
                    <li>Client:
                                    <strong><a href='http://startbootstrap.com'>Start Bootstrap</a>
                                    </strong>
                    </li>
                    <li>Date:
                                    <strong><a href='http://startbootstrap.com'>April 2014</a>
                                    </strong>
                    </li>
                    <li>Service:
                                    <strong><a href='http://startbootstrap.com'>Web Development</a>
                                    </strong>
                    </li>
                  </ul>
                  <button type='button' className='btn btn-default' data-dismiss='modal'><i className='fa fa-times' /> Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='portfolio-modal modal fade' id='portfolioModal5' tabIndex='-1' role='dialog' aria-hidden='true'>
        <div className='modal-content'>
          <div className='close-modal' data-dismiss='modal'>
            <div className='lr'>
              <div className='rl' />
            </div>
          </div>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8 col-lg-offset-2'>
                <div className='modal-body'>
                  <h2>Project Title</h2>
                  <hr className='star-primary' />
                  {/* <img src='img/portfolio/safe.png' className='img-responsive img-centered' alt='' /> */}
                  <p>Use this area of the page to describe your project. The icon above is part of a free icon set by <a href='https://sellfy.com/p/8Q9P/jV3VZ/'>Flat Icons</a>. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!</p>
                  <ul className='list-inline item-details'>
                    <li>Client:
                                    <strong><a href='http://startbootstrap.com'>Start Bootstrap</a>
                                    </strong>
                    </li>
                    <li>Date:
                                    <strong><a href='http://startbootstrap.com'>April 2014</a>
                                    </strong>
                    </li>
                    <li>Service:
                                    <strong><a href='http://startbootstrap.com'>Web Development</a>
                                    </strong>
                    </li>
                  </ul>
                  <button type='button' className='btn btn-default' data-dismiss='modal'><i className='fa fa-times' /> Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='portfolio-modal modal fade' id='portfolioModal6' tabIndex='-1' role='dialog' aria-hidden='true'>
        <div className='modal-content'>
          <div className='close-modal' data-dismiss='modal'>
            <div className='lr'>
              <div className='rl' />
            </div>
          </div>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8 col-lg-offset-2'>
                <div className='modal-body'>
                  <h2>Project Title</h2>
                  <hr className='star-primary' />
                  {/* <img src='img/portfolio/submarine.png' className='img-responsive img-centered' alt='' /> */}
                  <p>Use this area of the page to describe your project. The icon above is part of a free icon set by <a href='https://sellfy.com/p/8Q9P/jV3VZ/'>Flat Icons</a>. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!</p>
                  <ul className='list-inline item-details'>
                    <li>Client:
                                    <strong><a href='http://startbootstrap.com'>Start Bootstrap</a>
                                    </strong>
                    </li>
                    <li>Date:
                                    <strong><a href='http://startbootstrap.com'>April 2014</a>
                                    </strong>
                    </li>
                    <li>Service:
                                    <strong><a href='http://startbootstrap.com'>Web Development</a>
                                    </strong>
                    </li>
                  </ul>
                  <button id='btnSubmit' type='button' className='btn btn-default' data-dismiss='modal'><i className='fa fa-times' /> Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <!-- jQuery -->
    // <script src="vendor/jquery/jquery.min.js"></script>

    // <!-- Bootstrap Core JavaScript -->
    // <script src="vendor/bootstrap/js/bootstrap.min.js"></script>

    // <!-- Plugin JavaScript -->
    // <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>

    // <!-- Contact Form JavaScript -->
    // <script src="js/jqBootstrapValidation.js"></script>
    // <script src="js/contact_me.js"></script>

    // <!-- Theme JavaScript -->
    // <script src="js/freelancer.min.js"></script>
  }
}

export default TravelLog
