// nav
module.exports = [
    {text: '首页', link: '/'},
    {
        text: '技术',
        link: '/technology/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
        items: [
            // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
            {
                text: '文章',
                items: [
                    {text: 'JavaScript', link: '/pages/8143cc480faf9a11/'},
                    // { text: 'Vue', link: '/pages/5d463fbdb172d43b/' },
                ],
            },
            {
                text: '笔记',
                items: [
                    {
                        text: '《Git》',
                        link: '/note/git/',
                    },
                    {
                        text: '《算法&Leetcode》',
                        link: '/note/leetcode/',
                    },
                ],
            },
        ],
    },
    {
        text: '源码',
        link: '/code/',
        items: [
            {
                text: '文章',
                items: [
                    {text: 'Spring核心知识点', link: '/pages/8309a5b876fc95hf/'},
                ],
            },
            {
                text: '笔记',
                items: [
                    {
                        text: '《Spirng》',
                        link: '/note/spring/',
                    },
                ],
            },
            //{text: 'CSS', link: '/pages/0a83b083bdf257cb/'},
        ],
    },
    {
        text: '拓展',
        link: '/goods/',
        items: [
           
        ],
    },
    {
        text: '更多',
        link: '/more/',
        items: [
            {text: '技术文档', link: '/pages/9a7ee40fc232253e/'},
            //{text: 'GitHub技巧', link: '/pages/4c778760be26d8b3/'},
            //{text: '博客搭建', link: '/pages/41f87d890d0a02af/'},
            {text: '学习', link: '/pages/f2a556/'},
            //{text: '面试', link: '/pages/aea6571b7a8bae86/'},
            {text: '心情杂货', link: '/pages/2d615df9a36a98ed/'},
            {text: '实用技巧', link: '/pages/baaa02/'},
            //{text: '友情链接', link: '/friends/'},
        ],
    },
    {text: '关于', link: '/about/'},
    {
        text: '收藏',
        link: '/pages/beb6c0bd8a66cea6/',
        // items: [
        //   { text: '网站', link: '/pages/beb6c0bd8a66cea6/' },
        //   { text: '资源', link: '/pages/eee83a9211a70f9d/' },
        //   { text: 'Vue资源', link: '/pages/12df8ace52d493f6/' },
        // ],
    },
    {
        text: '索引',
        link: '/archives/',
        items: [
            {text: '分类', link: '/categories/'},
            {text: '标签', link: '/tags/'},
            {text: '归档', link: '/archives/'},
        ],
    },
]
