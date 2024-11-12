const base = {
    get() {
                return {
            url : "http://43.138.85.8:8080/ssm/",
            name: "ssm",
            // 退出到首页链接
            indexUrl: 'http://43.138.85.8:8080/ssm/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "在线网络教学系统"
        } 
    }
}
export default base
