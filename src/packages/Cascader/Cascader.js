import create from '../../utils/create';
import { sizeValidator } from '../../utils/props/validator';

export default create({
  name: 'cascader',

  data() {
    return {
      childCascader: this.value
    };
  },

  props: {
    value: Array,
    options: Array,
    props: {
      type: Object,
      default: ()=> ({
        value: 'value',
        label: 'label',
        children: 'children'
      })
    },
    placeholder: { type: String, default: '请选择' },
    size: { type: String, validator: s => sizeValidator(s) }, //尺寸
    width: String,
    height: String,
    expandTrigger: { type: String, default: 'click' },
    disabled: { type: Boolean, default: false },
    clearable: { type: Boolean, default: false },
    showAllLevels: { type: Boolean, default: true },
    changeOnSelect: { type: Boolean, default: false },
    filterable: { type: Boolean, default: false }
  },

  computed: {},

  watch: {
    value(val){
      this.childCascader = val;
    }
  },

  render(h) {
    return(
      <el-cascader
        class={this.recls([this.formsize])}
        value={this.value}
        onInput={e => this.handleModel(e)}
        onChange = { this.change.bind(this)}
        options = { this.options }
        clearable = { this.clearable }
        placeholder = { this.placeholder }
        expandTrigger = { this.expandTrigger }
        disabled = { this.disabled }
        filterable = { this.filterable }
        showAllLevels = { this.showAllLevels }
        changeOnSelect = { this.changeOnSelect }
        style={{ width: this.width, height: this.height, lineHeight: this.height }}
      >

      </el-cascader>
    )
  },

  methods: {
    handleModel: function(e){
      this.childCascader = e;
      this.$emit('input', this.childCascader);
    },

    change: function(){
      this.$emit('change')
    },

  },

  created() {
  },

  mounted() {
  },
});