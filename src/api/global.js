// let dev = {
//   url: "http://192.168.3.82",
//   port: "8000"
// }
// let dev2 = {
//   url: "http://192.168.3.245",
//   port: "8000"
// }
let server = {
  url: "http://api.gdusaful.cn",
  port: "81"
}

const api = {
  ...server,
  path: "/api/teamDashboard/show",
  file: "/avatar/",
  condition: {
    offset: -2,
    deptName: "广东利事丰机器人自动化科技有限公司",
    key: "DashboardShow",
    size: 2
  }
}

export default api
