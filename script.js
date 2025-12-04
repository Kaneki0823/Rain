/* ========================= */
/* LANDING PAGE TRANSITION */
/* ========================= */

const enterBtn = document.getElementById("enterBtn");
const landing = document.getElementById("landing");
const main = document.getElementById("main");
const music = document.getElementById("bgMusic");

enterBtn.addEventListener("click", () => {

    // Start music immediately (user gesture)
    music.play().catch(() => {
        setTimeout(() => music.play(), 1500);
    });

    landing.classList.add("fade-out");

    setTimeout(() => {
        landing.style.display = "none";
        main.classList.remove("hidden");
    }, 2000);
});


/* ====================================================== */
/* MESSAGE (ONE-TIME ONLY — DOES NOT REPEAT WITH THE SONG) */
/* ====================================================== */

let messageHasEnded = false; // <<< prevents looping

const messageLines = [
    { time: 2, text: "This song..." },
    { time: 7, text: "is for the girl..." },
    { time: 12, text: "my heart walks back to..." },
    { time: 17, text: "Rain." },
    { time: 22, text: "Every note," },
    { time: 25, text: "every silence..." },
    { time: 28, text: "my heart belongs to you." },
    { time: 31, text: "Listen," },
    { time: 33, text: "and know it has always been yours." },
    { time: 38, text: "I'm sorry it took me too long to call." },
    { time: 43, text: "Especially when you really wanted to spend time with me." },
    { time: 48, text: "I know you waited for soooooo looooooong." },
    { time: 52, text: "I'm sorry love." },
    { time: 55, text: "So here's something for me to make up for it." },
    { time: 60, text: "This song," },
    { time: 63, text: "Work Song," },
    { time: 66, text: "reminds me of you" },
    { time: 69, text: "because it isn't about perfect love." },
    { time: 74, text: "It's about love that stays even when mistakes exist." },
    { time: 79, text: "It's the kind of love that says," },
    { time: 84, text: "'Even if the world falls apart, even if I'm not proud of everything I've done, I'll still find my way back to you'." },
    { time: 90, text: "I know you'll disagree with me on this and say that you don't feel that way." },
    { time: 94, text: "But that's how I feel about you." },
    { time: 99, text: "You don't just exist in my happy moments." },
    { time: 103, text: "You exist in my tired ones," },
    { time: 105, text: "my quiet ones," },
    { time: 107, text: "my struggling ones." },
    { time: 110, text: "When things feel heavy between us," },
    { time: 113, text: "it's still you I want to talk to." },
    { time: 116, text: "When something good happens," },
    { time: 119, text: "it's still you I want to tell first." },
    { time: 122, text: "Even when we're not okay," },
    { time: 125, text: "I still see my future with you standing in it." },
    { time: 128, text: "I'm not perfect." },
    { time: 131, text: "You know that." },
    { time: 134, text: "I mess up." },
    { time: 137, text: "I messed up a lot before." },
    { time: 140, text: "But you still accepted me," },
    { time: 143, text: "you still chose to be with me." },
    { time: 146, text: "Thank you for that love." },
    { time: 149, text: "I love you Rain." },
    { time: 152, text: "Even when you're mad at me." },
    { time: 155, text: "I'm still here." },
    { time: 158, text: "I know masabat ka gulpi 'dapat lang' HAHAHAHAHAHA" },
    { time: 161, text: "If love were proven by how far someone would go," },
    { time: 164, text: "I'd crawl every distance just to reach you again." },
    { time: 167, text: "Love" },
    { time: 170, text: "While writing this I recalled the times we fought," },
    { time: 174, text: "times we had some misunderstandings," },
    { time: 177, text: "times I dissapointed you," },
    { time: 180, text: "times you got hurt," },
    { time: 183, text: "times I got hurt," },
    { time: 186, text: "and many more things we've been through." },
    { time: 190, text: "I know mahambal ka naman nga OA pila palang gani ka months." },
    { time: 195, text: "But it really feels like we've been through so many things already." },
    { time: 200, text: "Soooooo many things happened between us." },
    { time: 203, text: "But there's one thing that really didn't changed," },
    { time: 207, text: "and I hope that never changes." },
    { time: 210, text: "Secret ko lang na kay kontrahon mo naman ko" },
    { time: 215, text: "Ti nadula nako kay nag insert ko gulpi sa tunga tunga" },
    { time: 220, text: "Again" },
    { time: 222, text: "I'm so sorry love." },
    { time: 225, text: "I promise I'll make it up to you." },
    { time: 230, text: "wala naaaaaa" },
    { time: 235, text: "nadulaaa na akon cinematic nga themeeeee" },
    { time: 240, text: "walaaa naaa may ga sulod sa utok koooo" },
    { time: 245, text: "tuyo nani gru" },
    { time: 250, text: "So going backkkkkk" },
    { time: 255, text: "The song fades..." },
    { time: 260, text: "but my heart has never stopped speaker your name," },
    { time: 265, text: "Rain." },
    { time: 270, text: "I hope you know that I'll always love you." },
    { time: 275, text: "No distance," },
    { time: 280, text: "no silence," },
    { time: 285, text: "no challenge could ever pull me away." },
    { time: 290, text: "Every beat of my heart," },
    { time: 295, text: "Every thought in my mind..." },
    { time: 300, text: "always finds its way back to you." },
    { time: 305, text: "I choose you in the quiet." },
    { time: 310, text: "I choose you in the chaos." },
    { time: 315, text: "I choose you in every tomorrow I get to see." },
    { time: 320, text: "I may stumble." },
    { time: 325, text: "I may fail" },
    { time: 330, text: "But my devotion will never waver." },
    { time: 335, text: "Foreverrrrrrrrrrrr" },
    { time: 340, text: "yourssssssss," },
    { time: 345, text: "Rain." },
    { time: 350, text: "The love of my life." },
    { time: 355, text: "I love youuuu" },
    { time: 360, text: "soooooooooooooooooooo" },
    { time: 365, text: "sooooooooooooooooooooooooo" },
    { time: 370, text: "soooooooooooooooooooooooooooo" },
    { time: 375, text: "muchhhhhhhhhhhhhhh" },
    { time: 380, text: "Sincerely," },
    { time: 385, text: "Kei." }
];

