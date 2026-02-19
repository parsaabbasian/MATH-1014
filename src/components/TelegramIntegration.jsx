import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import WebApp from '@twa-dev/sdk';

const TelegramIntegration = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        // Initialize the Web App
        // Check if WebApp is defined and we are likely in Telegram
        if (WebApp && WebApp.initDataUnsafe) {
            try {
                WebApp.ready();
                WebApp.expand();
            } catch (e) {
                console.error("Telegram WebApp init error", e);
            }
        }

        // Handle back button
        const handleBack = () => {
            navigate(-1);
        };

        if (WebApp && WebApp.BackButton) {
            WebApp.BackButton.onClick(handleBack);
        }

        return () => {
            if (WebApp && WebApp.BackButton) {
                WebApp.BackButton.offClick(handleBack);
            }
        };
    }, [navigate]);

    useEffect(() => {
        // Show/Hide back button based on route
        if (WebApp && WebApp.BackButton) {
            if (location.pathname !== '/') {
                WebApp.BackButton.show();
            } else {
                WebApp.BackButton.hide();
            }
        }
    }, [location]);

    return null;
};

export default TelegramIntegration;
