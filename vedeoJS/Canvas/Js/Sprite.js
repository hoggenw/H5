/**
 * Created by wangliugen on 2018/9/11.
 */

function Sprite(option) {
    this._init(option);
}
Sprite.prototype = {
    _init:function (option) {
        this.x = option.x === 0 ? 0 : (option.x || 10);//0
        this.y = option.y === 0 ? 0 : (option.y || 10);//0

        this.w = option.w || 40; // 绘制到canvas上的宽高
        this.h = option.h || 65;

        this.fps =  option.fps || 10; // frame per second
        this.originW = option.originW || 40;	// 截取的精灵图片中的 精灵的宽高。
        this.originH =  option.originH ||65;

        this._dirIndex = 0;

        this._imgSrc = option.imgSrc || '';
    }

}