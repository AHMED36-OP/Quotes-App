//الرقم ممكن يتكرر 
// function randomText() {
//   var names = [
//     "--Wayne Gretzy",
//     "--Nelson Mandela",
//     "--Elbert Hubbard",
//     "--Epictetus",
//     "--Frank Sinatra",
//   ];
//   var texts = [
//     '"You miss 100% of the shots you dont take."',
//     '"Resentment is like drinking poison and waiting for your enemies to die."',
//     '"Do not take life too seriously. You will not get out alive."',
//     '"Its not what happens to you, but how you react to it that matters."',
//     '"The best revenge is massive success."',
//   ];
//   var num = Math.floor(Math.random() * names.length);
//   document.getElementById("name").innerHTML = names[num];
//   document.getElementById("text").innerHTML = texts[num];
// }
// بعمل شيك علي الرقم
var lastRandomNum = -1;

function randomText(){
    var names = [
      "--Wayne Gretzy",
      "--Nelson Mandela",
      "--Elbert Hubbard",
      "--Epictetus",
      "--Frank Sinatra",
    ];

    var texts = [
      '"You miss 100% of the shots you dont take."',
      '"Resentment is like drinking poison and waiting for your enemies to die."',
      '"Do not take life too seriously. You will not get out alive."',
      '"Its not what happens to you, but how you react to it that matters."',
      '"The best revenge is massive success."',
    ];

    var num = Math.floor(Math.random() * names.length);
    if (num === lastRandomNum) {
      num = (num + 1) % names.length;
    }
    lastRandomNum = num;
    document.getElementById("name").innerHTML = names[num];
    document.getElementById("text").innerHTML = texts[num];
}
