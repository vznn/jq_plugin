import Mock from 'mockjs';
const LoginUsers = [
  {
    id: 1,
    username: 'admin',
    password: '123456',
    avatar: 'https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png',
    name: '张某某'
  }
];

const Users = [];

for (let i = 0; i < 86; i++) {
  let _date = new Date();
  let _birth=Mock.Random.date();
  let _age=parseInt(_date.getFullYear())-parseInt(_birth.toString().substring(0,4));

  Users.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    addr: Mock.mock('@county(true)'),
    // 'age|40-60': 1,
    age:_age,
    birth: _birth,
    // age:2018-birth,
    sex: Mock.Random.integer(0, 1)
  }));
}

export { LoginUsers, Users };
