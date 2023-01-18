/*function submitForm(){
let promise = new Promise((resolve, reject) => {
    let button = document.querySelector('button');
    let profile = document.querySelector('input').innerHTML;
    
    if (button == onclick){
        resolve(document.write(profile));
    } else{
        reject(MediaError("not done"));
    }
})
}*/

let button = document.querySelector('button');
button.addEventListener("click", submitForm);

function submitForm() {
  let promise = new Promise((resolve, reject) => {
    let input = document.querySelector('#answer');
    let profile = input.value;
    if (profile) {
        let div = document.querySelector("#profile");
        div.innerHTML = profile;
        resolve();
    } else {
        reject(Error("Profile is empty"));
    }
  });
}

