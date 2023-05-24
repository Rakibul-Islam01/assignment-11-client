import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-sky-600 text-base-content">
                <div>
                    <img src="/src/assets/car.png" width={80} className='mx-auto' alt="" />
                    <p>Car Toys Industries Ltd.<br />Providing quality car toys since 1992</p>
                </div>
                <div>
                    <span className="footer-title">Contact</span>
                    <a className="link link-hover">Phone: +1 (555) 123-4567</a>
                    <a className="link link-hover">Email: info@example.com</a>
                    <a className="link link-hover">Address: 123 Main Street, City, State, ZIP</a>
                </div>
                <div>
                    <span className="footer-title">Address</span>
                    <p>123 Main Street
                        City, <br></br> State
                        ZIP Code
                        Country
                    </p>
                </div>
                <div>
                    <span className="footer-title">Social Media</span>
                    <div className='flex gap-3 text-xl text-white'>

                    <a className="link link-hover"><FaFacebookSquare></FaFacebookSquare></a>
                    <a className="link link-hover"><FaTwitterSquare></FaTwitterSquare></a>
                    <a className="link link-hover"><FaInstagramSquare></FaInstagramSquare></a>
                    <a className="link link-hover"><FaYoutubeSquare></FaYoutubeSquare></a>
                    </div>
                </div>

            </footer>
            <p className='bg-sky-700 text-center p-1'>Copyright © 2023 - All right reserved</p>
        </div>
    );
};

export default Footer;