jQuery(document).ready(function($){var refreshSteps=function(){var url=window.location.href.split('&').shift()+'&DeliveryType=VIEW&DeliveryMethod=JSON';$.ajax({type:"POST",url:url,dataType:'json',success:function(json){json=$.postParseJson(json);$('#Content').html(json.Data);bindAjaxForm();if(!json.Complete&&!json.Error){refreshSteps();}},error:function(XMLHttpRequest,textStatus,errorThrown){if(textStatus=="timeout")
return;$('div.Popup').remove();$.popup({},XMLHttpRequest.responseText);}});}
var bindAjaxForm=function(){$('form').ajaxForm({dataType:'json',success:function(json){json=$.postParseJson(json);$('#Content').html(json.Data);bindAjaxForm();if(!json.Complete&&!json.Error){refreshSteps();}}});};refreshSteps();bindAjaxForm();});