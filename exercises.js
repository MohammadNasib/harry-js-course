/*

let str = "python";
let links = document.links;
console.log(links);
let href;
Array.from(links).forEach(function(element) {
  href = element.href;
  if (href.includes(str)) {
    console.log(href);
  }
});


*/

// ----- exercise 2 ----------
/*


// Create a new element
let divElem = document.createElement('div');

// Add text to that created element
let val = localStorage.getItem('text');
let text;
if (val==null){
 text = document.createTextNode('This is my element. click to edit it');
}
else{
    text = document.createTextNode(val);
}
divElem.appendChild(text);

// Give element id, style and class
divElem.setAttribute('id', 'elem');
divElem.setAttribute('class', 'elem');
divElem.setAttribute('style', 'border:2px solid black; width: 154px; margin: 34px; padding:23px;');

// Grab the main container
let container = document.querySelector('.container');
let first = document.getElementById('myfirst');


// Insert the element before element with id first
container.insertBefore(divElem, first);

console.log(divElem, container, first)

// add event listener to the divElem
divElem.addEventListener('click', function () {
    let noTextAreas = document.getElementsByClassName('textarea').length;
    if(noTextAreas ==0){
    let html = elem.innerHTML;
    divElem.innerHTML = ` <textarea class="textarea form-control" id="textarea" rows="3"> ${html}</textarea>`;
    }
    //listen for the blur event on textarea
    let textarea = document.getElementById('textarea');
    textarea.addEventListener('blur', function() {
        elem.innerHTML = textarea.value;
        localStorage.setItem('text', textarea.value);
    })
});

*/

// ------- exercise 3 ------

/*
exercise 3 is related to project -1
*/

// ------- exercise 4 ------

// create a class library and implement the following:
// constructor must take the book list as an argument
// getBookList()
// issueBook(bookname, user)
// returnBook(bookname)

/*

class Library {
  constructor(bookList) {
    this.bookList = bookList;
    this.issuedBooks = {};
  }

  getBookList() {
    this.bookList.forEach((element) => {
      console.log(element);
    });
  }

  issueBook(bookName, borrower) {
    if (
      this.issuedBooks[bookName] == undefined &&
      this.bookList.includes(bookName) == true
    ) {
      this.issuedBooks[bookName] = borrower;
      console.log(`This book named "${bookName}" is borrowed by ${borrower}`);
    } else if (this.bookList.includes(bookName) == false) {
      console.log(
        `This book named "${bookName}" is not available in our Library ! Sorry ${borrower}`
      );
    } else if (this.issuedBooks[bookName] != undefined) {
      console.log(
        `This book named "${bookName}" is borrowed by ${this.issuedBooks[bookName]} ! Sorry ${borrower}`
      );
    }
  }

  returnBook(bookName) {
    delete this.issuedBooks[bookName];
  }
}

let books = ["book1", "book2", "book3"];
let book1 = new Library(books);

 */

// ------------- exercise 5 -------------

/* 

 You have pretend to use a word api which will contain an object and you hve to print definition from all the results of that word api.

 You have to take input from an input tag.

 You have to print it in the dom

 If you are using bootstrap then its a plus

*/

