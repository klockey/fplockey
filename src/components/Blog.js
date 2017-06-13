import React, { Component } from 'react'
import '../vendor/bootstrap/css/bootstrap.css'
// import profile from '../img/profile.png'
import '../styles/freelancer.min.css'
import '../styles/log.css'
import _ from 'lodash'

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
import ReadOnlyMap from './ReadOnlyMap'
import TravelLog from './TravelLog'

@observer
class Blog extends Component {
  state = {
    entries: {}
  }

  componentWillMount () {
    console.log('hello blog')
    var query = db.ref('users/' + store.user.uid + '/logs/').orderByKey()
    query.once('value').then((snapshot) => {
      this.setState({
        entries: snapshot.val()
      })
    })
  }

  componentDidMount () {
    console.log('hello blog2')
  }

  render () {
    return <div className='TravelLog'>
      {/* <body id="page-top" class="index"> */}
      <div id='skipnav'><a href='#maincontent'>Skip to main content</a></div>

      {/* <!-- Navigation --> */}
      <nav id='mainNav' className='navbar navbar-default navbar-fixed-top navbar-custom'>
        <div className='container'>
          {/* <!-- Brand and toggle get grouped for better mobile display --> */}
          <div className='navbar-header page-scroll'>
            {/* <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1'> */}
            {/* <span className='sr-only'>Toggle navigation</span> Menu <i className='fa fa-bars' /> */}
            {/* </button> */}
            {/* <a className='navbar-brand' href='#page-top'>Travel Log</a> */}
            <div>
              <NavLink className='navbar-brand' to='/travellog'>Log</NavLink>
              <NavLink className='navbar-brand' to='/'>Exit</NavLink>
            </div>
          </div>
          {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
          <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1' />
          {/* <!-- /.navbar-collapse --> */}
        </div>
        {/* <!-- /.container-fluid --> */}
      </nav>

      {/* <!-- Header --> */}
      <header>
        <div className='container' id='maincontent' tabIndex='-1'>
          <div className='row'>
            <div className='col-lg-12'>
              {/* <img className='img-responsive' src={profile} alt='' /> */}
              <div className='intro-text'>
                <h1 className='name'>Need a Vacation?</h1>
                <hr className='star-light' />
                <span className='skills'>Use Travel Log</span>
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
              <br />
              <br />
              <br />
            </div>
          </div>
          {/* <div className='row'> */}
          {_.map(this.state.entries, (log, date) => {
            return <div key={date}>
              {console.log('lat 1 ' + log.location.lat)}
              <div className='row'>
                <div className='col-lg-12 text-center'>
                  <h2>{store.convertDate(date)}</h2>
                  <br />
                  <br />
                  <img src={log.pictures} />
                  {/* <hr className='star-primary' /> */}
                </div>
              </div>
              {/* </div> */}

              <div className='row'>
                <div className='col-lg-12 text-center'>
                  <ReadOnlyMap center={{lat: log.location.lat, lng: log.location.lng}} zoom={log.location.zoom} />
                  {/* <hr className='star-primary' /> */}
                </div>
              </div>

              <div className='row'>
                <div className='col-lg-12 text-center'>
                  <br />
                  <br />
                  <br />
                  <p>{log.entry}</p>
                  <br />
                  <br />
                  <hr className='star-primary' />
                  <br />
                  <br />
                </div>
                {/* </div> */}
              </div>
            </div>
          })}
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
                  <img src='img/portfolio/circus.png' className='img-responsive img-centered' alt='' />
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

export default Blog
