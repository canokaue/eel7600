/*================================================================================




================================================================================

NOTE:
------
PLACE HERE YOUR OWN JS CODES AND IF NEEDED.
WE WILL RELEASE FUTURE UPDATES SO IN ORDER TO NOT OVERWRITE YOUR CUSTOM SCRIPT IT'S BETTER LIKE THIS. */
  // Cookies.set('loggedInState', true, { expires: 3650, secure: false });
  $(function() {

$(".sign-in-button").click(function(e) {

    Cookies.set('loggedInState', true, { expires: 3650, secure: false });



  // e.preventDefault();



  if($("#accounttype").val() == '2'){
    Cookies.set('merchant', true, { expires: 3650, secure: false });
    window.location="dashboard.php";
  }else if($("#accounttype").val() == '1'){
    Cookies.remove('merchant');
    window.location="dashboard.php";
  }else {
    e.preventDefault();
    alert("Please choose a user to try the prototype");
  }




  // if($("#username").val() == 'merchant'){
  //   Cookies.set('merchant', true, { expires: 3650, secure: false });
  //   window.location="dashboard.php";
  // }else if($("#username").val() == 'affiliate'){
  //   Cookies.remove('merchant');
  //   window.location="dashboard.php";
  // }else {
  //   e.preventDefault();
  //   alert("put in affiliate or merchant as the username to try the platform");
  // }
  //
});

$(".sign-out-button").click(function(e) {
  // e.preventDefault();
  Cookies.remove('loggedInState');
  // location.reload();
});

  $(".icobtn").click(function(e) {
    dataLayer.push({
      "event" : "icobtn",
      "protoResult" : "clicked"
    });
  });
}); // end of document ready