const lastMessageTime = messageLines[messageLines.length - 1].time;

const centerMessage = document.getElementById("centerMessage");

music.addEventListener("timeupdate", () => {

    // Stop updating messages after end
    if (messageHasEnded) return;

    const now = Math.floor(music.currentTime);

    // Mark message as ended
    if (now > lastMessageTime) {
        messageHasEnded = true;
        return;
    }

    // Show lines normally until then
    messageLines.forEach(line => {
        if (now === line.time) {
            centerMessage.style.opacity = 0;

            setTimeout(() => {
                centerMessage.textContent = line.text;
                centerMessage.style.opacity = 1;
            }, 300);
        }
    });
});


/* ========================= */
/* LYRICS SUBTITLES (looping) */
/* ========================= */

const subtitles = [
    { time: 31, text: "Boys workin' on empty" },
    { time: 34, text: "Is that the kinda way to face the burnin' heat?" },
    { time: 39, text: "I just think about my baby" },
    { time: 42, text: "I'm so full of love, I could barely eat" },
    { time: 46, text: "There's nothin' sweeter than my baby" },
    { time: 50, text: "I'd never want once from the cherry tree" },
    { time: 54, text: "'Cause my baby's sweet as can be" },
    { time: 58, text: "She'd give me toothaches just from kissin' me" },
    { time: 62, text: "When my time comes around" },
    { time: 66, text: "Lay me gently in the cold, dark earth" },
    { time: 69, text: "No grave can hold my body down" },
    { time: 73, text: "I'll crawl home to her" },
    { time: 77, text: "Boys, when my baby found me" },
    { time: 80, text: "I was three days on a drunken sin" },
    { time: 85, text: "I woke with her walls around me" },
    { time: 88, text: "Nothin' in her room but an empty crib" },
    { time: 93, text: "And I was burnin' up a fever" },
    { time: 96, text: "I didn't care much how long I lived" },
    { time: 100, text: "But I swear, I thought I dreamed her" },
    { time: 103, text: "She never asked me once about the wrong I did" },
    { time: 108, text: "When my time comes around" },
    { time: 112, text: "Lay me gently in the cold, dark earth" },
    { time: 116, text: "No grave can hold my body down" },
    { time: 120, text: "I'll crawl home to her" },
    { time: 124, text: "When my time comes around" },
    { time: 128, text: "Lay me gently in the cold, dark earth" },
    { time: 131, text: "No grave can hold my body down" },
    { time: 135, text: "I'll crawl home to her" },
    { time: 139, text: "My babe would never fret none" },
    { time: 142, text: "About what my hands and my body done" },
    { time: 147, text: "If the Lord don't forgive me" },
    { time: 150, text: "I'd still have my baby and my babe would have me" },
    { time: 155, text: "When I was kissin' on my baby" },
    { time: 157, text: "And she put her love down, soft and sweet" },
    { time: 162, text: "In the low lamplight, I was free" },
    { time: 166, text: "Heaven and hell were words to me" },
    { time: 170, text: "When my time comes around" },
    { time: 174, text: "Lay me gently in the cold, dark earth" },
    { time: 178, text: "No grave can hold my body down" },
    { time: 182, text: "I'll crawl home to her" },
    { time: 185, text: "When my time comes around" },
    { time: 190, text: "Lay me gently in the cold, dark earth" },
    { time: 193, text: "No grave can hold my body down" },
    { time: 207, text: "I'll crawl home to her" }
];

const lyricsBox = document.getElementById("lyrics");

music.addEventListener("timeupdate", () => {
    const now = Math.floor(music.currentTime);

    subtitles.forEach(sub => {
        if (now === sub.time) {
            lyricsBox.style.opacity = 0;

            setTimeout(() => {
                lyricsBox.textContent = sub.text;
                lyricsBox.style.opacity = 1;
            }, 300);
        }
    });
});
