### yarn create vite

### 好的页面框架

1. 需要对界面尺寸的适应性和完备性，宽度在缩小时能够自适应，在放大时又有所节制
2. 既需要有 desktop 时全尺寸的视觉冲击优势，又需要在 pad 或手机端干净简洁

### 先调整好初始的布局结构，提取公共样式 root

<pre>
<code>
/* 引入字体文件 */
@import "src/fonts/fonts.css";

:root {
/_ header 高度 _/
--header-height: 6rem;
/_ body 高度 _/
--content-height: calc(100vh - var(--header-height));
/_ header 两侧 padding _/
--header-right-left-padding: 100px;
/_ body 左侧 padding _/
--body-left-padding: var(--header-right-left-padding);
/_ 文本颜色 _/
--text-color: #ffffff;
/_ 主要颜色 _/
--primary-color: #1c073e;
/_ 次要颜色 _/
--second-color: yellow;
/_ menu 宽度 _/
--menu-width: 300px;
}

/_ 当 screen 宽度小于 1200px 时 _/
@media (max-width: 1200px) {
/_ 更新 root _/
:root {
/_ header 两侧 padding _/
--header-right-left-padding: 30px;
}
}

_,
_::before,
_::after {
/_ 设定字体 _/
font-family: "Montserrat", sans-serif;
/_ 设定 box-sizing 模式 _/
box-sizing: border-box;
margin: 0;
padding: 0;
/_ 取消文字装饰器 _/
text-decoration: none;
/_ 取消 list style _/
list-style: none;
/_ 禁止用户选择文字 _/
user-select: none;
/_ 禁止用户拖拽 \*/
-webkit-user-drag: none;
}

html,
body {
/_ 宽度全屏 _/
width: 100vw;
/_ 最大宽度, 防止超宽屏导致的内容过度分离 _/
max-width: 1600px;
/_ 最小高度，在未来高度扩展时，内容高度有所依据 _/
min-height: 100vh;
/_ 中央显示 _/
margin: 0 auto;
/_ 文本颜色 _/
color: var(--text-color);
/_ 背景颜色 _/
background-color: var(--primary-color);
}

/_ 单独设定 link 颜色 body 中的 color 无法传递到 a link 标签 _/
a {
color: var(--text-color);
}

header,
.content {
/_ flex 布局 _/
display: flex;
/_ 相对位置， 为绝对位置做铆钉点 _/
position: relative;
/_ 纵向设置为中央 _/
align-items: center;
/_ 动画过渡时间 _/
transition: 0.3s;
}

header {
/_ 横向两侧展开 _/
justify-content: space-between;
height: var(--header-height);
padding: 0 var(--header-right-left-padding);
}

.content {
/_ 横向从左侧开始 _/
justify-content: flex-start;
height: var(--content-height);
padding-left: var(--body-left-padding);
}

/_ 临时设定，便于观察 _/
header,
.content {
border: 3px dashed var(--text-color);
}

.content {
border-top: none;
}
</code>
</pre>

### 使用字体文件

1. @import 字体文件
2. 设定字体文件 font-family，理想的字体放前面，后续放通用替代

### 使用 cdn 图标库

### 可以引入 sass

### gsap
