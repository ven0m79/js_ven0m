function doSmth(target) {
 //  console.log(`Hi from ${index}`);
   console.log(target.id);
}

const longList = document.querySelector("#longList");
longList.addEventListener("click", (e) =>  doSmth(e.target))
