
# DotIndicator
## dotindicator@1.0.0

Dot Indicator component. You can use this component in your pages or library components.

## How To Use

- Add dotindicator comp to page from marketplace tab like library tab.
- set assignToPage as true then save page.
- now you can manipulate your component.

```js
// set dot size.
page.dotIndicator.size = 4;
page.layout.applyLayout();

// set current index ( active dot);
page.dotIndicator.currentIndex = 3;

```

- you can set your styles
```js
{
	".flexLayout-dotIndicator-main": {
		"height": 10,
		"width": 42,
		"backgroundColor": "rgba(1,1,1,0)",
		"flexProps": {
			"flexDirection": "ROW"
		}
	},
	".flexLayout-dotIndicator-item.inactive": {
		"backgroundColor": "#D8D8D8"
	},
	".flexLayout-dotIndicator-item.active": {
		"backgroundColor": "#1775D0"
	}
}

```

## Author
ali.pinar@smartface.io
    