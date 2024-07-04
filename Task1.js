function calculateAge() {
    let dob = document.getElementById("dob").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;

    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth() + 1;
    let currentDay = currentDate.getDate();

    let age = currentYear - year;

    if (currentMonth < month) {
        age--;
    } else if (currentMonth === month && currentDay < dob) {
        age--;
    }
    document.getElementById("result").innerHTML = `You are ${age} years old.`;
}