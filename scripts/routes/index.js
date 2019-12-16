    const BottomTabBarRouter = require("@smartface/router/src/native/BottomTabBarRouter");
    const Color = require("sf-core/ui/color");
    const Image = require("sf-core/ui/image");
    const OS = require('sf-core/device/system').OS;
    const buildExtender = require("sf-extension-utils/lib/router/buildExtender");
    const Route = require("@smartface/router/src/router/Route");
    const Router = require("@smartface/router/src/native/NativeRouter");
    const HomePage = require("tabs/homeTab/home");
    const NewsPage = require("tabs/newsTab/news");
    const SwipeView = require("pages/swipeview");

    // const {
    //     NativeRouter: Router,
    //     NativeStackRouter: StackRouter,
    //     Route
    // } = require("@smartface/router");
    // require("sf-extension-utils/lib/router/goBack"); // Implements onBackButtonPressed
    
    const router = Router.of({
        path: "/",
        isRoot: true,
        routes: [
            BottomTabBarRouter.of({
                path: "/pages/survey",
                tabbarParams: () => ({
                    ios: { visible: false },
                    itemColor: {
                        normal: Color.BLACK,
                        selected: Color.WHITE
                    },
                    backgroundColor: Color.create("#CEAB62")
                }),
                items: () => [{ title: "Home", icon: Image.createFromFile("images://home_icon.png") },
                              { title: "News", icon: Image.createFromFile("images://news_icon.png") },
                              { title: "SwipeView", icon: Image.createFromFile("images://more.png") }],
    
    
    	routes: [
                    Route.of({
                        path: "/tabs/home",
                        build: (router, route) => {
                            return new HomePage(router);
                        }
                    }),
                    Route.of({
                        path: "/tabs/news",
                        build: (router, route) => {
                            return new NewsPage(router);
                        }
                    }),
                   Route.of({
                        path: "/tabs/swipview",
                        build: (router, route) => {
                            return new SwipeView(router);
                        }
                    })
    	            ]
    	        }),
            Route.of({
                path: "/pages",
                routes: [
                    Route.of({
                        path: "/pages/survey",
                        build: buildExtender({ getPageClass: () => require("pages/survey"), headerBarStyle: { visible: true } })
                    }),
                ]
            })
    	        
    	    ]
    	});
    	
    router.push("/tabs");
    module.exports = router;
