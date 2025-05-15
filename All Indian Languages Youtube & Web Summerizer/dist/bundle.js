// Function to fetch video transcript and summarize it
async function summarizeYouTube(videoId) {
    const response = await fetch(`https://api.youtube.com/transcript/${videoId}`);
    const transcript = await response.text();
    const summary = summarizeText(transcript);
    console.log(summary);
}

function summarizeText(text) {
    return text.split('.').slice(0, 5).join('.') + '.';
}
