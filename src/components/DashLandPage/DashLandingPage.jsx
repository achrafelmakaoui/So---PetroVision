import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DashLandingPage.css';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

const DashLandingPage = () => {
    const [accessToken, setAccessToken] = useState('');

    useEffect(() => {
        const fetchAccessToken = async () => {
            try {
                const response = await axios.get('https://so-petrovisionapi.onrender.com/api/accessToken');
                const latestToken = response.data[0]?.AccessToken;
                setAccessToken(latestToken);
            } catch (error) {
                console.error('Error fetching access token:', error);
            }
        };

        fetchAccessToken();
    }, []);

    return (
        <div className='reportDiv'>
            {accessToken && (
                <PowerBIEmbed
                    embedConfig={{
                        type: 'report',
                        id: '63eafe16-8205-412f-8bd7-7190ec96b44a',
                        embedUrl: "https://app.powerbi.com/reportEmbed?reportId=63eafe16-8205-412f-8bd7-7190ec96b44a&groupId=ea2bc6bc-9416-499a-ae83-370431ccea97&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLU5PUlRILUVVUk9QRS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",
                        accessToken: accessToken,
                        tokenType: models.TokenType.Aad, // Use models.TokenType.Aad for SaaS embed
                        settings: {
                            panes: {
                                filters: {
                                    expanded: false,
                                    visible: true
                                }
                            },
                            background: models.BackgroundType.Transparent,
                        }
                    }}

                    eventHandlers={
                        new Map([
                            ['loaded', function () { console.log('Report loaded'); }],
                            ['rendered', function () { console.log('Report rendered'); }],
                            ['error', function (event) { console.log(event.detail); }],
                            ['visualClicked', () => console.log('visual clicked')],
                            ['pageChanged', (event) => console.log(event)],
                        ])
                    }

                    cssClassName={"reportClass"}

                    getEmbeddedComponent={(embeddedReport) => {
                        window.report = embeddedReport;
                    }}
                />
            )}
        </div>
    );
}

export default DashLandingPage;
