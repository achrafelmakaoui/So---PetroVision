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
                    id: 'b6568ddd-4b17-4c2e-b1b5-c8885007e664',
                    embedUrl: "https://app.powerbi.com/reportEmbed?reportId=b6568ddd-4b17-4c2e-b1b5-c8885007e664&groupId=483b032d-da3e-410e-95af-1d5ad1a6825a&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUFGUklDQS1OT1JUSC1BLVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7InVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlfX0%3d",
                    accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IkwxS2ZLRklfam5YYndXYzIyeFp4dzFzVUhIMCIsImtpZCI6IkwxS2ZLRklfam5YYndXYzIyeFp4dzFzVUhIMCJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZGFlNTRhZDctNDNkZi00N2I3LWFlODYtNGFjMTNhZTU2N2FmLyIsImlhdCI6MTcxNjIwMDU2NiwibmJmIjoxNzE2MjAwNTY2LCJleHAiOjE3MTYyMDYxODUsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84V0FBQUFrZmZzeERZRklYMkF0RXBmNk1FRDd5eWlIMHlPT1RXK3c4N01IN1NJWUhWb3JNSDlTS3krRXFVd2ZGZmlMV05CIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiRUwgTUFLQU9VSSIsImdpdmVuX25hbWUiOiJBQ0hSQUYiLCJpcGFkZHIiOiIxMDIuNTAuMjU1LjEyOCIsIm5hbWUiOiJFTCBNQUtBT1VJIEFDSFJBRiIsIm9pZCI6IjI5ZTljNzgyLTJhMWMtNGFjZi05ZjliLTRhMDI4NTg4ZmQ3ZiIsInB1aWQiOiIxMDAzMjAwMTk5OEUzMzI3IiwicmgiOiIwLkFSQUExMHJsMnQ5RHQwZXVoa3JCT3VWbnJ3a0FBQUFBQUFBQXdBQUFBQUFBQUFDWEFOYy4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzaWduaW5fc3RhdGUiOlsia21zaSJdLCJzdWIiOiJVSGs2ek5Ucy05UWxtcloyUWNHVWtFVmJKQzNrX3N4QU1hVlpwR25tR1pVIiwidGlkIjoiZGFlNTRhZDctNDNkZi00N2I3LWFlODYtNGFjMTNhZTU2N2FmIiwidW5pcXVlX25hbWUiOiJFTE1BS0FPVUkuQUNIUkFGQG9mcHB0LWVkdS5tYSIsInVwbiI6IkVMTUFLQU9VSS5BQ0hSQUZAb2ZwcHQtZWR1Lm1hIiwidXRpIjoiOHpKRm1FdEl6RW1nUkR6ZnNDQ0xBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il19.Ygx7ZcySb2HS4nbi1ShhHa_iNB9M-1BZRR7xIEz5VGKG9pUkCDxMjYhdWIn4bpf67uc0MTU5-0Hpk-WyRQXkWR5_SU1G8a87-apyn7cwBIHxm2RFzq_Nx_TtMuvbQBkFUG5-G9BYqXBgwAwb9qtUVv71FL4la-Mt96sToMHSGb5yWJrGhymGKo33wIiNrhGPIpALpeM24B3QfucTBaWQ2eFYYX_sowG-oC3A29E5bulXJgQ3X1bByRM9radcZDWSub5btIn309tpNGegx4v5FwLnuF1v0kcaaIPfQ5fqTVxxyR3s1SLq5XTZehSc-d0l_gShrn730ChfKJ5GyoWaNA',
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