// View
updateView();
function updateView() {
    const app = document.getElementById('app');
    let html = ``;

    html += /*HTML*/ `
    <div class="holder">
        <div>
            <div class="title">${model.time.days > 0 ? "Nedtelling til påskeaften!" : "Ha en god påskeaften🎉"}</div>
            <div class="timer">${model.time.days} dager ${model.time.hours} timer ${model.time.min} min ${model.time.sec} sek</div>
        <div>
        <div class="funfactDiv">
            <div class="funfactTitle">Fun fact of the day!</div>
            <div  class="funfactText">${model.funfacts[((model.funfacts.length - 1) - (model.time.days < 0 ? 0 : model.time.days))]}</div>
        </div>
    </div>
        `;
    app.innerHTML = html;
}
