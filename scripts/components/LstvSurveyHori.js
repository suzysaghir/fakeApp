const Image = require("sf-core/ui/image");
const extend = require('js-base/core/extend');
const LstvSurveyHoriDesign = require('library/LstvSurveyHori');

const LstvSurveyHori = extend(LstvSurveyHoriDesign)(
	// Constructor
	function(_super, props = {}, pageName) {
		// Initalizes super class for this scope
		_super(this, props);
		this.pageName = pageName;
		

		Object.defineProperties(this, {
			'tvNameSurvey': {
				get: function() {
					console.log(" get fun prop: ", this.tvName.text);
					return  this.tvName.text;
				},
				set: function(value) {
					this.tvName.text = value;
					console.log(" set new prop: ", this.tvName.text);

				}
			},
			'imgLogoSurvey': {
				get: function() {
					return  this.imgBrand.id;
				},
				set: function(value) {
					 this.imgBrand.id = value;
				}
			}
		});
		
	});


// console.log("____ ",LstvSurveyHoriDesign.tvNameSurvey)
// LstvSurveyHoriDesign.tvNameSurvey = "Updated title "
// console.log("++++ ",LstvSurveyHoriDesign.tvNameSurvey)


module.exports = LstvSurveyHori;
