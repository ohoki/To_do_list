'use strict';

//======= 1. 입력창 시간 출력하기 ==========================
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

//======= 2.DO LIST 추가하기 ===============================
function addList() {
  let addList = document.getElementById("addInput");
  //구현  
  if(addList.value == "") {
    alert("할 일을 작성해주세요 :)");
  } else {
  //입력값 받기
    let label = document.createElement("label");
  label.setAttribute("id", "ckeck_btn");
  label.textContent = addList.value;
  //체크박스 만들기
  let circle = document.createElement("i");
  circle.classList.add("circle");
  label.prepend(circle);

  let ckb = document.createElement("input");
  ckb.setAttribute("type", "checkbox");
  ckb.setAttribute("id", "ckeck_btn");
  label.prepend(ckb);
  //버튼 만들기
  let completBtn = document.createElement("button");
  completBtn.textContent = "완료";
  label.appendChild(completBtn);
  //do list로 이동
  let doList = document.getElementById("doList");
  doList.appendChild(label);
  }
  //리셋
  addList.value = "";
  addList.focus();
}

