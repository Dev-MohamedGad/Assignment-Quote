var row = document.getElementById('row1');
var btn1 = document.getElementById('btn');
var box = '';


var friends = [
    {
        quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        authar: "― Albert Einstein",
        src: "images/Albert Einstein.jpg"
    },
    {
        quote: "“So many books, so little time.”"
        , authar: "― Frank Zappa",
        src: "images/Frank Zappa.jpg"

    },
    {
        quote: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”"
        , authar: "― Bernard M. Baruch",
        src: "images/Bernard M. Baruch.jpg"

    },
    {
        quote: "“You only live once, but if you do it right, once is enough.”"
        , authar: "― Mae West",
        src: "images/Mae West.jpg"

    }, {
        quote: "“Be the change that you wish to see in the world.”"
        , authar: "― Robert Frost",
        src: "images/Albert Einstein.jpg"

    }, {
        quote: "“In three words I can sum up everything I've learned about life: it goes on.”"
        , authar: "― Robert Frost",
        src: "images/Marcus Tullius Cicero.jpg"


    }, {
        quote: "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”"
        , authar: "― J.K. Rowling, Harry Potter and the Goblet of Fire",
        src: "images/Albert Einstein.jpg"

    },
]

var length = friends.length - 1;
function getRandomInt() {
    return Math.floor(Math.random() * length);
}
btn1.onclick = function myonclick() {
    var rannum = getRandomInt()
    box = ` <div class="col-3 "> <img src="${friends[rannum].src} "class="img-fluid rounded-circle " alt="">
    </div>
    <div class="col-9  position-relative">
      <p>${friends[rannum].quote}</p>
      <div class="author   position-absolute ">
        <p>${friends[rannum].authar}</p>
      </div>
    </div>`;


    row.innerHTML = box;
}


