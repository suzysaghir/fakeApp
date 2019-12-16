const Image = require("sf-core/ui/image");
const ListViewItem = require("sf-core/ui/listviewitem");
const Color = require("sf-core/ui/color");
const FlexLayout = require('sf-core/ui/flexlayout');
const extend = require('js-base/core/extend');
const SurveyDesign = require('ui/ui_survey');

//const page = require("/scripts/pages/survey")


const Survey = extend(SurveyDesign)(
	// Constructor
	function(_super) {
		_super(this);
		this.onShow = onShow.bind(this, this.onShow.bind(this));
		this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
       
        Object.assign(
            this.listView1, {
                rowHeight: 95,
                height: 400,
                itemCount: 4
            });


	}
);

function onShow(superOnShow) {
	superOnShow();
	// const page = this;
	// const { lstvItSurvey, listView1 } = page;
	
}

function onLoad(superOnLoad) {
	superOnLoad();
	const page = this;
	const { listView1 } = page;

	var myDataSet = [{
		title: 'Marina Mall',
		time: '12.06.2018',
		image: Image.createFromFile("images://logo.png"),
		price: '124 KD',
		entries:'3 Draw Entries'
	}, {
		title: 'Souk Shark Mall',
		time: '12.06.2018',
		image: Image.createFromFile("images://logo11.png"),
		price: '22.462 KD',
		entries:'4 Draw Entries'
	}, {
		title: 'Avenues Mall',
		time: '12.06.2018',
		image: Image.createFromFile("images://star.png"),
		price: '4.586 KD',
		entries:'5 Draw Entries'
	}, {
		title: 'Avenues Mall',
		time: '12.06.2018',
		image: Image.createFromFile("images://arrow.png"),
		price: '48 KD',
		entries:'6 Draw Entries'
	}];
	 
	 //listView1.itemCount = myDataSet.length;
	 //lstvItSurvey.flexDirection = FlexLayout.FlexDirection.ROW;
	
	listView1.onRowBind = function(listViewItem, index) {
		// listViewItem.marginLeft = 100; 
		var myItemContainer = listViewItem.flxLoutContainer;
		// console.log("myItemContainer: " + myItemContainer);
		
		// var myTextFlxLout = listViewItem.flxLoutTest;
		// myTextFlxLout.marginLeft = 200;

		// listViewItem.flxLoutNameStar
		// listViewItem.tvName
		
		var myBrandImage = listViewItem.imgBrand;
		myBrandImage.image = myDataSet[index].image || undefined;
 
		var myBrandName = listViewItem.tvName;
		myBrandName.text = myDataSet[index].title;
		 
		
		var myBrandTime = listViewItem.tvTime;
		myBrandTime.text = myDataSet[index].time;
		
		var myDrawEntries = listViewItem.tvEntries;
		myDrawEntries.text = myDataSet[index].entries;

		var myPrice = listViewItem.tvPrice;
		myPrice.text = myDataSet[index].price;
		
		// console.log(" Get: ",listViewItem.tvNameSurvey)
		// listViewItem.tvNameSurvey = "Updated title "
		// console.log(" Set: ",listViewItem.tvNameSurvey)



        };
}
        
module.exports = Survey;






