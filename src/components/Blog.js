import React, { Component } from 'react'
import '../vendor/bootstrap/css/bootstrap.css'
// import profile from '../img/profile.png'
import '../styles/freelancer.min.css'
import '../styles/log.css'
import _ from 'lodash'
import profile from '../img/profile.png'

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

      <div id='skipnav'><a href='#maincontent'>Skip to main content</a></div>

      <nav id='mainNav' className='navbar navbar-default navbar-fixed-top navbar-custom'>
        <div className='container'>
          <div className='navbar-header page-scroll'>
            <div>
              <NavLink className='navbar-brand' to='/travellog'>Log</NavLink>
              <NavLink className='navbar-brand' to='/'>Exit</NavLink>
              <div className='navbar-brand'><h6>{store.convertDate(store.date)}</h6></div>
              <div className='navbar-brand'><h6>{store.user.email}</h6></div>
            </div>
          </div>
          <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1' />
        </div>
      </nav>

      <header>
        <div className='container' id='maincontent' tabIndex='-1'>
          <div className='row'>
            <div className='col-lg-12'>
              <img className='img-responsive' src={profile} alt='' />
              <div className='intro-text'>
                <h1 className='name'>Need a Vacation?</h1>
                <hr className='star-light' />
                <span className='skills'>Use Travel Log</span>
              </div>
            </div>
          </div>
        </div>
      </header>

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
          {_.map(this.state.entries, (log, date) => {
            return <div key={date}>
              {console.log('lat 1 ' + log.location.lat)}
              <div className='row'>
                <div className='col-lg-12 text-center'>
                  <h2>{store.convertDate(date)}</h2>
                  <br />
                  <br />
                  <img src={log.pictures} />
                  <hr className='star-primary' />
                </div>
              </div>

              <div className='row'>
                <div className='col-lg-12 text-center'>
                  <ReadOnlyMap center={{lat: log.location.lat, lng: log.location.lng}} zoom={log.location.zoom} />
                  <hr className='star-primary' />
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
              </div>
            </div>
          })}
        </div>
      </section>

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
              <p>Travel Log is an application which allows the user to document his vacation or experience by uploading a photo, choosing a spot on a Google map and writing a message.</p>
            </div>
            <div className='col-lg-4'>
              <p>We strive to make your Travels more memorable by providing this application!  We hope you enjoy yourselves.  Remember to be safe!!</p>
            </div>
          </div>
        </div>
      </section>

      <footer className='text-center'>
        <div className='footer-below'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                        Copyright &copy; KEITH LOCKEY 2017
                    </div>
            </div>
          </div>
        </div>
      </footer>

      <div className='scroll-top page-scroll hidden-sm hidden-xs hidden-lg hidden-md'>
        <a className='btn btn-primary' href='#page-top'>
          <i className='fa fa-chevron-up' />
        </a>
      </div>

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
  }
}

export default Blog
