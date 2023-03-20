import { addVote, removeVote, addComment, newPic } from "./listeners.js";

export const createMainContent = () => {
    // Create h1
    const h1 = document.createElement("h1");
    h1.innerText = "Catstagram";

    // Create img
    const img = document.createElement("img");
    img.style.margin = "20px";
    img.style.maxWidth = "750px";

    const container = document.querySelector(".container");
    container.appendChild(h1);
    container.appendChild(img);

    fetchImage();
    makeNewPicButton();
    makeVoteSection();
    makeCommentSection();
};

function makeNewPicButton() {
    const div = document.createElement('div');
    div.setAttribute('class', 'container');
    document.body.appendChild(div);

    const button = document.createElement('button');
    button.setAttribute('id', 'new-pic');
    button.innerText = 'New Pic';
    button.addEventListener('click', newPic);
    div.appendChild(button);
}

function makeVoteSection() {
    const popDiv = document.createElement('div');
    popDiv.setAttribute('class', 'container')
    popDiv.innerText = 'Popularity score: '
    const score = document.createElement('span');
    score.innerText = 0;
    score.setAttribute('id', 'score');
    popDiv.appendChild(score);
    document.body.appendChild(popDiv);

    const voteDiv = document.createElement('div');
    voteDiv.setAttribute('class', 'container')
    const upVote = document.createElement('button');
    upVote.innerText = 'Upvote';
    upVote.setAttribute('id', 'up-vote');
    voteDiv.appendChild(upVote);
    upVote.addEventListener('click', addVote);

    const downVote = document.createElement('button');
    downVote.setAttribute('id', 'down-vote');
    downVote.innerText = 'Downvote';
    voteDiv.appendChild(downVote);
    document.body.appendChild(voteDiv);
    downVote.addEventListener('click', removeVote);
}

function makeCommentSection() {
    const div = document.createElement('div');
    div.setAttribute('class', 'container')
    div.setAttribute('class', 'comments')
    div.innerHTML = `
    <form>
        <label for="comment">Comment:</label>
        <input type="text" placeholder="Add a comment..." name="comment" id="comment">
        <input id="form-button" type="submit" value="Submit">
    </form>
    `
    const button = div.querySelector('#form-button');
    button.addEventListener('click', addComment);
    const comments = document.createElement('div');
    comments.setAttribute('id', 'comments');
    div.appendChild(comments);
    document.body.appendChild(div);
}

export const fetchImage = async () => {
    // Fetch image from API and set img url
    try {
        const kittenResponse = await fetch("https://api.thecatapi.com/v1/images/search?size=small");
        // Converts to JSON
        const kittenData = await kittenResponse.json();
        // console.log(kittenData);
        const kittenImg = document.querySelector("img");
        kittenImg.src = kittenData[0].url;
        localStorage.kittenImg = kittenImg.src;
    } catch (e) {
        console.log("Failed to fetch image", e);
    }
};
