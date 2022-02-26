function Header() {
    const header = document.createElement('div');
    const home = document.createElement('div');
    const menu = document.createElement('div');
    const contact = document.createElement('div');

    header.id = "header";
    home.className = "header-home";
    menu.className = "header-menu";
    contact.className = "header-contact";

    home.textContent = "Home";
    menu.textContent = "Menu";
    contact.textContent = "Contact";

    header.append(home, menu, contact);

    return header;
}

export default Header;