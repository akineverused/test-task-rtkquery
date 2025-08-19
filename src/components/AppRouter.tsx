import React, {FC} from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { routes } from '../routes/routes';

const AppRouter: FC = () => {
    return (
        <Routes>
            {routes.map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={<route.element/>}
                />
            ))}
            <Route path="*" element={<Navigate to="/main" />} />
        </Routes>
    );
};

export default AppRouter;
