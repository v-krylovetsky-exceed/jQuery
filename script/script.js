$(document).ready(function () {

  let a;
  alert(a);
  var i = 1;

  $('.add').click(function () {
    var item = $('.input-text').val();
    $('.input-text').val("");
    // alert(item);
    if (item && i <= 5) {


      $('.list').append('<div class = "item" id="item' + i + '"><input class = "it" id = "n' + i +
        '" type="checkbox" ><div class="text">' + item + '</div></div>');

      switch (i) {
        case 1:
          $('#item1').css("background-color", getRandomColor());
          break;
        case 2:
          $('#item2').css("background-color", getRandomColor());
          break;
        case 3:
          $('#item3').css("background-color", getRandomColor());
          break;
        case 4:
          $('#item4').css("background-color", getRandomColor());
          break;
        default:
          $('#item5').css("background-color", getRandomColor());
          break;
      }
    }

    i++;
  });


  $('#red').click(function () {
    var arr = saveArr();
    var n = 0; // Хранит индекс массива
    reColor(arr, n);
  });
  $('#pink').click(function () {
    var arr = saveArr();
    var n = 1; // Хранит индекс массива
    reColor(arr, n);
  });
  $('#purple').click(function () {
    var arr = saveArr();
    var n = 2; // Хранит индекс массива
    reColor(arr, n);
  });
  $('#blue').click(function () {
    var arr = saveArr();
    var n = 3; // Хранит индекс массива
    reColor(arr, n);
  });
  $('#green').click(function () {
    var arr = saveArr();
    var n = 4; // Хранит индекс массива
    reColor(arr, n);
  });
  $('#yellow').click(function () {
    var arr = saveArr();
    var n = 5; // Хранит индекс массива
    reColor(arr, n);
  });

  function getRandomColor() {
    var arr = ["#e6a1a1", "#f09ada", "#b8a6ca", "#72c8e0", "#9be3e5", "#e6e79d"];
    var a = Math.floor(Math.random() * (5 - 0)) + 0;
    return (arr[a]);
  }

});

function saveArr() {// Массив активных CheckBox
  //var arr = ["#e6a1a1", "#f09ada", "#b8a6ca", "#72c8e0", "#9be3e5", "#e6e79d"];
  var arr = [];
  if ($("#n1").prop("checked"))
    arr.push('#n1');
  if ($("#n2").prop("checked"))
    arr.push('#n2');
  if ($("#n3").prop("checked"))
    arr.push('#n3');
  if ($("#n4").prop("checked"))
    arr.push('#n4');
  if ($("#n5").prop("checked"))
    arr.push('#n5');
  return (arr);
}


function reColor(arr, n) {
  var sum = arr.length;
  var mass_color = ["#e6a1a1", "#f09ada", "#b8a6ca", "#72c8e0", "#9be3e5", "#e6e79d"];
  for (var i = 0; i < sum; i++) {
    switch (arr[i]) {
      case "#n1":
        $('#item1').css("background-color", mass_color[n]);
        break;
      case "#n2":
        $('#item2').css("background-color", mass_color[n]);
        break;
      case "#n3":
        $('#item3').css("background-color", mass_color[n]);
        break;
      case "#n4":
        $('#item4').css("background-color", mass_color[n]);
        break;
      case "#n5":
        $('#item5').css("background-color", mass_color[n]);
        break;
    }
  }
}