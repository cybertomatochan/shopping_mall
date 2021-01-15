import Vue from 'vue';
import Router from 'vue-router';




import Shopping from '@/components/pages/shopping';

import Home from '@/components/pages/home';
import Products from '@/components/pages/Products';
import About from '@/components/pages/aboutUS';

import AllProducts from '@/components/pages/productsPage/allProducts';
import HotProducts from '@/components/pages/productsPage/hotProducts';
import DiscountProducts from '@/components/pages/productsPage/discountProducts';
import ProductPage from '@/components/pages/productsPage/productpage';
import WrongPage from '@/components/pages/productsPage/wrongPage';
import Payment from '@/components/pages/productsPage/payment';

Vue.use(Router)

export default new Router({
  routes: [
    { 
      path: '',
      component:Shopping,
      children:[
        {
          //首頁
          path: '/',  
          name: 'Home',
          component: Home,
        },
        {
          //關於
          path: '/about',  
          name: 'About',
          component: About,
        },
        {
          //商品頁面
          path:'',
          component:Products,
          children:[
            {
              path:'/all',
              name: 'Products',
              component: AllProducts,
            },
            {
              name: 'HotProducts',
              path: '/hot',
              component: HotProducts,
            },
            {
              name: 'DiscountProducts',
              path: '/discount',
              component: DiscountProducts,
            },
            {
              name: 'payment',
              path: '/payment',
              component: Payment,
            },
            {
              name: 'WrongPage',
              path: '/wrongPage',
              component: WrongPage,
            },
            {
              name: 'productPage',
              path: '/:id',
              component: ProductPage,
            },
            
              ]
        },
        

      ],
    },
    
  ]
})
