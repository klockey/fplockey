import React, { Component } from 'react'
import '../vendor/bootstrap/css/bootstrap.css'
import profile from '../img/profile.png'
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
      this.setState({
        lat: log.lat,
        lng: log.lng,
        zoom: log.zoom,
        loaded: true
      })
    })
  }
  render () {
    return <div className='TravelLog'>
      <div id='skipnav'><a href='#maincontent'>Skip to main content</a></div>
      <nav id='mainNav' className='navbar navbar-default navbar-fixed-top navbar-custom'>
        <div className='container'>
          <div className='navbar-header page-scroll text-center'>
            <div className='text-center'>
              <NavLink className='navbar-brand' to='/blog'> Entries </NavLink>
              <NavLink className='navbar-brand' to='/'> Exit </NavLink>
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
                <h1 className='name'>Travel Log</h1>
                <hr className='star-light' />
                <span className='skills'>Need a Vacation?</span>
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
            </div>
          </div>

          <div className='row'>
            <div className='col-lg-12 text-center'>
              <Photo />
              <hr className='star-primary' />
            </div>
          </div>

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

          </div>
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
              <p>Travel Log is an application allowing the user to document his vacation or experience by uploading a photo, choosing a spot on a Google map and writing a message.</p>
            </div>
            <div className='col-lg-4'>
              <p> We strive to make your Travels more memorable by providing this application!  We hope you enjoy yourselves.  Remember to be safe!! </p>
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

export default TravelLog
