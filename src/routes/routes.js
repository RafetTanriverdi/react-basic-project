import Home from "../views/home";
import AddCategory from "../views/Categories/Add";
import CategoryList from "../views/Categories/List";
import CategoryDetail from "../views/Categories/Detail";
import CategoryUpdate from "../views/Categories/Update";


export const routes = [
    {
        path:'/',
        element:<Home />
    },
    {
        path:'/category/add',
        element:<AddCategory />
    },
    {
        path:'/categories',
        element:<CategoryList />
    },
    {
        path:'/category/update/:id',
        element:<CategoryUpdate />
    },
    {
        path:'/category/detail/:id',
        element:<CategoryDetail />
    }
]