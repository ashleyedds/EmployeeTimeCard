// Initialize Firebase
var config = {
  apiKey: "AIzaSyCfLsuawHUExvN_oFlfDI4AMmCn2agrERc",
  authDomain: "employee-timecard-9ecc9.firebaseapp.com",
  databaseURL: "https://employee-timecard-9ecc9.firebaseio.com",
  projectId: "employee-timecard-9ecc9",
  storageBucket: "employee-timecard-9ecc9.appspot.com",
  messagingSenderId: "124170541688"
};

firebase.initializeApp(config);

var employeeName = "";
var role = "";
var startDate = [];
var monthsWorked = "";
var monthlyRate = "";
var totalBilled = "";
var submitTime = "";

$('#add-user').on('click', function() {
	event.preventDefault();

	employeeName = $('#name-input').val().trim();
	role = $('#email-input').val().trim();
	startDate = $('#age-input').val().trim().split('/');
	monthlyRate = $('#comment-input').val().trim();

	console.log(employeeName);
	console.log(role);
	console.log(startDate);
	console.log(monthlyRate);

	//.set replaces old data with new data but does not add on
	firebase.database().ref().push( {
	// firebase.database().ref().set( {
		name: name,
		email: email,
		age: age,
		comment: comment,
		dateAdded: firebase.database.ServerValue.TIMESTAMP
	});

	submitTime = firebase.database().ref().getInstance(dateAdded);
	monthsWorked = timeCalc();
	totalBilled = $('#comment-input').val().trim();
	console.log(submitTime);
	console.log(monthsWorked);
	console.log(totalBilled);

});

function timeCalc() {
	
}

//snapshot is response we are getting from the server
firebase.database().ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
// firebase.database().ref().on("value", function(snapshot) {
	$("#name-display").html(snapshot.val().name);
	$("#email-display").html(snapshot.val().email);
	$("#age-display").html(snapshot.val().age);
	$("#comment-display").html(snapshot.val().comment);

});












