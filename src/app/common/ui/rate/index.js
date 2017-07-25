import avalon from 'avalon2';
import template from './rate.html';
import './rate.scss';

const rate = avalon.component('xk-rate', {
  template: template,
  defaults: {
    onInit: function () {
      let vm = this;
      vm.list = new Array(this.max);
      vm.set();
      vm.size = vm.options.size || vm.size;
      vm.margin = vm.options.margin || vm.margin;
      vm.max = vm.options.max || vm.max;
      vm.notSelectedColor = vm.options.notSelectedColor || vm.notSelectedColor;
      vm.selectedColor = vm.options.selectedColor || vm.selectedColor;
      vm.content = vm.options.content || vm.content;
    },
    options: {},
    value: 0,
    content: 'star-o',
    floatValue: 0,
    defaultValue: 3, // 设置星标默认值
    margin: 3, // 设置星标间距
    max: 5, // 设置星标最大值
    notSelectedColor: '#CECECE',
    selectedColor: '#00A3C2',
    size: 20,
    list: [],
    getColor: function (index) {
      return (this.floatValue > index)
        ? this.selectedColor
        : this.notSelectedColor;
    },
    mouseOut: function() {
      this.floatValue = this.value;
    },
    mouseOver: function(index) {
      this.floatValue = index + 1;
    },
    select: function(index) {
      this.value = index + 1;
      this.onSelect(this.value)
    },
    onSelect: function(value) {

    },
    set: function() {
      this.value = this.defaultValue;
      this.floatValue = this.defaultValue;
    }
  }
});

export default rate;
