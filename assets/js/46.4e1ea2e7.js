(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{647:function(t,v,_){"use strict";_.r(v);var s=_(11),l=Object(s.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"请求方法汇总"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#请求方法汇总"}},[t._v("#")]),t._v(" 请求方法汇总")]),t._v(" "),_("p",[t._v("http/1.1 规定了以下请求方法(注意，都是大写):")]),t._v(" "),_("ul",[_("li",[t._v("GET: 通常用来获取资源")]),t._v(" "),_("li",[t._v("HEAD: 获取资源的元信息")]),t._v(" "),_("li",[t._v("POST: 提交数据，即上传数据")]),t._v(" "),_("li",[t._v("PUT: 修改数据")]),t._v(" "),_("li",[t._v("DELETE: 删除资源")]),t._v(" "),_("li",[t._v("CONNECT: 建立连接隧道，用于代理服务器")]),t._v(" "),_("li",[t._v("OPTIONS: 列出可对资源实行的请求方法，用来跨域请求")]),t._v(" "),_("li",[t._v("TRACE: 追踪请求-响应的传输路径")])]),t._v(" "),_("h2",{attrs:{id:"get-和-post-的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#get-和-post-的区别"}},[t._v("#")]),t._v(" GET 和 POST 的区别")]),t._v(" "),_("p",[t._v("首先最直观的是语义上的区别。然后具体的差别如下:")]),t._v(" "),_("ol",[_("li",[_("strong",[t._v("缓存")]),t._v(": GET 请求会被浏览器主动缓存下来，留下历史记录，而 POST 默认不会。")]),t._v(" "),_("li",[_("strong",[t._v("编码")]),t._v(": GET 只能进行 URL 编码，只能接收 ASCII 字符，而 POST 没有限制。")]),t._v(" "),_("li",[_("strong",[t._v("参数")]),t._v(": GET 一般放在 URL 中，因此不安全，POST 放在请求体中，更适合传输敏感信息。")]),t._v(" "),_("li",[_("strong",[t._v("幂等性")]),t._v(": GET 是幂等的，而 POST 不是(幂等表示执行相同的操作，结果也是相同的)。")]),t._v(" "),_("li",[_("strong",[t._v("TCP")]),t._v(": GET 请求会把请求报文一次性发出去，而 POST 会分为两个 TCP 数据包，首先发 header 部分，如果服务器响应 100(continue)， 然后发 body 部分(火狐浏览器除外，它的 POST 请求只发一个 TCP 包)。")])])])}),[],!1,null,null,null);v.default=l.exports}}]);