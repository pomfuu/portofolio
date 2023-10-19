import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./about.css";
import "./index"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Profile from '../../assets/user2.png';

class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
      this.txtElement = txtElement;
      this.words = words;
      this.txt = '';
      this.wordIndex = 0;
      this.wait = parseInt(wait, 10);
      this.type();
      this.isDeleting = false;
    }
  
    type() {
      const current = this.wordIndex % this.words.length;
      const fullTxt = this.words[current];
      
      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }
  
      this.txtElement.innerHTML = `<span class="txt">${this.txt}<span class="blinking-cursor">|</span></span>`;
  
      let typeSpeed = 110;
  
      if (this.isDeleting) {
        typeSpeed /= 2;
      }
  
      if (!this.isDeleting && this.txt === fullTxt) {
        typeSpeed = this.wait;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.wordIndex++;
        typeSpeed = 500;
      }
  
      setTimeout(() => this.type(), typeSpeed);
    }
  }
  
  const About = () => {
    useEffect(() => {
      const txtElement = document.querySelector('.txt-type');
      const words = JSON.parse(txtElement.getAttribute('data-words'));
      const wait = txtElement.getAttribute('data-wait');
      new TypeWriter(txtElement, words, wait);
    }, []);
  
    return (
        <div className="container about">
            <div className="row align-items-center justify-content-center mx-auto py-5">
                <div className="col">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="col-md-3 user-pfp me-5">
                    <Image src={Profile} alt="heee" srcSet="" roundedCircle fluid />
                    </div>
                    <div className="col-md-8 minheight">
                    <p className="name fs-3">Hi! my name is <b>Clarien Cahyono</b></p>
                    <h1 className="txt-type fw-semibold" data-wait="2500" data-words='["Front-End Developer","UI/UX Designer", "Digital Illustrator"]' style={{ fontSize:'4rem' }} ></h1>
                    <p className="pt-3">a fifth-semester student with passion in UI/UX design, Front-End development, and Web Development. I firmly believe that a good design can create seamless digital experiences that enhance user interactions!</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default About;
