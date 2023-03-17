// Your code here
async function getCat() {
     let cat = await fetch('https://api.thecatapi.com/v1/images/search')
    cat = await cat.json();
    return cat;
}

async function makeCatFigure() {
    const div = document.createElement('div');
    let cat = await getCat();
    cat = cat[0]
    // console.log(cat)

    div.innerHTML = 
    `
        <figure data-catId="${cat.id}">
            <figcaption>Kitten pic</figcaption>
            <img src="${cat.url}" alt="cat pic">
        </figure>
    `
    document.body.appendChild(div);
}

window.onload = () => {
    console.log('scripts loading')
    // getCat();
    makeCatFigure();
}