const Mock = require('mockjs');

const List = [];

for (let i = 0; i < 8; i++) {
  List.push(
    Mock.mock({
      id: '@increment',
      title: '@ctitle',
      content: '@cparagraph(3, 5)',
      avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
      updateTime: '@date("yyyy-MM-dd HH:mm:ss")',
      star: 123,
      like: 220,
      message: 450,
    })
  );
}

function getList(req, res) {
  res.json({
    data: List,
    status: 200,
    message: 'success',
  });
  res.status(200).end();
}

module.exports = {
  'GET /article/list': getList,
};
