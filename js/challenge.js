
const counter = document.getElementById('counter')

let count = setInterval(clock, 1000);
let paused = false
buttons()

function clock (){
 let num_i = parseInt(counter.innerText);
 let numPlusOne = (num_i += 1);
 let num_s = numPlusOne.toString();
 counter.innerText = num_s;
};

function buttons (){
const minus = document.getElementById('minus'); 
const plus = document.getElementById('plus');
const heart = document.getElementById('heart');
const pause = document.getElementById('pause');
const form = document.getElementById('comment-form')

minus.addEventListener('click', function() {
 let num_i = parseInt(counter.innerText);
 let numMinusOne = (num_i -= 1);
 let num_s = numMinusOne.toString();
 counter.innerText = num_s;
});

plus.addEventListener('click', function() {
  let num_i = parseInt(counter.innerText);
  let numPlusOne = (num_i += 1);
  let num_s = numPlusOne.toString();
  counter.innerText = num_s;
 });

 pause.addEventListener('click', function(){
   if (paused === false){
    paused = true;
    clearInterval(count);
    return console.log('paused');
   } else {
     paused = false;
     count = setInterval(clock, 1000);
     console.log ('unpaused');
   }
 });

heart.addEventListener('click', function(){
  const likeList = document.querySelector('.likes');
  if (document.querySelectorAll('li').length > 0){
    if(document.getElementById(`${counter.innerText}`)){
     let li = document.getElementById(`${counter.innerText}`)
     let num = parseInt(li.textContent.split(' ')[4])
     num += 1
     li.textContent = `${li.id} has been liked ${num} times`
    } else { like()}} 
    else {like()}
  }) 

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const inputBox = event.target.querySelector('#comment-input');
  const divComment = document.getElementById('list');
  const input = document.createElement('p')
  divComment.appendChild (input);
  input.textContent =inputBox.value;
});

function like () {
  const likeList = document.querySelector('.likes');
  let li = document.createElement('li');
  li.id = counter.innerText
  likeList.appendChild(li);
  li.textContent = `${li.id} has been liked 1 times`
  console.log("li captured")
}


};

