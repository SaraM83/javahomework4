// Task 1. I did two dif variations here, because I didn't 
// now which method we where suppose to use. So obviously I didn´t do all of the items 
// in the first version. Also, regarding the second version, I didn't manage 
// to make it an ordered list. 


// 1. Create an HTML page that displays an ordered list of tracks to 
// the webpage using Document Object Model API. 

let playList = [
    {
     author: "LED ZEPPELIN",
     song:"STAIRWAY TO HEAVEN"
    },
    {
     author: "QUEEN",
     song:"BOHEMIAN RHAPSODY"
    },
    {
     author: "LYNYRD SKYNYRD",
     song:"FREE BIRD"
    },
    {
     author: "DEEP PURPLE",
     song:"SMOKE ON THE WATER"
    },
    {
     author: "JIMI HENDRIX",
     song:"ALL ALONG THE WATCHTOWER"
    },
    {
     author: "AC/DC",
     song:"BACK IN BLACK"
    },
    {
     author: "QUEEN",
     song:"WE WILL ROCK YOU"
    },
    {
     author: "METALLICA",
     song:"ENTER SANDMAN"
    }
];

/*let play = document.createElement('ol');
let listNode = document.createElement('li');
play.appendChild(listNode);
let listText = document.createTextNode('author: LED ZEPPELIN' + ' song: STAIRWAY TO HEAVEN');
listNode.appendChild(listText);
let listNode2 = document.createElement('li');
play.appendChild(listNode2);
let listText2 = document.createTextNode('author: QUEEN' + ' song: BOHEMIAN RHAPSODY');
listNode2.appendChild(listText2);
let element = document.getElementById("div1");
element.appendChild(play);*/


for(let i = 0; i < playList.length; i++) {
   document.getElementById('div1').innerHTML += ' author: ' + playList[i].author + '<br>' + ' song: ' + playList[i].song + '<br>' + '<br>'; 
} 
 

