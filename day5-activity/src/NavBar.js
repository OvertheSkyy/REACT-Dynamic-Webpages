import React from "react";
import {Link} from 'react-router-dom';
import Button from "./CustomButtonComponent.tsx";


const NavBar = () => (
  <nav style={{textAlign: 'center', alignSelf: 'center', height: 30}}>
      <Button
        border="none"
        color="rgb(173,216,230)"
        height = "40px"
        onClick={() => console.log("You clicked on the pink circle!")}
        radius = "50%"
        width = "40px"
        children = {<Link style={{ color: 'inherit', textDecoration: 'inherit', fontSize: 10}} to="/">Home</Link>}/> 
      <Button
        border="none"
        color="#add8e6"
        height = "40px"
        onClick={() => console.log("You clicked on the pink circle!")}
        radius = "50%"
        width = "40px"
        children = {<Link style={{ color: 'inherit', textDecoration: 'inherit', fontSize: 10}} to="/about">About</Link>}/>
      <Button
        border="none"
        color="#add8e6"
        height = "40px"
        onClick={() => console.log("You clicked on the pink circle!")}
        radius = "50%"
        width = "40px"
        children = {<Link style={{textAlign: 'center', color: 'inherit', textDecoration: 'inherit', fontSize: 10}} to="/articles-list">Articles</Link>}/>
  </nav>
)

export default NavBar;
