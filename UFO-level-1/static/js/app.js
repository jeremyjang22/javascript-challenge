//grab from data.js
var tableData = data;

//get reference to table
var tbody = d3.select("tbody");

printTable(tableData);

//select the button
var button = d3.select("#filter-btn");

//select the form
var form = d3.select("#form");

//event handlers
button.on("click", runEnter);
form.on("submit", runEnter);

//printTable implementation
function printTable(sightings){
    sightings.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

// runEnter implementation
function runEnter(){

    //prevent page refresh
    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredData;

    if (inputValue){
        filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    }else{
        filteredData = tableData;
    };
    console.log(filteredData)

    tbody.html("");

    printTable(filteredData);
};