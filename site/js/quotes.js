const quotes = [
    {
        quote: "Success is walking from failure to failure with no loss of enthusiasm",
        author: "Winston Churchill"
    },
    {
        quote: "All progress takes place outside the comfort zone",
        author: "Michael John Bobak"
    },
    
    {   quote: "The way to get started is to quit talking and begin doing",
        author: "Walt Disney"
    },
    {
        quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful",
        author: "Albert Schweitzer"
    },
    {
        quote: "In order to succeed, we must first believe that we can",
        author: "Nikos Kazantzakis"
    },
    {
        quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose",
        author: "Dr. Seuss"
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;