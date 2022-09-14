# 吴乐川的〔采信机〕

<link rel="stylesheet" href="./node_modules/@wulechuan/css-stylus-markdown-themes/源代码/发布的源代码/文章排版与配色方案集/层叠样式表/wulechuan-styles-for-html-via-markdown--vscode.default.min.css">



> 中国人——特别是汉族人，理应坚持广泛、规范地使用汉语。凡非必要之情形不说外国话、不用外国字。此乃天经地义！然则每当必要，亦不排斥采用外国之语言。不妨 **博世界之学问，养中国之精神** 。
>
> 本人亦支持少数民族坚持采用自己民族的传统语言。仍须强调，凡中国人，皆应会用汉语、积极使用汉语，此乃中华各民族之大一统之必由。





## NPM 页

<dl>
<dt>NPM 包名</dt>
<dd>

[@wulechuan/controller-of-form](https://www.npmjs.com/package/@wulechuan/controller-of-form)

</dd>
<dt>作者</dt>
<dd><p>南昌吴乐川</p></dd>
</dl>





## 源代码仓库

| <span style="display:inline-block;width:180px;">提供仓库服务之组织</span> | <span style="display:inline-block;width:150px;">仓库组织之国别</span> | 仓库地址 |
| ------------- | :----------: | ------- |
| 码云           | 中华人民共和国 | [https://gitee.com/nanchang-wulechuan/wulechuan-typescript--controller-of-form.git](https://gitee.com/nanchang-wulechuan/wulechuan-typescript--controller-of-form.git) |
| 阿里云之代码仓库 | 中华人民共和国 | [https://code.aliyun.com/wulechuan/wulechuan-typescript--controller-of-form.git](https://code.aliyun.com/wulechuan/wulechuan-typescript--controller-of-form.git) |
| GitHub         | 美           | [https://github.com/wulechuan/wulechuan-typescript--controller-of-form.git](https://github.com/wulechuan/wulechuan-typescript--controller-of-form.git) |



## 综述

### 言简意赅版

此乃吴乐川的《采信机》。本工具对外提供唯一的主接口函数，名为 `作一采信机` ，用以构建一个【采信机】，以管理一个【采信单】。


### 冗长版

在开发各类应用时，开发者几乎总会遇到这样一类问题——管理各色【采信单】（外国话所谓 form）。本工具用以构造一个所谓控制器（外国话所谓 controller），鄙人称之为【采信机】。该【采信机】可管理和控制一个【采信单】。

〔待详〕。


----


## 术语


### 术语概述

本文有少数概念较为关键。为减少乃至消除歧义，先为各概念约定术语。部分术语为本人之拙见，未必见于其他文章或材料。


### 术语表



1. #### 术语【接口全貌】

    迄今在传统的编程劳动中，中国的开发者多半习惯采用外国语 `signature` 一词来表达“某函数的接口格式“这一含义。本工具及其配套文档则坚持称其为【接口全貌】。

1. #### 术语【期待】

    本工具及其配套文档将所谓 `Promise` 译为【`期待`】，而非〖承诺〗。

    又，【期待】可【`落实`】（外国话是 `resolved`）。

    又，【期待】可【`落空`】（外国话是 `rejected`）。

    又，【期待】之【`落实`】或【`落空`】统称为【`落定`】（外国话是 `settled`）。

    例：

    ```typescript
    const 期待_某事落定: Promise<void> = new Promise(
        function (落实之, 落空之) {
            setTimeout(落实之, 1234)
        }
    )
    ```


1. #### 术语【Vuejs 部件】

    本文所谓【Vuejs 部件】中的【部件】，对应一般文档中的〖组件〗一词，外国语是 component 。本工具及其配套文档坚持称【Vuejs 部件】，有时简称【部件】。



1. #### 术语【`唯一标识`】

    迄今在传统的编程劳动中，中国的开发者多半习惯采用外国语 `id` 、 `uuid` 或 `key` 等单词（或短语）来表达“**某数据实体之唯一标识**”这一含义。本工具及其配套文档则坚持采用【`唯一标识`】这一汉语短语来代替它们。

    该汉语短语既用于相关描述本文，也用于编程代码中各属性、变量之命名。



1. #### 术语【`呈示称谓`】

    迄今在传统的编程劳动中，中国的开发者多半习惯采用外国语 `label` 、 `name` 、 `displayName` 或 `caption` 等单词或短语来表达“**用以呈示在界面上的文本**”这一含义。本工具及其配套文档则坚持采用【`呈示称谓`】一词来代替它们。

    该汉语短语既用于相关描述本文，也用于编程代码中各属性、变量之命名。



1. #### 术语【范】

    所谓【范】，对应 TypeScript 或 JSDocs 概念中的 type 。一般译为〖类型〗。但本工具及其配套文档坚持称【范】。例如：

    - TypeScript

        ```typescript
        ```

    - JSDocs

        ```javascript
        ```


1. #### 术语【范】之【形参准用式】与【完备式】

    当某工厂函数（称【甲】）构造某对象（称【乙】）时，【甲】往往接受至少一个实参，称【丙】。即，【甲】依据【丙】构造出【乙】。

    多数情形下，【乙】、【丙】看似结构高度相似乃至完全相同，但往往【乙】要求其大部分字段始终存在，而【丙】允许若干字段（乃至所有字段）缺省。故在借助 TypeScript 语言定义【乙】、【丙】二者之【范】时是有区别的。

    实践中，常见的案例类似如下情形：

    ```typescript
    type 范_乙 = {
        子: number;
        丑: string;
        寅: boolean;
        卯: () => void;
    };

    type 范_丙 = Partial<范_乙>;
    ```

    总之，用于函数参数的【范】与用于最终构建结果的【范】不完全等同。甚至可能迥异。但从功能、用途等层面主观理解，二者又颇有联系（或则说渊源），开发者为二者命名时也可能倾向于采用近同之字眼。由是，鄙人主张，二者之【范】之命名主体采用完全相同的字眼或短语，仅补以后缀作为区别。其中：

    -   凡用于某函数参数者，称为【形参准用式】，其【范】之名称后缀为 `_形参准用式`。
    -   凡用于产出的所谓“实用”数据者，称为【完备式】，其【范】之名称后缀为 `_完备式`。

    据此命名规则，上例可改写如下：

    ```typescript
    type 范_某物_完备式 = {
        子: number;
        丑: string;
        寅: boolean;
        卯: () => void;
    };

    type 范_某物_形参准用式 = Partial<范_某物_完备式>;
    ```


1. #### 术语【形制要求】、【形制要求集】与【形制项集】

    迄今在传统的编程劳动中，中国的开发者多半习惯采用外国语 `option` 或其复数 `options` 、或者 `config` 、 `configuration` 、 `settings` 等词来表达“可配置项”、“选项”之类的含义。本工具及其配套文档则采用【形制要求】一词表述它们。并且，在为相关常量、变量命名时，采用【`形制要求集`】或其变形（如【`形制要求总集`】、【`形制要求杂集`】、【`形制杂集`】和【`形制杂项集`】）等汉语短语来代替它们。

    一般的，在某函数的**参数**中，如果某【形制要求】之结构较为简单，为其命名时鄙人倾向于采用【`形制要求集`】一词。如果某【形制要求】之结构较复杂，类似 eslint 、 vue.config 等，鄙人则会采用【`形制要求总集`】一词。

    又，在**所谓“实用”对象**中的【形制要求】，为其命名时鄙人倾向于采用【`形制杂集`】和【`形制杂项集`】等词。



<!-- 1. #### 术语【`还应持有`】与【`所持`】

    迄今在传统的编程劳动中，中国的开发者多半习惯采用外国语 `data` 一词表达“数据”之含义。偶见采用其单数形式 `datum` 。本工具及其配套文档则采用【`还应持有`】和【`所持`】两个词代替它们。该二词既用于相关描述本文，也用于编程代码中各属性、变量之命名。

    一般的，在某函数**参数**中的数据配置，为其命名时鄙人倾向于采用【`还应持有`】一词。

    又，在**所谓“实用”对象**中的数据配置，为其命名时鄙人倾向于采用【`所持`】一词。

    例：

    ```javascript
    ``` -->


1. #### 术语【`诸事之应对`】与【`应对`】

    迄今在传统的编程劳动中，中国的开发者多半习惯采用外国语 `event handler` 这一短语来表达“事件处理程序”、“事件处理函数”之类的含义。本工具及其配套文档则采用【`诸事之应对`】和【`应对`】两个汉语词（或汉语短语）来代替它们。

    此二者既用于相关描述本文，也用于编程代码中各属性、变量之命名。

    一般的，在某函数**参数**中的事件处理函数集，为其命名时鄙人倾向于采用【`诸事之应对`】一词。

    又，在**所谓“实用”对象**中的事件处理函数集，为其命名时鄙人倾向于采用【`应对`】一词。

    > 注：采用【`应对`】一词，一来是因为其短于【`事件处理程序`】一词，二来是因为“应对”是动词，其后带出具体的程序名称，更贴近汉语习惯。例如：`某采信机.应对.某任务出错后()`。






## 用法（针对最终用户而非开发者）

无。

> 本工具仅为诸应用提供“幕后”之技术或功能，并不直接面对任何应用的最终用户。


## 用法（针对开发者）

### 安装

```sh
npm  i  @wulechuan/controller-of-form
```


### 编程用法概述


#### 各【部件】、【零件】关系之扼要

> 注：此处【部件】**并非**指代【Vuejs 部件】，而是指代本工具提供的或构造出的各个功能块。它们多为函数或对象。

-   本工具对外提供的唯一接口乃是一工厂函数，名曰 `作一采信机`。每调用一次，创建一个【采信机】。




#### 制作【采信机】

见本文之下列内容：

-   《应用编程接口》中的《[【采信机】之工厂函数](#采信机之工厂函数)》。

-   《应用编程接口》中的《[【采信机】之范](#采信机之范)》。

> 另见下文《[应用示范集](#应用示范集)》。




#### 各【部件】之功能及用法


##### 【采信机】之功能及用法

于某给定的【采信机】，开发者可有以下动作。

1.  ###### 功能甲

1.  ###### 功能乙

1.  ###### 功能丙



#### 诸关键编程数据之【范】


1. ##### 【采信机】之范


    该【范】之完整定义较冗长，不便阅读、理解。故不妨先给出其常量形式。常量形式相对于完整定义显得较为简略，可以辅助观察和理解。常量形式如下。

    又，下方常量形式中各字段之取值**并非其默认值**，而是随意值。

    ```javascript
    const 采信机 = {
        // 待详。
    }
    ```


    【采信机】之【范】之完整定义如下。

    ```typescript
    export type 范_采信机_其This之默认式 = any;

    export type 范_采信机<
        范_该总机_其This = 范_采信机_其This之默认式,
    > = {
        // 待详。
    };
    ```


<!-- #### 针对 Vuejs 的专门处理 -->


### 应用编程接口（外国话所谓 API）

不妨先阅读本文的《[关键数据之【范】](#关键数据之范)》章节。


1. #### 【采信机】之工厂函数

    该函数名为 `作一采信机` ，共有两种重载。其【接口全貌】如下：

    ```typescript
    declare module '@wulechuan/controller-of-form' {
        // 须知，函数 `作一采信机` 共有两种重载。

        // 重载形式之一：要求给出两个实参。其中第一个实参系用作内部诸方法函数的 this 对象。
        export declare function 作一采信机 <
        >(
            该总机_其This: any,

            该采信机之形制要求总集:
                范_采信机_形制要求总集_形参准用式<
                    范_该总机_其This
                >
        ): 范_采信机<
            范_该总机_其This
        >;



        // 重载形式之二：要求仅给出一个实参。
        export declare function 作一采信机 <
        >(
            该采信机之形制要求总集?:
                范_采信机_形制要求总集_形参准用式<
                    范_该总机_其This
                >
        ): 范_采信机<
            范_该总机_其This
        >;

    } // declare module 语句块结束于此。
    ```

    为便于阅读、理解和记忆，上述【接口全貌】可简写作下方形式：

    ```typescript
    declare module '@wulechuan/controller-of-form' {
        // 须知，函数 `作一采信机` 共有两种重载。

        // 重载形式之一：要求给出两个实参。其中第一个实参系用作内部诸方法函数的 this 对象。
        export declare function 作一采信机 <...>(
            该总机_其This: any,
            该采信机之形制要求总集: 某较复杂之范
        ): 范_采信机<...>

        // 重载形式之二：要求仅给出一个实参。
        export declare function 作一采信机 <...>(
            该采信机之形制要求总集?: 某较复杂之范
        ): 范_采信机<...>
    }
    ```




1. #### 诸常量

    ```typescript
    ```





### 应用示范集

1.  #### 示范1

    为某 Vuejs 部件构建一个【采信机】。

    1.  Vuejs 的【类 HTML】之界面模板

        ```html
        ```

    1.  逻辑控制

        -   采用 TypeScript 语言之写法。

            ```typescript
            ```

        -   采用 JavaScript 语言之写法。

            ```javascript
            ```

1.  #### 完整可运行的示范应用

    见本工具源代码仓库中随附的示范应用 2 则：

    1.  `〔仓库根文件夹〕/文档集/示范应用集/示范应用-1/采用-javascript-编写`
    1.  `〔仓库根文件夹〕/文档集/示范应用集/示范应用-1/采用-typescript-编写`


-----


## 未来计划

尚无。


-----

## 许可证类型

WTFPL

> ### 注意：
>
> 我未研究过许可证的约束。因此姑且声明为 WTFPL 类型。但实际上该许可证类型可能与我采用的开源模块有冲突。


