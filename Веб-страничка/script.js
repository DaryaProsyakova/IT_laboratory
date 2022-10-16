$(document).ready(function() {

    var radio_division = "";
    var mun_suggestion;

    var rbtn = $('input[type=radio][name=division]');

    rbtn.change(function() {

          if (this.id == 'division-1') {
              radio_division = "administrative";
              console.log("a")
          } else if (this.id == 'division-2') {
              radio_division = "municipal";
              console.log("m");
              console.log(mun_suggestion?.value);
          }

          $(".address").suggestions({
              token: "c23b847cf976e32b428ff3f6abff8df6fd858a95",
              type: "ADDRESS",
              params: {
                  query: $('#vvod').val(),
                  division: radio_division
              },
              onSelect: function(suggestion) {
                  console.log($('#vvod').val());
                  console.log(radio_division);
                  console.log(suggestion);
                  $('#value').val(suggestion.unrestricted_value);
                  $('#country').val(suggestion.data.country);
                  $('#city_with_type').val(suggestion.data.city_with_type);
                  $('#city_area').val(suggestion.data.city_area);
                  $('#city_district_with_type').val(suggestion.data.city_district_with_type);
                  $('#federal_district').val(suggestion.data.federal_district);
                  $('#geo_lat').val(suggestion.data.geo_lat);
                  $('#geo_lon').val(suggestion.data.geo_lon);
                  $('#house').val(suggestion.data.house);
                  $('#street_with_type').val(suggestion.data.street_with_type);
                  $('#area').val(suggestion.data.area);
                  $('#sub_area').val(suggestion.data.sub_area);
              }
          });

          var suggestionsPlugin = $(".address").suggestions();

          suggestionsPlugin.fixData();
      
         console.log("ready-" + radio_division); 
    });

    rbtn.filter("#division-1").change();

});

function w3_open() {
document.getElementById("main").style.marginLeft = "25%";
document.getElementById("mySidebar").style.width = "25%";
document.getElementById("mySidebar").style.display = "block";
document.getElementById("openNav").style.display = 'none';
}

function w3_close() {
document.getElementById("main").style.marginLeft = "0%";
document.getElementById("mySidebar").style.display = "none";
document.getElementById("openNav").style.display = "inline-block";
}

