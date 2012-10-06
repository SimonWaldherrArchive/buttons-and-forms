/*
 *
 * Buttons and Forms
 *
 * Repo: https://github.com/SimonWaldherr/buttons-and-forms
 * Demo: http://simonwaldherr.github.com/buttons-and-forms/demo/
 * Editor: http://simonwaldherr.github.com/buttons-and-forms/editor/
 * License: MIT
 * Version: 1.3.2
 *
 */

function id(id)
  {
    return document.getElementById(id);
  }

var keepCalling = true;

function plusone(id)
  {
    if((keepCalling)&&((Math.round(document.getElementById(id).max)) > document.getElementById(id).value))
      {
        document.getElementById(id).value++;
        window.setTimeout(plusone, 130, id);
      }
  }

function minusone(id)
  {
    if((keepCalling)&&(document.getElementById(id).value > (Math.round(document.getElementById(id).min))))
      {
        document.getElementById(id).value--;
        window.setTimeout(minusone, 130, id);
      }
  }

function changeValues(element)
  {
    
    if(element != '[object HTMLInputElement]')
      {
        element = document.getElementById(element);
      }
    var kc = window.event.keyCode;
    if (((kc === 37)||(kc === 40)||(kc === 109))&&(element.value > (Math.round(element.min))))
      {
        //left||down||minus -
        element.value = Math.round(element.value)-1;
        return false;
      }
    else if (((kc === 38)||(kc === 39)||(kc === 107))&&((Math.round(element.max)) > element.value))
      {
        //up||right||plus +
        element.value = Math.round(element.value)+1;
        return false;
      }
    else if ((kc === 34)&&(element.value > (Math.round(element.min))))
      {
        //page down -
        element.value = Math.round(element.value)-10;
        return false;
      }
    else if ((kc === 33)&&((Math.round(element.max)) > element.value))
      {
        //page up +
        element.value = Math.round(element.value)+10;
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