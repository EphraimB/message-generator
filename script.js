const cornyJokes = () => {
    return {
        cornyJokes: ["Do you know where people pick their noses? The Poconos!", "Do you know where eczema comes from? Eggs!", "Do you know where people get their clothing patched from? Patchougue!", "Do you know who made Ceasar salad? Julius Caesar!", "Do you know who made up joking? King Joe!"],
        getRandomJoke() {
            const randomNumber = Math.floor(Math.random() * this.cornyJokes.length);

            return this.cornyJokes[randomNumber];
        }
    }
}
const cornyJoke = cornyJokes();
console.log(cornyJoke.getRandomJoke());