import Admin from "./page/Admin"
import Auth from "./page/Auth"
import Basket from "./page/Basket"
import ProductPage from "./page/ProductPage"
import Shop from "./page/Shop"
import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, PRODUCT_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        element: <Admin />
    },
    {
        path: BASKET_ROUTE,
        element: <Basket />
    }
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        element: <Shop />
    },
    {
        path: LOGIN_ROUTE,
        element: <Auth />
    },
    {
        path: REGISTRATION_ROUTE,
        element: <Auth />
    },
    {
        path: PRODUCT_ROUTE + '/id',
        element: <ProductPage />
    }
]