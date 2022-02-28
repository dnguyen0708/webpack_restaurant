import './style.css'
import Home from "./home";
import Menu from './menu';
import Contact from './contact';
import Header from './header';
import Footer from './footer';
import backgroundImg from './img/mae-mu-Ey2Y2vAmx7Q-unsplash.jpg';

document.body.style.backgroundImage = `url(${backgroundImg})`;
document.body.prepend(Header());
document.body.append(Footer());

function removeChildElement(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function component() {

    const home = document.querySelector('.header-home');
    const menu = document.querySelector('.header-menu');
    const contact = document.querySelector('.header-contact');
    const content = document.querySelector('#content');


    home.addEventListener('click', function () {
        removeChildElement(content);
        content.append(Home());
    })

    menu.addEventListener('click', function () {
        removeChildElement(content);
        content.append(Menu());
    })

    contact.addEventListener('click', function () {
        removeChildElement(content);
        content.append(Contact());
    })

    content.append(Home());
}

component();

