export const formlistColumn = [
  {
    'resourcecolumnName': '项目名称',//label
    'resourcecolumnNameEn': 'taskName',//model-key
    'resourcecolumnCode': 'taskName',//model-key
    'resourcecolumnXtype': 'text',//筛选列 类型
    'resourcecolumnWidth': '150',//列的宽度
    'resourcecolumnOrder': '4',//列的序号
    'resourcecolumnHidden': '0', //是否隐藏
    'resourcecolumnAlign': 'left',//对齐
    'eidtConfig': {
      'switchType': true,
      'type': 'link',
      'decimal': 2,
      'disabled': false,
      'maxlength': null,
      'max': 0,
      'min': 0,
      'placeHolder': '',
      'require': true,
      'validateRule': null,
      'errorMsg': '',
    },
  },
  {
    'resourcecolumnName': '是否审核',//label
    'resourcecolumnNameEn': 'isChecked',//model-key
    'resourcecolumnCode': 'isChecked',//model-key
    'resourcecolumnXtype': 'text',//筛选列 类型
    'resourcecolumnWidth': '120',//列的宽度
    'resourcecolumnOrder': '4',//列的序号
    'resourcecolumnHidden': '0', //是否隐藏
    'resourcecolumnAlign': 'left',//对齐
    'eidtConfig': {
      'switchType': true,
      'type': 'select',
      'decimal': 2,
      'disabled': false,
      'maxlength': null,
      'max': 0,
      'min': 0,
      'placeHolder': '请选择',
      'require': true,
      'validateRule': null,
      'errorMsg': '请选择是否审核',
    },
  },
  {
    'resourcecolumnName': '成立日期',//label
    'resourcecolumnNameEn': 'createDate',//model-key
    'resourcecolumnCode': 'createDate',
    'resourcecolumnXtype': 'text',//筛选列 类型
    'resourcecolumnWidth': '150',//列的宽度
    'resourcecolumnOrder': '7',//列的序号
    'resourcecolumnHidden': '0', //是否隐藏
    'resourcecolumnAlign': 'left',//对齐
    'eidtConfig': {
      'switchType': true,
      'type': 'date',
      'decimal': 2,
      'disabled': false,
      'maxlength': null,
      'max': 0,
      'min': 0,
      'placeHolder': null,
      'require': true,
      'validateRule': null,
      'errorMsg': '请选择成立日期',
    },
  },
  {
    'resourcecolumnName': '等级调整',//label
    'resourcecolumnNameEn': 'level',//model-key
    'resourcecolumnCode': 'level',
    'resourcecolumnXtype': 'text',//筛选列 类型
    'resourcecolumnWidth': '150',//列的宽度
    'resourcecolumnOrder': '10',//列的序号
    'resourcecolumnHidden': '0', //是否隐藏
    'resourcecolumnAlign': 'left',//对齐
    'eidtConfig': {
      'switchType': true,
      'type': 'rate',
      'decimal': 2,
      'disabled': false,
      'maxlength': null,
      'max': 100,
      'min': 0,
      'placeHolder': null,
      'require': true,
      'validateRule': null,
    },
  },
  {
    'resourcecolumnName': '涉猎领域（多选）',//label
    'resourcecolumnNameEn': 'field',//model-key
    'resourcecolumnCode': 'field',
    'resourcecolumnXtype': 'text',//筛选列 类型
    'resourcecolumnWidth': '500',//列的宽度
    'resourcecolumnOrder': '5',//列的序号
    'resourcecolumnHidden': '0', //是否隐藏
    'resourcecolumnAlign': 'left',//对齐
    'eidtConfig': {
      'switchType': true,
      'type': 'checkbox',
      'decimal': 2,
      'disabled': false,
      'maxlength': null,
      'max': 5,
      'min': 0,
      'placeHolder': null,
      'require': true,
      'validateRule': null,
      'errorMsg': '请选择涉猎领域',
    },
  },
  {
    'resourcecolumnName': '是否锁定（单选）',//label
    'resourcecolumnNameEn': 'isLocked',//model-key
    'resourcecolumnCode': 'isLocked',
    'resourcecolumnXtype': 'text',//筛选列 类型
    'resourcecolumnWidth': '150',//列的宽度
    'resourcecolumnOrder': '4',//列的序号
    'resourcecolumnHidden': '0', //是否隐藏
    'resourcecolumnAlign': 'left',//对齐
    'eidtConfig': {
      'switchType': true,
      'type': 'radio',
      'decimal': 2,
      'disabled': false,
      'maxlength': null,
      'max': null,
      'min': null,
      'placeHolder': null,
      'require': true,
      'validateRule': null,
      'errorMsg': '请选择是否锁定',
    },
  },
  {
    'resourcecolumnName': '使用人',//label
    'resourcecolumnNameEn': 'ownerName',//model-key
    'resourcecolumnCode': 'ownerName',//model-key
    'resourcecolumnXtype': 'text',//筛选列 类型
    'resourcecolumnWidth': '100',//列的宽度
    'resourcecolumnOrder': '5',//列的序号
    'resourcecolumnHidden': '0', //是否隐藏
    'resourcecolumnAlign': 'center',//对齐
  },
  {
    'resourcecolumnName': '备注（邮箱)',//label
    'resourcecolumnNameEn': 'remark',//model-key
    'resourcecolumnCode': 'remark',
    'resourcecolumnXtype': 'text',//筛选列 类型
    'resourcecolumnWidth': '300',//列的宽度
    'resourcecolumnOrder': '8',//列的序号
    'resourcecolumnHidden': '0', //是否隐藏
    'resourcecolumnAlign': 'left',//对齐
    'eidtConfig': {
      'switchType': true,
      'type': 'input',
      'decimal': 2,
      'disabled': false,
      'maxlength': null,
      'max': 0,
      'min': 0,
      'placeHolder': '请输入备注',
      'require': true,
      'validateRule': 'email',
      'errorMsg': '',
    },
  },
];

