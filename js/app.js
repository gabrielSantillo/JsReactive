function makeOrange(details) {
    details[`target`][`style`][`backgroundColor`] = `orange`;
}
let header = document.getElementById(`header`);
header.addEventListener(`click`, makeOrange);

function changeContent(details) {
    details[`target`][`outerHTML`] = `<h2>Ops, I was changed</h2>`
}
let main = document.getElementById(`main`);
main.addEventListener(`dblclick`, changeContent);

function addContent(details) {
    for(let counter = 0; counter < 3; counter++){
        details[`target`][`innerHTML`] = `<p>I was added before.</p>` + details[`target`][`innerHTML`];
    }
}
let footer = document.getElementById(`footer`);
footer.addEventListener(`mouseover`, addContent);