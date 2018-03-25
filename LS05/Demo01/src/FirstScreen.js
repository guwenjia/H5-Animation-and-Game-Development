var FirstLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;
        cc.log(123);

        // add "HelloWorld" splash screen"
        // this.sprite = new cc.Sprite(res.Red_png);
        // this.sprite.attr({
        //     x: size.width / 2,
        //     y: size.height / 2
        // });
        // this.addChild(this.sprite, 0);

       return true;
    }
});

var FirstScene = cc.Scene.extend({//把层添加到场景上
    onEnter: function () {
        this._super();
        cc.log(234);
        var layer = new FirstLayer();
        this.addChild(layer);
    }
});