/*
 * jQuery limitWords Plugin
 *
 * Licensed under The MIT License
 * Redistributions of files must retain the copyright notice.
 *
 * @copyright		Copyright 2010 Jacob Morrison <jomorrison gmail com>, http://projects.ofjacob.com
 * @license			http://www.opensource.org/licenses/mit-license.php The MIT License
 * @author			Jacob Morrison <jomorrison gmail com>
*/

jQuery.fn.limitWords = function(options){
	var d = {
		'leftSelector':		false,
		'limit':				250,
		'underColor':			'green',
		'atColor':				'orange'
	};
	if(options){
		jQuery.extend(d, options);
	}
	jQuery(this).keypress(function(){
		var words = jQuery(this).val().split(/[\s]+/);
		var num_words = words.length;
		if(jQuery(this).val() == ''){
			num_words = 0;
		}
		
		var left = d.limit - num_words;
		var mreturn = true;
		
		if(d.limit){
			if(num_words > d.limit){ // over... copied in, trim it!
				if(d.leftSelector && d.atColor){
					jQuery(d.leftSelector).css('color', d.overColor);
				}
				jQuery(this).val(words.splice(0, d.limit).join(' '));
				left = 0;
				mreturn = false;
			}
			
			if(left == 0){ // at 
				if(d.leftSelector && d.atColor){
					jQuery(d.leftSelector).css('color', d.atColor);
				}
			}else{ // under... we coo
				if(d.leftSelector && d.underColor){
					jQuery(d.leftSelector).css('color', d.underColor);
				}
			}
			
			if(d.leftSelector){
				jQuery(d.leftSelector).html(Math.abs(left));
			}
			return mreturn;
		}
	});
	jQuery(this).click(function() {
	  jQuery(this).keypress();
	});
	jQuery(this).change(function() {
	  jQuery(this).keypress();
	});
}
