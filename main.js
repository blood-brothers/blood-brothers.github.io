var mondayCurrentlyDisplayed = new Date;

$( document ).ready(function() {
  init();

  $(".scrollable").scrollTop(470);

  $("#back").click(function() {
    decrementWeek();
    updateSources();
    return false;
  });

  $("#next").click(function() {
    incrementWeek();
    updateSources();
    return false;
  });
});

function init(){
  var today = new Date;
  var diff = today.getDate() - today.getDay() + 1;
  mondayCurrentlyDisplayed = new Date(today.setDate(diff));
}

function incrementWeek(){
  mondayCurrentlyDisplayed.setDate(mondayCurrentlyDisplayed.getDate() + 7);
}

function decrementWeek(){
  mondayCurrentlyDisplayed.setDate(mondayCurrentlyDisplayed.getDate() - 7);
}

function updateSources(){
  $("#jason").attr("src", getSrc(5117024));
  $("#andy" ).attr("src", getSrc(5116706));
  $("#mark" ).attr("src", getSrc(5135253));
}

function getSrc(userId){
  return "https://www.toggl.com/app/reports/summary/612214/from/"
    + moment(mondayCurrentlyDisplayed).format("YYYY-MM-DD")
    + "/to/"
    + moment(mondayCurrentlyDisplayed).add('days', 6).format("YYYY-MM-DD")
    + "/projects/"
    + userId
    + "/billable/both";
}
