```proto
syntax = "proto3";

package api;

message Item
{
  uint32 cid = 1;
  uint64 kid = 2;
  uint64 rid = 3;
  int32 day = 4;
  int64 n = 5;
}

message Bill
{
  repeated Item li = 1;
}

message Cash
{
  int64 n = 1;
}

message Ing
{
  uint64 id = 1;
  uint64 n = 2;
}

message Card
{
  uint64 id = 1;
  uint32 brand_id = 2;
  uint32 exp = 3;
  uint32 status = 4;
  string name = 5;
}

message Brand
{
  uint32 id = 1;
  string name = 2;
}

message Setup
{
  string mail = 1;
  string stripe_pk = 2;
}

message Topuped
{
  uint64 n = 1;
  uint64 rate = 2;
  uint32 status = 3;
}

message Topup
{
  repeated Card card_li = 1;
  repeated Brand brand_li = 2;
  Setup setup = 3;
  uint64 rate = 4;
}

message BillIndex
{
  int64 cash = 1;
  repeated Item li = 2;
  repeated int32 month_li = 3;
  repeated Ing ing = 4;
}
```

## About This Project

This project is an open-source component of [i18n.site ⋅ Internationalization Solution](https://i18n.site).

* [i18 : MarkDown Command Line Translation Tool](https://i18n.site/i18)

  The translation perfectly maintains the Markdown format.

  It recognizes file changes and only translates the modified files.

  The translated Markdown content is editable; if you modify the original text and translate it again, manually edited translations will not be overwritten (as long as the original text has not been changed).

* [i18n.site : MarkDown Multi-language Static Site Generator](https://i18n.site/i18n.site)

  Optimized for a better reading experience

## 关于本项目

本项目为 [i18n.site ⋅ 国际化解决方案](https://i18n.site) 的开源组件。

* [i18 :  MarkDown命令行翻译工具](https://i18n.site/i18)

  翻译能够完美保持 Markdown 的格式。能识别文件的修改，仅翻译有变动的文件。

  Markdown 翻译内容可编辑；如果你修改原文并再次机器翻译，手动修改过的翻译不会被覆盖（如果这段原文没有被修改）。

* [i18n.site : MarkDown多语言静态站点生成器](https://i18n.site/i18n.site) 为阅读体验而优化。