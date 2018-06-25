function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6oqN7q2zx2L":
        Script1();
        break;
      case "6E6naizFw7M":
        Script2();
        break;
      case "6j7YP8QEVIr":
        Script3();
        break;
      case "6FykjPqXdMk":
        Script4();
        break;
      case "6L2gzkqdFne":
        Script5();
        break;
      case "60GgHOhLR4G":
        Script6();
        break;
      case "5X4AqMDtn7N":
        Script7();
        break;
      case "5jS0ir5BXBb":
        Script8();
        break;
      case "6hZQxcnGIcU":
        Script9();
        break;
      case "6XoKh6creEe":
        Script10();
        break;
      case "5qALbaWlFXF":
        Script11();
        break;
      case "63sWqWKAdQr":
        Script12();
        break;
      case "5iRuR4tocWo":
        Script13();
        break;
      case "6cYhINvQenl":
        Script14();
        break;
      case "5lQJn8KrmxX":
        Script15();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script3()
{
  $("#tab-customlink").hide();
}

function Script4()
{
  $("#tab-customlink").hide();
}

function Script5()
{
  $("#tab-customlink").hide();
}

function Script6()
{
  $("#tab-customlink").hide();
}

function Script7()
{
  $("#tab-customlink").hide();
}

function Script8()
{
  $("#tab-customlink").hide();
}

function Script9()
{
  $("#tab-customlink").hide();
}

function Script10()
{
  $("#tab-customlink").hide();
}

function Script11()
{
  $("#tab-customlink").hide();
}

function Script12()
{
  $("#tab-customlink").hide();
}

function Script13()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script14()
{
  $("#tab-customlink").show();
}

function Script15()
{
  window.print();
}

