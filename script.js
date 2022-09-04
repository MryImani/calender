

function getFirstDayOfMonth(year, month) {
    return new Date(year, month, 1);
}
function showCalender() {

    var selectedDate = new Date(document.getElementById('sltDate').value);
    var currentDate = selectedDate.getDate();
    const firstDayCurrentMonth = getFirstDayOfMonth(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),

    );
    let indexOfweek = firstDayCurrentMonth.getDay();
    const myTable = document.querySelector('#calender tbody');
    for (let row = 0; row < myTable.rows.length; row++) {
        for (let cel = 0; cel < 7; cel++) {
            myTable.rows[row].cells[cel].innerHTML = '';
            myTable.rows[row].cells[cel].style.backgroundColor = '#fff';
            myTable.rows[row].cells[cel].style.color = '#000';

        }

    }
    myTable.rows[0].cells[indexOfweek].innerHTML = 1;
    if (indexOfweek == currentDate) {
        myTable.rows[0].cells[indexOfweek].style.backgroundColor = '#2058e9';
        myTable.rows[0].cells[indexOfweek].style.color = '#fff';
    }
    document.querySelector('#calender thead').style.backgroundColor = '#777';
    var cntDay = 1;
    for (let i = 0; i < myTable.rows.length; i++) {
        myTable.rows[i].cells[6].style.backgroundColor = '#f00';
        if (i == 0) {
            for (let j = indexOfweek++; j < 7; j++) {
                if (cntDay <= 30) {
                    let nextDay = cntDay++;
                    if (nextDay == currentDate) {
                        myTable.rows[i].cells[j].style.backgroundColor = '#2058e9';
                        myTable.rows[i].cells[j].style.color = '#fff';
                    }
                    myTable.rows[i].cells[j].innerHTML = nextDay;

                }
            }

        }
        else {
            for (let j = 0; j < 7; j++) {
                if (cntDay <= 30) {
                    let nextDay = cntDay++;
                    if (nextDay == currentDate) {
                        myTable.rows[i].cells[j].style.backgroundColor = '#2058e9';
                        myTable.rows[i].cells[j].style.color = '#fff';
                    }
                    myTable.rows[i].cells[j].innerHTML = nextDay;

                }

            }

        }

    }
}
document.getElementById('sltDate').addEventListener("change", showCalender);
