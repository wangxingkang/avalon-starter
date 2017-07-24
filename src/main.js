import avalon from 'avalon2';
import mmRouter from 'mmRouter';
import common from './app/common';
import page1 from './page1.html';
import page2 from './page2.html';

import 'normalize.css';
import 'font-awesome/css/font-awesome.css';
import './styles/index.scss';


const vm = avalon.define({
  $id: 'root',
  value: '1',
  root: '',
  options: {
    size: 40,
    content: 'star'
  },
  onSelect:  function(value) {
    console.log(value);
    vm.value = value
  }
});

avalon.router.add('/aaa', function() {
  vm.root = page1;
});

avalon.router.add('/bbb', function() {
  vm.root = page2;
});

avalon.history.start({
  root: '/mmRouter',
  hashPrefix: ''
});

const hash = location.hash.replace(/#!?/, '');
avalon.router.navigate(hash || '/aaa', 1);

avalon.scan(document.body);


