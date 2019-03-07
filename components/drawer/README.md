#### 侧边弹出组件

> Example

````
    <!--侧边弹窗-->
    <drawer visible="{{slideVisible}}" mode="right" height="100%" width="600rpx">
      <view slot="content" class="slide-content" style="padding-top: {{contentPaddingTop}}px">
        <view>1111</view>
      </view>
    </drawer>
````

> Props

| 参数    	| 说明                                       	| 类型    	| 回调参数 	|
|---------	|--------------------------------------------	|---------	|----------	|
| visible 	| 弹窗是否可视                               	| Boolean 	| ——       	|
| mode    	| 弹窗方向（left(默认), right, top, bottom） 	| String  	| ——       	|
| widht   	| 内容层宽度                                 	| String  	| ——       	|
| height  	| 内容层高度                                 	| String  	| ——       	|

> Slots

| 参数     	| 说明     	|
|---------	|-----------|
| content 	| 内容层     |                                   	| 
