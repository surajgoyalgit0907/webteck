import React from 'react'
import '../sass/home.scss';
import { FaBeer } from 'react-icons/fa';
import Header from '../directives/header';
import Footer from '../directives/footer';
import Accordion from 'react-bootstrap/Accordion';
import Banner from './banner';
import About from './about';
import Services from './services';
import Counter from './counter';
import Whychoose from './whychoose';
import Team from './team';
import Contact from './contact';
const Home = () => {
    return (
        <>


            <Header />
            <Banner />
            <About />
            <Services />
            <Counter />
            <Whychoose />
            <Team />
            <Contact />
            <Footer />
        </>
    )
}

export default Home;
