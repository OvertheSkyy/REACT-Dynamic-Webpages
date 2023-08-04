import React from 'react';
import {Link, useLocation, Outlet} from 'react-router-dom';

export function Home() {
  return (
    <div>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/events">Events</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1>[Company Website]</h1>
    </div>
  )
}

export function About() {
  
  return (
    <div>
      <nav>
        <Link to="">Home</Link>
        <Link to="/events">Events</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1>[About]</h1>
      <Outlet />
    </div>
  )
}

export function CompanyHistory() {
  return (
    <div>
      <h1>Our Company History</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea labore beatae explicabo deserunt aperiam amet nostrum, magni vitae eligendi, voluptas id omnis asperiores officiis tempora quod animi quidem sapiente suscipit perspiciatis cum alias odio modi. Repellat commodi, blanditiis, atque ex magni praesentium voluptas dicta in pariatur eligendi laborum! Dolore, odio!</p>
    </div>
  )
}

export function Location() {
  return (
    <div>
      <h1>Our Location</h1>
    </div>
  )
}

export function Events() {
  return (
    <div>
      <h1>[Events]</h1>
    </div>
  )
}

export function Contact() {
  return (
    <div>
      <h1>[Contact]</h1>
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