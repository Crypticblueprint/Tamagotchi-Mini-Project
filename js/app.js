

const tomName = document.getElementById('input')
const newAge = document.getElementById('tomAge')
const newHunger = document.getElementById('tomHunger')
const newSleep = document.getElementById('tomSleep')
const newBoredom = document.getElementById('tomBoredom')
const btnSubmit = document.getElementById('btn')
const btnFeed = document.getElementById('btnFeed')
const btnEnergyBoost = document.getElementById('btnEnergyBoost')
const btnPlay = document.getElementById('btnPlay')
const newtamgotchiObject = document.getElementsByClassName('tamagotchi')




//Class of Tamagotchi, creates new player and increases counters
class Tamagotchi {
    constructor() {
        this.name =  '',
        this.age = 0,
        this.hunger = 0,
        this.sleep = 0,
        this.boredom = 0
    } 
  
    addHunger() {
        this.hunger++
        newHunger.textContent = 'Hunger: ' + game.player.hunger
        if(game.player.hunger === 10){
            document.querySelector('.tamagotchi').src ='img/tamagotchiDead.gif';
            game.clearIntervals()    
            alert(`You Forgot To Feed ${tomName.value}!`)
        } 
    }
    addSleep() {
        this.sleep++
        newSleep.textContent = 'Sleepiness: ' + game.player.sleep
        if(game.player.sleep === 10){
            document.querySelector('.tamagotchi').src ='img/tamagotchiDead.gif';
            alert(`You Forgot To Give ${tomName.value} an Engery Boost!`)
            game.clearIntervals()
        }
    }
    addBoredom() {
        this.boredom++
        newBoredom.textContent = 'Boredom: ' + game.player.boredom
        if(game.player.boredom === 10){
            document.querySelector('.tamagotchi').src ='img/tamagotchiDead.gif';
            alert(`You Forgot to Play with ${tomName.value}!`)
            game.clearIntervals()
        }
    }
    addAge() {
        this.age++
        newAge.textContent = 'Age: ' + game.player.age
        if(game.player.hunger === 10 || game.player.sleep === 10 || game.player.boredom === 10) {
        game.clearIntervals()            
        }
    }
}





//game initialization function and set intervals
const game = {
    player: null,
    intervals : {
        hunger: null
    },
    // interval: null
    init() {
        this.player = new Tamagotchi(tomName.value)
        const newName = document.getElementById('tomName')
        newName.textContent = 'Name: ' + tomName.value
        newAge.textContent = 'Age: ' + this.player.age
        newHunger.textContent = 'Hunger: ' + this.player.hunger
        newSleep.textContent = 'Sleepiness: ' + this.player.sleep
        newBoredom.textContent = 'Boredom: ' + this.player.boredom
    },

    increaseHunger() {
        this.intervals.hunger = setInterval(this.player.addHunger.bind(this.player), 2000)
    },
    increaseSleep() {
        this.intervals.sleep = setInterval(this.player.addSleep.bind(this.player), 3000)
    },
    increaseBoredom() {
        this.intervals.boredom = setInterval(this.player.addBoredom.bind(this.player), 2000)
    },
    increaseAge() {
        this.intervals.age = setInterval(this.player.addAge.bind(this.player), 8000)
    },
    clearIntervals() {
        clearInterval(this.intervals.hunger)
        clearInterval(this.intervals.sleep)
        clearInterval(this.intervals.boredom)
        clearInterval(this.intervals.age)
      }

}

//Initiate the game and update counters by pressing Let's Play Button
btnSubmit.addEventListener('click', function(e){
    e.preventDefault()
game.init()
game.increaseHunger()
game.increaseSleep()
game.increaseBoredom()
game.increaseAge()

console.log(game.player)
})


//update Tamagotchi Info with Buttons

btnFeed.addEventListener('click', function(e){
    console.log('button', game.intervals.hunger)
    if (game.player.hunger > 0) {
        game.player.hunger --;
    }
    newHunger.textContent = 'Hunger: ' + game.player.hunger
})

btnEnergyBoost.addEventListener('click', function(e){
    if(game.player.sleep > 0) {
        game.player.sleep --;
    }
    newSleep.textContent = 'Sleepiness: ' + game.player.sleep
})

btnPlay.addEventListener('click', function(e){
    if(game.player.boredom > 0) {
        game.player.boredom --;
    }
    newBoredom.textContent = 'Boredom: ' + game.player.boredom
})





