const extend = require('js-base/core/extend');
const LstvItSurveyDesign = require('library/LstvItSurvey');

const LstvItSurvey = extend(LstvItSurveyDesign)(
	// Constructor
	function(_super, props = {}, pageName) {
		// Initalizes super class for this scope
		_super(this, props);
		this.pageName = pageName;
		// this.flxLoutContainer.marginLeft = 100;
		
		
				
		// setFun = (x, obj) => {
  //          this.obj = x;
  //      }    
        
  //      getFun= ()=> {
  //          document.write("in property get accessor" + newLine);
  //          return this.newaccpropvalue;
  //      }
		
		// Object.defineProperties(this, {
		// 	fLoutContainer:{
		// 		get: getFun(this.fLoutContainer) ,//label.text,
		// 		set: setFun(x, this.fLoutContainer) //text = blabl
		// 	}
		// })
	// }
		
	// 	Object.defineProperties(this, {
	// 		surveyText:{
	// 			get:() => {},//label.text,
	// 			set:value => {}//text = blabl
	// 		}
	// 	})
	}
);

module.exports = LstvItSurvey;
/*
flxLoutContainer
	flxLoutImage
		imgBrand
	flxLoutTest
		flxLoutNameStar
			tvName
			imgStar
		flxLoutPrice
			tvTime 
			flxLoutPrice
				tvPrice
				imgArrow
		flxLoutEntries
			tvEntries

*/