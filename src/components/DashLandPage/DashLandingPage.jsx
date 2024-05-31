import React from 'react'
import './DashLandingPage.css'
import { PowerBIEmbed } from 'powerbi-client-react';
import {models} from 'powerbi-client'

const DashLandingPage = () => {
    return (
        <div className='reportDiv'>
            <PowerBIEmbed
                embedConfig={{
                    type: 'report',   // Supported types: report, dashboard, tile, visual, qna, paginated report and create
                    id: '6084cecb-2137-479e-8293-62292c34a83e',
                    embedUrl: "https://app.powerbi.com/reportEmbed?reportId=6084cecb-2137-479e-8293-62292c34a83e&groupId=ea2bc6bc-9416-499a-ae83-370431ccea97&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLU5PUlRILUVVUk9QRS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",
                    accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IkwxS2ZLRklfam5YYndXYzIyeFp4dzFzVUhIMCIsImtpZCI6IkwxS2ZLRklfam5YYndXYzIyeFp4dzFzVUhIMCJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZGM1OWUzOGMtNDk3Ny00MDZmLWJkZDEtOWViYmFiYmQzODdlLyIsImlhdCI6MTcxNzEyMDk5NywibmJmIjoxNzE3MTIwOTk3LCJleHAiOjE3MTcxMjUxMjUsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84V0FBQUF3d2UrRTN4VDBzM09PdUdsejF3ZWhMUjMrQVJWendhbjFHRU1RQndydTVJWHp5Uis3aDFRcTZ5VGYwUlBxRjNXIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiRUwgTUFLQU9VSSIsImdpdmVuX25hbWUiOiJBQ0hSQUYiLCJpcGFkZHIiOiIxOTYuMjA2LjU5LjIzNSIsIm5hbWUiOiJBQ0hSQUYgRUwgTUFLQU9VSSIsIm9pZCI6IjRhODI0MzU2LWEzNGMtNDU4Ny1iNmUxLTE1NGE2YmUxMjRkNCIsInB1aWQiOiIxMDAzMjAwMzExMTE1MTk1IiwicmgiOiIwLkFUb0FqT05aM0hkSmIwQzkwWjY3cTcwNGZna0FBQUFBQUFBQXdBQUFBQUFBQUFBNkFGTS4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzdWIiOiJTZ2NnYmxlZ2N4dEdVTjZ5XzRGUDJmZW93NFpuNHJOVE10MU1HVWxwY2RvIiwidGlkIjoiZGM1OWUzOGMtNDk3Ny00MDZmLWJkZDEtOWViYmFiYmQzODdlIiwidW5pcXVlX25hbWUiOiJhY2hyYWZlbG1ha2FvdWkuZWZiQHVzbXMuYWMubWEiLCJ1cG4iOiJhY2hyYWZlbG1ha2FvdWkuZWZiQHVzbXMuYWMubWEiLCJ1dGkiOiJzTXpfSnVZdnhFbV9hRENHcHFVYUFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.I1IADskFSM-CdI98zxs5EpBmafa7JAY4FTIwZkAiWnqYmcl-gLXKJczEVVtd6OsYJMFA8EPhjcosYugM-nKffTFUKO-oDQEWRbhuihZxuWzorbfUK4dlTQaA2Y7D8RHFm6DiQiD-X7_tTbpPqHBgAzeTGGoKF9VjQ5ohur3fNyeS7ZUj-iGloT5Ov-lHfAPYHns8Je8nvPPrbYF4hr1veSWVp8WuOA-1-HPZYZMz2S6XQKZaUzUNiANBU489t245o4kIOhCGPuIfImXusOdQBfA_P6DuHu8iwWl9cmOXvRu82nfcTfH6k5M4WZaL8AMhpLNUvnq_CTE6UWBBKg3lJA',
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
        </div>
    )
}

export default DashLandingPage