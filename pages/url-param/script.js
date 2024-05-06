const theName = document.getElementById("name");
const age = document.getElementById("age");
const myClass = document.getElementById("class");





let querystring = window.location.search;
 const Params = new URLSearchParams(querystring);
 const name = Params.get('name',);
 const ages = Params.get('age',);
 const myclasses = Params.get('my-class');


 theName.innerText = name; //  using URL parameter to get value and replace "aaa"
age.innerText = ages; //  using URL parameter to get value and replace 2222
myClass.innerText = myclasses; //  using URL parameter to get value and replace "cc" });