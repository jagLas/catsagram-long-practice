import { fetchImage } from "./main.js";

export function addVote (e) {
    const score = document.querySelector('#score');
    score.innerText = Number(score.innerText) + 1;
    localStorage.popScore = score.innerText;
}

export function removeVote(e) {
    const score = document.querySelector('#score');
    score.innerText = Number(score.innerText) - 1;
    localStorage.popScore = score.innerText;
}

export function addComment(e) {
    e.preventDefault();
    const comment = document.getElementsByName('comment')[0];
    const div = document.createElement('div');
    div.innerText = comment.value;
    document.querySelector('#comments').appendChild(div);
    comment.value = ''
    localStorage.comments = document.querySelector('#comments').children
}

export const newPic = () => {
    //fetch new image
    fetchImage();

    //reset popularity score
    const score = document.querySelector('#score');
    score.innerText = 0;

    //reset comments
    document.querySelector('#comments').innerHTML = '';
}