import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <div className="container">
            <h1 className="title">Welcome to Shoppy Page</h1>

            <nav className="navbar">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/home">About US</NavLink>
                <NavLink to="/home/electronics">Electronics</NavLink>
                <NavLink to="/home/mens-clothing">Clothing</NavLink>
                <NavLink to="/home">Contact</NavLink>
            </nav>

            <div className="description-box">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit quisque
                    faucibus ex sapien vitae pellentesque sem placerat in id cursus mi
                    pretium tellus duis convallis tempus leo eu aenean sed diam urna tempor
                    pulvinar vivamus fringilla lacus nec metus bibendum egestas iaculis massa
                    nisl malesuada lacinia integer nunc posuere ut hendrerit semper vel class
                    aptent taciti sociosqu ad litora torquent per conubia nostra inceptos
                    himenaeos orci varius natoque penatibus et magnis dis parturient montes
                    nascetur ridiculus mus.
                </p>
                <p>
                    Donec rhoncus eros lobortis nulla molestie mattis scelerisque maximus
                    eget fermentum odio phasellus non purus est efficitur laoreet mauris
                    pharetra vestibulum fusce dictum risus blandit quis suspendisse.
                </p>
            </div>

            <div className="categories">
                <h3>Categories:</h3>
                <NavLink to="/home/electronics">Electronics</NavLink><br />
                <NavLink to="/home/mens-clothing">Clothing</NavLink>
            </div>
        </div>
    );
};

export default Home;
