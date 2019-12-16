const FlexLayout = require("sf-core/ui/flexlayout");
const TextAlignment = require("sf-core/ui/textalignment");
const Page = require("sf-core/ui/page");
const Color = require("sf-core/ui/color");
const TabBarController = require("sf-core/ui/tabbarcontroller");
const TabBarItem = require("sf-core/ui/tabbaritem");


const extend = require('js-base/core/extend');

const MyOffers = require('tabs/myOffers');
const MyNews = require('pages/alertView');
// const MyNews = require('sf-core/ui/page');
const Favorites = require('sf-core/ui/page');

var tabPages = [new Favorites(), new MyNews(), new MyOffers()];

var TabBarController1 = extend(TabBarController)(
    function(_super, params) {
        _super(this);
        this.onPageCreate = function(index) {
            return tabPages[index];
        };
        this.onShow = function() {
            this.headerBar.visible = false;
        }.bind(this);
        this.onHide = function() {
            console.log("hidden");
        }.bind(this);
        this.onLoad = function() {
            this.scrollEnabled = true;
            this.indicatorColor = Color.create("#B9A284");
            this.indicatorHeight = 3;
            this.barColor = Color.create("#FFFFFF");
            this.textColor = {
                normal: Color.create("#B9A284"),
                selected: Color.create("#CEAB62")
            };
            this.layout.alignItems = FlexLayout.AlignItems.CENTER;
            this.layout.justifyContent = FlexLayout.JustifyContent.CENTER;
            this.items = items;
            this.autoCapitalize = true;
        }.bind(this);
        this.onSelected = function(index) {
            console.log("Selected item index: " + index);
        };
    }
);
var favItem = new TabBarItem({
    title: "Favorites",
    // icon: Image.createFromFile("images://message.png");
});
var newsItem = new TabBarItem({
    title: "News",

	
});
var offersItem = new TabBarItem({
    title: "Offers",
});

var items = [favItem, newsItem, offersItem];

module.exports = TabBarController1;

