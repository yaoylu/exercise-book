
document.addEventListener("DOMContentLoaded", function () {
    const wordList = document.getElementById("sentence-list");

    // Fetch words from the text file
    fetch("data/sentences.txt")
        .then(response => response.text())
        .then(text => {
            const lines = text.split("\n");

            // Display words in the list
            lines.forEach(line => {
                // Splitting the line into word and sentence using regex and split()
                // march "ABC/DEF:GHI";
                const match = line.match(/^([^\/]+)\/([^\/]+)/);
                if (!match) {
                    return;
                }
                const [,zh, en] = match;

                const pairContainer = document.createElement("div");
                pairContainer.classList.add("pair-container"); // Add a class for styling if needed

                const translationElement = document.createElement("span");
                translationElement.textContent = zh;
                translationElement.classList.add("key"); // Add a class for styling if needed
                translationElement.classList.add("zh-sen"); // Add a class for styling if needed

                const sentenceElement = document.createElement("span");
                sentenceElement.textContent = en;
                sentenceElement.classList.add("value"); // Add a class for styling if needed
                sentenceElement.classList.add("en-sen"); // Add a class for styling if needed

                pairContainer.appendChild(translationElement);
                pairContainer.appendChild(sentenceElement);
                wordList.appendChild(pairContainer);
            });
        })
        .catch(error => {
            console.log("Error fetching the file:", error);
        });
});