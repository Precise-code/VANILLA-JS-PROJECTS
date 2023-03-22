 function playsound (e) {
    const audio = document.querySelector(`audio[data-key= "${e.keyCode}"]`)
    const key = document.querySelector(`div[data-key= "${e.keyCode}"]`)
    if(!audio) return; // stops the function from running all together!
    console.log(key);
    audio.CurrentTime = 0 ;
    audio.play();
    key.classList.add('playing')
};

function removeTransition(e){
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener ('transitionend', removeTransition));

window.addEventListener('keydown', playsound);








