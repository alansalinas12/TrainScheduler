(function () {

        var trainName;
        var trainDestination;
        var trainFirst;
        var trainFrequency;
        var nextArrival;
        var minutesAway;
        var key;

        var database = firebase.database();

        function clearInput() {
            $("#train-name-input").val("");
            $("#destination-input").val("");
            $("#first-train-input").val("");
            $("#frequency-input").val("");
        }

        $("#add-train-btn").on("click", function (event) {
            event.preventDefault();

            trainName = $("#train-name-input").val().trim();
            trainDestination = $("#destination-input").val().trim();
            trainFirst = $("#first-train-input").val().trim();
            trainFrequency = $("#frequency-input").val().trim();

            var newTrain = {
                name: trainName,
                destination: trainDestination,
                start: trainFirst,
                frequency: trainFrequency,
                dateAdded: firebase.database.ServerValue.TIMESTAMP
            };

            database.ref("trains/").push(newTrain);

            clearInput();
        });

        database.ref("trains/")
            .orderByChild("dateAdded")
            .on("child_added", function (snapshot) {

                var sv = snapshot.val();
                key = snapshot.key;

                trainName = sv.name;
                trainDestination = sv.destination;
                trainFirst = sv.start;
                trainFrequency = sv.frequency;

                var firstTimeConverted = moment(trainFirst, "HH:mm").subtract(1, "years");

                var currentTime = moment();

                var diffTime = moment().diff(moment(firstTimeConverted), "minutes");

                var remainder = diffTime % trainFrequency;

                minutesAway = trainFrequency - remainder;

                nextArrival = moment().add(minutesAway, "minutes").format("h:mm A");

                var nameTab = $("<td>").text(trainName);
                var destinationTab = $("<td>").text(trainDestination);
                var frequencyTab = $("<td>").text(trainFrequency);
                var nextTab = $("<td>").text(nextArrival);
                var minutesTab = $("<td>").text(minutesAway);

                var newRow = $("<tr>").append(nameTab, destinationTab, frequencyTab, nextTab, minutesTab).attr("data-id", key);
                console.log(newRow);
                $("#train-body").append(newRow);
            });
    })();



