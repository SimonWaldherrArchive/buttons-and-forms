/*
 *
 * Buttons and Forms
 *
 * Repo: https://github.com/SimonWaldherr/buttons-and-forms
 * Demo: http://simonwaldherr.github.com/buttons-and-forms/demo/
 * Editor: http://simonwaldherr.github.com/buttons-and-forms/editor/
 * License: MIT
 * Version: 1.2b
 *
 */

function id(id)
  {
    return document.getElementById(id);
  }

function changeValues(element)
  {
    var kc = window.event.keyCode;
    if (((kc === 37)||(kc === 40))&&(element.value > (Math.round(element.min))))
      {
        //left||down -
        element.value = Math.round(element.value)-1;
        return false;
      }
    else if (((kc === 38)||(kc === 39))&&((Math.round(element.max)) > element.value))
      {
        //up||right +
        element.value = Math.round(element.value)+1;
        return false;
      }
    else
      {
        return true;
      }
  }

function changeloadingmode(element)
  {
    if(element.disabled == true)
      {
        
      }
    else
      {
        if(element.className.search('loading') != -1)
          {
            element.className = element.className.replace(' loading', '');
          }
        else
          {
            element.className = element.className+' loading';
            return true;
          }
      }
  }

$(".toggle-buttons > .baf").click(function() {
    $(this).siblings(".baf").removeClass("checked");
    $(this).addClass("checked");
});
