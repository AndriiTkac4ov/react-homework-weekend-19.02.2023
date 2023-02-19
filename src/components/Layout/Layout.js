import { Outlet, useParams } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';

export const Layout = () => {
    const { id } = useParams();

    return (
        <>
            <header>
                {!id && <Navigation />}
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}