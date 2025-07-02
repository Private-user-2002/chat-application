import Login    from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
const authRoutes = [
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },   
];

export default authRoutes;