import { createWebHistory, createRouter } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import ContactView from '@/views/ContactView.vue';
import MainCategories from '@/views/CategoriesView.vue';
import CategoryProductsView from '@/views/CategoryProductsView.vue';
import ProductDetailsView from '@/views/ProductDetailsView.vue';
import NotFound from '@/views/NotFound.vue';
import ProductsView from '@/views/ProductsView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/about',
    component: AboutView,
  },
  {
    path: '/categories',
    component: MainCategories,
  },
  {
    path: '/categories/:categoryName',
    name: 'CategoryProducts',
    component: CategoryProductsView,
    props: (route) => ({
      categoryName: route.params.categoryName,
      image: route.query.image,
    }),
  },
  {
    path: '/categories/:categoryName/:productName',
    name: 'ProductDetails',
    component: ProductDetailsView,

    props: true,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView,
  },
  { path: '/products', name: 'Products', component: ProductsView },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
];


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
