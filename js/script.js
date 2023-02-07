let header = document.createElement(`header`);
let headerItem = document.createElement(`div`);
let headingThree = document.createElement(`h3`);
let imagine = document.createElement(`div`);
let imagineIcon = document.createElement(`IMG`);

let imagineText = document.createElement(`p`);
header.style.cssText=`
    width: 1340px;
    height: 80px;
    margin: 0 auto;
    background-color: red;
    `;
document.body.append(header)
headerItem.classList.add(`header_item`);
headerItem.style.cssText = `
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1110px;
    height: 80px;
    margin: 0 auto;
    `;
header.appendChild(headerItem)
headingThree.innerHTML = `Where in the world?`;
headingThree.style.cssText = `
    font-family: sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    color: #111517;
    `;
headerItem.appendChild(headingThree)
imagine.style.cssText = `
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 120px;
    height: 30px;

    `;

imagineIcon.setAttribute(`src`,`img/moon.png`);
imagineIcon.style.cssText = `
    width: 22px;
    height: 22px;
    `;
imagineText.style.cssText = `
    line-height: 0;
    font-family: sans-serif;
    font-weight: 600;
    color:#111517;
    `
imagineText.innerHTML = `Dark Mode`
headerItem.appendChild(imagine)
imagine.appendChild(imagineIcon)

imagine.appendChild(imagineText)

