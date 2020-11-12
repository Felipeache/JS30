console.log("Welcome Master!!!!")
window.addEventListener("keydown", function (e){
    const sound = document.querySelector(`audio[data-key="${e.code}"]`)
    // select the element pressed to add playing class
    const goPlaying = document.querySelector(`.key[data-key="${e.code}"]`)
    
    if(!sound){
        console.log("No sound to play");
        return;
    }
    sound.currentTime = 0;//To allow each keydow to replay the sound
    sound.play();
    //adding the 'playing' class
    goPlaying.classList.add("playing");

    function removeClass(e){
        this.classList.remove("playing")
    }
    const addClass = document.querySelectorAll('.key') // select all elements with class = key. gives an array
    // I add a listener to each element of the array. 
    // I wait for the Transition End event then I delete the 'playing' class
    addClass.forEach(elem => elem.addEventListener('transitionend', removeClass));
    
});