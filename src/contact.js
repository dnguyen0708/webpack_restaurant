import Menu from './menu';

function Contact() {
    const contact = document.createElement('div');
    const header = document.createElement('div');
    const content = document.createElement('div');
    const title = document.createElement('h1');
    const phone = document.createElement('h2');
    const address = document.createElement('p');
    const menuBtn = document.createElement('btn');

    title.textContent = "Contact Us";
    phone.textContent = "Phone: 202-456-1111";
    address.textContent = "1600 Pennsylvania Avenue NW, Washington, DC 20500";
    menuBtn.innerHTML = "MENU";

    menuBtn.classList.add('menu-btn');
    contact.className = "contact";
    header.className = "contact-header";
    content.className = "contact-content";

    menuBtn.addEventListener('click', function () {
        const content = document.querySelector('#content');
        content.removeChild(content.firstChild);
        content.append(Menu());
    });

    header.append(title, menuBtn);
    content.append(phone, address);
    contact.append(header, content);



    return contact;
}

export default Contact;