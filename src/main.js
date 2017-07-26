import 'babel-polyfill';
import avalon from 'avalon2';
import 'mmRouter';
import './app/common';
import page1 from './page1.html';
import page2 from './page2.html';
import 'normalize.css';
import 'font-awesome/scss/font-awesome.scss';
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
// avalon.router.navigate(hash || '/aaa', 1);

avalon.scan(document.body);


