import Vue from 'vue'
import VueRouter from 'vue-router'

import Auth from '../pages/Auth'
import StudentPage from '../pages/StudentPage'
import TeacherPage from '../pages/TeacherPage'

Vue.use(VueRouter);

export default new VueRouter ({
  routes: [
    {
      path: '/',
      component: Auth
    },

    {
      path: '/teacher',
      component: TeacherPage,
    },

    {
      path: '/student',
      component: StudentPage,
    },
  ],

  mode: 'history'
});


