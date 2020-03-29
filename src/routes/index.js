import {
    Head1,
    Head2,
    Login,
    NotFound,
    ProductList,
    Home,
    SignUp,
    PasswordForget
} from '../views'

export const mainRouter = [{
    pathname : '/login',
    component : Login
},{
    pathname : '/404',
    component : NotFound
},{
    pathname : '/productlist',
    component : ProductList
},{
    pathname : '/home',
    component : Home
},{
    pathname : '/signup',
    component : SignUp
},{
    pathname : '/forget_password',
    component : PasswordForget
}

]