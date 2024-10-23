// Handle summarization
document.getElementById("summarizeButton").addEventListener("click", async function() {
    const inputText = document.getElementById("inputText").value;

    // Call the server to get the summary
    const response = await fetch('http://localhost:3000/summarize', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: inputText }),
    });

    if (response.ok) {
        const data = await response.json();
        document.getElementById("summaryOutput").innerText = data.summary;
    } else {
        document.getElementById("summaryOutput").innerText = "Error summarizing text.";
    }
});

// Handle quiz start
document.getElementById("startQuizButton").addEventListener("click", function() {
    const quizContent = `
        <h3>Quiz Questions:</h3>
        <p>1. What is the capital of France?</p>
        <p><input type="text" placeholder="Your answer"></p>
        <p>2. What is 2 + 2?</p>
        <p><input type="text" placeholder="Your answer"></p>
        <button id="submitQuizButton">Submit Answers</button>
    `;
    document.getElementById("quizOutput").innerHTML = quizContent;
    document.getElementById("quizOutput").style.display = "block";

    document.getElementById("submitQuizButton").addEventListener("click", function() {
        // Handle quiz submission (for demonstration purposes, we won't process answers)
        alert("Quiz submitted! Thank you for participating.");
    });
});

// Handle reflective learning
document.getElementById("saveReflectionButton").addEventListener("click", function() {
    const reflectionText = document.getElementById("reflectionInput").value;
    document.getElementById("reflectionOutput").innerText = "Reflection Saved: " + reflectionText;
});