// =================Home Page====================
//NAV Part
//Create div with class=topnav
let div1 = document.createElement('div');
div1.classList.add('topnav');
document.body.appendChild(div1);
console.log(div1);

//Create <a> inside div1
let header1 = document.getElementsByClassName('topnav');
let aElements=3;
for(let i=0;i<aElements;i++){
    const aElement=document.createElement('a');
    header1[0].appendChild(aElement);
}

// set attributes inside a
let node = document.getElementsByTagName('a');
node[0].href = "index.html";
node[1].href = "menu.html";
node[2].href = "contact.html";
node[0].innerHTML = "Home";
node[1].innerHTML = "Menu";
node[2].innerHTML = "Contact";


//BODY Part
//Create div with class=bg-text
let div2=document.createElement('div');
div2.classList.add('bg-text');
document.body.appendChild(div2);
let header2=document.getElementsByClassName('bg-text');

//Create Header-1
let h2 = document.createElement('h2');
h2.innerHTML = "Welcome to";
header2[0].appendChild(h2);

//Create Header-2
let h1 = document.createElement('h1');
h1.innerHTML = "ABC Restaurant";
h1.style["font-size"] = "50px";
header2[0].appendChild(h1);

//Create Header-3
let h4 = document.createElement('h4');
h4.innerHTML = "Best Quality Food Service";
header2[0].appendChild(h4);


//BACKGROUND Part
//Create div with class=bg
let div3=document.createElement('div');
div3.classList.add('bg');
document.body.appendChild(div3);


// =================Menu Page====================


// =================Contact Page====================
// //Create div with class=about-section
// let aboutDiv = document.createElement('div');
// aboutDiv.classList.add('about-section');
// document.body.appendChild(aboutDiv);

// let about1=document.getElementsByClassName('about-section');
// let about_h1=document.createElement('h1');
// about_h1.innerHTML = "Contact Us";
// about[0].appendChild(about_h1);
// let paraElements = 4;
// for(let i=1;i<paraElements;i++){
//     const paraElement=document.createElement('p');
//     about1[i].appendChild(paraElement);

// }
// // set attributes inside p
// let paraNode = document.getElementsByTagName('p');
// paraNode[0].innerHTML = "Mobile : +91 9876543210";
// paraNode[1].innerHTML = "Email : abc@gmail.com";
// paraNode[2].innerHTML = "Location : Sec-67, Mohali, Punjab";

