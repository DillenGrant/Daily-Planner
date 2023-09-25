$(document).ready(function () {
  $(".saveBtn").on("click", function() {
    var userInput = $(this).siblings("textarea").val();
    var timeBlockID = $(this).closest(".time-block").attr("id");
    localStorage.setItem(timeBlockID, userInput);
  
  //var testTime = dayjs().set('hour', 13).set('minute', 0);
  //var currentHour = testTime.hour();
  //"comment the line below and uncoment the 2 lines above to test the class changes"
  var currentHour = dayjs().hour();


  $(".time-block").each(function() {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);

    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
  
  $(".time-block").each(function() {
    var timeBlockID = $(this).attr("id");
    var storedInput = localStorage.getItem(timeBlockID);
    $(this).find("textarea").val(storedInput);
  });

  var updateDateTime = () => {
    var currentDateTime = dayjs().format('YYYY-MM-DD h:mm:ss A');
    document.getElementById('currentDay').textContent = currentDateTime;
  };
  setInterval(updateDateTime, 1000); 
  updateDateTime();

});
});
