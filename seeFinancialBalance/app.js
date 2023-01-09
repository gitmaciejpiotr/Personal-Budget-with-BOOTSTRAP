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
