// সাউন্ড ফাংশন
function playClickSound() {
    // এখানে আপনার সাউন্ড ফাইলের নাম দিন
    const audio = new Audio('mr1.mp3'); 
    audio.play();
}

// এখন বাটনগুলোতে ক্লিক সাউন্ড যোগ করার জন্য আগের ফাংশনগুলোর সাথে এটি যুক্ত করুন
// উদাহরণস্বরূপ:
function toggleModal() {
    playClickSound(); // সাউন্ড বাজবে
    document.getElementById('settingsModal').style.display = 'none';
    document.getElementById('appContent').style.display = 'block';
}

// কপি বাটন এবং জেনারেট বাটনেও একই কাজ করুন:
function generatePattern() {
    playClickSound(); // সাউন্ড বাজবে
    // আপনার আগের লজিক এখানে থাকবে...
}

function toggleModal() {
    document.getElementById('settingsModal').style.display = 'none';
    document.getElementById('appContent').style.display = 'block';
}

function generatePattern() {
    const text = document.getElementById('userInput').value || " ";
    const count = parseInt(document.getElementById('lineCount').value) || 0;
    const outputDiv = document.getElementById('output');
    let result = "";

    for (let i = 1; i <= count; i++) {
        let cycle = (i - 1) % 19;
        let hyphens = (cycle < 10) ? (cycle + 1) : (19 - cycle);
        result += "-".repeat(hyphens) + " " + text + "\n";
    }
    outputDiv.innerText = result;
}

function copyToClipboard() {
    const text = document.getElementById('output').innerText;
    navigator.clipboard.writeText(text).then(() => alert("📋কপি হয়েছে!"));
}
