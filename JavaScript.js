
var showCard = document.getElementById("div_card_show");
var barbarian = document.getElementById("barbarian_card");
var gaint = document.getElementById("gaint_card");
var knight = document.getElementById("knight_card");
showCard.appendChild(barbarian);
barbarian.style.display = "block";
var x = 1;

var leftArrow = document.getElementById("left_arrow");
var rightArrow = document.getElementById("right_arrow");



leftArrow.addEventListener("click", function () {

    switch (x) {

        case 1:
            gaint.style.display = "block";
            barbarian.style.display = "none";
            showCard.appendChild(gaint);
            knight.style.display = "none";
            x = x + 1;
            break;

        case 2:
            barbarian.style.display = "none";
            knight.style.display = "block";
            showCard.appendChild(knight);
            gaint.style.display = "none";
            x = x + 1;
            break;
    }
});


rightArrow.addEventListener("click", function () {

    switch (x) {

        case 3:

            gaint.style.display = "block";
            barbarian.style.display = "none";
            showCard.appendChild(gaint);
            knight.style.display = "none";
            x = x + 1;
            break;

        case 4:
            knight.style.display = "none";
            barbarian.style.display = "block";
            showCard.appendChild(barbarian);
            gaint.style.display = "none";
            x = x - 3;
            break;

    }

});
