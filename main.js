'use strict';

//1. 입력창 시간 출력하기
let headerClock = document.getElementById("headerClock");

function clock() {
  let time = new Date();
  let year = time.getFullYear();
  let month = time.getMonth()+1;
  let date = time.getDate();
  let day = time.getDay();
  let week = ["일","월","화","수","목","금","토"];
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  if(month <10) { month = `0${month}` };
  if(date <10) { date = `0${date}` };
  if(hours <10) { hours = `0${hours}` };
  if(minutes <10) { minutes = `0${minutes}` };
  if(seconds <10) { seconds = `0${seconds}` };

  headerClock.innerHTML = 
  `${month}월 ${date}일 (${week[day]}) ${hours}:${minutes}:${seconds}`;
}
clock();
setInterval(clock,1000);

