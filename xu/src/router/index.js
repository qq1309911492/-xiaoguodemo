import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import index from '../components/one/index'
import denglu from '../components/one/denglu'
import zhuce from '../components/one/zhuce'
import spfl from '../components/one/spfl'
import shouye from '../components/two/shouye'
import gwc from '../components/two/gwc'
import wd from '../components/two/wd'
import qddd from '../components/two/qddd'
import spxq from '../components/one/spxq'
import spss from '../components/two/spss'
export default new Router({
  routes: [
    {
      path: '/index',
      component: index,
      children: [
        {
          path: '/wd',
          component: wd
        }, {
          path: '/shouye',
          component: shouye,
        }, {
          path: '/gwc',
          component: gwc,
         
        },
        {
          path: '/qrdd',
          component: qddd
        },
        {
          path: '/spfl',
          component: spfl
        },
        {
          path: '/spss',
          component: spss
        }
        ,{
          path:'',
          redirect:'/shouye'

        }

      ]
    },
    {
      path: '/denglu',
      component: denglu
    },
    {
      path: '/zhuce',
      component: zhuce
    },{
      path: '/spxq',
      component: spxq
    },{
      path:'*',
      redirect:'/shouye'

    }
    
  ]
})
