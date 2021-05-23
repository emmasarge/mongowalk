$(document).ready(function(){
    $(".sidenav").sidenav({edge:"right"});
  });

// ACCORDION FOR TASK PAGE
$(document).ready(function(){
    $('.collapsible').collapsible();
  });

// TOOLTIP FOR TASK PAGE
$(document).ready(function(){
    $('.tooltipped').tooltip();
  });

// CALENDAR FOR ADD TASK PAGE
  $(document).ready(function(){
    $('.datepicker').datepicker({
        format: "dd mmmm, yyyy",
        yearRange: 3,
        showClearButton: true,
        i18n: {
            done: "Select"
        }
    });
  });
  // ADD TASK SELECTOR

  $(document).ready(function(){
    $('select').formSelect();
  });