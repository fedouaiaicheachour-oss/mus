const letters = [
  {
    title: "Letter 1",
    message: ` Happy 24th birthday musmusty 🤍

so l message lwel ra7 ykoun chewia mbdel I want to tell you how this little idea started …
kount 9e3da 9lt what if I wrote something for you every single day until your birthday? haka haja cute (je peux pas utilise lemoji t3 da7k et cest bzr)
So that’s what I did.
Lioum rana February 22nd Happy birthday my مهندس 🤍 (chewia 9bel lwe9t khater why not)
I’m so proud of you, and I wish you the most beautiful year ahead.
Good luck at work today… and don’t forget that someone is thinking about you, always.`
  },
  {
    title: "Letter 2",
    message: `Avec toi, je peux être moi
    merci`
  },
  {
    title: "Letter 3",
    message: ` Just thinking about our first meet…
 (2nd for me 3rd for you) mais c était la première fois eli hderna fiha haka bieen
Et tu m as ecrit ce petit message it was so cute I couldn t stop smiling (kount l3betha eli mti7ch mel 3wed) 
Even now, I can remember it and it still makes me feel warm inside. 💖
Crazy how small moments can mean so much…`
  },
  {
    title: "Letter 4",
    message: `f my plan it suppose to be a quality about you ..... but if I had to pick one it’s impossible 
I guess the easiest way to say it is: you are genuinely amazing, in a way that I notice every single day. 💖  
And it makes me so lucky to know you.
`
  },
  {
    title: "Letter 5",
    message: `Thank you… for everything. For every gift (bzf 3liiik wlh merciii اقدرهم جدااا), every smile, every little thing you do without realizing it.`
  },
  {
    title: "Letter 6",
    message: `Lioum inchallah rak raye7 inchallah tro7 bien w tji bien (w ttw7cheni tem bzf w jibli a dragon (jsp pourquoi mais 7essit فعاليات))
    inchallah 3a9ba fel future nro7ou bzzzzf amakin m3a b3ed 
    koun bkhiiir musmusty`
  },
  {
    title: "Letter 7",
    message: `khatrat haka nz3ef mnek wela jsp apres no machi z3ef just a feeling t3 yehh, mjwebnich tw7chetou 
    inchallah tkoun wselt bien w kolech bien 
    i miss you `
  },
  {
    title: "Letter 8",
    message: `
    احببتك حقا`
  },
  {
    title: "Letter 9",
    message: `Hiiiii cutieeee dok kmlna l mini appel… (cv welit n3yet machi kima kount)  
Inchallah fel future ndirou kter w kter… wla nn tem nkounou m3a b3dana khir mn ns77ouch des appels(inchallah reby yktblna eli fih lkhir daimeen) 💖 `
  },
  {
    title: "Letter 10",
    message: `Lioum l3boulk chewia 3la l morale I wish I could send you a hug (imagine mon gif t3 l insta) inchallah fel future nhblk bihooooom hata t9oli khalini ntnfees`
  },
  {
    title: "Letter 11",
    message: `always and every time I pray you’re the first person I think of دعواتي معك`
  },
  {
    title: "Letter 12",
    message: `Merciii pour toutes les motivations, pour toutes les informations li taatini…   
You inspire me more than you think
I’m really lucky to have someone like you in my life `
  },
  {
    title: "Letter 13",
    message: `Do you know why I call you “Mustaphaty”? 
    It feels like you are mine (inchallah daimen sinon n3ref darkom (mouus))`
  },
  {
    title: "Letter 14",
    message: `Sometimes I just stop for a second and think… how did you get so lucky with me ? 😌
Parce que vraiment… it’s not something that happens to everyone.
But don’t worry, I’m kind… I decided to stay 💖  

Lucky you.
`
  },
  {
    title: "Letter 15",
    message: ` Parking 
like sitting together talking laughing for no reason
Nothing big nothing complicated… just us side by side
And honestly that’s enough to make me smile.`
  },
  {
    title: "Letter 16",
    message: `I always believe in you Toujours.

Tu es capable de tout faire, vraiment… and I mean it.  
You have something strong inside you, something that will take you far.

W rani fière bzzf d’avoir une personne comme toi dans ma vie. 💙`
  },
  {
    title: "Letter 17",
    message: `Merci pour l’appel vidéo… vraiment ça m’a fait trop plaisir.  
 merci pour tous `
  },
  {
    title: "Letter 18",
    message: `Inchallah had l’année tkoun pleine de succès w nja7et bzf…  
mais aussi pleine de ra7a, peace of mind, and beautiful moments.`
  },
  {
    title: "Letter 19",
    message: ` Merci parce que tsa3efni, même si rak cvp…   
You’re always here, in your own way, and I really feel it.
 it means a lot to me.`
  },
  {
    title: "Letter 20",
    message: `Vraiment bzf 3lik 3la ga3 hadou… everything you brought me, I loved it 🥺  
mais surtout… la boule de neige et le petit messak ils sont trop mignon !!

Sah you made me so happy with all this.(inchallah n9der nrdlk ya louken chewia men wach dertli)

Inchallah 39ouba l more and more fel future… pourquoi pas (emoji t3 bombastic side eye)`
  },
  {
    title: "Letter 21",
    message: `I really appreciate everything you do for me.
 your time, your attention… `
  },
  {
    title: "Letter 22",
    message: `I was thinking about something very important…

How did I become this attached to you?  
Like… one day I was normal, and now I’m here smiling at my phone because of you??

This is actually your fault btw.  
But it’s okay… I like it. 💖`
  },
  {
    title: "Letter 23",
    message: `Every day is about you… and I’ll always celebrate you, not only on 18 March.

Because you’re someone worth celebrating every single day. 🤍`
  },
  {
    title: "Letter 24",
    message: `Happy birthday  musmusty 🎂

These 24 letters are just a small part of what I feel for you…  
but I hope they made you smile, even a little.

I wish you a year full of happiness, success, love, and everything your heart wants.

Stay the amazing person you are…  
 Fedoutek 💙`
  }
];

const lettersGrid = document.getElementById("lettersGrid");
const modal = document.getElementById("letterModal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");

letters.forEach((letter, index) => {
  const card = document.createElement("div");
  card.className = "letter-card";
  card.innerText = `Letter ${index + 1}`;
  card.onclick = () => openModal(letter.title, letter.message);
  lettersGrid.appendChild(card);
});

function openModal(title, message) {
  modalTitle.textContent = title;
  modalText.textContent = message;
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target === modal) {
    closeModal();
  }
};

function scrollToLetters() {
  document.getElementById("letters").scrollIntoView({
    behavior: "smooth"
  });
}