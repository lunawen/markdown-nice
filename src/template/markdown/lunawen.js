export default `/*自定义样式，实时生效*/

/* 自定义样式，实时生效，浏览器实时缓存 */

/* 全局属性
 * 页边距 padding: 30px;
 * 全文字体 font-family: ptima-Regular;
 * 英文换行 word-break: break-all;
 */
#nice {
  font-family: "Source Sans Pro", "Optima-Regular", "Optima", "PingFangSC-light",
    "PingFangTC-light", "PingFang SC", Cambria, Cochin, Georgia, Times,
    "Times New Roman", serif;
  font-size: 16px;
  color: black;
  padding: 10px 0;
  line-height: 1.6;
  word-spacing: 0px;
  letter-spacing: 0px;
  word-break: break-word;
  word-wrap: break-word;
  text-align: left;
  
}

/* 段落，下方未标注标签参数均同此处
 * 上边距 margin-top: 5px;
 * 下边距 margin-bottom: 5px;
 * 行高 line-height: 26px;
 * 词间距 word-spacing: 3px;
 * 字间距 letter-spacing: 3px;
 * 对齐 text-align: left;
 * 颜色 color: #3e3e3e;
 * 字体大小 font-size: 16px;
 * 首行缩进 text-indent: 2em;
 */
#nice p {
  font-size: 0.9rem;
  text-align: justify;
}

/* 一级标题 */
#nice h1 {
  font-size: 1.6rem;
  font-weight: bolder;
  margin: 1.4rem auto;
  background-color: #0193a7;
  padding: 0.5rem;
  text-align: center;
  color: white;
}

/* 一级标题内容 */
#nice h1 span {
}

/* 一级标题修饰 请参考有实例的主题 */
#nice h1:after {
}

/* 二级标题 */
#nice h2 {
  font-size: 1.5rem;
  font-weight: bold;
  color: #0193a7;
  padding-left: 10px;
  margin: 1.4rem auto;
  border-left: 3px solid #01a1b7;
}

/* 二级标题内容 */
#nice h2 span {
}

/* 二级标题修饰 请参考有实例的主题 */
#nice h2:after {
}

/* 三级标题 */
#nice h3 {
    padding-left: 10px;
  border-left: 2px solid #01a1b7;
  margin: 1.4rem 0;
  font-size: 1.4rem;
}

/* 三级标题内容 */
#nice h3 span {
}

/* 三级标题修饰 请参考有实例的主题 */
#nice h3:after {
}

/* 四级标题 */
#nice h4 {
  color: #f26d41;
  font-size: 0.9rem;
  margin: 0 0 1rem 0;
  text-align: justify;
}

/* 五级标题 */
#nice h5 {
  color: #2fa6b7;
  font-size: 0.9rem;
  margin-top: 0;
  /* padding-left: 10px; */
  /* border-left: 2px dashed #01a1b7; */
}

/* 六级标题 */
#nice h6 {
  font-size: 0.8rem;
  font-weight: normal;
  color: #6c6f74;
  text-align: center;
  font-style: italic;
  margin-top: 0;
}

/* 无序列表整体样式
 * list-style-type: square|circle|disc;
 */
#nice ul {
  list-style-type: disc;
  color: #2fa6b7;
}

/* 无序列表整体样式
 * list-style-type: upper-roman|lower-greek|lower-alpha;
 */
#nice ol {
  color: #2fa6b7;
}

/* 列表内容，不要设置li
 */
#nice li section {
  color: #2fa6b7;
}

/* 引用
 * 左边缘颜色 border-left-color: black;
 * 背景色 background: gray;
 */
#nice blockquote {
  padding: 0.9rem;
  font-size: 0.9rem;
  margin: 1.2rem 0;
  color: #616d72;
  background: #f2f7fb;
  border: none;
}

/* 引用文字 */
#nice blockquote p {
  margin: 0;
}

/* 链接 
 * border-bottom: 1px solid #009688;
 */
#nice a {
  font-size: 0.8rem;
  color: #0193a7;
  text-decoration: none;
  border-bottom: 1px solid #01a1b7;
}

/* 超链接 */
#nice a:hover,
#nice p a:hover,
#nice blockquote a:hover {
  font-size: 0.8rem;
  color: #0193a7;
  text-decoration: none;
  border-bottom: 1px solid #01a1b7;
}

/* 加粗 */
#nice strong {
  color: #d10000;
}

/* 加粗 */
#nice p > strong,
#nice blockquote > p > strong {
  color: #d10000;
  font-weight: bold;
}

/* 斜体 */
#nice em {
}

/* 加粗斜体 */
#nice strong em {
}

/* 删除线 */
#nice del {
  color: #91979a;
}

/* 分隔线
 * 粗细、样式和颜色
 * border-top: 1px solid #3e3e3e;
 */
#nice hr {
  border: none;
  border-top: 1px dashed #01a1b7;
  margin: 1.2rem 0;
}

/* 图片
 * 宽度 width: 80%;
 * 居中 margin: 0 auto;
 * 居左 margin: 0 0;
 */
#nice img {
  display: block;
  margin: 0 auto;
  max-width: 100%;
}

/* 行内代码 */
#nice p code, li code {
  font-size: 0.8rem;
  font-weight: normal;
  color: #0193a7;
  word-wrap: break-word;
  padding: 2px 4px;
  border-radius: 4px;
  margin: 0 2px;
  background: #f8f8f8;
}

/* 非微信代码块
 * 代码块不换行 display: -webkit-box !important;
 * 代码块换行 display: block;
 */
#nice pre code {
}

table tr th,
#nice table tr th {
  border: 1px solid #01a1b7;
  background-color: #01a1b7;
  color: #f8f8f8;
  border-bottom: 0;
}

#nice table tr td {
  border: 1px solid #01a1b7;
}

/* 脚注文字 */
#nice .footnote-word {
  color: #0193a7;
}

/* 脚注上标 */
#nice .footnote-ref {
  color: #0193a7;
}

/* "参考资料"四个字 
 * 内容 content: "参考资料";
 */
#nice .footnotes-sep:before {
  content: "References"
}

/* 参考资料编号 */
#nice .footnote-num {
  color: #0193a7;
}

/* 参考资料文字 */
#nice .footnote-item p { 
  color: #0193a7;
}

/* 参考资料解释 */
#nice .footnote-item p em {
}

/* 行间公式
 * 最大宽度 max-width: 300% !important;
 */
#nice .block-equation svg {
}

/* 行内公式
 */
#nice .inline-equation svg {  
}`;
