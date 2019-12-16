const extend = require('js-base/core/extend');
const LstvSurveytestDesign = require('library/LstvSurveytest');

const LstvSurveytest = extend(LstvSurveytestDesign)(
	// Constructor
	function(_super, props = {}, pageName) {
		// Initalizes super class for this scope
		_super(this, props);
		this.pageName = pageName;
	}
);

module.exports = LstvSurveytest;
