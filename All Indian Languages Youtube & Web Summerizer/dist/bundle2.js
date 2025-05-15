// Function to summarize text from a web page
async function summarizePage(url) {
    const response = await fetch(url);
    const text = await response.text();
    const summary = summarizeText(text);
    console.log(summary);
}

function summarizeText(text) {
    return text.split(' ').slice(0, 50).join(' ') + '...';
}
