/*  File which disables the text selection and drag image feature */
if (!Object.keys) {
  Object.keys = function(obj) {
    var keys = [];

    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
        keys.push(i);
      }
    }

    return keys;
  };
}
$(function(){
	$.extend($.fn.disableTextSelect = function() {
		return this.each(function(){
            if(Object.keys($.browser).length > 0){
				if($.browser.mozilla){//Firefox
					$(this).css('MozUserSelect','none');
				}else if($.browser.msie){//IE
					$(this).bind('selectstart',function(){return false;});
				}else if($.browser.webkit || $.browser.chrome){//Chrome
					$(this).css('webkitUserSelect','none');
				}else{//Opera, etc.
					$(this).mousedown(function(){return false;});
				}
			} else if(navigator.userAgent == "MeritTracSEB"){ // this is specially for SEBBROWSWER as we are changing userAgent in SEB, so jquery is not getting the kind of browser
                $(this).css('webkitUserSelect','none');
			} else {
				$(this).css('webkitUserSelect','none');
				$('fieldset').mousedown(function(){return false;});
			}
		});
	});
	$('div').disableTextSelect();
        $('div.modal').disableTextSelect();
});
$('div#QuesAns,div.info-panel,.yui-skin-sam').bind("dragstart", function() {
     return false;
});
 $(this).bind("contextmenu", function(e) {
       e.preventDefault();
  });
