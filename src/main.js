import 'es6-promise/dist/es6-promise.auto';
import avalon from 'avalon2';
import 'mmRouter';
import './app/common';
import 'normalize.css';
import './styles/index.scss';


const vm = avalon.define({
  $id: 'root',
  value: '1',
  root: '',
  options: {
    content: 'star'
  },
  onSelect:  function(value) {
    console.log(value);
    vm.value = value
  }
});


