import React from 'react';
import {Link, useLocation, Outlet} from 'react-router-dom'
import bear from './bear.png'

export function Home() {
  return (
    <div>
      <h1 style={{textAlign: 'center', alignSelf: 'center', fontSize: 90, color: 'white'}}>
        TECHWEBBIE
      </h1>
      <header> 
      <nav style={{textAlign: 'center', alignSelf: 'center'}}>
      <button style={{fontSize: 30}}><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="about">About</Link></button>
      <button style={{fontSize: 30}}><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="events">Events</Link></button>
      <button style={{fontSize: 30}}><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="contact">Contacts</Link></button>
    </nav>
      </header>
    </div>
  )
}

export function About() {
  return (
    <div>
      <h1 style={{color: 'violet', fontSize: 40, textAlign: 'center', alignSelf: 'center', height: 10}}>Technology</h1>
      <h2 style={{color: 'violet', fontSize: 40, textAlign: 'center', alignSelf: 'center', height: 10}}>Engages</h2>
      <h3 style={{color: 'violet', fontSize: 40, textAlign: 'center', alignSelf: 'center', height: 10}}>Connects</h3>
      <h3 style={{color: 'violet', fontSize: 40, textAlign: 'center', alignSelf: 'center', height: 10}}>Humans!</h3>
      <nav style={{color: 'violet', fontSize: 40, textAlign: 'center', alignSelf: 'center'}}>
      <button style={{fontSize: 20}}><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/">Home</Link></button>
      <button style={{fontSize: 20}}><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="history">CompanyHistory</Link></button>
      <button style={{fontSize: 20}}><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="location">Location</Link></button>
      <button style={{fontSize: 20}}><Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/events">Events</Link></button>
      </nav>
      <Outlet />
    </div>
  )
}

export function CompanyHistory() {
  return (
    <div style={{display: 'finite', color: 'black', backgroundColor: 'white', textAlign: 'center', alignSelf: 'center'}}>
      <h1 style={{color: 'black', backgroundColor: 'white', textAlign: 'center', alignSelf: 'center', fontSize: 20}}>Our Company History</h1>
      <p style={{color: 'black', backgroundColor: 'white', textAlign: 'center', alignSelf: 'center'}}> Hello, thank you for visiting TechWebbies, where we serve technology not only for the techie but all for the weebs and the newbies! Hello, thank you for visiting TechWebbies, where we serve technology not only for the techie but all for the weebs and the newbies! Hello, thank you for visiting TechWebbies, where we serve technology not only for the techie but all for the weebs and the newbies! Hello, thank you for visiting TechWebbies, where we serve technology not only for the techie but all for the weebs and the newbies! Hello, thank you for visiting TechWebbies, where we serve technology not only for the techie but all for the weebs and the newbies! Hello, thank you for visiting TechWebbies, where we serve technology not only for the techie but all for the weebs and the newbies! Hello, thank you for visiting TechWebbies, where we serve technology not only for the techie but all for the weebs and the newbies! Hello, thank you for visiting TechWebbies, where we serve technology not only for the techie but all for the weebs and the newbies!  Hello, thank you for visiting TechWebbies, where we serve technology not only for the techie but all for the weebs and the newbies!Hello, thank you for visiting TechWebbies, where we serve technology not only for the techie but all for the weebs and the newbies!</p>
      <p style={{color: 'black', backgroundColor: 'white', textAlign: 'center', alignSelf: 'center'}}> Hello, thank you for visiting TechWebbies, where we serve technology not only for the techie but all for the weebs and the newbies! Hello, thank you for visiting TechWebbies, where we serve technology not only for the techie but all for the weebs and the newbies! Hello, thank you for visiting TechWebbies, where we serve technology not only for the techie but all for the weebs and the newbies! Hello, thank you for visiting TechWebbies, where we serve technology not only for the techie but all for the weebs and the newbies! Hello, thank you for visiting TechWebbies, where we serve technology not only for the techie but all for the weebs and the newbies! Hello, thank you for visiting TechWebbies, where we serve technology not only for the techie but all for the weebs and the newbies! Hello, thank you for visiting TechWebbies, where we serve technology not only for the techie but all for the weebs and the newbies! Hello, thank you for visiting TechWebbies, where we serve technology not only for the techie but all for the weebs and the newbies!  Hello, thank you for visiting TechWebbies, where we serve technology not only for the techie but all for the weebs and the newbies!Hello, thank you for visiting TechWebbies, where we serve technology not only for the techie but all for the weebs and the newbies!</p>
      <p style={{color: 'black', backgroundColor: 'white', textAlign: 'center', alignSelf: 'center'}}> Hello, thank you for visiting TechWebbies, where we serve technology not only for the techie but all for the weebs and the newbies! Hello, thank you for visiting TechWebbies, where we serve technology not only for the techie but all for the weebs and the newbies! Hello, thank you for visiting TechWebbies, where we serve technology not only for the techie but all for the weebs and the newbies! Hello, thank you for visiting TechWebbies, where we serve technology not only for the techie but all for the weebs and the newbies! Hello, thank you for visiting TechWebbies, where we serve technology not only for the techie but all for the weebs and the newbies! Hello, thank you for visiting TechWebbies, where we serve technology not only for the techie but all for the weebs and the newbies! Hello, thank you for visiting TechWebbies, where we serve technology not only for the techie but all for the weebs and the newbies! Hello, thank you for visiting TechWebbies, where we serve technology not only for the techie but all for the weebs and the newbies!Hello, thank you for visiting TechWebbies, where we serve technology not only for the techie but all for the weebs and the newbies! Hello, thank you for visiting TechWebbies, where we serve technology not only for the techie but all for the weebs and the newbies!Hello, thank you for visiting TechWebbies, where we serve technology not only for the techie but all for the weebs and the newbies! Hello, thank you for visiting TechWebbies, where we serve technology not only for the techie but all for the weebs and the newbies!</p>
    </div>
  )
}

export function Location() {
  return (
    <div>
      <img style= {{display: 'absolute'}} src={bear} alt="this is a bear"/>
    </div>
  )
}

export function Events() {
  return (
    <div style={{display: 'finite', color: 'black', backgroundColor: 'white', textAlign: 'center', alignSelf: 'center'}} >
      <h1 style={{display: 'absolute',textAlign: 'center', alignSelf: 'center', fontSize: 70, height: 100}}>Events</h1>
      <h2 style={{display: 'absolute', justifyContent:'center', alignItems: 'center', fontSize: 20}}>Troubleshooting of Hard Disk</h2>
      <h3 style={{display: 'absolute', justifyContent:'center', alignItems: 'center', fontSize: 20}}>Troubleshooting of Motherboard</h3>
      <h4 style={{display: 'absolute', justifyContent:'center', alignItems: 'center', fontSize: 20}}>Troubleshooting of Graphics card </h4>
    </div>
  )
}

export function Contacts() {
  return (
    <div>
      <h1>Contact</h1>
    </div>
  )
}

export function Page404() {
  let location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>Error 404: Resource not found at {location.pathname}</h1>
    </div>
  )
}
