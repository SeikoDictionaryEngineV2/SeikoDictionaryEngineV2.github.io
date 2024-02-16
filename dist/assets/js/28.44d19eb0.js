(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{308:function(t,s,a){"use strict";a.r(s);var n=a(14),v=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"变量以及表达式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变量以及表达式"}},[t._v("#")]),t._v(" 变量以及表达式")]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("DANGER")]),t._v(" "),s("p",[t._v("在最新的版本中，表达式取值语法由"),s("code",[t._v("{}")]),t._v("变为了"),s("code",[t._v("${}")]),t._v("。")]),t._v(" "),s("p",[t._v("若下文中若出现"),s("code",[t._v("{}")]),t._v("字样的取值语法则属于文档错误。请自动无视")])]),t._v(" "),s("h2",{attrs:{id:"一-赋值语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一-赋值语法"}},[t._v("#")]),t._v(" 一. 赋值语法")]),t._v(" "),s("p",[t._v("变量的基本赋值语法为:"),s("code",[t._v("变量名<-变量值")])]),t._v(" "),s("p",[t._v("例如:")]),t._v(" "),s("div",{staticClass:"language-tex line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-tex"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("群"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("你好\nA<-你好\nB<-1\nC<-hello world\nD<-"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v('"a":"1","b":"2","c":'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("1,2,3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nE<-"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("1,2,3,4,"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v('"a":"1","b":"2"'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nF<-///\n你好\n这是一个程序\n///\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("p",[t._v("D，E为JSON字符，他们会被解析为"),s("code",[t._v("集合")]),t._v("，供你获取。")]),t._v(" "),s("p",[t._v("F为字符串模板，使用这样的语法来将一个多行的字符串塞入一个变量中。")]),t._v(" "),s("p",[t._v("字符串模板需要和控制语句对齐，不然会抛错。")]),t._v(" "),s("blockquote",[s("p",[t._v("字符串模板支持输入变量，例如")]),t._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('A&lt;-1\n如果:${A}==1\n A&lt;-///{\n "a":[${A}+1],\n "b":2,\n "c":3\n }\n ///\n{A}\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])])]),t._v(" "),s("h2",{attrs:{id:"二-取值语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二-取值语法"}},[t._v("#")]),t._v(" 二. 取值语法")]),t._v(" "),s("p",[t._v("变量的取值语法使用花括号，即:"),s("code",[t._v("${变量名}")])]),t._v(" "),s("p",[t._v("在上面的例子中：")]),t._v(" "),s("p",[t._v("$"),s("code",[t._v("{A}")]),t._v("展示的是"),s("code",[t._v("你好")]),t._v("，B，C同理。")]),t._v(" "),s("p",[t._v("若要获取D中b的值，只需写入"),s("code",[t._v("${D.b}")]),t._v("。不出意外，执行结果是"),s("code",[t._v("2")])]),t._v(" "),s("p",[t._v("若要获取E中第一个元素的值，只需写入"),s("code",[t._v("${E(0)}")]),t._v("，不出意外，执行结果为"),s("code",[t._v("1")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("写入"),s("code",[t._v("{D}")]),t._v("会输出D代表的JSON字符串")])]),t._v(" "),s("p",[t._v("将上面的例子加入其中，得到下面的词库：")]),t._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('[群]你好\nA&lt;-你好\nB&lt;-1\nC&lt;-hello world\nD&lt;-{"a":"1","b":"2","c":[1,2,3]}\nE&lt;-[1,2,3,4,{"a":"1","b":"2"}]\nA的值为${A}\\n\nB的值为${B}\\n\nC的值为${C}\\n\nD的值为${D}\\n\nE的值为${E}\\n\nD中a元素的值为${D.a}\\n\nD中c元素的值为${D.c}\\n\nD中c元素的第一个元素为${D.c(0)}\\n\nE中第5个元素的a属性的值为${E(4).a}\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br")])]),s("blockquote",[s("h3",{attrs:{id:"取值语法的高级运用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#取值语法的高级运用"}},[t._v("#")]),t._v(" 取值语法的高级运用:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("取值语法的变量名可以为花括号表达式，此时该语句的含义变为"),s("strong",[t._v("将左侧表达式指向的值修改为右侧的计算结果，例如:")])]),t._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('[群]qwq\nA&lt;-{"A":1,"B":2,"C":{"A":3,"B":4,"C":[1,2,3,4]},"D":[1,2,3,{"114":514}]}\nC&lt;-qwq\n${A.D(3).114}&lt;-${C}\n${A}\\n\n${A.D(0)}&lt;-${C}\n${A}\\n\n${A.D}&lt;-${C}\n${A}\\n\n${A}&lt;-${C}\n${A}\\n\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])]),s("p",[t._v("不出意外词库的运行结果为:")]),t._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('{"A":1,"B":2,"C":{"A":3,"B":4,"C":[1,2,3,4]},"D":[1,2,3,{"114":"qwq"}]}\n{"A":1,"B":2,"C":{"A":3,"B":4,"C":[1,2,3,4]},"D":["qwq",2,3,{"114":"qwq"}]}\n{"A":1,"B":2,"C":{"A":3,"B":4,"C":[1,2,3,4]},"D":"qwq"}\nqwq\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])])]),t._v(" "),s("li",[s("p",[t._v("对于数组赋值，遵循以下规矩：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("数组名(下标)")]),t._v("代表替换下标处的元素为一个新元素")]),t._v(" "),s("li",[s("code",[t._v("数组名(add)")]),t._v("代表在数组的末尾处添加一个新元素")]),t._v(" "),s("li",[s("code",[t._v("数组名(add数字)")]),t._v("代表在数组的下标"),s("strong",[t._v("前")]),t._v("添加一个新元素")])]),t._v(" "),s("p",[t._v("例如：")]),t._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("[群]数组赋值测试\nA&lt;-///[\n1,2\n]\n///\n${A(0)}&lt;-3\n${A}\\n\n${A(add)}&lt;-0\n${A}\\n\n${A(add2)}&lt;-1\n${A}\\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])]),s("p",[t._v("不出意外，词库的运行结果为：")]),t._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("[3,2]\n[3,2,0]\n[3,2,1,0]\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])])])])]),t._v(" "),s("h2",{attrs:{id:"三-计算块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三-计算块"}},[t._v("#")]),t._v(" 三. 计算块")]),t._v(" "),s("p",[t._v("计算块可以嵌入到取值表达式中。当然，取值表达式也可以嵌入到计算块中。")]),t._v(" "),s("p",[t._v("计算块的语法为:"),s("code",[t._v("$[数学表达式]")])]),t._v(" "),s("blockquote",[s("p",[t._v("计算块使用"),s("code",[t._v("exp4j")]),t._v("框架的支持，有关"),s("code",[t._v("exp4j")]),t._v("的更多信息，请参考"),s("a",{attrs:{href:"https://ibit.tech/archives/exp4j-introduction",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://ibit.tech/archives/exp4j-introduction"),s("OutboundLink")],1)])]),t._v(" "),s("h3",{attrs:{id:"三-一-计算块的函数支持"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三-一-计算块的函数支持"}},[t._v("#")]),t._v(" 三.一 计算块的函数支持")]),t._v(" "),s("p",[t._v("计算块支持使用函数，调用形式为"),s("code",[t._v("函数名(变量1,变量2...)")])]),t._v(" "),s("p",[t._v("可用的函数名如下：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("函数")]),t._v(" "),s("th",[t._v("参数数量")]),t._v(" "),s("th",[t._v("功能")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("sin")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("正弦")])]),t._v(" "),s("tr",[s("td",[t._v("cos")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("余弦")])]),t._v(" "),s("tr",[s("td",[t._v("tan")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("正切")])]),t._v(" "),s("tr",[s("td",[t._v("cot")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("余切")])]),t._v(" "),s("tr",[s("td",[t._v("log")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("取对数，底数为e(2.71828...)")])]),t._v(" "),s("tr",[s("td",[t._v("log2")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("取对数，底数为2")])]),t._v(" "),s("tr",[s("td",[t._v("log10")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("取对数，底数为10")])]),t._v(" "),s("tr",[s("td",[t._v("abs")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("绝对值")])]),t._v(" "),s("tr",[s("td",[t._v("asin")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("反正弦")])]),t._v(" "),s("tr",[s("td",[t._v("acos")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("反余弦")])]),t._v(" "),s("tr",[s("td",[t._v("atan")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("反正切")])]),t._v(" "),s("tr",[s("td",[t._v("cbrt")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("开立方")])]),t._v(" "),s("tr",[s("td",[t._v("sinh")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("双曲正弦函数")])]),t._v(" "),s("tr",[s("td",[t._v("sqrt")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("开平方")])]),t._v(" "),s("tr",[s("td",[t._v("tanh")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("双曲正切")])]),t._v(" "),s("tr",[s("td",[t._v("cosh")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("双曲余弦")])]),t._v(" "),s("tr",[s("td",[t._v("ceil")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("向上取整")])]),t._v(" "),s("tr",[s("td",[t._v("pow")]),t._v(" "),s("td",[t._v("2")]),t._v(" "),s("td",[t._v("幂指数运算。 第一个参数为底数，第二个原数为指数。 相比"),s("code",[t._v("^")]),t._v("，pow函数的隐藏bug可能更少")])]),t._v(" "),s("tr",[s("td",[t._v("empm1")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("返回e^x-1")])]),t._v(" "),s("tr",[s("td",[t._v("signum")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("符号函数sgn(x)")])])])]),t._v(" "),s("h3",{attrs:{id:"三-二-计算块的运算符支持"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三-二-计算块的运算符支持"}},[t._v("#")]),t._v(" 三.二 计算块的运算符支持")]),t._v(" "),s("p",[t._v("下面是计算块可以写入的运算符：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("运算符")]),t._v(" "),s("th",[t._v("解释")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("+")]),t._v(" "),s("td",[t._v("两个数相加")])]),t._v(" "),s("tr",[s("td",[t._v("-")]),t._v(" "),s("td",[t._v("两个数相减，或对一个数取相反数")])]),t._v(" "),s("tr",[s("td",[t._v("*")]),t._v(" "),s("td",[t._v("两个数相乘")])]),t._v(" "),s("tr",[s("td",[t._v("/")]),t._v(" "),s("td",[t._v("两个数相除")])]),t._v(" "),s("tr",[s("td",[t._v("^")]),t._v(" "),s("td",[t._v("两个数做乘幂")])]),t._v(" "),s("tr",[s("td",[t._v("%")]),t._v(" "),s("td",[t._v("取余运算")])])])])])}),[],!1,null,null,null);s.default=v.exports}}]);