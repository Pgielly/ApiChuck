let tbody = document.querySelector('.dispJoke');
let btn1 = document.getElementById('number1');
let btn2 = document.getElementById('number2');
let button ='';
let row = '';

fetch('http://api.icndb.com/categories')
.then((response) => {
    return response.json();
})
.then ((categories) => {
    console.log(categories);
    let nerdy = categories.value[1];
    let explicit = categories.value[0];
    btn1.innerHTML = `${nerdy}`;
    btn2.innerHTML = `${explicit}`;
});

function displayNerdy() {

    fetch('http://api.icndb.com/jokes/random/1?limitTo=[nerdy]')
    .then((response) => {
        return response.json();
    })
    .then((jokesNerdy) =>{
        jokesNerdy.value.forEach((jokeNerdy) => {
            row += `<tr class="nerd">`;
            row += `<td>${jokeNerdy.id}</td>`
            row += `<td>${jokeNerdy.joke}</td>`;
            row += `</tr>`;
        });
        tbody.innerHTML = row;
        document.querySelectorAll('.explicit').forEach((el)=>{
            el.classList.add('none');
        })
        document.querySelectorAll('.nerd').forEach((el)=>{
            el.classList.remove('none');
        })
        document.querySelectorAll('.noCat').forEach((el)=>{
            el.classList.add('none');
        })
    });

}

function displayExplicit() {
    fetch('http://api.icndb.com/jokes/random/1?limitTo=[explicit]')
    .then((response) => {
        return response.json();
    })
    .then((jokesExplicit) =>{
        jokesExplicit.value.forEach((jokeExplicit) => {
            row += `<tr class="explicit">`;
            row += `<td>${jokeExplicit.id}</td>`;
            row += `<td>${jokeExplicit.joke}</td>`
            row += `</tr>`;
        });
        tbody.innerHTML = row;
        document.querySelectorAll('.nerd').forEach((el)=>{
            el.classList.add('none');
        })
        document.querySelectorAll('.noCat').forEach((el)=>{
            el.classList.add('none');
        })
        document.querySelectorAll('.explicit').forEach((el)=>{
            el.classList.remove('none');
        })
    });
    
}

function displayNoCat() {
    fetch('http://api.icndb.com/jokes/random/1?exclude=[nerdy,explicit]')
    .then((response) =>{
        return response.json();
    })
    .then((noCategories)=>{
        // console.log(noCategories.value);
        noCategories.value.forEach((noCategory)=>{
            // console.log(noCategory.joke);
            row += `<tr class="noCat">`;
            row += `<td>${noCategory.id}</td>`;
            row += `<td>${noCategory.joke}</td>`
            row += `</tr>`;
        })
        tbody.innerHTML = row;
        document.querySelectorAll('.nerd').forEach((el)=>{
            el.classList.add('none');
        })
        document.querySelectorAll('.noCat').forEach((el)=>{
            el.classList.remove('none');
        })
        document.querySelectorAll('.explicit').forEach((el)=>{
            el.classList.add('none');
        })
    })
    
}