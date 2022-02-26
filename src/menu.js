import menuItems from "./menu_items";

function Menu() {
    const menu = document.createElement('div');
    // const menuCard = document.createElement('div');

    // menuCard.className = "menu-card";
    menu.className = "menu";

    for (let item of menuItems) {
        const menuCard = document.createElement('div');

        const img = document.createElement('img');
        const title = document.createElement('h2');
        const desc = document.createElement('p');


        menuCard.classList.add("menu-card");
        if (item.title.includes("DEVIL")) {
            img.classList.add('devil');
        }
        img.classList.add('menu-item-img');

        img.src = item.image;
        title.textContent = item.title;
        desc.textContent = item.desc;

        menuCard.append(img, title, desc)
        menu.append(menuCard);
    }


    return menu;
}

export default Menu;