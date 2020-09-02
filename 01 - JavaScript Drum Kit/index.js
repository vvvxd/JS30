
window.addEventListener('keypress',(e)=>{
    let dataKey = e.key.toUpperCase().charCodeAt()+'';
    const target = document.querySelector(`div[data-key="${dataKey}"]`);
    music(target, dataKey);
});

window.addEventListener('click',function (e) {
    let target = e.target;
    if (target.parentElement.hasAttribute('data-key') || target.hasAttribute('data-key')){
        if (target.parentElement.hasAttribute('data-key')) {
            target = target.parentElement
        }
        const dataKey = target.getAttribute('data-key');
        music(target, dataKey);
}});
function music(target, dataKey) {
        const audio = document.querySelector(`audio[data-key="${dataKey}"]`);
        audio.play();
        target.classList.add('playing');
        setTimeout(()=>{
            target.classList.remove('playing');
        },300)
}