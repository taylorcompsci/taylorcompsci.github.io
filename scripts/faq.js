//this is for dynamically loading in the questions and answers. This way, we don't have to write any HTML.

const FAQ = {
    "Question_1" : "Answer_1",
};


addEventListener("load", () => {

    const contentBody = document.querySelector(".content")
    for(const [question, answer] of Object.entries(FAQ)){
        contentBody.innerHTML+=`
            <div class="QA">
                <p class="question">
                    ${question}
                </p>
                <p class="answer">
                    ${answer}
                </p> 
            </div>
        `;
    }
});