const deleteLink = document.querySelector('#deleteLink');

deleteLink.addEventListener('click', function(e) {
    const path = e.path;

    for (let i = 0; i < path.length; i++) {
        if (path[i].className === 'deleteButton') {
            e.path[i + 2].remove();
        }
    }
})

const seeCommentButtons = document.querySelectorAll('.seeCommentButton');
const hideCommentButtons = document.querySelectorAll('.hideCommentButton');
const comments = document.querySelectorAll('.comment');

for(let i = 0; i < seeCommentButtons.length; i++) {
    seeCommentButtons[i].addEventListener('click', function(){
        seeCommentButtons[i].classList.toggle('hide');
        hideCommentButtons[i].classList.toggle('show');
        comments[i].classList.toggle('show');
    })
}

for(let i = 0; i < hideCommentButtons.length; i++) {
    hideCommentButtons[i].addEventListener('click', function(){
        hideCommentButtons[i].classList.remove('show');
        seeCommentButtons[i].classList.remove('hide');
        comments[i].classList.remove('show');
    })
}

const editButtons = document.querySelectorAll(".editButton");

for(let i = 0; i < editButtons.length; i++) {
    editButtons[i].addEventListener('click', function(){
        const dataSetToEdit = document.querySelector(`#rec${i+1}`);
        // console.log(dataSetToEdit[0]);
        const dataToEdit = dataSetToEdit.querySelectorAll(".dataToEdit");
        for(let j = 0; j < dataToEdit.length; j++) {
            dataToEdit[j].classList.toggle('hide');
        }

        const editionInputs = dataSetToEdit.querySelectorAll(".editionInput");
        for(let j = 0; j < editionInputs.length; j++) {
            editionInputs[j].classList.remove('hide');
        }
    })
}

const finishEditionButtons = document.querySelectorAll(".finishEditionButton");

for(let i = 0; i < finishEditionButtons.length; i++) {
    finishEditionButtons[i].addEventListener('click', function(){
        const dataSetToEdit = document.querySelector(`#rec${i+1}`);
        // console.log(dataSetToEdit[0]);
        const dataToEdit = dataSetToEdit.querySelectorAll(".dataToEdit");
        for(let j = 0; j < dataToEdit.length; j++) {
            dataToEdit[j].classList.remove('hide');
        }

        const editionInputs = dataSetToEdit.querySelectorAll(".editionInput");
        for(let j = 0; j < editionInputs.length; j++) {
            editionInputs[j].classList.toggle('hide');
        }
    })
}


var date = new Date();

var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();

if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;

var today = year + "-" + month + "-" + day; 

const dates = document.querySelectorAll(".theDate");
for (let date of dates) {
    date.max = today;
}
