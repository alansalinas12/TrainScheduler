window.firebase = function() {
    var config = {
        apiKey: "AIzaSyCe8TVWkDBuly-KMN5Va6_gFyQ3F3YsXxk",
        authDomain: "trainscheduler-6a12c.firebaseapp.com",
        databaseURL: "https://trainscheduler-6a12c.firebaseio.com",
        projectId: "trainscheduler-6a12c",
        storageBucket: "trainscheduler-6a12c.appspot.com",
        messagingSenderId: "385111748186"
    };
    firebase.initializeApp(config);

    return firebase;
}()


