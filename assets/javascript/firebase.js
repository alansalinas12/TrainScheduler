// Initialize Firebase
var config = {
    apiKey: "AIzaSyCe8TVWkDBuly-KMN5Va6_gFyQ3F3YsXxk",
    authDomain: "trainscheduler-6a12c.firebaseapp.com",
    databaseURL: "https://trainscheduler-6a12c.firebaseio.com",
    projectId: "trainscheduler-6a12c",
    storageBucket: "trainscheduler-6a12c.appspot.com",
    messagingSenderId: "385111748186"
};
firebase.initializeApp(config);

var database = firebase.database();

$("#add-train-btn").on("click", function(event) {
    event.preventDefault();

    var trainName = $("#train-name-input").val().trim();
    var trainDestination = $("#destination-input").val().trim();
    var trainFirst = moment($("#first-train-input").val().trim(), "HH:mm").format("X");
    var trainFrequency = $("#frequency-input").val().trim();

    var newTrain = {
        name: trainName,
        destination: trainDestination,
        start: trainFirst,
        frequency: trainFrequency
    };

    database.ref().push(newTrain);

    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#first-train-input").val("");
    $("#frequency-input").val("");
});

database.ref().on("child_added", function (childSnapshot, prevChildKey) {
    var trainName = childSnapshot.val().name;
    var trainDestination = childSnapshot.val().destination;
    var trainFirst = childSnapshot.val().start;
    var trainFrequency = childSnapshot.val().frequency;

    
    nextArrival
    minutesAway

    $("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDestination + "</td><td>" + trainFrequency + "</td><td>" + nextArrival + "</td><td>" + minutesAway + "</td></tr>");
});