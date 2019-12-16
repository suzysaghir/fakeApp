const extend = require('js-base/core/extend');
const SwipeviewDesign = require('ui/ui_swipeview');
const Image = require("sf-core/ui/image");
const ImageView = require("sf-core/ui/imageview");
const Application = require("sf-core/application");
const Page       = require("sf-core/ui/page");
const FlexLayout = require('sf-core/ui/flexlayout');
const SwipeView  = require('sf-core/ui/swipeview');
const Label      = require('sf-core/ui/label');
const Color      = require('sf-core/ui/color');


var Page1 = extend(Page)(
    function(_super, params) {
        _super(this, params);
        this.onLoad = function() {
            this.layout.backgroundColor = Color.RED; 
            var myImageView = new ImageView({
                image:  Image.createFromFile("images://macd.png"),
                flexGrow: 1,
                imageFillType: ImageView.FillType.STRETCH 
            });
            this.layout.addChild(myImageView);
        }.bind(this);
    }
);
var Page2 = extend(Page)(
    function(_super, params) {
        _super(this, params);
        this.onLoad = function() {
            this.layout.backgroundColor = Color.YELLOW; 
             var myImageView = new ImageView({
                image:  Image.createFromFile("images://durum.png"),
                flexGrow: 1,
                imageFillType: ImageView.FillType.STRETCH 
            })
            this.layout.addChild(myImageView);
        }.bind(this);
    }
);
var Page3 = extend(Page)(
    function(_super, params) {
        _super(this, params);
        this.onLoad = function() {
            this.layout.backgroundColor = Color.BLUE; 
            var myImageView = new ImageView({
                image:  Image.createFromFile("images://pasta.png"),
                flexGrow: 1,
                imageFillType: ImageView.FillType.STRETCH 
            })
            this.layout.addChild(myImageView);
        }.bind(this);
    }
);

const Swipeview = extend(SwipeviewDesign)(
	function(_super) {
		_super(this);
			// var self = ÷this;
		this.onShow = onShow.bind(this, this.onShow.bind(this));
		this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
		console.log(" --------------: ");
		console.log("dotindicator :", this.dotindicator)

		
	}
);

function onShow(superOnShow) {
	superOnShow();
}

function onLoad(superOnLoad) {
	superOnLoad();
	const page = this;

    const { dotindicator } = page;
// 	console.log(" -----++++++++---: index ", dotindicator.currentIndex);
	
	Application.statusBar.visible = false;
    this.headerBar.visible = false;
    this.layout.flexDirection = FlexLayout.FlexDirection.COLUMN;
    this.layout.justifyContent = FlexLayout.JustifyContent.FLEX_START;
    this.layout.alignItems = FlexLayout.AlignItems.CENTER;

    var swipeView = new SwipeView({
        page: this,
        width:300, maxHeight:200, marginTop:50,
        pages: [Page1, Page2, Page3],
        onStateChanged: function(state) {
            if (SwipeView.State.IDLE === state) {
                labelState.text = "State: IDLE";
            } else {
                labelState.text = "State: DRAGGING";   
            }
        }
    });
    this.layout.addChild(swipeView);
    
    var labelState = new Label({
        width:200, height:65,
        text: "Waiting for State",
    });
    this.layout.addChild(labelState);
    this.layout.applyLayout();
    
    const Picker = require("sf-core/ui/picker");
    var items = [
        "item 1",
        "item 2",
        "item 3",
        "item 4",
        "item 5"
    ];
    var myPicker = new Picker({
        items: items,
        currentIndex: 2
    });
    
    var okCallback = function(params) {
        console.log('Selected index: ' + params.index);
    }
    var cancelCallback = function() {
        console.log('Canceled');
    }
    myPicker.show(okCallback,cancelCallback);
        
    }

module.exports = Swipeview;

// dotindicator






