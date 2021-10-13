const starSigns = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio','Sagittarius', 'Capricorn', 'Aquarius', 'Pisces']
const rulingPlanet = ['Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']
const horoscopeMsg = ['You will find love soon', 'Tread carefully you may be betrayed', 'Today is a lucky day for you', 'Friendships will be tested', 'This a great day for your career','You will have good health and fortune','A large sum of money awaits you','Your close relationships need more attention','Be positive and you will be rewarded','Bad luck is in your future']

let rand1 = Math.floor(Math.random()* 13)
let rand2 = Math.floor(Math.random()* 8)
let rand3 = Math.floor(Math.random()* 11)

console.log(`Your star sign is ${starSigns[rand1]}, the planet that rules over you is ${rulingPlanet[rand2]} and your Horoscope for today predicts that: ${horoscopeMsg[rand3]}`)


