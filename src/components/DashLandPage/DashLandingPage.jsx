import React from 'react'
import './DashLandingPage.css'
import { PowerBIEmbed } from 'powerbi-client-react';
import {models} from 'powerbi-client'
const DashLandingPage = () => {
    return (
        <div>
            <PowerBIEmbed
                embedConfig={{
                    type: 'report',   // Supported types: report, dashboard, tile, visual, qna, paginated report and create
                    id: 'b6568ddd-4b17-4c2e-b1b5-c8885007e664',
                    embedUrl: "https://app.powerbi.com/reportEmbed?reportId=b6568ddd-4b17-4c2e-b1b5-c8885007e664&groupId=483b032d-da3e-410e-95af-1d5ad1a6825a&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUFGUklDQS1OT1JUSC1BLVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7InVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlfX0%3d",
                    accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6InEtMjNmYWxldlpoaEQzaG05Q1Fia1A1TVF5VSIsImtpZCI6InEtMjNmYWxldlpoaEQzaG05Q1Fia1A1TVF5VSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZGFlNTRhZDctNDNkZi00N2I3LWFlODYtNGFjMTNhZTU2N2FmLyIsImlhdCI6MTcxMzg2NDEwMSwibmJmIjoxNzEzODY0MTAxLCJleHAiOjE3MTM4NjgzNDQsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84V0FBQUF3cWNNVnVmVWIvYXZuME5ENHBxRVdFT2UweXBZZi9KUDJRRjZEOFdOcVRhN2U4Ynl6UHl5WWJuTU5NTWF3NHhjIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiRUwgTUFLQU9VSSIsImdpdmVuX25hbWUiOiJBQ0hSQUYiLCJpcGFkZHIiOiIxMDIuNTAuMjU1LjEyOCIsIm5hbWUiOiJFTCBNQUtBT1VJIEFDSFJBRiIsIm9pZCI6IjI5ZTljNzgyLTJhMWMtNGFjZi05ZjliLTRhMDI4NTg4ZmQ3ZiIsInB1aWQiOiIxMDAzMjAwMTk5OEUzMzI3IiwicmgiOiIwLkFSQUExMHJsMnQ5RHQwZXVoa3JCT3VWbnJ3a0FBQUFBQUFBQXdBQUFBQUFBQUFDWEFOYy4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzaWduaW5fc3RhdGUiOlsia21zaSJdLCJzdWIiOiJVSGs2ek5Ucy05UWxtcloyUWNHVWtFVmJKQzNrX3N4QU1hVlpwR25tR1pVIiwidGlkIjoiZGFlNTRhZDctNDNkZi00N2I3LWFlODYtNGFjMTNhZTU2N2FmIiwidW5pcXVlX25hbWUiOiJFTE1BS0FPVUkuQUNIUkFGQG9mcHB0LWVkdS5tYSIsInVwbiI6IkVMTUFLQU9VSS5BQ0hSQUZAb2ZwcHQtZWR1Lm1hIiwidXRpIjoieG4xemxsSXEyVXlFV05vZzlYZFRBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il19.9iYtbETL3P7EM1G41sy6gB3g5mi2RMb5X5FK4-PvcjvneZYZPc7eL3Xy2t_RdzBM9fZvfvBoVsqcHWGquwbgLz978sTK21hOpGFQXburjl5wO-Uvma4xx9vWJFvNQmALV1tfzxQweh722gA3dRaKj15TsNHr7d5ELDXrpxpJLBlZLOwFiaPeTpuIE0jZkmb0RSSlRs-NbVk9yA0MAI207rj0n-WMwXAYz_0NsJ2bnzq3-QYZ4nhn9c_amwxhr_o2k4azYrrzjeczTylOMr0FBEm-Bbv7x5dZJv0Rwjn5U1T-xBIH-ClgtHO-Bxwao2r5bSZSS_RP__9OlmjvIR8J3Q',
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