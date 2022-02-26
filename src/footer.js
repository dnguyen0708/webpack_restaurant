function Footer() {

    const footer = document.createElement('div');
    const imgCredit = document.createElement('div');
    const creator = document.createElement('div');

    footer.id = "footer";
    imgCredit.className = "image-src";
    creator.className = "createdby";

    imgCredit.textContent = "background-image-by: Mae Mu";
    creator.textContent = "Created By: Dan N";

    footer.append(imgCredit, creator);

    return footer;
}

export default Footer;