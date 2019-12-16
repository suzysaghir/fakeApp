const ImageView = require("sf-core/ui/imageview");
const Application = require("sf-core/application");
const Screen = require("sf-core/device/screen");
const Page = require("sf-core/ui/page");
const extend = require("js-base/core/extend");
const Color = require("sf-core/ui/color");
const Label = require("sf-core/ui/label");
const GridView = require("sf-core/ui/gridview");
const GridViewItem = require("sf-core/ui/gridviewitem");
const TextAlignment = require("sf-core/ui/textalignment");
const LayoutManager = require("sf-core/ui/layoutmanager");

const SPAN_COUNT = 2;
const IMAGE = [
    "images://durum.png", "images://news_icon.png", "images://logo.png", "images://logo11.png", "images://pasta.png",
    "images://logo.png", "images://logo11.png", "images://macd.png", "images://more.png", "images://news.png",
    "images://macd.png", "images://star.png", "images://home_icon.png"
];
module.exports = extend(Page)(
    function(_super) {
        _super(this, {
            onShow: function(params) {
                Application.statusBar.visible = false;
                this.headerBar.visible = false;
            },
            onLoad: function() {
                var myDataSet = generateDataset();
                var layoutManager = new LayoutManager({
                    spanCount: SPAN_COUNT,
                    scrollDirection: LayoutManager.ScrollDirection.VERTICAL,
                    onItemLength: function() {
                        return Screen.width / SPAN_COUNT;
                    }
                });

                var gridView = new GridView({
                    layoutManager: layoutManager,
                    refreshEnabled: true,
                    backgroundColor: Color.TRANSPARENT,
                    flexGrow: 1,
                    itemCount: myDataSet.length,
                    scrollBarEnabled: false,
                    onItemCreate: function() {
                        var gridViewViewItem = new GridViewItem();
                           var myImageView = new ImageView({
                                image: "images://logo.png",
                                flexGrow: 1,
                            });
                            
                            gridViewViewItem.addChild(myImageView);
                            gridViewViewItem.image = myImageView;
                            return gridViewViewItem;
                        },
                    onItemBind: function(gridViewItem, index) {
                        var img = myDataSet[index].image;
                        gridViewItem.image.image = img
                    },
                    onItemSelected: function(gridViewItem, index) {
                        console.log(`Item title : ${gridViewItem.myLabel.text}`);
                    },
                    onPullRefresh: function() {
                        console.log("onPullRefresh");
                    },
                    onScroll: function() {
                        console.log("onScroll");
                    }
                });
                this.layout.addChild(gridView);
            }
        });
    }
);


		function generateDataset() {
	    var dataset = [];
	    for (let i = 0; i < IMAGE.length; ++i) {
	        dataset.push({
	           image: IMAGE[i],
	        });
	    }
	    return dataset;
		}
