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
var startDate = "";
var monthsWorked = "";
var monthlyRate = "";
var totalBilled = "";
var submitTime = "";

$('#submit-button').on('click', function() {
	event.preventDefault();

	employeeName = $('#name-input').val().trim();
	role = $('#role-input').val().trim();
	startDate = $('#start-date-input').val().split('-');
	monthlyRate = $('#monthly-rate-input').val().trim();

	//.set replaces old data with new data but does not add on
	firebase.database().ref('recentUserPush').push({
	// firebase.database().ref().set( {
		employeeName: employeeName,
		role: role,
		startDate: startDate,
		monthlyRate: monthlyRate,
		dateAdded: firebase.database.ServerValue.TIMESTAMP
	});

});

//snapshot is response we are getting from the server
firebase.database().ref('recentUserPush').orderByChild('dateAdded').limitToLast(1).on("child_added", function(snapshot) {

	const sv = snapshot.val();

	employeeName = sv.employeeName;
	role = sv.role;
	startDate = sv.startDate;
	monthlyRate = sv.monthlyRate;
	submitTime = sv.dateAdded;
	// monthsWorked = ;
	// totalBilled = ;

	console.log(employeeName);
	console.log(role);
	console.log(startDate);
	console.log(monthlyRate);
	console.log(submitTime);
	console.log(monthsWorked);
	console.log(totalBilled);
	
	var currentEmployeeRow = $("<tr>");
	currentEmployeeRow.addClass("new-employee-data");
	
	var nameDisplay = $("<td>");
	nameDisplay.attr("id", "name-display");
	$("#name-display").append(employeeName + "<br>");
	currentEmployeeRow.append(nameDisplay);

	var roleDisplay = $("<td>");
	roleDisplay.attr("id", "role-display");
	$("#role-display").append(role + "<br>");
	currentEmployeeRow.append(roleDisplay);
	
	var startDateDisplay = $("<td>");
	startDateDisplay.attr("id", "start-date-display");
	$("#start-date-display").append(startDate  + "<br>");
	currentEmployeeRow.append(startDateDisplay);
	
	var monthlyRateDisplay = $("<td>");
	monthlyRateDisplay.attr("id", "monthly-rate-display");
	$("#monthly-rate-display").append(monthlyRate + "<br>");
	currentEmployeeRow.append(monthlyRateDisplay);

	$("#table-body").append(currentEmployeeRow);

}, function(errorObject) {
	console.log("Errors handled; " + errorObject.code);
});













