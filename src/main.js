import avalon from 'avalon2';
import mmRouter from 'mmRouter';
import common from './app/common';

import 'normalize.css';
import './styles/index.scss';

const vm = avalon.define({
  $id: 'test',
  currPath: '',
  name: "司徒正美"
});

avalon.router.add("/aaa", function (a) {
  vm.currPath = this.path
});

avalon.router.add("/bbb", function (a) {
  vm.currPath = this.path
});

avalon.router.add("/ccc", function (a) {
  vm.currPath = this.path
});

avalon.router.add("/ddd/:ddd/:eee", function (a) {//:ddd为参数
  vm.currPath = this.path
});

avalon.history.start({
  root: "/mmRouter"
});

avalon.scan(document.body);


