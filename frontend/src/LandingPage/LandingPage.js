import React from 'react';
import { Login } from '../Login/Login';
import { Signup } from '../Signup/Signup';
import './LandingPage.css'
import img3 from './elearning.png';
import img1 from './elearning2.jpg';
import img2 from './elearning3.jpg';
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs"
import {devs} from './devs';

export default class LandingPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoginScreen: true
    }
  }

  toggleForm = () => {
    this.setState({isLoginScreen: !this.state.isLoginScreen})
  }

  render () {
    const {isLoginScreen} = this.state
    const loginbtnText = isLoginScreen ? "Sign up now" : "Sign in"
    const loginMsgText =isLoginScreen ? "Not a member?" : "Already a member?"
    return(
      <div id='full-page'>
        <div id='main-section'>
          <div id='main-app-info'>
            <h1 className='landing-text'>Get producktiv today!</h1>
            <div className="main-info">
              <img className='main-image' src={img3} alt="img" />
              <h3 id='intro-text'>Get started today and begin to tap into your full potentials as you learn and share knowledge and skills you are passionate about with fellow peers.</h3>
            </div>
          </div>
          <div className="login-section">
            <div className="login-header">
              <p>{loginMsgText}&nbsp;
                <button onClick={()=>this.toggleForm()} className="login-toggle">{loginbtnText}</button>
              </p>
            </div>
            {isLoginScreen ? <Login statusCode={this.props.statusCode} isLoading={this.props.isLoading} logIn={this.props.logIn}/> : <Signup toggleForm={this.toggleForm}/>}
          </div>
        </div>
        <div id='info-section'>
          <div className="info">
            <img className='info-image' id='img1' src={img1} alt="img" />
            <h3 id='info-text'>Reinforce your knowledge and skills as you tutor others.</h3>
          </div>
          <div className="info">
            <img className='info-image' id='img2' src={img2} alt="img" />
            <h3 id='info-text'> Improve your weaknesses by learning from other tutors</h3>
          </div>
        </div>
        <div id='about-section'>
          <h1 id='about-title'>About</h1>
          
          <p className='app-desc'>
            The objective of Producktiv is to bring together people from different fields who would like to
            collaborate and share ideas with other people. This helps you as a tutor, to share useful resources as well as get your content out
            there and as a student, to learn various skills without any cost to you.<br/><br/>
            <a href='https://github.com/Timi-T/producktiv/' target='blank'><BsGithub /> Link to the Project Repository</a>
          </p>
          <h1 id='team-info'>Meet the Team!</h1>
          <div id='developers'>
            {devs.map(dev => {
              return (
                <div className='person'>
                  <div className='person-desc'>
                    <img className='person-image' src={dev.photo} alt={dev.name} />
                    <h4 className='person-name'>{dev.name}</h4>
                  </div>
                  <p className='person-text'>
                      {dev.desc}
                  </p>
                  <div className='contacts'>
                    <div className='icon'><a a href={dev.info.github} target='blank'><BsGithub /></a></div>
                    <div className='icon'><a a href={dev.info.linkedin} target={'blank'}><BsLinkedin /></a></div>
                    <div className='icon'><a a href={dev.info.twitter} target={'blank'}><BsTwitter /></a></div>
                  </div>
                </div>
              )
            })}
            
          </div>
        </div>
      </div>
    )
  }
}
