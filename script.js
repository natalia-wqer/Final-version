let step = 0;
let memoryStep = 0;

const memories = [
"I like talking to you.",
"You make things feel lighter.",
"And I didn’t act like that."
];

const messages = [
"I messed up.",
"I ignored you.",
"And that wasn’t fair.",
"But I care about you.",
"And I should’ve shown that."
];

function goToScene(n){
    document.querySelectorAll(".scene").forEach(s => s.classList.remove("active"));
    setTimeout(()=> {
        document.getElementById("scene"+n).classList.add("active");
    },300);
}

function typeText(text, el){
    el.innerHTML="";
    let i=0;
    const int=setInterval(()=>{
        el.innerHTML+=text[i];
        i++;
        if(i>=text.length) clearInterval(int);
    },30);
}

function nextMemory(){
    const el=document.getElementById("memoryText");
    if(memoryStep < memories.length){
        typeText(memories[memoryStep], el);
        memoryStep++;
    } else {
        goToScene(3);
        loadChat();
    }
}

function loadChat(){
    document.getElementById("chat").innerHTML = `
    <div class="msg">hey??</div>
    <div class="msg">are you ignoring me</div>
    <div class="msg">wow okay</div>`;
}

function nextStep(){
    const text=document.getElementById("text");
    if(step < messages.length){
        typeText(messages[step], text);
        step++;
    } else {
        goToScene(5);
    }
}

function forgive(){
    const final=document.getElementById("final");
    const bouquet=document.getElementById("bouquet");

    final.classList.remove("hidden");
    final.innerText="This is for you.";

    bouquet.classList.remove("hidden");

    gsap.fromTo(bouquet,
        {scale:0.5,opacity:0,y:30},
        {scale:1,opacity:1,y:0,duration:1}
    );

    gsap.to(".flower", {
        scale:1,
        opacity:1,
        stagger:0.15
    });

    createHearts();
}

function moveNo(){
    const btn=document.getElementById("noBtn");
    btn.style.transform=`translate(${Math.random()*200-100}px,${Math.random()*200-100}px)`;
}

/* lilies */
setInterval(()=>{
    const l=document.createElement("div");
    l.className="lily";
    l.style.left=Math.random()*100+"vw";
    document.getElementById("lily-container").appendChild(l);
    setTimeout(()=>l.remove(),10000);
},300);

/* hearts */
function createHearts(){
    setInterval(()=>{
        const h=document.createElement("div");
        h.className="heart";
        h.innerText="♡";
        h.style.left=Math.random()*100+"vw";
        document.body.appendChild(h);
        setTimeout(()=>h.remove(),6000);
    },300);
}
