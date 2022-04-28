(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{310:function(e,t,n){"use strict";n.r(t),t.default="# Web Accessibility\n\n[WAI-ARIA](https://www.w3.org/WAI/intro/aria), the Accessible Rich Internet Applications Suite developed by W3C, defines a way to make Web content and Web applications more accessible to people with disabilities.\n\nECharts 4.0 complied with the specification, support generating description based on the chart configuration intelligently, to allows people with visual disabilities to understand the content of the chart with the help of reading devices, to make the chart accessible to more people. Apache ECharts 5 supports decal patterns that allow chart data to be distinguished by applique patterns in addition to color, providing a better accessibility experience.\n\nThe Accessibility function was turn off by default, turn it on by define the value of [aria.show](${optionPath}aria.show) as `true`.\n\n## Chart Labels\n\nAfter setting [aria.show](${optionPath}aria.show) to be `true`, ECharts will automatically generate a description of the chart according to the title, chart, data, etc. Users can also change the description through the configuration item.\n\nAbout the configuration item:\n\n```js\noption = {\n  aria: {\n    show: true\n  },\n  title: {\n    text: 'Referrer of a User',\n    x: 'center'\n  },\n  series: [\n    {\n      name: 'Referrer',\n      type: 'pie',\n      data: [\n        { value: 335, name: 'Direct Visit' },\n        { value: 310, name: 'Email Marketing' },\n        { value: 234, name: 'Union Ad' },\n        { value: 135, name: 'Video Ad' },\n        { value: 1548, name: 'Search Engine' }\n      ]\n    }\n  ]\n};\n```\n\n<md-example src=\"doc-example/aria-pie\"></md-example>\n\nThere will be an `area-label` attribute on the Chart DOM. With the help of the reading device, blind people can understand by hearing the following message:\n\n```\nThis is a chart about \"Referrer of a User\" with type Pie chart named Referrer. The data is as follows: the data of Direct Visit is 335,the data of Mail Marketing is 310,the data of Union Ad is 234,the data of Video Ad is 135,the data of Search Engine is 1548.\n```\n\nThe default language will be used based on the language pack (default Chinese), or you can customize the template using the configuration item.\n\n### Overall Description Modification\n\nFor some charts, the default item description cannot show the info of the whole chart. In the following scatter chart, the description generated by default can include all the items, however, hearing info of hundreds of items has no helps to understand the information the chart represented.\n\nUnder this circumstance, user can define the overall description by [aria.description](${optionPath}aria.description) configuration item.\n\n### Customize Template Description\n\nExcept for the overall description modify, we also provide the template of generating the description. You can easily modify the description in fine-grain level.\n\nThe basic process to generate a description: If [aria.show](${optionPath}aria.show) is `true`, then generate the ARIA description (otherwise, no.). If [aria.description](${optionPath}aria.description) was defined, use it as the overall description (otherwise, use the default to generate the description.). We provide the basic algorithm, it needs to be changed only if the description generated is not suitable. You can even use `aria.description` to cover the default if needed.\n\nWhile using the template to generate, firstly make sure whether the title [title.text](${optionPath}title.text) exist to decide to use [aria.general.withTitle](${optionPath}aria.general.withTitle) or [aria.general.withoutTitle](${optionPath}aria.general.withoutTitle) as the overall description. Configuration item `aria.general.withTitle` and `'{title}'` will be replaced by the chart title. In another word, if `aria.general.withTitle` was defined as `This is a chart about \"{title}\"`, and the title is `'Prize Distribution Chart'`, the description of this part will be `'This is a chart about \"Prize Distribution Chart\"'`.\n\nAfter generating the title, ECharts will splice the description of the series and data after the title part. Every part of the template can include template variables, to be replaced by the actual value in the chart.\n\nThe complete process of generating description, please check: [ARIA Document](${optionPath}aria.label).\n\n## Decal Patterns\n\nIn addition, Apache ECharts 5 adds support for decal patterns as a secondary representation of color to further differentiate data. With `aria.enabled` set to `true` and `aria.decal.show` set to `true`, the default decal style will be applied.\n\n<md-example src=\"doc-example/aria-decal-simple\"></md-example>\n\nIf you need to customize the decal pattern, you can use [aria.decal.decals](${optionPath}aria.decal.decals) to configure a flexible decal pattern.\n\nPlease refer to [ARIA option](${optionPath}aria.decal) for more detail.\n"}}]);