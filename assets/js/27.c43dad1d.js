(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{597:function(v,_,t){v.exports=t.p+"assets/img/tcp_header.45516025.jpg"},654:function(v,_,t){"use strict";t.r(_);var a=t(11),e=Object(a.a)({},(function(){var v=this,_=v.$createElement,a=v._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("p",[v._v("报文头部结构如下(单位为字节):")]),v._v(" "),a("p",[a("img",{attrs:{src:t(597),alt:"tcp头部"}})]),v._v(" "),a("p",[v._v("请大家牢记这张图！")]),v._v(" "),a("h2",{attrs:{id:"源端口、目标端口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#源端口、目标端口"}},[v._v("#")]),v._v(" 源端口、目标端口")]),v._v(" "),a("p",[v._v("如何标识唯一标识一个连接？答案是 TCP 连接的四元组 —— 源 IP、源端口、目标 IP 和目标端口。")]),v._v(" "),a("p",[v._v("那 TCP 报文怎么没有源 IP 和目标 IP 呢？这是因为在 IP 层就已经处理了 IP。TCP 只需要记录两者的端口即可。")]),v._v(" "),a("h2",{attrs:{id:"序列号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#序列号"}},[v._v("#")]),v._v(" 序列号")]),v._v(" "),a("p",[v._v("即"),a("code",[v._v("Sequence number")]),v._v(", 指的是本报文段第一个字节的序列号。")]),v._v(" "),a("p",[v._v("从图中可以看出，序列号是一个长度为 4 个字节，也就是 32 位的无符号整数，表示范围为 0 ~ 2^32 - 1。如果到达最大值了后就循环到 0。")]),v._v(" "),a("p",[v._v("序列号在 TCP 通信中有两个作用:")]),v._v(" "),a("ul",[a("li",[v._v("在 SYN 报文中交换彼此的初始序列号")]),v._v(" "),a("li",[v._v("保证数据包能够按照正确的顺序组装")])]),v._v(" "),a("h2",{attrs:{id:"isn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#isn"}},[v._v("#")]),v._v(" ISN")]),v._v(" "),a("p",[v._v("即"),a("code",[v._v("Initial Sequence Number（初始序列号）")]),v._v("，在三次握手的过程当中，双方会用过 SYN 报文来交换彼此的 ISN。")]),v._v(" "),a("p",[v._v("ISN 并不是固定值，而是每 4ms 加 1，溢出则回到 0，这个算法使得猜测 ISN 变得非常困难，那为何要这样做呢？")]),v._v(" "),a("p",[v._v("如果 ISN 被攻击者预测到，那么要知道源 IP 和端口号都是很容易伪造的，当攻击者猜测 ISN 之后，直接伪造一个 RST 后，就可以强制连接关闭的，这是非常危险的。")]),v._v(" "),a("p",[v._v("而动态增长的 ISN 大大提高了猜测 ISN 的难度。")]),v._v(" "),a("h2",{attrs:{id:"确认号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#确认号"}},[v._v("#")]),v._v(" 确认号")]),v._v(" "),a("p",[v._v("即"),a("code",[v._v("ACK(Acknowledgment number)")]),v._v("。用来告知对方下一个期望接收的序列号，小于 ACK 的所有字节已经全部收到。")]),v._v(" "),a("h2",{attrs:{id:"标记位"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#标记位"}},[v._v("#")]),v._v(" 标记位")]),v._v(" "),a("p",[v._v("常见的标记位有"),a("code",[v._v("SYN")]),v._v(","),a("code",[v._v("ACK")]),v._v(","),a("code",[v._v("FIN")]),v._v(","),a("code",[v._v("RST")]),v._v(","),a("code",[v._v("PSH")]),v._v("。")]),v._v(" "),a("p",[v._v("SYN 和 ACK 已经在上文说过，后三个解释如下:")]),v._v(" "),a("ul",[a("li",[v._v("FIN： 即 Finish，表示发送方准备断开连接。")]),v._v(" "),a("li",[v._v("RST：即 Reset，用来强制断开连接。")]),v._v(" "),a("li",[v._v("PSH： 即 Push, 告知对方这些数据包收到后应该马上交给上层的应用，不能缓存。")])]),v._v(" "),a("h2",{attrs:{id:"窗口大小"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#窗口大小"}},[v._v("#")]),v._v(" 窗口大小")]),v._v(" "),a("p",[v._v("占用两个字节，也就是 16 位，但实际上是不够用的。因此 TCP 引入了窗口缩放的选项，作为窗口缩放的比例因子，这个比例因子的范围在 0 ~ 14，比例因子可以将窗口的值扩大为原来的 2 ^ n 次方。")]),v._v(" "),a("h2",{attrs:{id:"校验和"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#校验和"}},[v._v("#")]),v._v(" 校验和")]),v._v(" "),a("p",[v._v("占用两个字节，防止传输过程中数据包有损坏，如果遇到校验和有差错的报文，TCP 直接丢弃之，等待重传。")]),v._v(" "),a("h2",{attrs:{id:"可选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可选项"}},[v._v("#")]),v._v(" 可选项")]),v._v(" "),a("p",[v._v("可选项的格式如下:")]),v._v(" "),a("blockquote",[a("p",[v._v("种类(Kind) 1byte 长度(Length) 1byte 值(value)")])]),v._v(" "),a("p",[v._v("常用的可选项有以下几个:")]),v._v(" "),a("ul",[a("li",[v._v("TimeStamp: TCP 时间戳，后面详细介绍。")]),v._v(" "),a("li",[v._v("MSS: 指的是 TCP 允许的从对方接收的最大报文段。")]),v._v(" "),a("li",[v._v("SACK: 选择确认选项。")]),v._v(" "),a("li",[v._v("Window Scale： 窗口缩放选项。")])])])}),[],!1,null,null,null);_.default=e.exports}}]);