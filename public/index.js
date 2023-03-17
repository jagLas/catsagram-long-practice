// Your code here
async function getCat() {
     let cat = await fetch('https://api.thecatapi.com/v1/images/search')
    cat = await cat.json();
    return cat;
}

window.onload = () => {
    console.log('scripts loading')
    // getCat();
}