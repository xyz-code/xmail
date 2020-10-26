module.exports = {
    //导出配置
    configureWebpack:{
        resolve:{
            //后缀不用写，默认已经配置了
            extensions:[],
            alias:{
                'assets':'@/assets',
                'common':'@/common',
                'components':'@/components',
                'network':'@/network'
            }
        }
    }
}