export const normalListColumn = [
  {
    'resourcecolumnName': '项目名称',//label
    'resourcecolumnNameEn': 'taskName',//model-key
    'resourcecolumnCode': 'taskName',//model-key
    'resourcecolumnXtype': 'text',//筛选列 类型
    'resourcecolumnWidth': '150',//列的宽度
    'resourcecolumnOrder': '4',//列的序号
    'resourcecolumnHidden': '0', //是否隐藏
    'resourcecolumnAlign': 'left',//对齐
    'eidtConfig': {
      'switchType': true,
      'type': 'link',
      'decimal': 2,
      'disabled': false,
      'maxlength': null,
      'max': 0,
      'min': 0,
      'placeHolder': '',
      'require': true,
      'validateRule': null,
      'errorMsg': '',
    },
  },
  {
    'resourcecolumnName': '成立日期',//label
    'resourcecolumnNameEn': 'createDate',//model-key
    'resourcecolumnCode': 'createDate',
    'resourcecolumnXtype': 'text',//筛选列 类型
    'resourcecolumnWidth': '150',//列的宽度
    'resourcecolumnOrder': '7',//列的序号
    'resourcecolumnHidden': '0', //是否隐藏
    'resourcecolumnAlign': 'left',//对齐
    'eidtConfig': {
      'switchType': true,
      'type': 'date',
      'decimal': 2,
      'disabled': false,
      'maxlength': null,
      'max': 0,
      'min': 0,
      'placeHolder': null,
      'require': true,
      'validateRule': null,
      'errorMsg': '请选择成立日期',
    },
  },
  {
    'resourcecolumnName': '使用人',//label
    'resourcecolumnNameEn': 'ownerName',//model-key
    'resourcecolumnCode': 'ownerName',//model-key
    'resourcecolumnXtype': 'text',//筛选列 类型
    'resourcecolumnWidth': '100',//列的宽度
    'resourcecolumnOrder': '5',//列的序号
    'resourcecolumnHidden': '0', //是否隐藏
    'resourcecolumnAlign': 'center',//对齐
  },
  {
    'resourcecolumnName': '等级调整',//label
    'resourcecolumnNameEn': 'level',//model-key
    'resourcecolumnCode': 'level',
    'resourcecolumnXtype': 'text',//筛选列 类型
    'resourcecolumnWidth': '150',//列的宽度
    'resourcecolumnOrder': '10',//列的序号
    'resourcecolumnHidden': '0', //是否隐藏
    'resourcecolumnAlign': 'left',//对齐
    'eidtConfig': {
      'switchType': true,
      'type': 'rate',
      'decimal': 2,
      'disabled': false,
      'maxlength': null,
      'max': 100,
      'min': 0,
      'placeHolder': null,
      'require': true,
      'validateRule': null,
    },
  },
  {
    'resourcecolumnName': 'ID编号',//label
    'resourcecolumnNameEn': 'id',//model-key
    'resourcecolumnCode': 'id',//model-key
    'resourcecolumnXtype': 'text',//筛选列 类型
    'resourcecolumnWidth': '100',//列的宽度
    'resourcecolumnOrder': '5',//列的序号
    'resourcecolumnHidden': '0', //是否隐藏
    'resourcecolumnAlign': 'center',//对齐
  },
  {
    'resourcecolumnName': '地址',//label
    'resourcecolumnNameEn': 'address',//model-key
    'resourcecolumnCode': 'address',//model-key
    'resourcecolumnXtype': 'text',//筛选列 类型
    'resourcecolumnWidth': '100',//列的宽度
    'resourcecolumnOrder': '5',//列的序号
    'resourcecolumnHidden': '0', //是否隐藏
    'resourcecolumnAlign': 'center',//对齐
  },
  {
    'resourcecolumnName': '邮政编码',//label
    'resourcecolumnNameEn': 'zip',//model-key
    'resourcecolumnCode': 'zip',//model-key
    'resourcecolumnXtype': 'text',//筛选列 类型
    'resourcecolumnWidth': '100',//列的宽度
    'resourcecolumnOrder': '5',//列的序号
    'resourcecolumnHidden': '0', //是否隐藏
    'resourcecolumnAlign': 'center',//对齐
  },
  {
    'resourcecolumnName': 'ip地址',//label
    'resourcecolumnNameEn': 'ip',//model-key
    'resourcecolumnCode': 'ip',//model-key
    'resourcecolumnXtype': 'text',//筛选列 类型
    'resourcecolumnWidth': '100',//列的宽度
    'resourcecolumnOrder': '5',//列的序号
    'resourcecolumnHidden': '0', //是否隐藏
    'resourcecolumnAlign': 'center',//对齐
  },
  {
    'resourcecolumnName': '邮箱地址',//label
    'resourcecolumnNameEn': 'email',//model-key
    'resourcecolumnCode': 'email',//model-key
    'resourcecolumnXtype': 'text',//筛选列 类型
    'resourcecolumnWidth': '100',//列的宽度
    'resourcecolumnOrder': '5',//列的序号
    'resourcecolumnHidden': '0', //是否隐藏
    'resourcecolumnAlign': 'center',//对齐
  },
  {
    'resourcecolumnName': '备注（邮箱)',//label
    'resourcecolumnNameEn': 'remark',//model-key
    'resourcecolumnCode': 'remark',
    'resourcecolumnXtype': 'text',//筛选列 类型
    'resourcecolumnWidth': '300',//列的宽度
    'resourcecolumnOrder': '8',//列的序号
    'resourcecolumnHidden': '0', //是否隐藏
    'resourcecolumnAlign': 'left',//对齐
    'eidtConfig': {
      'switchType': true,
      'type': 'input',
      'decimal': 2,
      'disabled': false,
      'maxlength': null,
      'max': 0,
      'min': 0,
      'placeHolder': '请输入备注',
      'require': true,
      'validateRule': 'email',
      'errorMsg': '',
    },
  },
];