/* 

let result = {
  word: "learn",
  results: [
    {
      definition: "commit to memory; learn by heart",
      partOfSpeech: "verb",
      synonyms: ["con", "memorise", "memorize"],
      typeOf: ["hit the books", "study"],
      hasTypes: ["alternate", "understudy"],
    },
    {
      definition: "impart skills or knowledge to",
      partOfSpeech: "verb",
      synonyms: ["instruct", "teach"],
      cause: ["larn", "acquire"],
      typeOf: ["inform"],
      hasTypes: [
        "reinforce",
        "enlighten",
        "reward",
        "educate",
        "spoonfeed",
        "tutor",
        "talk",
        "condition",
        "train",
        "drill",
        "edify",
        "develop",
        "coach",
        "indoctrinate",
        "induct",
        "unteach",
        "ground",
        "lecture",
        "mentor",
        "catechize",
        "catechise",
        "prepare",
      ],
    },
    {
      definition: "get to know or become aware of, usually accidentally",
      partOfSpeech: "verb",
      synonyms: [
        "discover",
        "find out",
        "get a line",
        "get wind",
        "get word",
        "hear",
        "pick up",
        "see",
      ],
      hasTypes: [
        "find",
        "get the goods",
        "wise up",
        "catch",
        "ascertain",
        "trip up",
        "discover",
      ],
      verbGroup: ["witness", "see", "find"],
      examples: ["I learned that she has two grown-up children"],
    },
    {
      definition:
        "find out, learn, or determine with certainty, usually by making an inquiry or other effort",
      partOfSpeech: "verb",
      synonyms: ["ascertain", "check", "determine", "find out", "see", "watch"],
      hasTypes: ["test"],
      verbGroup: [
        "control",
        "ascertain",
        "assure",
        "check",
        "determine",
        "ensure",
        "find",
        "find out",
        "insure",
        "see",
        "see to it",
      ],
    },
    {
      definition: "gain knowledge or skills",
      partOfSpeech: "verb",
      synonyms: ["acquire", "larn"],
      hasTypes: [
        "ingest",
        "hit the books",
        "assimilate",
        "take in",
        "study",
        "relearn",
        "catch up",
        "absorb",
      ],
      derivation: ["learner"],
      examples: ["She learned dancing from her sister", "I learned Sanskrit"],
    },
    {
      definition: "be a student of a certain subject",
      partOfSpeech: "verb",
      synonyms: ["read", "study", "take"],
      hasTypes: [
        "practice",
        "drill",
        "train",
        "audit",
        "prepare",
        "practise",
        "exercise",
      ],
    },
  ],
  syllables: {
    count: 1,
    list: ["learn"],
  },
  pronunciation: {
    all: "lɜrn",
  },
  frequency: 5.1,
};

let rLength = result["results"].length;
let i = 0;

while (i < rLength) {
  let definition = `The definition of "${result["word"]}" is " ${result["results"][i].definition} "`;

  console.log(definition);
  i++;
}

*/

// ----- exercise 6 ----------

// creating an alarm clock using javascript

/* 

const regex = /^(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})$/;
const setAlarm = document.getElementById("setAlarm");
const alarm = document.getElementById("alarm");
let alarmTime;
let now;
let timeToAlarm;
let alarmValue;

// function to play audio

var audio = new Audio(
  "https://www2.cs.uic.edu/~i101/SoundFiles/CantinaBand3.wav"
);

function ringBell() {
  audio.play();
}

// function to controll click event

setAlarm.addEventListener("click", alarmFunction);

function alarmFunction(e) {
  e.preventDefault();
  alarmValue = alarm.value;
  alarmTime = new Date(alarmValue);
  now = new Date();
  timeToAlarm = alarmTime - now;

  if (regex.test(alarmValue)) {
    console.log(`time we have to bell the ring is ${timeToAlarm}`);
    if (timeToAlarm >= 0) {
      setTimeout(() => {
        ringBell();
      }, timeToAlarm);
    }
  } else {
    console.log(
      `Please enter a valid time format. Ex:${now.getFullYear()}-${now.getMonth()}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
    );
  }
}

*/

// -------------- exercise 6 ---------------

/*
creating an wall clock
*/

let currentTime,
  currentHour,
  currentMinutes,
  currentSeconds,
  timeOfDay,
  fullTimeStr,
  fullTimeStr2,
  fullDateStr;

function updateClock() {
  currentTime = new Date();

  // Long Way to create a Wall Clock
  /*
  currentHour =
    currentTime.getHours() === 0
      ? 12
      : currentTime.getHours() < 12
      ? currentTime.getHours()
      : currentTime.getHours() > 12
      ? currentTime.getHours() - 12
      : currentTime.getHours();

  currentMinutes =
    currentTime.getMinutes() < 10
      ? "0" + currentTime.getMinutes()
      : currentTime.getMinutes();

  currentSeconds =
    currentTime.getSeconds() < 10
      ? "0" + currentTime.getSeconds()
      : currentTime.getSeconds();

  timeOfDay = currentTime.getHours() < 12 ? "AM" : "PM";

  fullTimeStr = `${currentHour}:${currentMinutes}:${currentSeconds} ${timeOfDay}`;
  document.getElementById("clock").innerHTML = fullTimeStr;

  // Showing the Date on website

  fullDateStr = currentTime.toLocaleDateString();
  document.getElementById("date").innerHTML = fullDateStr;

 */

  // ****************************************************
  // Shortcut way to  to create a Wall Clock🤣🤣😂😂

  fullTimeStr2 = currentTime.toLocaleTimeString();
  document.getElementById("clock").innerHTML = fullTimeStr2;
}

setInterval(() => {
  updateClock();
}, 1000);

// let a = new timezoneJS.Date();
// console.log(a);
