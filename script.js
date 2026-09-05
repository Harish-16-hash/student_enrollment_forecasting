function predictEnrollment() {

    let year = parseInt(document.getElementById("year").value);
    let previous = parseInt(document.getElementById("previous").value);
    let applications = parseInt(
        document.getElementById("applications").value
    );
    let admitted = parseInt(
        document.getElementById("admitted").value
    );

    if (
        isNaN(year) ||
        isNaN(previous) ||
        isNaN(applications) ||
        isNaN(admitted)
    ) {
        alert("Please enter valid values.");
        return;
    }

    /*
       Demonstration prediction logic.
       This can later be replaced with a Flask/FastAPI
       backend connection to the trained ANN model.
    */

    let predicted =
        previous +
        (applications * 0.05) +
        (admitted * 0.02);

    predicted = Math.round(predicted);

    document.getElementById("resultYear").innerText = year;

    document.getElementById("prediction").innerText =
        predicted;

    document.getElementById("result").style.display = "block";
}