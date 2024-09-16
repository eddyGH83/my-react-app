import { createBrowserRouter } from 'react-router-dom';

import Default from "../screens/Default";
import Product from "../screens/Product";
import LoginForm from "../screens/Forms/LoginForm";
import Dictionary from "../screens/Dictionary/Dictionary";

import App from "../App";

// Usar la variable de entorno directamente
const basename = '/desarrollo-frontend-react';
//const basename = process.env.NODE_ENV === 'production' ? '/desarrollo-frontend-react' : '/';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'default',
                element: <Default />,
            },
            {
                path: 'products',
                element: <Product />,
            },
            {
                path: 'login',
                element: <LoginForm />,
            },
            {
                path: 'dictionary',
                element: <Dictionary />,
            },
        ]
    }
],
    {
        basename: basename
    }
);

export default routes; // Asegúrate de exportar routes como default