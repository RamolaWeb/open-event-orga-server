$(document).ready(function() {

  var counter = 0;
  var sponsor_counter = 1;
  $( "body" ).on( "click", ".add-sponsor", function () {
    sponsor_counter += 1;
    var row = '<tr class="row-sponsor">'+
                '<td>' + sponsor_counter + '</td>'+
                '<td><input required="required" name="sponsors[name]" class="form-control col-md-7 col-xs-12"/></td>'+
                '<td><input required="required" name="sponsors[logo]" class="form-control col-md-7 col-xs-12"/></td>'+
                '<td><textarea name="sponsors[description]" class="form-control col-md-7 col-xs-12"></textarea></td>'+
                '<td><input required="required" name="sponsors[level]" class="form-control col-md-7 col-xs-12"/></td>'+
                '<td><input required="required" name="sponsors[type]" class="form-control col-md-7 col-xs-12" value="Gold"/></td>'+
                '<td><input required="required" name="sponsors[url]" class="form-control col-md-7 col-xs-12"/></td>'+
            '</tr>';
    $('.sponsors').append(row);
  });

  $( "body" ).on( "click", ".remove-sponsor", function () {
    $(this).parent().parent().parent().remove();
  });

  $('.add-session-type').click(function () {
    var row = "<div class='col-sm-12 row-session-type'>" +
                "<div class='col-sm-3'>" +
                  "<input type='text' class='form-control' name='session_type[name]' placeholder='Name'>" +
                "</div>" +
                "<div class='col-sm-3 input-group'>" +
                  "<input type='text' class='form-control' name='session_type[length]' placeholder='Length'>" +
                  "<span class='input-group-btn'>" +
                    "<button type='button' class='btn btn-danger remove-session-type'>-</button>" +
                  "</span>" +
                "</div>" +
              "</div>";
    $('.session-types').append(row);
  });

  $( "body" ).on( "click", ".remove-session-type", function () {
    $(this).parent().parent().parent().remove();
  });

  $('.add-social-links').click(function () {
    var row = "<div class='col-sm-12 row-social-links'>" +
                "<div class='col-sm-3'>" +
                  "<input type='text' class='form-control' name='social[name]' placeholder='Name'>" +
                "</div>" +
                "<div class='col-sm-3 input-group'>" +
                  "<input type='text' class='form-control' name='social[link]' placeholder='Length'>" +
                  "<span class='input-group-btn'>" +
                    "<button type='button' class='btn btn-danger remove-social-links'>-</button>" +
                  "</span>" +
                "</div>" +
              "</div>";
    $('.social-links').append(row);
  });

  $("body").on("click", ".remove-social-links", function () {
    $(this).parent().parent().parent().remove();
  });

  $("body").on("click", '#add-tracks', function () {
    counter += 1;
    var row = "<div class='col-sm-12 row-tracks'>" +
                "<div class='col-sm-3'>" +
                  "<input type='text' class='form-control' name='tracks[name]' placeholder='Name'>" +
                "</div>" +
                "<div class='col-sm-3 input-group'>" +
                  "<div class='input-group colorpicker-component' id='color"+counter+"'>"+
                    "<input type='text' value='#e01ab5' class='form-control' name='tracks[color]' title='track-color'/>"+
                    "<span class='input-group-addon'><i></i></span>"+
                  "</div>" +
                  "<span class='input-group-btn'>" +
                    "<button type='button' class='btn btn-danger remove-tracks'>-</button>" +
                  "</span>" +
                "</div>" +
              "</div>";
    $('.tracks').append(row);
    $('#color'+counter).colorpicker();
  });

  $("body").on("click", ".remove-tracks", function () {
    $(this).parent().parent().parent().remove();
  });

  $("body").on("click", '#add-rooms', function () {
    counter += 1;
    var row = "<div class='col-sm-12 row-rooms'>" +
                "<div class='col-sm-3'>" +
                  "<input type='text' class='form-control' name='rooms[name]' placeholder='Name'>" +
                "</div>" +
                "<div class='col-sm-3 input-group'>" +
                  "<div class='input-group colorpicker-component' id='color"+counter+"'>"+
                    "<input type='text' value='#e01ab5' class='form-control' name='rooms[color]' title='track-color'/>"+
                    "<span class='input-group-addon'><i></i></span>"+
                  "</div>" +
                  "<span class='input-group-btn'>" +
                    "<button type='button' class='btn btn-danger remove-rooms'>-</button>" +
                  "</span>" +
                "</div>" +
              "</div>";
    $('.rooms').append(row);
    $('#room-color'+counter).colorpicker();
  });

  $("body").on("click", ".remove-rooms", function () {
    $(this).parent().parent().parent().remove();
  });

  // Smart Wizard
  $("#wizard").smartWizard({
    labelFinish:'Publish',
    onFinish: function() { $("#event-create-form").submit(); }
  });

  $("#wizard-edit").smartWizard({
    labelFinish:'Update',
    onFinish: function() { $("#event-create-form").submit(); }
   });

  $('.buttonNext').addClass("btn btn-success");
  $('.buttonPrevious').addClass("btn btn-primary");
  $('.buttonFinish').addClass("btn btn-default");


});