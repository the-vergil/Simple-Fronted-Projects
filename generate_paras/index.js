const input = document.getElementById("noOfWords");
const container = document.querySelector(".container");

let noOfWords;

const generateWord = (n) => {
    let text = "";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 0; i < n; i++) {
        const index = (Math.random() * 25).toFixed(0);
        text += letters[index];
    }

    return text;
}

// console.log(generateWord(50));

const generatePara = () => {
    noOfWords = Number(input.value);
    
    const para = document.createElement("p");
    
    let text = "";
    for (let i = 0; i < noOfWords; i++) {
        const wordLength = (Math.random() * 10).toFixed(0);

        text += generateWord(wordLength);
        text += " ";
    }

    para.innerText = text;

    para.setAttribute("class", "paras");
    
    container.append(para);
};