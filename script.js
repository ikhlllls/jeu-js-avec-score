var x;
var p_current = 0;
var score = 0;

var alphabet = [
    { name: 'A', image: "alphabet image/A.webp" },
    { name: 'B', image: 'alphabet image/B.webp' },
    { name: 'C', image: 'alphabet image/CC.webp' },
    { name: 'D', image: 'alphabet image/D.webp' },
    { name: 'E', image: 'alphabet image/E.png' },
    { name: 'F', image: 'alphabet image/F.webp' },
    { name: 'G', image: 'alphabet image/G.webp' },
    { name: 'H', image: 'alphabet image/H.png' },
    { name: 'I', image: 'alphabet image/i.webp' },
    { name: 'J', image: 'alphabet image/j.webp' },
    { name: 'K', image: 'alphabet image/Kah.webp' },
    { name: 'M', image: 'alphabet image/M.webp' },
    { name: 'N', image: 'alphabet image/N.webp' },
    { name: 'O', image: 'alphabet image/O.png' },
    { name: 'P', image: 'alphabet image/P.webp' },
    { name: 'Q', image: 'alphabet image/Q.webp' },
    { name: 'R', image: 'alphabet image/R.webp' },
    { name: 'S', image: 'alphabet image/S.png' },
    { name: 'T', image: 'alphabet image/T.webp' },
    { name: 'U', image: 'alphabet image/U.webp' },
    { name: 'V', image: 'alphabet image/V.webp' },
    { name: 'W', image: 'alphabet image/W.webp' },
    { name: 'X', image: 'alphabet image/X.webp' },
    { name: 'Y', image: 'alphabet image/Y.webp' },
    { name: 'Z', image: 'alphabet image/Z.webp' },
];

function commencer_leJeux() {
    afficher_noms();
    x = setInterval(jouer, 5000);
}

function jouer() {
    var i = Math.floor(Math.random() * alphabet.length);
    var wahed_lhayawan = alphabet[i];
    var img = document.createElement("img");
    img.setAttribute("src", wahed_lhayawan.image);
    img.setAttribute("width", "200px");
    document.getElementById("dv_image").innerHTML = "";
    document.getElementById("dv_image").appendChild(img);
    p_current = i;
}

function afficher_noms() {
    var buttonsContainer = document.getElementById("dv_nom");
    buttonsContainer.innerHTML = "";

    for (var i = 0; i < alphabet.length; i++) {
        var btn = document.createElement("button");
        btn.textContent = alphabet[i].name;
        btn.setAttribute("onclick", "test(" + i + ")");
        buttonsContainer.appendChild(btn);
    }
}

function test(p) {
    var old_score = parseInt(document.getElementById("dv_score").innerHTML);
    var buttons = document.getElementById("dv_nom").getElementsByTagName("button");

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }

    if (p === p_current) {
        score++;
        document.getElementById("dv_score").innerHTML = score;
        buttons[p].style.backgroundColor = "#2ecc71"; 
    } else {
        buttons[p].style.backgroundColor = "#e74c3c"; 
    }

    if (score === 20) {
        document.getElementById("dv_congrats").innerHTML = "Congratulations! You finished 20 plays.";
        arreter_jeux();
    } else {
        setTimeout(function () {
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].style.backgroundColor = ""; 
                buttons[i].disabled = false;
            }
    
            jouer();
        }, 1000);
    }
}

function arreter_jeux() {
    clearInterval(x);
}



