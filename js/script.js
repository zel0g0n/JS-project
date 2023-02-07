let header = document.createElement(`header`);
let headerItem = document.createElement(`div`);
let headingThree = document.createElement(`h3`);
let imagine = document.createElement(`div`);
let imagineIcon = document.createElement(`IMG`);

// function getCountry()

let imagineText = document.createElement(`p`);
let main = document.createElement(`main`);
let inputBlog = document.createElement(`div`);
let inputLogo = document.createElement(`img`)
let input = document.createElement(`input`)
let mainBlog = document.createElement(`div`);
let uzb = document.createElement(`section`);
let usa = document.createElement(`section`);
let brazil = document.createElement(`section`);
let iceland = document.createElement(`section`);
let afgan = document.createElement(`section`);
let aisland = document.createElement(`section`);
let albania = document.createElement(`section`);
let algeria = document.createElement(`section`);

let countryArr = [
    [`Uzbekistan`,`United States of America`,`Brazil`,`Iceland`,`Afghanistan`,`Åland Islands`,`Albania`,`Algeria`],
    [`34,770,900`,`323,947,000`,`206,135,893`,`334,300`,`27,657,145`,`28.875`,`2.886.026`,`40.400.000`],
    [`Asia`,`Americas`,`Americas`,`Europe`,`Asia`,`Europe`,`Europe`,`Africa`],
    [`Tashkent`,`Washington`,`Brasilia`,`Reykjavik`,`Kabul`,`Mariehamn`,`Tirana`,`Algiers`],
    [`img/uzb.png`,`img/usa.jpg`,`img/brazil.jpg`,`img/iceland.jpg`,`img/afgan.jpg`,`img/aland.jpg`,`img/alban.jpg`,`img/alger.jpg`]
];


//header
document.body.style.cssText = `
    margin:0;
    padding: 0;
    box-sizing: border-box;
    background-color:#F2F2F2;`
header.style.cssText=`
    width: 1280px;
    height: 80px;
    margin: 0 auto;
    margin-bottom: 48px;
    `;
document.body.appendChild(header)
headerItem.classList.add(`header_item`);
headerItem.style.cssText = `
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1280px;
    height: 80px;
    margin: 0 auto;

    `;
header.appendChild(headerItem)
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
//main
main.style.cssText = `
    width: 1280px;
    height: 900px;
    margin: 10px auto;
    `;
document.body.appendChild(main,header)

inputBlog.style.cssText = `
    display:flex;
    align-items: center;
    gap: 30px;
    width:480px;
    height:56px;
    margin-bottom: 50px;
    padding-left:34px;
    background-color: #FFFFFF;
    box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
    border-radius: 5px;
    `;
main.appendChild(inputBlog)
inputLogo.setAttribute(`src`,'img/search.png')
inputBlog.appendChild(inputLogo)
input.style.cssText = `
    width:400px;
    height:30px;
    font-family: sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #848484;
    border:0;
    `;
input.placeholder = `Search for a country…`
inputBlog.appendChild(input)
mainBlog.style.cssText = `
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    justify-content: space-between;
    width: 1110px;
    height: 800px;
    margin: 0 auto;
    `;
main.appendChild(mainBlog)
mainBlog.appendChild(uzb)
mainBlog.appendChild(usa)
mainBlog.appendChild(brazil)
mainBlog.appendChild(iceland)
mainBlog.appendChild(afgan)
mainBlog.appendChild(aisland)
mainBlog.appendChild(albania)
mainBlog.appendChild(algeria)
let cArr = document.querySelectorAll(`section`)
let mainImg;
let paragraph;
let population;
let region;
let capital;
for(let i=0;i<cArr.length;i++){
    cArr[i].style.cssText = `
        width:260px;
        height:360px;
        border-radius: 10px;
        overflow: hidden;`;
    mainImg = document.createElement(`img`);
    mainImg.setAttribute(`src`,`${countryArr[4][i]}`)
    mainImg.style.cssText = `
        width: 260px;
        height: 160px`
    cArr[i].appendChild(mainImg)
    paragraph=document.createElement(`h5`);
    paragraph.innerHTML = `${countryArr[0][i]}`
    paragraph.style.cssText=`
        font-family:sans-serif;
        margin-left: 10px;
        font-size: 20px`;
    cArr[i].appendChild(paragraph)
    population=document.createElement(`p`);
    population.innerHTML = `Population: ${countryArr[1][i]}`
    population.style.cssText = `
        font-family: sans-serif;
        font-size: 16px;
        margin-left:10px;`;
    cArr[i].appendChild(population)
    region=document.createElement(`p`);
    region.innerHTML = `Region: ${countryArr[2][i]}`
    region.style.cssText = `
        font-family: sans-serif;
        font-size: 16px;
        margin-left:10px;`;
    cArr[i].appendChild(region)
    capital=document.createElement(`p`);
    capital.innerHTML = `Capital: ${countryArr[3][i]}`
    capital.style.cssText = `
        font-family: sans-serif;
        font-size: 16px;
        margin-left:10px;`;
    cArr[i].appendChild(capital)
    
    
    
}
console.log(document.querySelectorAll(`section`))

