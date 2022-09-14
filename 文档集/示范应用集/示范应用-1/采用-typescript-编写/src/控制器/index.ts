import type {
    范_字典条目内容映射表_从呈示称谓至值,
    范_字典条目内容映射表_从值至呈示称谓,
} from '@wulechuan/controller-of-form'

import type {
    范_本应用中一切字典机_凭字典条目原式之集构建诸字典条目内容映射表之行为,
    范_本应用中一切字典机_凭某条目之原式构建其视式之行为,
} from '../数据服务接口/types'



export const 本应用任何字典群之总机_内任何所谓标准字典_凭字典条目原式之集构建诸字典条目内容映射表_默认做法: 范_本应用中一切字典机_凭字典条目原式之集构建诸字典条目内容映射表之行为 = function (
    某字典之一切条目之原式_其列表
) {
    const 从呈示称谓至值: 范_字典条目内容映射表_从呈示称谓至值 = {}
    const 从值至呈示称谓: 范_字典条目内容映射表_从值至呈示称谓 = {}

    某字典之一切条目之原式_其列表.forEach(该字典某条目之原式 => {
        const { id, label } = 该字典某条目之原式
        从值至呈示称谓[id] = label
        从呈示称谓至值[label] = id
    })

    return Promise.resolve({ 从呈示称谓至值, 从值至呈示称谓 })
}



export const 本应用任何字典群之总机_内任何所谓标准字典_凭某条目之原式构建其视式_默认做法: 范_本应用中一切字典机_凭某条目之原式构建其视式之行为 = function (
    某字典某条目之原式
) {
    const { id, label } = 某字典某条目之原式
    const 该字典该条目之视式 = { 唯一标识: id, 呈示称谓: label, 值: id }
    return 该字典该条目之视式
}
