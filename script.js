
let h3 = document.querySelector("h3");

const cells = document.querySelectorAll(".cell");
let turn = 0;
const winner = () => {

    let one = document.querySelector("#one").innerHTML;
    let two = document.querySelector("#two").innerHTML;
    let three = document.querySelector("#three").innerHTML;
    let four = document.querySelector("#four").innerHTML;
    let five = document.querySelector("#five").innerHTML;
    let six = document.querySelector("#six").innerHTML;
    let seven = document.querySelector("#seven").innerHTML;
    let eight = document.querySelector("#eight").innerHTML;
    let nine = document.querySelector("#nine").innerHTML;

    if (
        one == two && two == three && one != "" ||
        four == five && five == six && four != "" ||
        seven == eight && eight == nine && seven != "" ||
        one == four && four == seven && one != "" ||
        two == five && five == eight && two != "" ||
        three == six && six == nine && three != "" ||
        one == five && five == nine && one != "" ||
        three == five && five == seven && three != ""
    ) {
        if (turn === 0) {
            h3.innerHTML = " woohh !! Player-2 won !!"
        } else {
            h3.innerHTML = " Hurreyy !! Player-1 won !!"
        }
        cells.forEach(c => c.innerHTML = "");
    }
}

cells.forEach(cell => {
    cell.addEventListener("click", () => {
        if (turn === 0) {
            cell.innerHTML = "O";
            
            turn = 1;
            winner();

        } else {
            cell.innerHTML = "|";
            turn = 0;
            winner();

        }

    })

})