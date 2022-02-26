function Home() {
    const home = document.createElement('div');
    const banner = document.createElement('div');
    const storeInfo = document.createElement('div');
    const hours = document.createElement('h2');
    const location = document.createElement('h2');
    const title = document.createElement('p');
    const introText = document.createElement('p');
    banner.classList.add('banner');
    storeInfo.classList.add('storeInfo');
    hours.classList.add('hours');
    location.classList.add('location');
    home.classList.add('home');
    title.className = "banner-title";
    introText.className = "introText";

    title.textContent = "Devil Anus's Ramen";
    introText.textContent = "Set Your Tongue, Stomach and Ass Ablaze";
    hours.innerHTML = "Mon-Fri: 10am - 10pm <br> Sat: 12pm - 8pm <br> Sun: Closed"
    location.innerHTML = "2-10-9 Kajicho, Chiyoda 101-0044 <br> Tokyo Prefecture"

    storeInfo.append(hours, location)
    banner.append(title, introText);
    home.append(banner, storeInfo);
    return home;
}

export default Home;