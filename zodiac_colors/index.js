const input = document.getElementById("zodiac");
const container = document.querySelector(".container");

const getZodiac = () => {
    const zodiac = input.value;

    // Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, and Pisces
    switch (zodiac) {
        case "choose":
            container.style.background = "#ffffff";
            break;  

        case "Aries":
            container.style.background = "#fd7f6f";
            break;   

        case "Taurus":
            container.style.background = "#7c1158";
            break;

        case "Gemini":
            container.style.background = "#b2e061";
            break;

        case "Cancer":
            container.style.background = "#bd7ebe";
            break;
        
        case "Leo":
            container.style.background = "#0d88e6";
            break;
        
        case "Virgo":
            container.style.background = "#00b7c7";
            break;

        case "Libra":
            container.style.background = "#5ad45a";
            break;

        case "Scorpio":
            container.style.background = "#8be04e";
            break;

        case "Pisces":
            container.style.background = "#ebdc78";
            break;
        
        case "Sagittarius":
            container.style.background = "#8bd3c7";
            break;

        case "Capricorn":
            container.style.background = "#fdcce5";
            break;

        case "Aquarius":
            container.style.background = "#beb9db";
            break;

        default:
            break;
    }

    console.log(zodiac);
}