const FlexLayout = require("sf-core/ui/flexlayout");
const Button = require("sf-core/ui/button");
const Color = require("sf-core/ui/color");
const extend = require('js-base/core/extend');
const AlertViewDesign = require('ui/ui_alertView');
const Alert_View = require('sf-core/ui/alertview');

const AlertView = extend(AlertViewDesign)(
	// Constructor
	function(_super) {
		_super(this);
		this.onShow = onShow.bind(this, this.onShow.bind(this));
		this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
		
		this.layout.flexDirection = FlexLayout.FlexDirection.ROW;
        this.layout.justifyContent = FlexLayout.JustifyContent.CENTER;
        this.layout.alignItems = FlexLayout.AlignItems.CENTER;
		
		var myAlertView = new Alert_View({
            title: "Alert Title",
            message: "Alert Message"
        });
        myAlertView.addButton({
            index: Alert_View.ButtonType.NEGATIVE,
            text: "Cancel"
        });

        myAlertView.addButton({
            index: Alert_View.ButtonType.POSITIVE,
            text: "Okey",
            onClick: function() {
                console.log("Okey clicked.");
            }
        });
        myAlertView.addTextBox({
         text: "Hello!",
         hint: "Hint!",
         isPassword: false,
         android: {
             viewSpacings: { left: 50, right: 50 }
         }
		});     
		
        var myButton = new Button({
            width: 100,
            height: 50,
            text: "Button",
            textColor:Color.BLACK,
            backgroundColor: Color.create("#00A1F1"),
            onPress: function() {
               myAlertView.show();
            }
        });
		this.layout.addChild(myButton);

	}
);

function onShow(superOnShow) {
	superOnShow();
}

function onLoad(superOnLoad) {
	superOnLoad();
}

module.exports = AlertView;
