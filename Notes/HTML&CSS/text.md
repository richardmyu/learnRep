# HTML 和 CSS 基础

<!-- TOC -->

- [HTML 和 CSS 基础](#html-和-css-基础)
    - [前端三层](#前端三层)
        - [网页](#网页)
        - [网站](#网站)
        - [站群](#站群)
        - [浏览器](#浏览器)
        - [网页的基本组成](#网页的基本组成)
    - [HTML(超文本标记语言)](#html超文本标记语言)
        - [HTML的兼容问题](#html的兼容问题)
        - [标签语法](#标签语法)
        - [标签属性](#标签属性)
        - [HTML元素](#html元素)
        - [`a` 超链接/锚点](#a-超链接锚点)
        - [如何解决超链接的跳转问题(空链接)](#如何解决超链接的跳转问题空链接)
        - [table 表格](#table-表格)
        - [`form`表单](#form表单)
        - [声明文档](#声明文档)
        - [html元素](#html元素)
        - [link](#link)
        - [`<meta>`](#meta)
        - [title标题](#title标题)
        - [语义化标签](#语义化标签)
    - [Text 文本属性](#text-文本属性)
        - [设置文字的颜色](#设置文字的颜色)
        - [文本的水平对齐 `text-align`](#文本的水平对齐-text-align)
        - [文本修饰 `text-decoration`](#文本修饰-text-decoration)
        - [文本转换 `text-transform`](#文本转换-text-transform)
        - [文本缩进](#文本缩进)
        - [文本间隔](#文本间隔)
        - [处理空白符](#处理空白符)
        - [文字内换行(断点)](#文字内换行断点)
        - [文本换行](#文本换行)
        - [单行文本溢出的省略（满足四个条件）](#单行文本溢出的省略满足四个条件)
        - [多行文本溢出省略](#多行文本溢出省略)
        - [竖直对齐 `verticla-align`](#竖直对齐-verticla-align)
        - [为什么`vertical-align`属性不起作用？](#为什么vertical-align属性不起作用)
    - [CSS层叠样式表](#css层叠样式表)
        - [1.css的作用](#1css的作用)
        - [2.html引入css的四种方式](#2html引入css的四种方式)
        - [3.**外部式和导入式的差别**](#3外部式和导入式的差别)
        - [4.选择器](#4选择器)
    - [伪类和伪元素](#伪类和伪元素)
        - [伪类](#伪类)
        - [伪元素](#伪元素)
    - [伪类选择器**](#伪类选择器)
        - [1.动态伪类](#1动态伪类)
        - [2.UI元素状态伪类](#2ui元素状态伪类)
        - [3.CSS3的`:nth`选择器](#3css3的nth选择器)
        - [3.否定选择器`:not`](#3否定选择器not)
        - [4.伪元素](#4伪元素)
    - [兼容性](#兼容性)
        - [选择器的兼容性](#选择器的兼容性)
        - [CSS属性的继承](#css属性的继承)
    - [URL 路径](#url-路径)
        - [绝对路径](#绝对路径)
        - [相对路径](#相对路径)
    - [标签(元素)分类](#标签元素分类)
        - [常用的块级元素](#常用的块级元素)
        - [常用的行内元素](#常用的行内元素)
        - [常用的行内块级元素](#常用的行内块级元素)
    - [CSS一些属性](#css一些属性)
        - [Background](#background)
        - [Border](#border)
        - [Font](#font)
        - [List](#list)
        - [Margin](#margin)
        - [Padding](#padding)
        - [[关于margin/padding的百分比是基于父级的宽度问题](https://www.zhihu.com/question/20983035/answer/16801491)](#关于marginpadding的百分比是基于父级的宽度问题httpswwwzhihucomquestion20983035answer16801491)
        - [`writing-mode`](#writing-mode)
        - [`writing-mode`不经意改变了哪些规则？](#writing-mode不经意改变了哪些规则)
        - [`writing-mode`和`direction`的关系](#writing-mode和direction的关系)
        - [`writing-mode`和`-start`属性的流机制](#writing-mode和-start属性的流机制)
    - [`box-sizing`](#box-sizing)
    - [`display`](#display)
        - [隐藏元素](#隐藏元素)
        - [行内元素](#行内元素)
        - [块元素](#块元素)
        - [行内块](#行内块)
        - [表格元素](#表格元素)
    - [`overflow`](#overflow)
    - [`float`](#float)
        - [1. 浮动的“包裹性”](#1-浮动的包裹性)
        - [2. 浮动的“破坏性”](#2-浮动的破坏性)
        - [浮动的原理](#浮动的原理)
        - [清除浮动(*clearfix hack*)](#清除浮动clearfix-hack)
    - [`position`](#position)
        - [`static`](#static)
        - [`relative`](#relative)
        - [`absolute`](#absolute)
        - [`fixed`](#fixed)
    - [`float`和`position`的区别](#float和position的区别)
    - [css命名规范](#css命名规范)
    - [css hack](#css-hack)
    - [hasLayout](#haslayout)
    - [BFC（*block formatting context*）](#bfcblock-formatting-context)
        - [一、常见定位方案](#一常见定位方案)
        - [二.BFC概念](#二bfc概念)
        - [三、触发 BFC](#三触发-bfc)
        - [四.特性](#四特性)
        - [五、BFC 特性及应用](#五bfc-特性及应用)
  - [CSS布局（layout）](#css布局layout)
    - [百分比布局](#百分比布局)
    - [媒体查询](#媒体查询)
    - [rem布局分析](#rem布局分析)
    - [`inline-block` 布局](#inline-block-布局)
    - [`column`](#column)
    - [Flex 布局](#flex-布局)
      - [1.什么是Flex 布局](#1什么是flex-布局)
      - [2.基本概念](#2基本概念)
      - [3.容器的属性](#3容器的属性)
        - [3.1 `flex-direction`](#31-flex-direction)
        - [3.2 `flex-wrap`](#32-flex-wrap)
        - [3.3 `flex-flow`](#33-flex-flow)
        - [3.4 `justify-content`](#34-justify-content)
        - [3.5 `align-items`](#35-align-items)
        - [3.6 `align-content`属性](#36-align-content属性)
      - [4.项目的属性](#4项目的属性)
        - [4.1 `order`](#41-order)
        - [4.2 `flex-grow`](#42-flex-grow)
        - [4.3 `flex-shrink`属性](#43-flex-shrink属性)
        - [4.4 `flex-basis`](#44-flex-basis)
        - [4.5 `flex`](#45-flex)
        - [4.6 `align-self`](#46-align-self)
      - [5.小结](#5小结)
    - [居中](#居中)
        - [单列布局水平居中](#单列布局水平居中)
        - [垂直居中](#垂直居中)
        - [水平垂直全部居中](#水平垂直全部居中)
        - [多列布局左列定宽，右列自适应](#多列布局左列定宽右列自适应)
        - [右列定宽，左列自适应](#右列定宽左列自适应)
        - [左中两列定宽，右列自适应](#左中两列定宽右列自适应)
        - [两侧定宽，中栏自适应](#两侧定宽中栏自适应)
        - [一列不定宽，一列自适应](#一列不定宽一列自适应)
        - [多列等分布局](#多列等分布局)
        - [九宫格布局](#九宫格布局)
- [移动端学习](#移动端学习)
    - [了解移动端](#了解移动端)
        - [产品形态](#产品形态)
        - [PC端和移动端的区别](#pc端和移动端的区别)
    - [CSS3属性](#css3属性)
        - [`viewport` 视口](#viewport-视口)
    - [CSS3属性不同浏览器前缀](#css3属性不同浏览器前缀)
- [CSS重构](#css重构)
    - [CSS代码为什么要重构](#css代码为什么要重构)
        - [一.提高代码性能](#一提高代码性能)
        - [二.提高代码可维护性](#二提高代码可维护性)
    - [如何重构](#如何重构)
        - [提高代码的可维护性](#提高代码的可维护性)
- [学习中遇到的问题](#学习中遇到的问题)
    - [1.图片路径](#1图片路径)
    - [2.`text-align:-webkit-match-parent`](#2text-align-webkit-match-parent)
    - [3.去除表格自带边框](#3去除表格自带边框)
    - [4.`padding`失效原因](#4padding失效原因)

<!-- /TOC -->


### 前端三层

##### 网页

网页是网站的基本元素,通俗来说一个HTML文档就是一个网页.

##### 网站

由多个网页组成,共同为一个目标服务的网页集合.

##### 站群

由多个网站组成,为同一个公司服务.

##### 浏览器

用来显示网页(或者一个HTML文档)

##### 网页的基本组成

- HTML: 结构
- CSS: 样式
- JavaScript: 动态效果以及数据交互;

###  HTML(超文本标记语言)

网页文件本身就是一个文本文件(除了文字无其他), 只有通过特定的标记描述,才能在浏览器中正常的显示,在页面中遇到图片,音视频时如何用文本描述,需要引入超文本才能正常显示.

##### HTML的兼容问题

浏览器不同，对HTML的解析也不一致，产生的实际效果也不同，称之为兼容性问题。

##### 标签语法

```
<div title="yf" style="color:blue;font-size:24px;font-weight:bold;">标签语法语法标签O(∩_∩)O哈哈~</div>
```

##### 标签属性

提供HTML元素更多的信息；一个标签可以有很多属性，用空格隔开；
语法：`属性名=属性值（key="value")`

> 标签分开始标签、结束标签和空标签；
> 空标签只能进行功能上的添加，无法添加内容；
> 标签和元素是用来标记和描述内容的，所有用户只能看到元素中的内容

##### HTML元素

由标签对及其中的内容组成，其内容可以为空。

```
<div>写什么(⊙o⊙)?</div>
```

##### `a` 超链接/锚点

`<a href="" alt="" target="_black"/></a>`

- `href`: 里面的值是url地址
- `alt`: 图片丢失时替代的文本提示
- `target="_blank"`: 打开方式：在新窗口打开
- `target="_self"`: 默认的打开方式，一般可以省略

##### 如何解决超链接的跳转问题(空链接)

  - `<a href="javascript:;"></a>` 空占位
  - `<a href="javascript: void (0);></a>"` 空占位（类上）

> 锚点是配合id属性来使用的(id在一个页面中只能使用一次，不能同名)；id在a链接中，用#代替;(用a的name属性，也可以用来代替ID实现相互跳转)；不论哪一种情况，跳转以后都会在url上添加跳转的路径


##### table 表格

- table 表格
  - caption 标题
  - thead 表头  标题单元格
      - tr 行
      - th 列
  - tbody 表身  普通单元格
      - tr 行
      - td 列
  - tfoot 表尾  普通单元格
      - tr
      - td

> 表格中表头thead和表尾tfoot只能出现一次，表身tbody可以出现多次。我们一般把表头thead放置在表尾tfoot的前面，因为有时候tbody内容过多，加载过慢的情况。但是把thead放在tfoot的前面，浏览器解析的时候，也会按照正常的表头、表身、表尾顺序来解析

##### `form`表单

- label  用来描述表单功能的

`<label></label>`

- input

`<input type="" name="" value="">`

```
type 类型
name
value 显示在页面的提示

//type 类型
password 密码
radio 单选按钮(用统一的name属性，可以构成组合单选)
checkbox  多选按钮
botton  按钮
submit 提交按钮（偶用的）

textarea  文本域
    maxlength 设置最大的长度
    minlength  设置最小的长度

select 下拉框
	<select name="" id=""></select>
option  选项
```

##### 声明文档

`<!DOCTYPE html>`

作用：定义这个文档的类型，浏览器先识别这句话，会按照定义的类型去解析这个文档

> **浏览器是从上到下解析的**
> 所有高版本都会向下兼容，所以在以后的工作中，我们直接将文档声明写成HTML5就可以了
> 声明文档不区分大小写,必须写在HTML页面的第一行
> 如果html文件没有写文档声明，会触发浏览器的怪异模式;文档声明不是html标签

```
<!DOCTYPE html>  //HTML5的声明文档

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
//HTML4的声明文档
```

##### html元素

这个元素就是告诉浏览器其自身就是一个HTML文档是由开始标签和结束标签组成的，html文件里面所有的内容都会放在这个元素内

##### link

```
//引入图标，显示在页卡上，title之前
<link rel="icon" href="icon.png" type="image/x-icon"/>

//引入外部的CSS样式；rel 不能缺少；stylesheet 样式表； type 类型 可以省略 但是建议写全
<link rel="stylesheet" href="url" type="text/css"/>
```


##### `<meta>`

规定了html文档的元信息

- `charset="UTF-8"` 文档编码
- `utf-8` 国际通用编码
- `gb2312` 国标(中国)
- `name="keywords"` 关键字
- `name="description"` 描述

##### title标题

html文档名称，一个页面只有一个title元素，这个元素里面放置的是文字，显示在浏览器的页卡(页头)位置

##### 语义化标签

- 为什么要遵循标签语义化：

1、利于SEO优化（也就是搜索引擎的抓取，搜索引擎的爬虫也依赖于标记来确定上下文和各个关键字的权重）；
2、在样式丢失的时候，还是可以比较好的呈现结构；
3、更好的支持各种终端，例如无障碍阅读和有声小说等；
4、利于团队开发和维护，W3C给我们定了一个标准，那么团队中都遵循这个标准，那么代码的差异就会缩小，在开发和维护的时候就可以提高效率；


- 日常工作中怎样遵循标签语义化：

1、尽量减少使用无意义标签，例如span和div；
2、尽量不使用标签本身的css属性，例如b、font、s等标签，如果需要这些样式，那么使用css样式来进行添加；
3、在需要强调的部分，使用strong、em，但是样式尽量使用css样式来描述；
4、表格搭建时，使用`<thead>`表格头部`</thead>` `<tbody>`表格身体`</tbody> ``<tfoot>`表格尾部`</tfoot>`；
5、列表搭建时，使用`<ul>`无序列表`</ul>` `<ol>`有序列表`</ol>`` <dl>`定义列表`</dl>`；

### Text 文本属性

通过CSS的Text属性，你可以改变页面中文本的颜色、字符间距、对齐文本、装饰文本、对文本进行缩进等等

##### 设置文字的颜色

- color
  - 十六进制值 - 如"＃FF0000"
  - 一个RGB值 - "RGB（255,0,0）"
  - 颜色的名称 - 如"红"

> 对于W3C标准的CSS：如果你定义了颜色属性，你还必须定义背景色属性。

##### 文本的水平对齐 `text-align`

定义行内内容（例如文字）如何相对它的块父元素对齐。`text-align` 并不控制块元素自己的对齐，只控制它的行内内容的对齐。

- 值：
  - `left` 左对齐
  - `right` 右对齐
  - `center` 居中对齐
  - `justify` 两端对齐（每一行被展开为宽度相等，左，右外边距是对齐，对最后一行不起作用）
  - `justify-all`：效果等同于 `justify`，但还会让最后一行也两端对齐。
  - `start`：内容对齐开始边界(如果内容方向是左至右，则等于left，反之则为right。)。
  - `end`：内容对齐结束边界。
  - `match-parent`：这个值和 `inherit` 表现一致，只是该值继承的 `start` 或 `end` 关键字是针对父母的 `direction`值并计算的，计算值可以是 `left` 和 `right` 。

> 如果想把一个行内元素的第一行“缩进”，可以用左内边距或外边距创造这种效果。

##### 文本修饰 `text-decoration`

- `text-decoration`
  - `none`  默认。定义标准的文本
  - `overline`  定义文本下的一条线
  - `underline`  定义文本上的一条线
  - `line-through`  定义穿过文本下的一条线

> 但是，无论什么字体，什么浏览器，inline元素的上横行(`text-decoration`)和上边框(`border-top`)和上外框(`outline`)都是紧密连接在一起的。

##### 文本转换 `text-transform`

- `text-transform:`
  - `none`
  - `uppercase`  转大写
  - `lowercase`  转小写
  - `capitalize`  每个单词的首字母大写

##### 文本缩进

指定文本的第一行的缩进

- `text-indent: 2em;`

> 一般来说，可以为所有块级元素应用 text-indent，但无法将该属性应用于行内元素，图像之类的替换元素上也无法应用 text-indent 属性。不过，如果一个块级元素（比如段落）的首行中有一个图像，它会随该行的其余文本移动。

> `text-indent` 还可以设置为负值。利用这种技术，可以实现很多有趣的效果，比如“悬挂缩进”，即第一行悬挂在元素中余下部分的左边。

##### 文本间隔

-  字间距：`letter-spacing;`
-  词间距：`word-spacing;`
-  行间距：`line-height;`

##### 处理空白符

`white-space` 属性会影响到用户代理对源文档中的空格、换行和 tab 字符的处理。

![Alt text](./css-text-1.png)

##### 文字内换行(断点)

`word-break` :

- `normal`: 使用浏览器默认的换行规则
- `break-all`: 允许在单词内换行。
- `keep-all`: 只能在半角空格或连字符处换行。

##### 文本换行

`word-wrap`:

- `normal`: 只在允许的断字点换行（浏览器保持默认处理）。
- `break-word`: 在长单词或 URL 地址内部进行换行。

> `word-wrap`属性其实也是很有故事的，之前由于和`word-break`长得太像，难免会让人记不住搞混淆，晕头转向，于是在CSS3规范里，把这个属性的名称给改了，叫做：`overflow-wrap`. 哎呀，这个新属性名称显然语义更准确，也更容易区别和记忆。但是呢，也就Chrome/Safari等WebKit/Blink浏览器支持。

##### 单行文本溢出的省略（满足四个条件）

- 必须设置宽度
- `white-space: nowrap;` 强制文本不换行
- `overflow: hidden;` 溢出隐藏
- `text-overflow: ellipsis`  省略多余文本

`text-overflow`:定义文本溢出时如何处理，有2个有效值：

- `clip`：当内联内容溢出块容器时，将溢出部分裁切掉。
- `ellipsis`：当内联内容溢出块容器时，将溢出部分替换为（...）。

##### 多行文本溢出省略

与单行文本不同的是，这里不能使用上面的`text-overflow`属性，这里使用webkit内核浏览器专用方法，所以可以用在移动端。

- `display: -webkit-box;`
- `-webkit-box-orient: vertical;`
- `-webkit-line-clamp: 3;`
- `overflow: hidden;`

> `-webkit-line-clamp`用来限制在一个块元素显示的文本的行数。 为了实现该效果，它需要组合其他的WebKit属性。常见结合属性：
> `display: -webkit-box;` 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。
> `-webkit-box-orient` 必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 。

##### 竖直对齐 `verticla-align`

- `verticla-align`
  - 长度:  通过距离升高（正值）或降低（负值）元素。'0cm'等同于'baseline'
  - 百分值:  通过距离（相对于1line-height1值的百分大小）升高（正值）或降低（负值）元素。'0%'等同于'baseline'
  - `baseline`:  默认。元素的基线与父元素的基线对齐。
  - `sub`:  降低元素的基线到父元素合适的下标位置。
  - `super`:  升高元素的基线到父元素合适的上标位置。
  - `top`:  把对齐的子元素的顶端与line box顶端对齐。
  - `text-top`:  把元素的顶端与父元素内容区域的顶端对齐。
  - `middle`:  元素的中垂点与 父元素的基线加1/2父元素中字母x的高度 对齐。
  - `bottom`:  把对齐的子元素的底端与line box底端对齐。
  - `text-bottom`:  把元素的底端与父元素内容区域的底端对齐。
  - `inherit`:  采用父元素相关属性的相同的指定值。

> 改变对齐方式的时候，所有元素(参与排列的)都要加上这个属性

##### 为什么`vertical-align`属性不起作用？

`vertical-align`，是“`inline-block`依赖型元素”，也就是说，只有一个元素属于`inline`或是`inline-block`水平，其身上的`vertical-align`属性才会起作用。

例如图片，按钮，单复选框，单行/多行文本框等HTML控件，只有这些元素默认情况下会对`vertical-align`属性起作用。

虽然`vertical-align`属性只会在`inline-block`水平的元素上起作用，但是其影响到的元素涉及到`inline`属性的元素，这里千万记住，`inline`水平元素受`vertical-align`属性而位置改变等不是因为其对`vertical-align`属性敏感或起作用，而是受制于整个`line box`的变化而不得不变化的，这个后面会较为深入的分析。

### CSS层叠样式表

一种用来表现HTML或XML（标准通用语言的一个子集）等文件样式的计算机语言。CSS不仅可以静态的修饰网页，还可以配合各种脚本语言动态地对网页各元素进行格式化。

CSS能对网页元素位置的排版进行像素级精确控制，支持几乎所有的字体字号样式，拥有对网页对象和模型样式编辑的能力。

##### 1.css的作用

- 样式定义如何显示HTML元素，存储在样式表中；
- 添加样式到HTML，是为了解决内容与表现分离的问题；
- 外部样式表可以极大提高工作效率，存储在CSS文件中；
- 多个样式定义可以层叠为一；

> 作用：给html文档添加静态或者动态的样式

##### 2.html引入css的四种方式

- 1.行内式：直接写在标签内部，通过标签属性style引入

```
<div style="css属性名:属性值;css属性名：属性值;"></div>
<img src="" alt="" style="css属性名:属性值;">
```

- 2.内嵌式：将css代码写在style元素内，通过css选择器选择html元素，将css样式添加给这个元素

> style这个元素，一般放在head元素内

```
<style>
    div{color:red;}
</style>
<div>div标签</div>
<div>我是第二个div标签</div>
```

- 3.外链式：将css代码单独放置在一个css文件中，再通过link元素将这个css文件引入到html页面中

```
<link rel="stylesheet" href="url" type="text/css">
link //标签
rel="stylesheet" //标签属性名：标签属性值
rel //不可缺少
stylesheet //样式表
type //可以省略，但是建议写全
```

- 4.导入式：@import "url"; 都是引入一个单独的CSS文件
	- 导入式在日常工作中，我们不用
	- `@import "url"`;既不是html标签，也不是css属性，它是一条声明语句；
	- 这条声明语句必须写在style属性内，且要至于所有CSS属性之前

```
<style>
	@import "url";
</style>
```

> 常用的引入方式是外链式
> **四种引入的权重：内联式 > 嵌入式 > 外部式**
>  在选择器相同的情况下，谁最后加载就听谁的

##### 3.**外部式和导入式的差别**

1.link是HTML标签，`@import`完全是CSS提供的方式，要写在CSS文件或者style标签中；

2.当一个页面加载时，link引用的CSS文件会被同时加载，而`@import`引入的CSS文件要等到页面全部加载完后再加载；

3.当使用JavaScript控制DOM取改变CSS样式的时候，只能用link标签，因为`@import`是不能被DOM控制的；

4.由于`@import`是CSS2.1提出的，所以旧版浏览器不支持，只有在IE5以上的才能识别，而link标签无此问题。

##### 4.选择器

|选择器|样式|代码样式|作用|权重|
|--|--|--|--|:--:|
|标签选择器|标签名{属性名：属性值；}|div{width：20px;}|给文档内所有的该标签添加样式|1|
|类选择器|类名{}|.div1{}|给文档内所有该类名的标签添加样式|10|
|ID选择器|ID名{}|#div1{}|给有ID名的标签添加样式|100|
|通配符选择器| |*{}|给文档内所有标签添加样式|0~1|
|并集选择器|选择器，选择器{}|h2,p{}|给不同的选择器添加相同的样式|不叠加|
|交集选择器|选择器选择器{}|li.list1{}|更有针对性选择标签（实质是增加权重）|权和|
|子代选择器|父级标签>子级标签{}|div>ul>li{}|特定选择直系子代添加样式|权和|
|后代选择器|父级标签 子级标签{}|div ul li{}|作用于所有子代标签来添加样式|权和|
|类型选择器|标签属性名{},<br/>属性名=属性值{}|[title]{}<br/>[type="text"{}]|通过标签的属性值的不同来区分元素|10|
|伪类选择器|:伪类元素名{}<br/>标签:伪类元素名{}|::after{}<br/>a:after{}|指这个标签的一种状态|

> 一个HTML元素可以有多个class属性值，每一个类名用空格隔开；(类名可以重复使用； ID属性值只能用一次；)

> 标签具有class属性，class属性值即为类名，选择类名时注意：
> （1）严格区分大小写；
> （2）不能用汉字、纯数字来命名，也不能用数字开头；
> （3）可以取多个，用空格隔开

> 一般不使用通配符选择器，因为全部匹配耗能耗时；

> 标签选择器和其他类型选择器组合时，通常把标签选择器放前面；

> 组成交集选择器的所有选择器必须作用于同一元素；

> 交集选择器组合模式：标签和类型，标签和类，类和类，标签和ID；

> 类型选择器：两个类名不生效；**作用于不同元素**;

> 类型选择器一般用在表单元素；不仅限于class和ID属性；

> 子级选择器不能跨级，必须一代一代传递；

> CSS查找一般是从右到左，越靠近{}的选择器越精确，查找速度越快，耗费性能越少；

> ID选择器权重为100，即使被组合选择器超越，也不会被覆盖；

> 选择器数量不要过多；靠近{}的如果是类名，速度会比较快；

>  标签属性选择器在使用的时候，如果有两个类名(属性名)，它们是不生效的

### 伪类和伪元素

CSS引入伪类和伪元素概念是为了格式化文档树以外的信息。也就是说，伪类和伪元素是用来修饰不在文档树中的部分。

伪类和伪元素是预定义的、独立于文档元素的。它们获取元素的途径也不是基于id、class、属性这些基础的元素特征，而是在处于特殊状态的元素（伪类），或者是元素中特别的内容（伪元素）。

目前为止，伪元素在一个选择器里只能出现一次，并且只能出现在末尾。实则，伪元素是选中了某个元素的符合逻辑的某个实际却不存在的部分，所以应用中也不会有人将其误写成多个。

伪类则是像真正的类一样发挥着类的作用，没有数量上的限制，只要不是相互排斥的伪类，也可以同时使用在相同的元素上。

##### 伪类

伪类用于当已有元素处于的某个状态时，为其添加对应的样式，这个状态是根据用户行为而动态变化的。比如说，当用户悬停在指定的元素时，我们可以通过`:hover`来描述这个元素的状态。虽然它和普通的css类相似，可以为已有的元素添加样式，但是它只有处于dom树无法描述的状态下才能为元素添加样式，所以将其称为伪类。

##### 伪元素

伪元素用于创建一些不在文档树中的元素，并为其添加样式。比如说，我们可以通过`:before`来在一个元素前增加一些文本，并为这些文本添加样式。虽然用户可以看到这些文本，但是这些文本实际上不在文档树中。

与伪类针对特殊状态的元素不同的是，伪元素是对元素中的特定内容进行操作，它所操作的层次比伪类更深了一层，也因此它的动态性比伪类要低得多。

实际上，设计伪元素的目的就是去选取诸如元素内容第一个字（母）、第一行，选取某些内容前面或后面这种普通的选择器无法完成的工作。它控制的内容实际上和元素是相同的，但是它本身只是基于元素的抽象，并不存在于文档中，所以叫伪元素。

通过css代码向指定元素内添加假的(html中不存在)的元素

- `before` 会出现在元素所有内容之前
- `after` 会出现在元素所有内容之后

使用伪元素的时候要保证两个前提：

 - 要有`display:block`这个属性
 - 要有`content`这个属性，这个属性的属性值可以为空，但是引号不能少;

> 伪类的操作对象是文档树中已有的元素，而伪元素则创建了一个文档数外的元素。因此，伪类与伪元素的区别在于：有没有创建一个文档树之外的元素。

> 伪元素和伪类之所以这么容易混淆，是因为他们的效果类似而且写法相仿，但实际上 CSS3 为了区分两者，已经明确规定了伪类用一个冒号来表示，而伪元素则用两个冒号来表示；

> 除了一些低于IE8版本的浏览器外，大部分浏览器都支持伪元素的双冒号(::)表示方法。然而，除了少部分伪元素，如::backdrop必须使用双冒号，大部分伪元素都支持单冒号和双冒号的写法，比如::after，写成:after也可以正确运行。

### 伪类选择器**

##### 1.动态伪类

因为这些伪类并不存在于HTML中,而只有当用户和网站交互的时候才能体现出来，动态伪类包含两种，第一种是我们在链接中常看到的锚点伪类；如"`:link`","`:visited`";另外一种被称作用户行为伪类，如“`:hover`”,"`:active`"和"`:focus`"。

```
.demo a:link {color:gray;}     /*链接没有被访问时前景色为灰色*/
.demo a:visited{color:yellow;} /*链接被访问过后前景色为黄色*/
.demo a:hover{color:green;}    /*鼠标悬浮在链接上时前景色为绿色*/
.demo a:active{color:blue;}    /*鼠标点中激活链接那一下前景色为蓝色*/
```

对于这四个锚点伪类的设置，有一点需要特别注意，那就是他们的先后顺序，要让他们遵守一个爱恨原则**LoVe/HAte**,也就是`link--visited--hover--active`。其中`:hover`和`:active`又同时被列入到用户行为伪类中，他们所表达的意思是：

- `:hover` 用于当用户把鼠标移动到元素上面时的效果；**只能用于块状元素**

- `:active` 用于用户点击元素那一下的效果（正发生在点的那一下，松开鼠标左键此动作也就完成了）

- `:focus` 用于元素成为焦点，这个经常用在表单元素上。

> `:link`和`:visited`互斥，存一不二；常用`:hover`;

##### 2.UI元素状态伪类

我们把"`:enabled`"，"`:disabled`"，"`:checked`"伪类称为UI元素状态伪类，这些主要是针对于HTML中的表单元素操作，最常见的比如"`type='text'`"有`enable`和`disabled`两种状态，前者为可写状态而后者为不可写状态；

另外在`type="radio"`和`type="checkbox"`中，会有有"`checked`"和"`unchecked`"两种状态。来看两个实例，比如说你想将"disabled"的文本框与别的文本框区别出来，你就可以这样应用:

```
input[type="text"]:disabled {border:1px solid #999;background-color: #fefefe;}
```

> 这样一来就把页面中禁用的文本框应用了一个不同的样式。那么对于其他几个用法是一样的，这里就不在讲述。IE6-8不支持":checked",":enabled",":disabled"这三种选择器。

##### 3.CSS3的`:nth`选择器

这节内容才是关键，也是CSS3选择器最新部分，有人也称这种选择器为CSS3结构类，下面我们通过实际的应用来具体了解他们的使用和区别，首先列出他具有的选择方法：

```
:first-child()//选择某个元素的第一个子元素；
:last-child()//选择某个元素的最后一个子元素；

:nth-child()//选择某个元素的一个或多个特定的子元素；
:nth-last-child()//选择某个元素的一个或多个特定的子元素，从这个元素的最后一个子元素开始算；
:nth-of-type()//选择指定类型的元素；
:nth-last-of-type()//选择指定的元素，从元素的最后一个开始计算；

:first-of-type()//选择一个上级元素下的第一个同类子元素；
:last-of-type()//选择一个上级元素的最后一个同类子元素；

:only-child()//选择的元素是它的父元素的唯一一个了元素；
:only-of-type()//选择一个元素是它的上级元素的唯一一个相同类型的子元素；

:empty()//选择的元素里面没有任何内容。
```

- `:nth-child(n)`，其中n是一个简单的表达式，那么"n"取值是从“1”开始计算的(非n的表达式则是从“0”开始)；如果你在实际应用中直接这样使用的话，将会选中所有子元素。

> 请注意了，这里的“n”只能是"n"，不能使用其他字母代替，不然会没有任何效果的。

- `:nth-child(2n)`,这中方式是前一种的变身，我们可以选择n的2倍数，当然其中“2”可以换成你自己需要的数字。

> `:nth-child(2n)`也等于`:nth-child(even)`效果。

- `:nth-child(2n-1)`,这个选择器是在":nth-child(2n)"基础上演变过来的，上面说了人是选择偶数，那么我们在他的基础上减去“1”就变成奇数选择。
- `:nth-child(n+5)`,这个选择器是选择从第五个元素开始选择，这里的数字你可以自己定义;
- `:nth-child(-n+5)`,这种选择器刚好和上面的选择器相反，这个是选择第5个前面的;
- `:nth-child(4n+1)`,这种方法是实现隔几选一的效果，比如我们这里是隔三选一;

##### 3.否定选择器`:not`

否定选择器和jq中的`:not`选择器一模一样，就拿form中的元素来说明这个选择器的用法，比如你想对form中所有input加边框，但又不想submit也起变化，此时就可以使用`:not`为实现：

```
input:not([type="submit"]) {border: 1px solid red;}
```

> 否定选择器`:not()`，可以让你定位不匹配该选择器的元素。

##### 4.伪元素

CSS中的伪元素大家以前看过：“`:first-line`，`:first-letter`，`:before`，`:after`”那么在CSS3中，他对伪元素进行了一定的调整，在以前的基础上增加了一个“`:`”也就是现在变成了“`::first-letter`，`::first-line`，`::before`，`::after`”，另外他还增加了一个“`::selection`”，两个“`::`”和一个“`:`”在CSS3中主要用来区分伪类和伪元素，到目前来说，这两种方式都是被接受的，也就是说不管使用哪种写法所起的作用都是一样的，只是一个书写格式不同而以。

### 兼容性

##### 选择器的兼容性

所有浏览器都支持的选择器（单个选择器）：通配符选择器，标签选择器，类选择器，ID选择器，后代选择器，子代选择器（IE6不支持），相邻兄弟选择器（IE6不支持），通用兄弟选择器（CSS3新加）（IE6不支持），并集选择器；类型选择器（IE6不支持）；

> 其中最常用的是：标签选择器，类选择器，ID选择器，后代选择器，并集选择器。

> 类型选择器中`E[attr="value"]`和`E[attr*="value"]`是最实用的，其中`E[attr="value"]`能帮我们定位不同类型的元素，特别是表单form元素的操作，而`E[attr*="value"]`能在网站中帮助我们匹配不同类型的文件，比如说你的网站上不同的文件类型的链接需要使用不同的icon图标，用来帮助你的网站提高用户体验，就像前面的实例，可以通过这个属性给".doc",".pdf",".png",".ppt"配置不同的icon图标。

	对于`:hover`在IE6下只有a元素支持，`:active`只有IE7-6不支持，`:focus`在IE6-7下不被支持。

	IE6-8不支持`:checked`，`:enabled`，`:disabled`，`:only-child`，`:empty`，`:not()`；

	IE6不支持`:first-child`;

	IE6-8和FF3-浏览器不支持：`:nth-child"`，`:nth-last-child()`，`:nth-of-type`，`:nth-last-of-type`，`:only-of-type`，`:nth-child`。

##### CSS属性的继承

CSS属性继承是指，子级元素从父级元素继承的CSS属性。（一般跟文字有关的属性可以继承，而非文字相关属性一般不能继承）
具体如下：
1.可以继承的：文本相关属性和列表相关属性：
![Alt text](./CSS属性继承-1.png)

2.不能继承的：
![Alt text](./CSS属性继承-2.png)

3.所有元素都可以继承的和终端块状元素可以继承的：
![Alt text](./CSS属性继承-3.png)

### URL 路径

##### 绝对路径

指带域名的文件的完整路径和磁盘中指定文件的全部路径
网址(网站的尾部)-- a标签用的比较多

> chrome不支持绝对路径，即使在绝对路径前面加“file:///”；IE支持绝对路径；

##### 相对路径

是指在同一个文件夹下，通过一个参考点来找到其他文件
1. 返回上一级  `./`
2. 同级之间直接写文件名
3. 下一级用  `/`


### 标签(元素)分类

##### 常用的块级元素

|标签|作用|
|:--:|--|
|h1-h6|标题|
|p|段落|
|div|无意义，区分大模块|
|ul>li|无序列表|
|ol>li|有序列表|
|dl>dt dd|自定义列表|
|table|表格|
|form|表单|

块级元素的特点

- 1.独占一行，在所在父元素内从左上角开始依次向下排列；
- 2.默认状态下，宽度继承父级元素内容的宽，高度是由本身内容决定的；
- 3.可以设置盒模型的CSS属性(`width/height/border/margin/padding`)
- 4.可以嵌套其他元素
	- `p,dt,h1-h6`不能嵌套块级元素

> 人为设置的样式要比元素自带的样式权重高;
> 块级元素这些特点，我们将其称之为BFC(block formatting context)块状元素在上下文中的渲染模式(块级元素应该怎么排布) ;
> 永远会在父级元素的左上角开始排布，从上到下排;

##### 常用的行内元素

|标签|作用|
|:--:|--|
|span|无意义，区分行内小模块|
|em|强调斜体|
|i|斜体|
|a|超链接、锚点|
|strong|强调加粗|
|b|加粗|
|sup|上标|
|sub|下标|
|label|来描述表单功能的|

行内元素的特点

- 1.在一行排布，从左到右，达到父级元素的最大宽度时，会自动折行
- 2.不能设置盒子模的CSS属性(width/height/上下margin);可以设置margin的左右值、border值和padding值；
- 3.默认不设置宽度和高度的时候，宽高都是由本身内容决定的
- 4.在编辑代码时，元素之间有回车或者换行的时候，元素和元素之间有间隙
	- 解决：给body设置`font-size:0;`
- 5.不可以嵌套块状元素
	- span可以嵌套i,em元素

##### 常用的行内块级元素

|标签|作用|
|:--:|--|
|textarea|文本域|
|input|输入框|
|select|选择框|
|img|图|

行内块元素的特点

- 1.在一行排布，从左到右，达到父级元素的最大宽度时，会自动折行
- 2.可以设置盒子模的CSS属性
- 3.默认不设置宽度和高度的时候，宽高都是由本身内容决定的
- 4.在编辑代码时，元素之间有回车或者换行的时候，元素和元素之间有间隙
  - 解决：给body设置`font-size:0;`
- 5.可以嵌套其他元素
- 6.基线对齐问题
`vertical-align:top/middle/bottom`

### CSS一些属性

##### Background

- 1.`background`:设置所有背景属性，属性如下：`color,image,repeat,position,size,origin,clip,attachment`

> 语法：`background: #00FF00 url(bgimage.gif) no-repeat fixed top;`
> 通常建议使用这个属性，而不是分别使用单个属性，因为这个属性在较老的浏览器中能够得到更好的支持，而且需要键入的字母也更少。

- 2.`background-color`:定义元素的背景色
  - `color_name` 规定颜色值为颜色名称的背景颜色（比如 red）
  - `hex_number` 规定颜色值为十六进制值的背景颜色（比如 #ff0000）
  - `rgb_number` 规定颜色值为 rgb 代码的背景颜色（比如 rgb(255,0,0)）
  - `transparent` 默认。背景颜色为透明
  - `inherit` 规定应该从父元素继承 `background-color` 属性的设置。

`background-color` 属性为元素设置一种纯色。这种颜色会填充元素的内容、内边距和边框区域，扩展到元素边框的外边界（但不包括外边距）。如果边框有透明部分（如虚线边框），会透过这些透明部分显示出背景色。

> 提示：`background-color`不能继承，其默认值是 `transparent`。如果一个元素没有指定背景色，那么背景就是透明的，这样其父元素的背景才可见。

- 3.`background-image`:定义元素的背景图像
  - `url("URL")` 指向图像的路径
  - `none` 默认值。不显示背景图像
  - `inherit` 规定应该从父元素继承`background-image`属性的设置

元素的背景占据了元素的全部尺寸，包括内边距和边框，但不包括外边距。默认地，背景图像位于元素的左上角，并在水平和垂直方向上重复。

> 提示：请设置一种可用的背景颜色，这样的话，假如背景图像不可用，页面也可获得良好的视觉效果。

- 4.`background-repeat`:设置是否及如何重复背景图像
  - `repeat` 默认。背景图像将在垂直方向和水平方向重复
  - `repeat-x` 水平平铺
  - `repeat-y` 竖直平铺
  - `no-repeat` 不平铺（背景图像将仅显示一次）
  - `inherit` 规定应该从父元素继承

> 提示：背景图像的位置是根据 `background-position` 属性设置的。如果未规定 `background-position` 属性，图像会被放置在元素的左上角。

- 5.`background-position`:设置背景图像的起始位置
  - `top/bottom/left/right/center`
  - 长度值：100px或5cm
  - 百分比（第一个值是水平位置，第二个值是垂直位置）

图像放置关键字最容易理解的作用就像其名字的意义。例如，`top left` 使图像放置在元素内边距区的左上角。

只要保证不超过两个关键字：一个对应水平方向，另一个对应垂直方向，那么你可以设置位置关键字以任何顺序出现。

如果只有一个关键字，则会默认另一个关键字为 `center`；如果只规定了一个百分比值或长度值，另一个值将是 `50%`。

> 提示：您需要把 `background-attachment` 属性设置为 "`fixed`"，才能保证该属性在 Firefox 和 Opera 中正常工作。


- 6.`background-attachment`:设置背景图像是否固定或者随着页面的其余部分滚动
  - `scroll` 默认值。背景图像会随着页面其余部分的滚动而移动
  - `fixed` 当页面的其余部分滚动时，背景图像不会移动
  - `inherit` 规定应该从父元素继承属性

- 7.`background-clip`:规定背景的绘制区域
  - `border-box` 背景被裁剪到边框盒
  - `padding-box` 背景被裁剪到内边距框
  - `content-box` 背景被裁剪到内容框

- 8.`background-origin`:规定 `background-position` 属性相对于什么位置来定位
  - `border-box` 背景图像相对于边框盒来定位
  - `padding-box` 背景图像相对于内边距框来定位
  - `content-box` 背景图像相对于内容框来定位

`background-origin` 属性规定 `background-position` 属性相对于什么位置来定位。

> 注释：如果背景图像的 `background-attachment` 属性为 "`fixed`"，则该属性没有效果。

- 9.`background-size`:规定背景图片的尺寸
  - `length` 第一个值设置宽度，第二个值设置高度
  - `percentage` 以父元素的百分比来设置背景图像的宽度和高度
  - `cover` 把背景图像扩展至足够大，以使背景图像完全覆盖背景区域
  - `contain` 把图像图像扩展至最大尺寸，以使其宽度和高度完全适应内容区域

> 在`length`和`percentage`中，如果只设置一个值，则第二个值会被设置为 "`auto`"。

##### Border

- 1.`border`:设置所有的边框属性
  - `border-width` 规定边框的宽度
  - `border-style` 规定边框的样式
  - `border-color` 规定边框的颜色
  - `inherit` 规定应该从父元素继承

- 2.`border-width`:设置元素的所有边框宽度
  - `thin` 定义细的边框(1px)
  - `medium` 默认。定义中等的边框(3px)
  - `thick` 定义粗的边框(5px)
  - `length` 允许您自定义边框的宽度
  - `inherit` 规定应该从父元素继承边框宽度



> 只有当边框样式不是 `none` 时才起作用。如果边框样式是 `none`，边框宽度实际上会重置为 0。不允许指定负长度值。
> 请始终在 `border-width` 属性之前声明 `border-style` 属性。元素只有在获得边框之后，才能改变其边框的宽度。

- 3.`border-style`:设置元素的所有边框样式
  - `none` 定义无边框
  - `hidden` 与 `none` 相同。不过应用于表时除外，对于表，`hidden` 用于解决边框冲突
  - `dotted` 定义点状边框。在大多数浏览器中呈现为实线
  - `dashed` 定义虚线。在大多数浏览器中呈现为实线
  - `solid` 定义实线
  - `double` 定义双线。双线的宽度等于 `border-width` 的值
  - `groove` 定义 3D 凹槽边框。其效果取决于 `border-color` 的值
  - `ridge` 定义 3D 垄状边框。其效果取决于 `border-color` 的值
  - `inset` 定义 3D `inset` 边框。其效果取决于 `border-color` 的值
  - `outset` 定义 3D `outset` 边框。其效果取决于 `border-color` 的值
  - `inherit` 规定应该从父元素继承边框样式

> 最不可预测的边框样式是 `double`。它定义为两条线的宽度再加上这两条线之间的空间等于 `border-width` 值。不过，CSS 规范并没有说其中一条线是否比另一条粗或者两条线是否应该是一样的粗，也没有指出线之间的空间是否应当比线粗。所有这些都有用户代理决定，创作人员对这个决定没有任何影响。

- 4.`border-color`:设置元素的所有边框颜色
  - `color_name` 规定颜色值为颜色名称的边框颜色
  - `hex_number` 规定颜色值为十六进制值的边框颜色
  - `rgb_number` 规定颜色值为 rgb 代码的边框颜色
  - `transparent` 默认值。边框颜色为透明
  - `inherit` 规定应该从父元素继承边框颜色

> `border-width、border-style、border-color` 属性是一个简写属性，可设置一个元素的所有边框中可见部分的颜色，或者为 4 个边分别设置不同的颜色。

- 5.`border-top/right/bottom/left`
  - `border-top/right/bottom/left-width` 规定上/右/下/左边框的宽度
  - `border-top/right/bottom/left-style` 规定上/右/下/左边框的样式
  - `border-top/right/bottom/left-color` 规定上/右/下/左边框的颜色
  - `inherit` 规定应该从父元素继承

##### Font

- 1.`font`:设置所有字体属性
  - `font-style` 规定字体样式
  - `font-variant` 规定字体异体
  - `font-weight` 规定字体粗细
  - `font-size/line-height` 规定字体尺寸/行高
  - `font-family` 规定字体系列
  - `caption` 定义被标题控件（比如按钮、下拉列表等）使用的字体
  - `icon` 定义被图标标记使用的字体
  - `menu` 定义被下拉列表使用的字体
  - `message-box` 定义被对话框使用的字体
  - `small-caption caption` 字体的小型版本
  - `status-bar` 定义被窗口状态栏使用的字体

> 说明:这个简写属性用于一次设置元素字体的两个或更多方面。使用 icon 等关键字可以适当地设置元素的字体，使之与用户计算机环境中的某个方面一致。注意，如果没有使用这些关键词，至少要指定字体大小和字体系列。
> 可以按顺序设置如下属性:`font-style、font-variant、font-weight、font-size/line-height、font-family`

- 2.`font-family`:规定元素的字体系列
  - `family-name/generic-family` 用于某个元素的字体族名称或/及类族名称的一个优先表。默认值：取决于浏览器。
  - `inherit` 规定应该从父元素继承字体系列

`font-family` 可以把多个字体名称作为一个“回退”系统来保存。如果浏览器不支持第一个字体，则会尝试下一个。也就是说，`font-family` 属性的值是用于某个元素的字体族名称或/及类族名称的一个优先表。浏览器会使用它可识别的第一个值。

有两种类型的字体系列名称：

  - 指定的系列名称：具体字体的名称，比如："times"、"courier"、"arial"。
  - 通常字体系列名称：比如："serif"、"sans-serif"、"cursive"、"fantasy"、"monospace"

> 提示：使用逗号分割每个值，并始终提供一个类族名称作为最后的选择。

> 注意：使用某种特定的字体系列（Geneva）完全取决于用户机器上该字体系列是否可用；这个属性没有指示任何字体下载。因此，强烈推荐使用一个通用字体系列名作为后路。

- 3.`font-size`:设置字体的尺寸
  - `xx-small/x-small/small/medium/large/x-large/xx-large` 把字体的尺寸设置为不同的尺寸，从 `xx-small` 到 `xx-large`。默认值：`medium`
  - `smaller` 把 `font-size` 设置为比父元素更小的尺寸。
  - `larger` 把 `font-size` 设置为比父元素更大的尺寸。
  - `length` 把 `font-size` 设置为一个固定的值。
  - `%` 把 `font-size` 设置为基于父元素的一个百分比值。
  - `inherit` 规定应该从父元素继承字体尺寸。

> 该属性设置元素的字体大小。注意，实际上它设置的是字体中字符框的高度；实际的字符字形可能比这些框高或矮（通常会矮）。

> 各关键字对应的字体必须比一个最小关键字相应字体要高，并且要小于下一个最大关键字对应的字体。

- 4.`font-size-adjust`:为某个元素规定一个 `aspect` 值，这样就可以保持首选字体的 `x-height`。
  - `none` 默认。如果此字体不可用，则不保持此字体的 `x-height`。
  - `number`	定义字体的 `aspect` 值比率。

可使用的公式：
首选字体的字体尺寸 * （`font-size-adjust` 值 / 可用字体的 `aspect` 值）= 可应用到可用字体的字体尺寸

> Internet Explorer 不支持 `font-size-adjust` 属性。
> 字体的小写字母 "x" 的高度与 "`font-size`" 高度之间的比率被称为一个字体的 `aspect` 值。当字体拥有高的 `aspect` 值时，那么当此字体被设置为很小的尺寸时会更易阅读。举例：Verdana 的 `aspect` 值是 0.58（意味着当字体尺寸为 100px 时，它的 `x-height` 是 58px ）。Times New Roman 的 `aspect` 值是 0.46。这就意味着 Verdana 在小尺寸时比 Times New Roman 更易阅读。

- 5.`font-stretch`:对当前的 `font-family`进行伸缩变形
  - `normal`	默认值。把缩放比例设置为标准。
  - `wider`	把伸展比例设置为更进一步的伸展值
  - `narrower`	把收缩比例设置为更进一步的收缩值
  - `ultra-condensed/extra-condensed/condensed/semi-condensed/semi-expanded/expanded/extra-expanded/ultra-expanded`  设置 `font-family` 的缩放比例。"`ultra-condensed`" 是最宽的值，而 "`ultra-expanded`" 是最窄的值

> 所有主流浏览器都不支持 `font-stretch` 属性。

- 6.`font-style`:定义字体的风格
  - `normal`	默认值。浏览器显示一个标准的字体样式
  - `italic`	浏览器会显示一个斜体的字体样式
  - `oblique` 浏览器会显示一个倾斜的字体样式
  - `inherit` 规定应该从父元素继承字体样式

> 该属性设置使用斜体、倾斜或正常字体。斜体字体通常定义为字体系列中的一个单独的字体。理论上讲，用户代理可以根据正常字体计算一个斜体字体。

- 7.`font-variant`:设置小型大写字母的字体显示文本
  - `normal` 默认值。浏览器会显示一个标准的字体
  - `small-caps` 浏览器会显示小型大写字母的字体
  - `inherit` 规定应该从父元素继承 `font-variant` 属性的值

> `font-variant` 属性设置小型大写字母的字体显示文本，这意味着所有的小写字母均会被转换为大写，但是所有使用小型大写字体的字母与其余文本相比，其字体尺寸更小。

> 该属性主要用于定义小型大写字母文本。理论上，用户代理可以根据正常字体计算出小型大写字母字体。

- 8.`font-weight`:设置文本的粗细
  - `normal` 默认值。定义标准的字符
  - `bold` 定义粗体字符
  - `bolder` 定义更粗的字符
  - `lighter` 定义更细的字符
  - `100-900` 定义由粗到细的字符。400 等同于 `normal`，而 700 等同于 `bold`
  - `inherit` 规定应该从父元素继承字体的粗细

> 该属性用于设置显示元素的文本中所用的字体加粗。每个数字值对应的字体加粗必须至少与下一个最小数字一样细，而且至少与下一个最大数字一样粗。

##### List

- 1.`list-style`:设置所有的列表属性
  - `list-style-type` 设置列表项标记的类型
  - `list-style-position` 设置在何处放置列表项标记
  - `list-style-image` 使用图像来替换列表项的标记
  - `inherit` 规定应该从父元素继承

> 该属性是一个简写属性，涵盖了所有其他列表样式属性。由于它应用到所有 `display` 为 `list-item` 的元素，所以在普通的 HTML 和 XHTML 中只能用于 li 元素，不过实际上它可以应用到任何元素，并由 `list-item` 元素继承。

> 可以按顺序设置如下属性：`list-style-type、list-style-position、list-style-image`

- 2.`list-style-image`
  - `URL` 图像的路径
  - `none` 默认。无图形被显示
  - `inherit` 规定应该从父元素继承

> 这个属性指定作为一个有序或无序列表项标志的图像。图像相对于列表项内容的放置位置通常使用 `list-style-position` 属性控制。

> 注释：请始终规定一个 "`list-style-type`" 属性以防图像不可用。

- 3.`list-style-position`
  - `inside` 列表项目标记放置在文本以内，且环绕文本根据标记对齐
  - `outside` 默认值。保持标记位于文本的左侧。列表项目标记放置在文本以外，且环绕文本不根据标记对齐
  - `inherit` 规定应该从父元素继承

> 该属性用于声明列表标志相对于列表项内容的位置。外部 (`outside`) 标志会放在离列表项边框边界一定距离处，不过这距离在 CSS 中未定义。内部 (`inside`) 标志处理为好像它们是插入在列表项内容最前面的行内元素一样。

- 4.`list-style-type`
  - `none` 无标记
  - `disc` 默认。标记是实心圆
  - `circle` 标记是空心圆
  - `square` 标记是实心方块
  - `decimal` 标记是数字
  - `decimal-leading-zero` 0开头的数字标记。(01, 02, 03, 等。)

##### Margin

- 1.`margin`:设置所有外边距属性。该属性可以有 1 到 4 个值
  - `auto` 浏览器计算外边距
  - `length` 规定以具体单位计的外边距值，比如像素、厘米等。默认值是 0px
  - `%` 规定基于父元素的宽度的百分比的外边距
  - `inherit` 规定应该从父元素继承外边距

- 2.`margin-top/right/botom/left`:设置元素的上/右/下/左外边距(这个属性对于不可替换的inline元素没有效果,比如 `<tt>` 或者 `<span>`)
  - `auto` 浏览器设置的上/右/下/左外边距。
  - `length` 定义固定的上/右/下/左外边距。默认值是0。
  - `%` 定义基于父对象总宽度的百分比上/右/下/左外边距。
  - `inherit` 规定应该从父元素继承上/右/下/左外边距。

> 这个简写属性设置一个元素所有外边距的宽度，或者设置各边上外边距的宽度。

> 块级元素的垂直相邻外边距会合并，而行内元素实际上不占上下外边距。行内元素的的左右外边距不会合并。同样地，浮动元素的外边距也不会合并。允许指定负的外边距值，不过使用时要小心。

> 注释：允许使用负值。

**margin-top的一个小bug:**

当父级没有设置`margin-top`或`border`时，子级会把自身的`margin-top`值传递给父级元素

> 1.给父级元素设置`border`；（缺点：影响盒子大小）
> 2.把子级的`margin-top`换成`padding-top`；（缺点：影响盒子大小）
> 3.对父级用`overflow:hidden/auto`；
> 4.对父级用`display:inline-block`；（有时候可能会影响布局）

##### Padding

- 1.`padding`:设置所有内边距属性
  - `auto` 浏览器计算内边距。
  - `length` 规定以具体单位计的内边距值，比如像素、厘米等。默认值是 0px。
  - `%` 规定基于父元素的宽度的百分比的内边距。
  - `inherit` 规定应该从父元素继承内边距。

- 2.`padding-top/right/botom/left`

##### [关于margin/padding的百分比是基于父级的宽度问题](https://www.zhihu.com/question/20983035/answer/16801491)

`margin/padding` 的百分比之所以按照 width 计算，其实理由很简单，就是要匹配主要的 `use cases`。那就是——要构建在纵横两个方向上相同的 `margin/padding`。如果两个百分比的相对方式不同，那用百分比就无法得到垂直和水平一致的留白。

有人也许会问，为什么不是垂直方向上的 height 而是水平方向的 width？这其实容易理解。因为 CSS 的基本模型是着重于“排版”的需求，因此水平和垂直方向其实并不是同等权重的，更精确的说，是文字书写方向决定的。

常见的横排文字时，我们排版的出发点是水平宽度一定，而垂直方向上是可以无限延展的。竖排文字则相反。所以在竖排文字时，`margin/padding-*` 其实就都按照 height 而不是 width 计算了。

类似的且大家更熟悉的是 `margin-top/bottom` 在垂直方向上的 `collapse`（或者当竖排文字时是 `margin-left/right` 水平方向上的 `collapse`）。为什么只有垂直方向 `collapse` 而水平就不呢？

因为在典型的排版中，段落间的空白进行 `collapse` 是常见和方便的。而反过来水平方向上就几乎没有那样的需求（只有表格在两个方向上有对称的 `border collapse` 的需求）。

同样的，在排版中，横向百分比控制是常见的需求，但是纵向其实很少这样的需求。有这样需求的其实是GUI界面布局，布局和排版的区别在这个答案（在 CSS 布局中，用 float 好还是用 position 好？分别有什么优势？）我也提到过。

至于说死循环问题，其实这不是根本原因。大家可以想想 width 为什么就不存在死循环了呢？

BTW，在现代web应用中，其实我们有更多的纵向横向布局分割需求，这是传统的百分比不能很好满足的，所以CSS3实际上加入了 `vw` 和 `vh` 单位（相对于viewport的宽度和长度百分比），这比较好的解决了传统CSS中`margin/padding`的百分比所不能满足的那些需求。

`writing-mode`改成`vertical`其实`margin-top`就会按高的百分比了。

##### `writing-mode`

和`float`属性有些类似，`writing-mode`原本设计的是控制内联元素的显示的（即所谓的文本布局 Text Layout）。因为在亚洲，尤其像中国这样的东亚国家，存在文字的排版不是水平式的，而是垂直的，例如中国的古诗古文。

因此，`writing-mode`就是用来实现文字可以竖着呈现的。

- 需要关注的`writing-mode`属性值

如果你的项目需要兼容IE7，则只有关注这两个值就可以了：初始值lr-tb和tb-rl，对应于CSS3规范中的`horizontal-tb`和`vertical-rl`！其他9个属性值就让它们去过家家好了。

如果你的项目只需要兼容IE8+，恭喜你，你可以和CSS3规范属性完全对应上了，而且IE8下的`writing-mode`要比IE7强大的多。我们需要关注：初始值`lr-tb`, `tb-rl`以及`tb-lr`，分别对应于CSS3中的`horizontal-tb`, `vertical-rl`以及`vertical-lr`。

看上去复杂的属性是不是变得很简单了，重新整一个实战版：

```
writing-mode: lr-tb | tb-rl | tb-lr (IE8+);
writing-mode: horizontal-tb | vertical-rl | vertical-lr;
```

对，大家只要记住上面几个就可以了，enough! 因为所谓的垂直排版，实际web开发是很少很少遇到的。

有同学可能要疑问了，既然`writing-mode`实现文本垂直排版场景有限，那还有什么学习的意义呢？

前面也提到了，虽然`writing-mode`创造的本意是文本布局，但是，其带来的文档流向的改变，不仅改变了我们多年来正常的CSS认知，同时可以巧妙实现很多意想不到的需求和效果。

##### `writing-mode`不经意改变了哪些规则？

`writing-mode`将页面默认的水平流改成了垂直流，颠覆了很多我们以往的认知，基于原本水平方向才适用的规则全部都可以在垂直方向适用！

- 1.水平方向也能`margin`重叠

清清楚楚写的`bottom margin`和`top margin`会重叠；然而，这是CSS2文档中的描述，在CSS3的世界中，由于`writing-mode`的存在，这种说法就不严谨了，应该是对立流方向的`margin`值会发生重叠。换句话说，如果元素是默认的水平流，则垂直`margin`会重叠；如果元素是垂直流，则水平`margin`会重叠。

- 2.可以使用`margin:auto`实现垂直居中

我们应该都是的，传统的web流中，`margin`设置`auto`值的时候，只有水平方向才会居中，因为默认`width`是100%自适应的，`auto`才有计算值可依，而垂直方向，`height`没有任何设置的时候高度绝不会自动和父级高度一致，因此，`auto`没有计算空间，于是无法实现垂直居中。但是，在`writing-mode`的世界里，纵横规则已经改变，元素的行为表现发生了翻天覆地的变化。

但是，在IE浏览器下，却没有垂直居中~~

纳尼？！难道IE不支持垂直流下的垂直居中？非也，根据鄙人的测试，也就是图片这类替换元素貌似不行，普通的block元素都是可以的。

- 3.可以使用`text-align:center`实现图片垂直居中

- 4.可以使用`text-indent`实现文字下沉效果

- 5.可以实现全兼容的`icon fonts`图标的旋转效果

- 6.充分利用高度的高度自适应布局


##### `writing-mode`和`direction`的关系

`writing-mode`, `direction`, `unicode-bidi`(MDN文档)是CSS世界中3大可以改变文本布局流向的属性。其中`direction`, `unicode-bidi`属于近亲，经常在一起使用，也是唯一两个不受CSS3 `all`属性影响的CSS属性，基本上就是和内联元素一起使用使用。

乍一看，`writing-mode`似乎包含了`direction`, `unicode-bidi`某些功能和行为，例如`vertical-rl`的`rl`和`direction`的`rtl`值有相似之处，都是从右往左。然而，实际上，两者是没有交集的。因为`vertical-rl`此时的文档流为垂直方向，`rl`表示水平方向，此时再设置`direction:rtl`，实际上值`rtl`改变的是垂直方向的内联元素的文本方向，一横一纵，没有交集。而且`writing-mode`可以对块状元素产生影响，直接改变了CSS世界的纵横规则，要比`direction`强大和鬼畜的多。

##### `writing-mode`和`-start`属性的流机制

CSS3中出现了诸多`-start/-end`属性（亦称为**CSS逻辑属性**），例如：`margin-start/margin-end, border-start/border-end, padding-start/padding-end`, 以及`text-align:start/text-align:end`声明。

下面问题来了，为什么会蹦出这么多`-start/-end`鬼？

那是因为现代浏览器加强了对流的支持，包括老江湖`direction`，以及最近年月跟进的`writing-mode`。

在很久以前，我们的认知里，网页布局就一种流向，就是从左往右，从上往下，因此，我们使用`margin-left/margin-right`没有任何问题。但是，如果我们流是可以变化的，例如，一张图片距离左边缘20像素，我们希望其文档流是从右往左，同时距离右侧是20像素，怎么办？

此时，`margin-left:20px`在图片`direction`变化后，就无效了；但是，`margin-start`就不会有此问题，所谓`start`, 指的是文档流开始的方向，换句话说，如果页面是默认的文档流，则`margin-start`等同于`margin-left`，如果是水平从右往左文档流，则`margin-start`等同于`margin-right`。`margin-end`也是类似的。

webkit内核的浏览器还支持`-before和-end`，默认流下的`margin-before`近似于`margin-top`，`margin-after`近似于`margin-bottom`，然而，规范貌似没提及，FireFox也没支持，`-before和-after`出场的机会并不多，为什么呢？因为实际上，配合`writing-mode`，`-start/-end`已经可以满足我们对逻辑位置的需求了，水平和垂直都可以控制，对立方向适用老的`-top/-bottom`.

例如，我们设置`writing-mode`值为`vertical-rl`，此时`margin-start`等同于`margin-top`，如果此时`margin-start`，`margin-top`同时存在，会遵循权重和后来居上原则进行相互的覆盖。

可以看到，场景不同，`margin-start`的作用也不能，能上能下，能左能右简直在世百变星君。

关于`-start/-end`以后有机会会具体展开论述，这里就先点到为止，大家估计目前也不会在实际项目中使用。

### `box-sizing`

`box-sizing` 属性用于更改用于计算元素宽度和高度的默认的 CSS 盒子模型。可以使用此属性来模拟不正确支持CSS盒子模型规范的浏览器的行为。

```
/* 关键字 值 */
box-sizing: content-box;
box-sizing: border-box;

/* 全局 值 */
box-sizing: inherit;
box-sizing: initial;
box-sizing: unset;
```

在CSS中，你设置一个元素的 `width` 与 `height` 只会应用到这个元素的内容区。如果这个元素有任何的 `border` 或 `padding` ，绘制到屏幕上时的盒子宽度和高度会加上设置的边框和内边距值。这意味着当你调整一个元素的宽度和高度时需要时刻注意到这个元素的边框和内边距。当我们实现响应式布局时，这个特点尤其烦人。

`box-sizing` 属性可以被用来调整这些表现:

- --
- `content-box` 是默认值，标准盒子模型。如果你设置一个元素的宽为100px，那么这个元素的内容区会有100px宽，并且任何边框和内边距的宽度都会被增加到最后绘制出来的元素宽度中。
- --
- `border-box` 告诉浏览器去理解你设置的边框`border`和内边距`padding`的值是包含在`width`内的。也就是说，如果你将一个元素的`width`设为100px,那么这100px会包含其它的`border`和`padding`，内容区的实际宽度会是`width`减去`border` + `padding`的计算值。大多数情况下这使得我们更容易的去设定一个元素的宽高。内容框不能为负，并且被分配到0，使得不可能使用border-box使元素消失。

> 常用在移动端(设置宽时) `box-sizing:border-box`

### `display`

display指定了元素渲染Box的类型（*type of rendering box*）

- 元素默认的display值的情况如下

block(块级元素)
`<div>、<p> <ul> <ol> <form> ……`

inline（内联元素）
`<span> <a> <img> <input> <select> <label> ……`

list-item（项目列表）
`<li>`

none(不显示)
`<head>（头部元素都是）<title> <br> <thead> <tbody> <tfoot>`

常用的取值：

- `none`: 隐藏元素
- `inline`：行内元素，顾名思义，用于把一个元素放在行的内部
- `block`：块元素，用于显示占用一行的块
- `inline-block`：以`block`的方式渲染，以`inline`的方式放置
- `table-cell`：以表格元素的方式显示

##### 隐藏元素

`none`是最容易理解的取值。当一个元素的`display`属性被设为`none`时，该元素不会被渲染，也不会占位，就像不存在一样。

一些特殊元素的默认 `display` 值是它，例如 `script` 。 `display:none` 通常被 JavaScript 用来在不删除元素的情况下隐藏或显示元素。

它和 `visibility` 属性不一样。把 `display` 设置成 `none` 元素不会占据它本来应该显示的空间，但是设置成 `visibility: hidden;` 还会占据空间。

##### 行内元素

行内（`inline`）元素不会打断文本流。它们的出现不会使得后续元素另起一行。行内元素可以设置`margin`与`padding`，但`margin`只在水平方向上起作用。另外，对`inline`元素设置`width`与`height`是不起作用的。

##### 块元素

块（`block`）元素会中断当前的文本流，另起一行，并在父元素中尽可能地占据最大宽度。通常块元素不可包含在行内元素内部。

##### 行内块

行内块（`inline-block`）将会产生一个块元素，并以行内元素的方式放置。该元素的样式是以块元素的方式来渲染的，例如可以设置宽和高，然后以行内元素的方式放置在其上下文中，就像在行内元素的位置上替换成这个块元素一样。

行内块还会遇到一个问题，行内块中间没有设置内外边距,但是会自动形成一个小小的白色间隙。这是因为 html 中的换行或空格被浏览器显示了出来。

这个间距这个问题可以通过三种方式解决。

第一种：把Html文档写成一行。但是这显然是不现实也不好看的。

第二种：借助HTML注释。

```
<div>box1</div><!-- 我是注释
 --><div>box2</div>
```

第三种：使用`letter-spacing: -xpx;`，问题是不好控制间距；

第四种：使用`font-size:0`基本上可以解决大部分浏览器下`inline-block`元素之间的间距(IE7等浏览器有时候会有1像素的间距)。而且HTML代码也好看了一些。注意在这种情况下子元素也会继承`font-size:0`的属性。所以不要忘记单独给盒子里的文字设置一遍字体属性。

> `inline-block`与`inline`的不同在于：垂直方向上的`margin`也会起作用，并且可以设置`width`和`height`。`inline-block`是非常常用的样式设置。

##### 表格元素

`display`设为`table-cell`的元素与`<td>`标签的行为一致，即：可设置`padding`，不接受`margin`，可伸缩的`width`。利用table-cell属性可以在不写<table>标签的情况下完成表格布局。

### `overflow`

指定当内容溢出其块级容器时,是否剪辑内容，显示滚动条或显示溢出的内容。

```
/* 默认值。内容不会被修剪，会呈现在元素框之外 */
overflow: visible;

/* 内容会被修剪，并且其余内容不可见 */
overflow: hidden;

/* 内容会被修剪，浏览器会显示滚动条以便查看其余内容 */
overflow: scroll;

/* 由浏览器定夺，如果内容被修剪，就会显示滚动条 */
overflow: auto;

/* 规定从父元素继承overflow属性的值 */
overflow: inherit;
```

使用 `overflow` 默认值（`visible`）以外的值将创建一个新的 块级格式化上下文。这在技术层面上是必须的——如果一个浮动元素和滚动条相交，它会强制（重新）包围内容元素。这种行为（重新包围内容元素）会在每一次移动滚动条之后发生，会使得滚动体验变差（慢）。

为使 `overflow` 有效果，块级容器必须有一个指定的高度（`height`或者`max-height`）或者将`white-space`设置为`nowrap`。

> 注意: 当相关HTML元素被设置为 `scrollTop` 时，即使 `overflow` 值为 `hidden`，这个元素依旧会滚动`。

### `float`

[浮动出现的意义其实只是用来让文字环绕图片而已，仅此而已。](http://www.zhangxinxu.com/wordpress/2010/01/css-float%E6%B5%AE%E5%8A%A8%E7%9A%84%E6%B7%B1%E5%85%A5%E7%A0%94%E7%A9%B6%E3%80%81%E8%AF%A6%E8%A7%A3%E5%8F%8A%E6%8B%93%E5%B1%95%E4%B8%80/)

指定一个元素应沿其容器的左侧或右侧放置，允许文本和内联元素环绕它。该元素从网页的正常流动中移除，尽管仍然保持部分的流动性（与绝对定位相反）。

##### 1. 浮动的“包裹性”

先说句您应该没有见过的结论：撇开浮动的“破坏性”，浮动就是个带有方位的`display:inline-block`属性。

`display:inline-block`某种意义上的作用就是包裹(wrap)，而浮动也有类似的效果。举个常见例子，或许您有实现宽度自适应按钮的经验，实现宽度自适应的关键就是要让按钮的大小自适应于文字的个数，这就需要按钮要自动包裹在文字的外面。我们用什么方法实现呢？一就是`display:inline-block`；二就是`float`。

然而，float无法等同于`display:inline-block`，其中原因之一就是浮动的方向性，`display:inline-block`仅仅一个水平排列方向，就是从左往右，而`float`可以从右往左排列，这就是两者的差异。

##### 2. 浮动的“破坏性”

浮动可以说是所有CSS属性中的“破坏之王”。要理解浮动的破坏性，我们要从浮动最原始的意义入手。

所以，只要您弄明白了为什么文字会环绕含浮动属性的图片，您就会知道我所说的浮动的“破坏性”是什么意思了。

先说结论：文字之所以会环绕含有`float`属性的图片，是因为浮动破坏了正常的`line boxes`。

> **`line boxes`模型**: `inline boxes`不会让内容成块显示，而是排成一行，如果外部含`inline`属性的标签(`<span>, <a>, <cite>`等)，则属于`inline boxes`，如果是个光秃秃的文字，则属于匿名`inline boxes`。`line boxes`的高度是由其内部最高的`inline boxes`的高度决定的

> `content area` 是一种围绕文字看不见的box。`content area`的大小与`font-size`大小相关。

![Alt text](./css-float-1.png)

默认情况下，图片与文字基线对齐，图片与文字在同一行上；一张图片只能与一行文字对齐。而要想让一张图片要与多行文字对齐，您唯一能做的就是破坏正常的`line boxes`模型。

![Alt text](./css-float-2.png)

正常情况下，图片自身就是个`inline boxes`，与两侧的文字`inline boxes`共同组成了`line boxes`，但是，一旦图片加入了浮动，情况就完全变了。我认为是浮动彻底破坏了`img`图片的`inline boxes`特性，至少有一点我可以肯定，图片的`inline boxes`不存在了。一旦图片失去了`inline boxes`特性就无法与`inline boxes`的文字排在一行了，其会从`line boxes`上脱离出来，跟随自身的方位属性，靠边排列。

这个从`line boxes`上脱离的浮动元素其实就是一个躯体，一个空壳子，表象。因为其没有`inline boxes`。有人可能会问，没有`inline boxes`就没有呗，有什么大不了的？非也非也！这个`inline boxes`很个很重要的概念。

在目前的CSS的世界中，所有的高度都是有两个CSS模型产生的，一个是**box盒状模型**，对应CSS为”`height+padding+margin`“，另外一个是**`line box`模型**，对应样式为"`line-height`"。

前者的`height`属性分为明显的`height`值和隐藏的`height`值，所谓隐藏的`height`值是指图片的高度，一旦载入一张图片，其内在的`height`值就会起作用，即使您看不到`"height"`这个词。

而后者针对于文字等这类`inline boxes`的元素（图片也属于`inline boxes`，但其`height`比`line-height`作用更凶猛，故其`inline boxes`高度等于其自身高度，对`line-height`无反应），`inline boxes`的高度直接受`line-height`控制（改变`line-height`文字拉开或重叠就是这个原因），而真正的高度表现则是由每行众多的`inline boxes`组成的`line boxes`（等于内部最高的`inline box`的高度），而这些`line boxes`的高度垂直堆叠形成了`containing box`的高度，也就是我们见到的`<div>`或是`<p>`标签之类的高度了。

所以，对于`line box`模型的元素而言，没有`inline boxes`，就没有高度了，而浮动却恰恰做了这么龌龊的事情，其直接将元素的`inline boxes`也破坏了，于是这些元素也就没有了高度。

浮动破坏了图片的`inline box`，产生了两个结果：一是图片无法与文字同行显示，脱离了其原来所在的`line box`链；二是没有了高度（无`inline box` -> 无`line box` -> 无高度）。而这些结果恰恰是文字环绕图片显示所必须的。

我们可以拿浮动元素与绝对定位元素做对比或许可以帮助理解。与浮动元素一样，绝对定位元素也具有“包裹性”，此“包裹性”适用于任何元素。那么，浮动元素与绝对定位元素的差别在哪里呢？我觉得最主要的差别在于：绝对定位的元素脱离了文档流，而浮动元素依旧在文档流中；而这造成的显示上的差异就是：同处于文档流中的文字实体不会与浮动元素重叠，而会与绝对定位元素重叠。这就是文字环绕显示的重要原因之一：虽然图片实际占据的高度为0，但是由于其宽度实体存在（包裹性），同样是`content area` 实体的文字不会与之重叠（外部的容器盒子`containing box`(`<p>, <div>, <li>`)会重叠），这就好比篮球场上站了个植物人，虽然其几乎不可能得分，运球之类，但是他的实体在那里，它可以阻挡同一水平空间上的同一类型的个体（即人）直接穿过去，要通过，得绕道。但是其无法阻挡整个球队的向前推进。

`display:inline-block`将对象呈递为内联对象，但是对象的内容作为块对象呈递。所谓对象呈递为内联对象就是元素呈递为`inline box`，所以浮动“包裹性”所产生的结果就是使得元素转为了`line box`模型中的`inline box`元素。浮动的“包裹性”让元素变成类似于`inline box`的元素，而浮动的“破坏性”正是破坏`inline box`元素的。对于`block`水平的这类块状元素需要先让其变成类似效果的内联元素，然后再破坏之。

> 注意：
> IE浏览器：`obj.style.styleFloat = "left";`
> 其他浏览器：`obj.style.cssFloat = "left";`

##### 浮动的原理

浮动的框可以左右移动，直至它的外边缘遇到包含框或者另一个浮动框的边缘。浮动框不属于文档中的普通流，当一个元素浮动之后，不会影响到块级框的布局而只会影响内联框（通常是文本）的排列，文档中的普通流就会表现得和浮动框不存在一样，当浮动框高度超出包含框的时候，也就会出现包含框不会自动伸高来闭合浮动元素（“**高度塌陷**”现象）。

```
/* Keyword values */
float: left;
float: right;
float: none;

/* Global values */
float: inherit;
float: initial;
float: unset;
```

> 由于float意味着使用块布局，它在某些情况下修改display 值的计算值。

- 特点：
  - 脱离文档流(父级元素找不到子级元素)，相当于来到了第二层级，平行于基本的文档流
  - 所有元素可以设置这个属性
  - 将元素的`display`属性由`inline`或`inline-block`改为`block`
  - 浮动元素不设置宽高时，宽高是由内容决定的
  - 行内元素、行内块级元素和文字会围绕着浮动元素排布

##### 清除浮动(*clearfix hack*)

- 1.给父级元素设置高度
	- 这个元素内是否有内容，高度都一定

- 2.给父级元素设置`overflow: hidden;` 属性(IE6中还需要`zoom:1;`)

> 此方法不存在结构化和语义问题并且代码量也少，但是内容增多时不会自动换行导致内容被隐藏，无法显示需要溢出的元素；要是里面的元素要是想来个`margin`负值定位或是负的绝对定位，直接被裁掉了。

- 3.父元素设置`overflow:auto;` (IE6需要触发hasLayout)

> 但是多个嵌套后，firefox某些情况会造成内容全选；IE中 `mouseover` 造成宽度改变时会出现最外层模块有滚动条等，firefox早期版本会无故产生`focus`等；
> 如果有隐藏box，会因为将隐藏box的高度加入，使得总体高度增加，影响布局（2017.08.09,）

- 4.给最后一个浮动元素之后加(从语义化的角度来看是不合理的)

`<div style="clear:both"></div>`

> 增加浏览器渲染负担。

然而这个方法只是在同一块级格式化上下文（`block formatting context`）中没有其他元素的时候才是有效的。

如果不能使用清除浮动，另一种做法是浮动容器的限制块级格式化上下文。即将其中一个非浮动元素的`overflow`属性值变成`hidden` 或者`auto`，因为这样可以让容器元素伸展到能够包含浮动元素，而不是让他们超出块元素的底部。？？？

> 设置`overflow`为`scroll`也可以让块元素撑大来包含所有的浮动子元素，但是这样不论内容有多少都会显示出一个滚动条。即使 `height` 默认值为 `auto`，我们还是设置了，是为了表明容器应该增大高度以便包裹住里面的内容。

- 5.`clear:both;` 清除浮动
	- 使用这个属性的元素必须是块级元素
	- 使用这个属性的元素必须放在最后一个浮动元素之后
	- 使用这个属性的元素不能带有`float`属性

- 6.父元素设置`display:table`

结构语义化完全正确，代码量极少但是盒模型属性已经改变，由此造成的一系列问题，得不偿失，不推荐使用

> 注意：`display:table`本身无法触发BFC，但是它会产生匿名框(anonymous boxes)，而匿名框中的`display:table-cell`可以触发BFC，简单说就是，触发块级格式化上下文的是匿名框，而不是`display:table`。所以通过`display:table`和`display:table-cell`创建的BFC效果是不一样的。

- 7.使用伪元素

```
.clearfix:after{
	display: block;
	content: "";
	clear: both;
}
.clearfix{
	*zoom:1; 兼容低版本浏览器
	css hack
}
```

### `position`

##### `static`

`static`是默认值。任意 `position:static;` 的元素不会被特殊的定位。一个 `static` 元素表示它不会被“`positioned`”，一个 `position` 属性被设置为其他值的元素表示它会被“`positioned`”。

##### `relative`

- 不脱离文档流
- 发生位置改变的时候，原来的位置还占用
- 层级大于文档流其他元素(会盖在其他元素之上)
- 参照物是本身
- 给绝对定位当参照物 ---**常用**
- `position: relative;` 相对定位，同时设置`top`和`bottom`的值，`top`生效。同时设置`right`和`left`的值，`left`生效

> 当盒子本身发生改变时，不影响其他元素，这时候我们用相对定位

##### `absolute`

- 脱离文档流，但不在同一个平面上，因此不会相互识别，反而会相互覆盖；
- 所有元素默认都会去找参照物的起点位置（参照物的左上角）
- 不设置参照物时，参照物是ICB（inital container block, 初始包含块）([`body`这种说法不严谨](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position))
- 人为设置参照物
	- 只能是这个绝对定位元素的父级（或以上）元素
	- 参照物必须带有定位属性的元素(相对、绝对、固定)
- 绝对定位元素有宽高的时候，`top`和`bottom`的值同时设置，`top`生效。`left`和`right`的值同时设置，`left`生效
- 在不设置宽高时，宽度和高度是由本身内容决定的
- 绝对定位元素，如果不设置四个方向的值，并且同级之前有其他内容(元素),它会默认排到这个内容(元素)之后（绝对定位的元素脱离文档流以后，只会影响后面的元素，而不会影响前面的元素，所以当没有设定绝对定位元素的定位值时，绝对定位元素会默认从前面元素之后的左上角开始排布；）
- 绝对定位元素设置宽高为100%，继承参照物的宽高

> 父级（或以上）元素都有定位属性，绝对定位的参照物是离它最近的那个父级元素

##### `fixed`

- 脱离文档流
- 参照物是浏览器的可视窗口
- 在不设置宽高时，宽高是由内容决定
- 多用在页面中的辅助导航、回到顶部等位置
- 可以作为绝对定位的参照物；

### `float`和`position`的区别

	作者：贺师俊
	链接：https://www.zhihu.com/question/19588854/answer/13243044
	来源：知乎

在绝大多数Web开发者的语境中，“布局”这个术语和“排版”是有差异的。“布局”偏向于指宏观的GUI区域划分，比如双栏布局或三栏布局等。从这一点出发，`float`其实本不是一项用于“布局”的属性。

`float`对应的其实是传统印刷排版中图文混排中的环绕。这其实可以理解，因为CSS的模型和术语脱胎于传统排版，故而与计算机GUI技术通常基于组件的模型相差甚远。除了`float`之外，另一个例子是CSS中上下`margin`的`collapse`，显然这是为了满足段落排版的需求。所以像`float、margin collapse`等，在典型的GUI技术中是没有的。还有，CSS box model中，`width/height`不算入`padding`和`border`，许多开发者对这点很不适应，这实际上是GUI的控件思维与CSS排版思维的冲突。这个冲突在浏览器技术实现上的遗迹就是IE臭名昭著的“`hasLayout`”。

元素“`has layout`”的真实意思是这样的元素直接对应一个控件。也正是由于IE很naive的在实现中直接结合了这两种矛盾的模型，从而导致了无数的布局bug。

言归正传，CSS1时代的网页还很简陋，但是随着万维网的迅猛发展，Web界面也迅速进化，当初简单的如同书页般的通栏式网页迅速绝迹，`frameset`由于天生存在的一堆问题也很快退出主流，这时CSS在GUI布局方面就显出了缺陷，开发者被迫使用各种`trick`。比如历史悠久的`table`布局。后来`table`布局被鄙视，开发者逐渐转向了`float`布局。

要说`float`布局之所以流行，IE“功”不可没。在IE中，`has layout`的元素是不会环绕`float`元素的（因为`has layout`的元素自己是一个控件，所以总是保持一个矩形区域）。这本来是一个bug，但是其效果却正好符合常见的双栏布局的需要。另外IE下`float`元素会自动撑开其父级`container`元素（当然前提是`container`元素也是`has layout`的），这其实也是bug，但是也恰好符合模块布局的需求。后来所谓`inline-block`布局其实正是这些bug的合理化。

站在今天回望过去十多年的CSS实践，我们可以发现，无论`float`布局还是后来的`inline-block`布局，其实都是`trick`。所谓**`trick`**，就是将一些特性挪作他用，以很曲折的方式实现出想要的效果。

CSS作为样式语言，其可维护性的最终来源，就是代码能清晰的表达出设计意图。而CSS trick当然不能很好的满足这一点。那么如何才能真正用CSS来表达布局？这有赖于“CSS3的进化”。如`multiple column`、`flex box`、`grid layout`等。其中直接对应目前`float`布局/`inline-block`布局所要达到效果的，是`flex box`。当然，考虑到兼容性问题（IE9仍不支持flex box模块，IE10才支持），我们可能很长时间内还是会继续使用`float`布局，不过必须始终牢记这是`trick`，是`workaround`。如有可能，最好引入SCSS/LESS之类的CSS框架来对此种布局`trick`做进一步抽象和解耦。

再说`position`布局。`position`其实比`float`要更接近“布局”属性。但是`position`的问题是，所谓布局是设定各区域（元素）的关联和约束，而定位只是设定单一元素的位置大小。要实现一个布局，要对多个定位元素中手动设定相关的参数（如左栏`width:200px`，右栏`left:200px`），相当于人为的把大小和位置参数计算出来。这违背了DRY原则，也无法真正实现关联约束。（如左栏设了`max/min-width`之后，最终实际`width`未必是200px，此时右栏怎么设`left`值？又如一个水平固定`width`、垂直自适应`height`的绝对定位元素，我们如何从它的底部继续排下一个元素？）除非我们引入JavaScript脚本来进行计算。因此运用`position`布局的限制条件相当多，通常只适合那些相对孤立的部件（如页头页脚）或较为简单且各区域大小位置固定的布局。至于说以JavaScript实现的布局管理器，是将`position`作为实现布局的底层技术，已经算不得CSS了（因为你也不写CSS）。

### css命名规范

- 不能是数字，不能以数字开头
- 可以写全拼  weibu
- 遵循行业规范CSS法则，比如：`header`头部、`nav`导航、   `footer`尾部
- 是由两个单词组成，例如：`car-icon、carIcon、car_icon`

### css hack

- 调IE浏览器兼容问题

### hasLayout

hasLayout是IE特有的一个属性。很多的ie下的css bug都与其息息相关。在ie中，一个元素要么自己对自身的内容进行计算大小和组织，要么依赖于父元素来计算尺寸和组织内容。

当hasLayout为true时(就是所谓的"拥有布局")，相当于元素产生新BFC，元素自己对自身内容进行组织和尺寸计算;
当hasLayout为false时(就是所谓的"不拥有布局")，相当于元素不产生新BFC，元素由其所属的`containing block`进行组织和尺寸计算。

和产生新BFC的特性一样，hasLayout无法通过CSS属性直接设置，而是通过某些CSS属性间接开启这一特性。不同的是某些CSS属性是以不可逆方式间接开启hasLayout为true。并且默认产生新BFC的只有html元素，而默认hasLayout为true的元素就不只有html元素了。

另外我们可以通过`object.currentStyle.hasLayout`属性来判断元素是否开启了hasLayout特性。

IE使用Layout概念来控制元素的尺寸和位置。如果一个元素有Layout，它就有自身的尺寸和位置；如果没有，它的尺寸和位置由最近的拥有布局的祖先元素控制。

在默认情况下，拥有Layout的元素包括：

```
<html>、<body>
<table>、<tr>、<th>、<td>
<img>
<hr>
<input>、<button>、<select>、<textarea>、<fieldset>、<legend>
<iframe>、<embed>、<object>、<applet>
<marquee>
```

（注意，`<p>`和`<div>`默认不拥有Layout）

下列元素默认 `hasLayout=true`

```
<table> <td> <body> <img> <hr> <input> <select> <textarea> <button> <iframe> <embed> <object> <applet> <marquee>
```
hasLayout属性不能直接设定，你只能通过设定一些特定的css属性来触发并改变 hasLayout 状态。下面列出可以触发hasLayout的一些CSS属性值:

```
display
启动haslayout的值:inline-block
取消hasLayout的值:其他值
————————————–
width/height
启动hasLayout的值：除了auto以外的值
取消hasLayout的值：auto
—————————————
position
启动hasLayout的值：absolute
取消hasLayout的值：static
—————————————-
float
启动hasLayout的值：left或right
取消hasLayout的值：none
—————————————
zoom
启动hasLayout的值：有值
取消hasLayout的值：narmal或者空值
（zoom是微软IE专有属性，可以触发hasLayout但不会影响页面的显示效果。zoom: 1常用来除错，不过 ie 5 对这个属性不支持。）
—————————————-
writing-mode: tb-rl
这也是微软专有的属性。
ie7还有一些额外的属性可以触发该属性（不完全列表）：
min-height: (任何值)
max-height: (任何值除了none)
min-width: (任何值)
max-width: (任何值除了none)
overflow: (任何值除了visible)
overflow-x: (任何值除了visible)
overflow-y: (任何值除了visible)5
position: fixed
```

因元素hasLayout而导致的问题其实一般都很容易发现：往往是内容出现错位甚至完全不可见。

通常firefox等标准的遵守浏览器可以加上`overflow: hidden;`来解决，而IE则不行，需要触发其hasLayout属性才可以。
hasLayout对于内联元素也可以有效果，当内联元素的hasLayout为true的时候，可以给这个内联元素设定高度和宽度并得到期望的效果。

要注意的是，hasLayout是微软专有的东西，对firefox等比较遵守标准的浏览器就无效了，因此不可太过依赖。貌似现在的IE8就已经不用特意去触发hasLayout就可以得到和firefox一致的效果，不知ie8是否已经弃用这个属性了？

一般如果是因为layout而引起的显示不符期望效果的话，在ff下会表现正常，而在ie下会出现错误。这个时候可以尝试触发父容器及其中的子容器的haslayout属性，通常可以通过加上`zoom: 1;`来调试。直到找到了产生问题的元素，再进行针对性的修正。最好的办法是对这个元素设置尺寸属性。但是，有时不便指定尺寸属性的情况下，就只能寻找替代方案了。

对于ie7 ，最好的办法是设置最小高度属性为0；这个技术是无害的，因为0本来就是这个属性的初始值。而且没有必要对其他浏览器隐藏这个属性。而对于ie6和更早版本中触发一个元素hasLayout的方法是在`overflow`属性是`visible`的情况下设置这个元素的高度属性为1%，然后对其他浏览器隐藏这个设置。这种技术就是著名的**Holly hack**。

### BFC（*block formatting context*）

块格式化上下文（BFC） 是Web页面的可视化CSS渲染的一部分，是布局过程中生成块级盒子的区域，也是浮动元素与其他元素的交互限定区域。

块格式化上下文对浮动定位与清除浮动都很重要。浮动定位和清除浮动时只会应用于同一个BFC内的元素。浮动不会影响其它BFC中元素的布局，而清除浮动只能清除同一BFC中在它前面的元素的浮动。外边距折叠（*Margin collapsing*）也只会发生在属于同一BFC的块级元素之间。

##### 一、常见定位方案

在讲 BFC 之前，我们先来了解一下常见的定位方案，定位方案是控制元素的布局，有三种常见方案:

- **普通流 (normal flow)**

	在普通流中，元素按照其在 HTML 中的先后位置至上而下布局，在这个过程中，行内元素水平排列，直到当行被占满然后换行，块级元素则会被渲染为完整的一个新行，除非另外指定，否则所有元素默认都是普通流定位，也可以说，普通流中元素的位置由该元素在 HTML 文档中的位置决定。

- **浮动 (float)**

	在浮动布局中，元素首先按照普通流的位置出现，然后根据浮动的方向尽可能的向左边或右边偏移，其效果与印刷排版中的文本环绕相似。

- **绝对定位 (absolute positioning)**

	在绝对定位布局中，元素会整体脱离普通流，因此绝对定位元素不会对其兄弟元素造成影响，而元素具体的位置由绝对定位的坐标决定。

##### 二.BFC概念

格式化上下文(*Formatting context*) 是 W3C CSS2.1 规范中的一个概念。它是页面中的一块渲染区域，并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用。

那么 BFC 是什么呢？

BFC 即 块级格式化上下文 (*Block Formatting Contexts*)，它属于上述定位方案的普通流。

**具有 BFC 特性的元素可以看作是隔离了的独立容器，容器里面的元素不会在布局上影响到外面的元素，并且 BFC 具有普通容器所没有的一些特性。**

通俗一点来讲，可以把 BFC 理解为一个封闭的大箱子，箱子内部的元素无论如何翻江倒海，都不会影响到外部。

##### 三、触发 BFC

只要元素满足下面任一条件即可触发 BFC 特性：

- body 根元素
- 浮动元素：`float` 除 `none` 以外的值
- 绝对定位元素：`position (absolute、fixed)`
- `display` 为 `inline-block`、`table-cells`、`flex`
- `overflow` 除了 `visible` 以外的值 (`hidden、auto、scroll`)

##### 四.特性

- 1.内部的Box会在垂直方向，一个接一个地放置。
- 2.Box垂直方向的距离由`margin`决定。属于同一个BFC的两个相邻Box的`margin`会发生重叠
- 3.每个元素的`margin box`的左边，与包含块`border box`的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如 此。
- 4.BFC的区域不会与`float box`重叠。
- 5.BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。
- 6.计算BFC的高度时，浮动元素也参与计算。

##### 五、BFC 特性及应用

1.同一个 BFC 下外边距会发生折叠

```
div{
    width: 100px;
    height: 100px;
    background: lightblue;
    margin: 100px;
}

<body>
    <div></div>
    <div></div>
</body>
```

从效果上看，因为两个 div 元素都处于同一个 BFC 容器下 (这里指 body 元素) 所以第一个 div 的下边距和第二个 div 的上边距发生了重叠，所以两个盒子之间距离只有 100px，而不是 200px。

首先这不是 CSS 的 bug，我们可以理解为一种规范，如果想要避免外边距的重叠，可以将其放在不同的 BFC 容器中。

```
<div class="container">
    <p></p>
</div>
<div class="container">
    <p></p>
</div>

.container {
    overflow: hidden;
}
p {
    width: 100px;
    height: 100px;
    background: lightblue;
    margin: 100px;
}
```

这时候，两个盒子边距就变成了 200px 。

2.BFC 可以包含浮动的元素（清除浮动）
我们都知道，浮动的元素会脱离普通文档流，来看下下面一个例子

```
<div style="border: 1px solid #000;">
    <div style="width: 100px;height: 100px;background: #eee;float: left;"></div>
</div>
```

由于容器内元素浮动，脱离了文档流，所以容器只剩下 2px 的边距高度。如果使触发容器的 BFC，那么容器将会包裹着浮动元素。
```
<div style="border: 1px solid #000;overflow: hidden">
    <div style="width: 100px;height: 100px;background: #eee;float: left;"></div>
</div>
```

3.BFC 可以阻止元素被浮动元素覆盖

先来看一个文字环绕效果：

```
<div style="height: 100px;width: 100px;float: left;background: lightblue">我是一个左浮动的元素</div>
<div style="width: 200px; height: 200px;background: #eee">我是一个没有设置浮动,
也没有触发 BFC 元素, width: 200px; height:200px; background: #eee;</div>
```

![Alt text](./bfc-1.jpg)

这时候其实第二个元素有部分被浮动元素所覆盖，(但是文本信息不会被浮动元素所覆盖) 如果想避免元素被覆盖，可触第二个元素的 BFC 特性，在第二个元素中加入 `overflow: hidden`，就会变成：

![Alt text](./bfc-2.jpg)

这个方法可以用来实现两列自适应布局，效果不错，这时候左边的宽度固定，右边的内容自适应宽度(去掉上面右边内容的宽度)。

## CSS布局（layout）

- 固定布局：宽高写死； `float+position` — 最常用在PC上
- 流式布局(百分比布局)+媒体查询+px单位 —最常用在PC端和移动端公用一套页面结构
- 流式布局(百分比布局)+ 媒体查询 + rem单位 最常用移动端上 h5页面上
- flexbox 弹性盒模型

### 百分比布局

百分比布局，也叫流式布局，因为宽度是百分比，但是高度是按px来写的。

百分比是一种相对于包含块的计量单位，它对图片很有用，甚至还能同时使用 `min-width` 和 `max-width` 来限制图片的最大或最小宽度！

当布局很窄时， 固定定位的导航栏就会被挤扁。更糟糕的是，你不能在 `nav` 上使用 `min-width` 来修复这个问题，因为右边的那列是不会遵守它的。

适用页面特点：左侧固定+右侧自适应/左右固定宽度+中间自适应

开发思路：
自适应意味着百分比（0% - 100%) -> 思考：如何确定是不是自适应？
1. 多列等分 -> 百分比等分

2. 左侧固定宽度 + 右侧自适应宽度
    思路一 -> 左侧左浮动+右侧利用BFC特性在右侧
    思路二 -> 父级给`padding-left`，预留出来左侧区域的宽度，左侧用绝对定位上去，右侧用百分百宽度

3. 左侧自适应 + 右侧固定宽度
    思路一 -> 左侧用百分百宽度,右侧用绝对定位上去

4. 左右固定宽度 + 中间自适应
    思路一 -> 左侧左浮动 + 中间百分之百（中间部分再分为左侧百分之百+右侧右浮动）
    思路二 -> 左侧左浮动 + 中间百分之百 + 右侧右浮动 （负`margin`法减掉左右侧）
    思路三 -> 左右绝对定位 + 中间百分之百（父元素`padding-left`,`padding-right`预留左右侧的位置）

5. 左中右全自适应 -> 全部用百分比

6. `font-size、padding,margin,height`直接量像素

7. 小的地方可以用`display:inline-block;`让几个容器放在一排

8. 小图标之类的，可以考虑用`::before,::after`来实现

### 媒体查询

“响应式设计（Responsive Design)” 是一种让网站针对不同的浏览器和设备“呈现”不同显示效果的策略，这样可以让网站在任何情况下显示的很棒！

媒体查询是做此事所需的最强大的工具。使用 `meta viewport` 之后可以让你的布局在移动浏览器上显示的更好。

```
@media (min-width:375px){
  .box{
    width:200px;
    height:200px;
    background:#000;
    border:10px solid #73cf17;
  }
}
```

x<375 `max-width` 最大宽度375 小于等于375
x>375 `min-width` 最小宽度375 大于等于375

注意点:单词之间空格隔开

1.@media 媒体 媒介

2.媒体类型
  all 所有类型
  screen 设备类型
  print 打印类型

3.连接符
  and 和

4.判断条件 ()

5.{
  css样式代码
}

### rem布局分析

`rem = root element` 根元素
rem(font size of root element) 根元素(html)的字体大小
1rem = 16px （谷歌html默认的字体大小是16px）。

```
html{
  font-size:100px;
  /!*设置100px 原因:1.减少和设计稿的偏差 2.方便计算*!/
  /!*1rem:100px;*!/
}
设计稿的尺寸 分辨率          1rem=100px
640        320            100px
           375            117.1875px
           414            129.375px
           640            200px

media screen and (min-width: 320px){
  /*320分辨率 以iphone5参考 做的设计稿*/
  html{
    font-size:100px;
  }
}
```

### `inline-block` 布局

使用 `inline-block` 来布局。有一些事情需要你牢记：

- `vertical-align` 属性会影响到 `inline-block `元素，你可能会把它的值设置为 `top` 。
- 你需要设置每一列的宽度
- 如果HTML源代码中元素之间有空格，那么列与列之间会产生空隙

### `column`

可以帮助你很轻松的实现文字的多列布局。CSS columns是很新的标准，所以你需要使用前缀，并且它不被IE9及以下和Opera Mini支持。

```
.three-column {
  padding: 1em;
  -moz-column-count: 3;
  -moz-column-gap: 1em;
  -webkit-column-count: 3;
  -webkit-column-gap: 1em;
  column-count: 3;
  column-gap: 1em;
}
```

![Alt text](./column-1.png)

### Flex 布局

If you are looking at a blog post (or whatever) about Flexbox and you see `display: box;` or a property that is box-{*}, you are looking at the old 2009 version of Flexbox.

If you are looking at a blog post (or whatever) about Flexbox and you see `display: flexbox;` or the flex() function, you are looking at an awkward tweener phase in 2011.

If you are looking at a blog post (or whatever) about Flexbox and you see `display: flex;` and flex-{*} properties, you are looking at the current (as of this writing) specification.

网页布局是 CSS 的一个重点应用。布局的传统解决方案，基于盒状模型，依赖 `display` 属性 + `position`属性 + `float`属性。它对于那些特殊布局非常不方便，比如，垂直居中就不容易实现。

2009年，W3C 提出了一种新的方案 ---- Flex 布局，可以简便、完整、响应式地实现各种页面布局。目前，它已经得到了所有浏览器的支持，这意味着，现在就能很安全地使用这项功能。

以下内容主要参考了下面两篇文章：
[A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
[A Visual Guide to CSS3 Flexbox Properties](https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties)

#### 1.什么是Flex 布局

Flex 是 *Flexible Box* 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。

任何一个容器都可以指定为 Flex 布局。

`.box{display:flex;}`

行内元素也可以使用 Flex 布局。

`.box{display:inline-flex;}`

webkit内核的浏览器，必须加上`-webkit-`前缀。

> 注意，设为 Flex 布局以后，子元素的`float`、`clear`和`vertical-align`属性将失效。

> 若子级元素没有指定宽度，则由其内容撑开；若是没有指定高度，则继承父级的高度。

#### 2.基本概念

采用 Flex 布局的元素，称为 **Flex 容器**（*flex container*），简称"容器"。它的所有子元素自动成为容器成员，称为 **Flex 项目**（*flex item*），简称"项目"。

容器默认存在两根轴：水平的**主轴**（*main axis*）和垂直的**交叉轴**（*cross axis*）。主轴的开始位置（与边框的交叉点）叫做 main start，结束位置叫做 main end；交叉轴的开始位置叫做 cross start，结束位置叫做 cross end。

项目默认沿主轴排列。单个项目占据的主轴空间叫做 main size，占据的交叉轴空间叫做 cross size。

![Alt text](./flex1.png)

#### 3.容器的属性

##### 3.1 `flex-direction`

决定主轴的方向（即项目的排列方向）。

```
.box {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

它可能有4个值。

- `row`（默认值）：主轴为水平方向，起点在左端。
- `row-reverse`：主轴为水平方向，起点在右端。
- `column`：主轴为垂直方向，起点在上沿。
- `column-reverse`：主轴为垂直方向，起点在下沿。


##### 3.2 `flex-wrap`

定义如果一条轴线排不下，如何换行。

```
.box{
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

它可能取三个值。
- `nowrap`（默认）：不换行。
- `wrap`：换行，第一行在上方。
- `wrap-reverse`：换行，第一行在下方（即从左往右，从下往上）。

##### 3.3 `flex-flow`

`flex-flow`属性是`flex-direction`属性和`flex-wrap`属性的简写形式，默认值为`row nowrap`。

```
.box {
  flex-flow: <flex-direction> || <flex-wrap>;
}
```

##### 3.4 `justify-content`

属性定义了项目在主轴上的对齐方式。

```
.box {
  justify-content: flex-start | flex-end | center | space-between | space-around;
}
```

它可能取5个值，具体对齐（前后顺序不变）方式与轴的方向有关。下面假设主轴为从左到右。

- `flex-start`（默认值）：左对齐
- `flex-end`：右对齐
- `center`： 居中,项目距两端的间距相同
- `space-between`：两端对齐，项目之间的间隔都相等。
- `space-around`：每个项目两侧的间隔相等（所以，项目之间的间隔比项目与边框的间隔大一倍）

![Alt text](./flex2.png)

##### 3.5 `align-items`

定义项目在交叉轴上如何对齐。

```
.box {
  align-items: flex-start | flex-end | center | baseline | stretch;
}
```

它可能取5个值。具体的对齐方式与交叉轴的方向有关，下面假设交叉轴从上到下。

- `flex-start`：交叉轴的起点对齐。
- `flex-end`：交叉轴的终点对齐。
- `center`：交叉轴的中点对齐。
- `baseline`: 项目的第一行文字的基线对齐。
- `stretch`（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度（指定高度，效果类似`flex-start`）。

![Alt text](./flex3.png)


##### 3.6 `align-content`属性

定义了多根轴线的对齐方式（如果项目只有一根轴线，该属性不起作用）。

```
.box {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```

该属性可能取6个值。

- `flex-start`：与交叉轴的起点对齐。
- `flex-end`：与交叉轴的终点对齐。
- `center`：与交叉轴的中点对齐（项目之间没有间隙）。
- `space-between`：与交叉轴两端对齐（与两端没有间隙，除非设置margin值），轴线之间的间隔平均分布。
- `space-around`：每根轴线两侧的间隔都相等（所以，轴线之间的间隔比轴线与边框的间隔大一倍）。
- `stretch`（默认值）：轴线占满整个交叉轴（高度等分；如果项目未设置高度或设为auto，将占满整个容器的高度，但是一般除去最后一个交叉轴，其他轴线的高度会等分）。

![Alt text](./flex4.png)

> 项目之间在主轴或交叉轴方向没有间距，除非主动设置。

#### 4.项目的属性

##### 4.1 `order`

定义项目的排列顺序（数值越小，排列越靠前，默认为`0`）。

```
.item {
  order: <integer>;
}
```

##### 4.2 `flex-grow`

定义项目的放大比例，默认为`0`，即如果存在剩余空间，也不放大。

```
.item {
  flex-grow: <number>; /* default 0 */
}
```

如果所有项目的`flex-grow`属性都为`1`，则它们将等分剩余空间（如果有的话）。
如果有一个或多个项目的`flex-grow`属性没有设置，若至少有一个项目设置该属性，则后者将扩大占据多余的空间而前者不变。

##### 4.3 `flex-shrink`属性

定义了项目的缩小比例，默认为`1`，即如果空间不足，该项目将缩小。

```
.item {
  flex-shrink: <number>; /* default 1 */
}
```

如果所有项目的`flex-shrink`属性都为`1`，当空间不足时，都将等比例缩小。如果一个项目的`flex-shrink`属性为`0`，其他项目都为`1`，则空间不足时，前者不缩小。

> 负值对以上两个属性均无效。总之，在以上两个属性中，该属性值为0时不会放大或缩小。

##### 4.4 `flex-basis`

定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。

```
.item {
  flex-basis: <length> | auto; /* default auto */
}
```

它可以设为跟`width`或`height`属性一样的值（比如350px），则项目将占据固定空间（没有到达指定的空间大小？？？）。

##### 4.5 `flex`

  `flex`属性是`flex-grow`, `flex-shrink` 和 `flex-basis`的简写，默认值为`0 1 auto`。后两个属性可选。

```
.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}
```

该属性有两个快捷值：`auto (1 1 auto)` 和 `none (0 0 auto)`。

> 建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。

##### 4.6 `align-self`

  允许单个项目有与其他项目不一样的对齐方式，可覆盖`align-items`属性。默认值为`auto`，表示继承父元素的`align-items`属性，如果父元素没有该属性，则等同于`stretch`。

```
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

该属性可能取6个值，除了`auto`，其他都与`align-items`属性完全一致。

#### 5.小结

|作用层级父/子|作用|属性|值|
|--|--|--|--|
|父|主轴方向|`flex-direction`|`row / row-reverse / column / column-reverse`|
|父|是否及如何换行|`flex-wrap`|`nowrap / wrap / wrap-reverse`|
|父|简写|`flex-flow`|`<flex-direction> / <flex-wrap>`|
|父|主轴上的对齐方式|`justify-content`|`flex-start / flex-end / center / space-between / space-around`|
|父|交叉轴上如何对齐|`align-items`|`flex-start / flex-end / center / baseline / stretch`|
|父|多根轴线的对齐方式|`align-content`|`flex-start / flex-end / center / space-between / space-around / stretch`|
|子|项目的排列顺序|`order`|`<integer>`|
|子|放大比例|`flex-grow`|`<number>`|
|子|缩小比例|`flex-shrink`|`<number>`|
|子|项目占据的主轴空|`flex-basis`|`<length> / auto`|
|子|简写|`flex`|`none / [ <'flex-grow'> <'flex-shrink'>? / <'flex-basis'> ]`|
|子|单个项目对齐方式|`align-self`|`auto / flex-start / flex-end / center / baseline / stretch`|

### 居中

##### 单列布局水平居中

水平居中的页面布局中最为常见的一种布局形式，多出现于标题，以及内容区域的组织形式，下面介绍几种实现水平居中的方法（注：下面各个实例中实现的是child元素的对齐操作，child元素的父容器是parent元素）

- 1.使用`inline-block` 和 `text-align`实现

```
.parent{text-align: center;}
.child{display: inline-block;}
```

> 优点：兼容性好；
> 不足：需要同时设置子元素和父元素

- 2.使用`margin:0 auto;`来实现

`.child{width:200px;margin:0 auto;}`

> 优点：兼容性好
> 缺点: 需要指定宽度(居中的是设定宽度的盒子)

- 3.使用`display:table;`实现

`.child{display:table;margin:0 auto;}`

> 优点:只需要对自身进行设置
> 不足:IE6,7需要调整结构

- 4.使用绝对定位实现

```
.parent{position:relative;}
/*或者实用margin-left的负值为盒子宽度的一半也可以实现，不过这样就必须知道盒子的宽度，但兼容性好*/
.child{position:absolute;left:50%;transform:translate(-50%);}
```

> 不足：兼容性差,IE9及以上可用(表现效果是居中，但两边外边距值差一个盒宽)

- 5.实用flex布局实现

```
/*第一种方法*/
.parent{display:flex;justify-content:center;}
//没有外边距居中

/*第二种方法*/
.parent{display:flex;}
.child{margin:0 auto;}
//有外边距居中
```

> 缺点：兼容性差，如果进行大面积的布局可能会影响效率

##### 垂直居中

- 1.`vertical-align`

在使用`vertical-align`的时候，由于对齐的基线是用行高的基线作为标记，故需要设置`line-height`或设置`display:table-cell;`

```
/*第一种方法*/
.parent{display:table-cell;vertical-align:middle;height:20px;}
//

/*第二种方法*/
.parent{display:inline-block;vertical-align:middle;line-height:20px;}
//以行高强制撑开盒子，从而居中
//内容设定了高度，则不需要设置行高
```

- 2.实用绝对定位

```
.parent{position:relative;}
.child{position:absolute;top:50%;transform:translate(0,-50%);}
```

- 3.实用flex实现

`.parent{display:flex;align-items:center;}`

##### 水平垂直全部居中

- 1.利用`vertical-align,text-align,inline-block`实现

```
.parent{display:table-cell;vertical-align:middle;text-align:center;}
.child{display:inline-block;}
```

- 2.利用绝对定位实现

```
.parent{position:relative;}
.child{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);}
```

- 3.利用flex实现

```
.parent{display:flex;justify-content:center;align-items:center;}
```

##### 多列布局左列定宽，右列自适应

该布局方式非常常见，适用于定宽的一侧常为导航，自适应的一侧为内容的布局

- 1.利用`float+margin`实现

```
.left{float:left;width:100px;}
.right{margin-left;margin-left:100px;}
```

> 注：IE6会有3px的bug

- 利用`float+margin(fix)`实现

```
<div class="parent">
    <div class="left"></div>
    <div class="right-fix">
        <div class="right"></div>
    </div>
</div>
.left{width:100px;float:left;}
.right-fix{width:100%;margin-left:-100px;}
.right{margin-left:100px;}
```

- 3.使用`float+overflow`实现

```
.left{width:100px;float:left;}
.right{overflow:hidden;}
```

`overflow:hidden`，触发bfc模式，浮动无法影响，隔离其他元素，IE6不支持，左侧`left`设置`margin-left`当作`left`与`right`之间的边距，右侧利用`overflow:hidden;` 进行形成bfc模式

如果我们需要将两列设置为等高，可以用下述方法将“背景”设置为等高，其实并不是内容的等高

```
.left{width:100px;float:left;}
.right{overflow:hidden;}
.parent{overflow:hidden;}
.left,.right{padding-bottom:9999px;margin-bottom:-9999px;}
```

- 4.使用table实现

```
.parent{display:table;table-layout:fixed;width:100%;}
.left{width:100px;}
.right,.left{display:table-cell;}
```

> 实现的效果是两列等高的

- 5.实用flex实现

```
.parent{display:flex;}
.left{width:100px;}
.right{flex:1;}
```

利用右侧容器的`flex:1`，均分了剩余的宽度，也实现了同样的效果。而`align-items` 默认值为`stretch`，故二者高度相等

##### 右列定宽，左列自适应

-

```
//实用`float+margin`实现
.parent{height:100px;margin:0 auto;}
.left{margin-right:-100px;width:100%;float:left;}
.right{float:right;width:100px;}

//实践后，没能达到预定目标，内容会被遮挡(margin-right:-100px没有起到预定的作用)

//绝对定位和怪异盒子
.parent{width:100%;positon:relative;}
.left{width:100%;box-sizing:border-box;padding-right:100px;}
.right{width:100px;position:absolute;top:0;right:0}
```

- 2.使用table实现(等高)

```
.parent{display:table;table-layout:fixed;width:100%;}
.left{display:table-cell;}
.right{width:100px;display:table-cell;}
```

- 3.实用flex实现(等高)

```
.parent{display:flex;}
.left{flex:1;}
.right{width:100px;}
```

##### 左中两列定宽，右列自适应

- 1.利用`float+margin`实现

```
.left,.center{float:left:width:200px;}
.right{margin-left:400px;}
```

> 当父级盒子宽度小于定宽两列之和时，自适应盒子在页面无显示；

- 2.利用`float+overflow`实现

```
.left,.center{float:left:width:200px;}
.right{overflow:hidden;}
```

> 当父级盒子宽度小于定宽两列之和时，自适应盒子会取代第二个定宽列的位置，第二列下移；

- 3.利用table实现

```
.parent{display:table;table-layout:fixed;width:100%;}
.left,.center,.right{display:table-cell;}
.left,.center{width:200px;}
```

> 等高队列。父级盒子宽度减小，从右至左逐渐消失

- 4.利用flex实现

```
.parent{display:flex;}
.left,.center{width:100px;}
.right{flex:1}
```

> 等高。父级盒子宽度减小，右边盒子减小；当减到两列定宽之和时，两列等比例减小

##### 两侧定宽，中栏自适应

- 1.利用`float+margin`实现

```
.left{width：100px;float:left;}
.center{float:left;width:100%;margin-right:-200px;}
.right{width:100px;float:right;}
```

> 父级盒子减小，中间盒子也减小；当小于两侧宽度之和时，右侧下移，消失的中间列出现，直至小于单列宽度；

- 2.利用table实现

```
.parent{width:100%;display:table;table-layout:fixed}
.left,.center,.right{display:table-cell;}
.left{width:100px;}
.right{width:100px;}
```

> 等高。中间先减小，消失后，右侧减小；

- 3.利用flex实现

```
.parent{display:flex;}
.left{width:100px;}
.center{flex:1;}
.right{width:100px;}
```

> 等高；减小到中间最小，左右两侧等比减小；

##### 一列不定宽，一列自适应

- 1.利用float+overflow实现

```
.left{float:left;}
.right{overflow:hidden;}
```

- 2.利用table实现

```
.parent{display:table;table-layout:fixed;width:100%;}
.left{width:0.1%;}???
.left,.right{display:table-cell;}
```

> .left设置宽度，违背不定宽；不设置，两列都是自适应；

- 3.利用flex实现

```
.parent{display:flex;}
.right{flex:1;}
```

> 完美符合需求

##### 多列等分布局

多列等分布局常出现在内容中，多数为功能的，同阶级内容的并排显示等。

- 1.实用float实现

```
.parent{margin-left:-20px}/*假设列之间的间距为20px*/
.column{float:left;width:25%;padding-left:20px;box-sizing:border-box;}
```

> 单纯设置百分比就好了；不明白为什么还要偏移...？？？

- 2.利用table实现

```
.parent{display:table;table-layout:fixed;width:100%;}
.column{display:table-cell;}

.parent-fix{margin-left:-20px;}
.parent{display:table;table-layout:fixed;width:100%;}
.column{display:table-cell;padding-left:20px;}
```

- 3.利用flex实现

```
.parent{display:flex;}
.column{flex:1;}
//将flex:1;换成width:100%;效果也是一样的
```

##### 九宫格布局

- 1.使用table实现

```
<div class="parent">
        <div class="row"><div class="item"></div><div class="item"></div><div class="item"></div></div>
        <div class="row"><div class="item"></div><div class="item"></div><div class="item"></div></div>
        <div class="row"><div class="item"></div><div class="item"></div><div class="item"></div></div>
    </div>
.parent{display:table;table-layout:fixed;width:100%;}
.row{display:table-row;}
.item{display:table-cell;width:33.3%;height:200px;}
```

- 2.实用flex实现

```
.parent{display:flex;flex-direction:column;}
.row{height:100px;display:flex;}
.item{width:100px;background:red;}
```

# 移动端学习

###了解移动端

##### 产品形态

- PC端和移动端共用一套项目
  - 猎豹、苹果、华为
  - 项目结构比较简单
  - 共用一个域名

- PC端和移动端分离，两套项目
  - 京东、淘宝
  - 项目结构比较复杂（内容比较多）
  - 不共用一个域名
  > m 淘宝、京东的移动端
  > i 凤凰网的移动端

- PC和移动端公用一套页面结构 （**响应式布局**）
    - 媒体查询+px+流式布局(百分比布局)
    - 布局简单

- PC和移动端分离开 H5
    - 媒体查询+ rem单位+流式布局(百分比布局)
    - 布局复杂
    -

##### PC端和移动端的区别

- 浏览器区别
  - PC浏览器兼容（IE低版本）；移动端不支持IE9以下；
  - 移动端适配各个机型，分辨率不同

- 效果
  - PC端伪类选择器（：hover）
  - 移动端没有划过效果，有轮播图切换

### CSS3属性

##### `viewport` 视口

> 快捷键（meta:vp+tab）必须置于head之内; 写移动端页面必须加上；

`<meta name="viewport" content="width=device-width,user-scale=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0>"`

- `viewport` 视口  手机端页面屏幕宽度
- `width=device-width`  html页面宽度等于设备(手机，平板)的宽度
- `user-scalable=no`   禁止用户缩放
- `initial-scale=1.0`    初始缩放比例
- `maximum-scale=1.0`  最大缩放比例
- `minimum-scale=1.0`  最小缩放比例


### CSS3属性不同浏览器前缀

```
    -webkit-border-radius: 50%;/*-webkit 谷歌*/
    -moz-border-radius: 50%;/*火狐*/
    -ms-border-radius:50%;/*IE*/
    -o-border-radius:50%;/*欧朋*/
    border-radius: 50%;
    /*
    我们的css3属性不支持低版本浏览器在我们日常工作中，必须至少写两个
    -webkit-border-radius:50%（移动端支持浏览器是-webkit内核）
    border-radius:50%
    */
```

# CSS重构

### CSS代码为什么要重构

##### 一.提高代码性能

- 1.提高页面加载速度

也就是说减小css文件的大小，提高页面加载速度，尽可能的利用http缓存；

- 2.提高css代码性能

不同的css代码，浏览器对其解析的速度不同，如何提高浏览器解析css戴拿的速度也是要考虑的，例如css选择器是从右侧开始查找。

##### 二.提高代码可维护性

- 1.可重用

一个网站风格基本保持一致，首页上可能有很多模块样式相同，内容不同，内容从后台调取，那么css样式和html结构就可以重复使用，那么html通过负值即可，css代码就可以很多html模块使用同一部分的css样式；

- 2.可拓展

如果有新的需求增加模块，我们应该保证新增代码不会影响旧的代码和页面，并尽量减少新增，能重用尽量重用；

- 3.可修改

如果“万恶”的产品要求修改样式或者删除，如果当初没有进行很好的规划，那么你肯能就不会在原来的基础上“动刀”，因为你怕会影响其他，那有些无用的代码就会一直存在，影响性能。


### 如何重构

1、将CSS样式单独写在单独的CSS文件中，在head标签中进行调用
a、内容样式分离，利于维护
b、减少html页面体积，加快加载速度
c、css文件可以被缓存、重用，维护成本降低

2、不使用@import，这种形式会影响css文件的加载速度

3、避免使用复杂的选择器，层级越少越好
选择器最好不要嵌套三层以上，尽量不用标签选择器在最末尾

4、精简页面样式文件，去掉无用样式

很多页面的样式融合到一起，这样一个页面引用了很多无用样式，导致文件过大，加载速度慢，浏览器也会进行很多的匹配，影响渲染时间，我们应该合理的合并当前页面样式，而不是多有的css文件放到一起，在这里也不是绝对的，如果是小型项目，利用缓存我们可以将文件合并在一起，如果是未知的大项目，我们就要一一的分割；

5、利用css的继承性

例如文字有关的css属性都是可继承的属性，字体的大小、样式等。

##### 提高代码的可维护性

1、命名
命名是css选择器的第一步，整个团队的命名风格一致，这样其他人接收的时候才会更加的高效，这里给大家一些参考：

```
1)页面结构
容器: container
页头：header
内容：content/container
页面主体：main
页尾：footer
导航：nav
侧栏：sidebar
栏目：column
页面外围控制整体佈局宽度：wrapper
左右中：left right center

(2)导航
导航：nav
主导航：mainnav
子导航：subnav
顶导航：topnav
边导航：sidebar
左导航：leftsidebar
右导航：rightsidebar
菜单：menu
子菜单：submenu
标题: title
摘要: summary

(3)功能
标志：logo
广告：banner
登陆：login
登录条：loginbar
注册：register
搜索：search
功能区：shop
标题：title
加入：joinus
状态：status
按钮：btn
滚动：scroll
标籤页：tab
文章列表：list
提示信息：msg
当前的: current
小技巧：tips
图标: icon
注释：note
指南：guild
服务：service
热点：hot
新闻：news
下载：download
投票：vote
合作伙伴：partner
友情链接：link
版权：copyright

（4）注意事项
1.一律小写;
2.尽量用英文;
3.不加中槓和下划线;
4.尽量不缩写，除非一看就明白的单词。
```

2、备注
备注得当，每一个模块的意义别人一读就明了；

3、重复样式封装，一次定义多次调用
将相同的样式形成单独的类再进行引用，更加利于维护

4、书写的顺序（是指演示的书写顺序）

```
<style>
.header{
    位置属性{position top z-index display float}
    盒子模型{width height padding margin}
    文字{font line-height}
    背景{background border}
    其他{animation transition}
</style>
```

总结自己的习惯，尽量成系统的去解析页面，从psd开始就有一个基本思想，不要随心的去理解效果图，命名的时候要注意，选择器的长度也不要太长哦，能重复使用的代码尽量封装到一个类中，可以多次调用。

# 学习中遇到的问题

### 1.图片路径

- 在img的src中，我们是以当前html网页做相对文件，来设置引入图片的路径。
在外部样式css文件中，设置某个元素的`background-image`的url()；应当是以你当前的css文件所在路径做为相对路径找起。

> 在文件项目中，如果是以CSS文件夹为起止点，而所寻图片位于同级文件夹之下，引用路径的时候，以起止点往上两个父级为记才能找到图片；当两级以后为软盘，则会变成绝对路径，而在chrome中无法显现；解决办法（猜测），再增加一个父级文件夹；


### 2.`text-align:-webkit-match-parent`

出现在li中，意为继承父级的text-align的属性（默认左对齐）；

### 3.去除表格自带边框

表格表格类名，用交集选择器（？）或者直接标签选择器；

```
table.tab1,table.tab2{
    border-collapse:separate;
    border-spacing:0px;}
```

### 4.`padding`失效原因

1.padding值不能为auto，必须明确具体的数值；