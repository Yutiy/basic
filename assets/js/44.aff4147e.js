(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{643:function(e,t,n){"use strict";n.r(t);var r=n(11),l=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("ol",[n("li",[e._v("浏览器向服务器发送随机数 client_random，TLS 版本和供筛选的加密套件列表。")]),e._v(" "),n("li",[e._v("服务器接收到，立即返回 server_random，确认好双方都支持的加密套件以及数字证书 (证书中附带公钥 Public key certificate)。")]),e._v(" "),n("li",[e._v("浏览器接收，先验证数字证书。若通过，接着使用加密套件的密钥协商算法 RSA 算法生成另一个随机数 pre_random，并且用证书里的公钥加密，传给服务器。")]),e._v(" "),n("li",[e._v("服务器用私钥解密这个被加密后的 pre_random，参考 “非对称加密”")])])])}),[],!1,null,null,null);t.default=l.exports}}]);