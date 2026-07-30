import React, { useEffect } from 'react';
import AxiosInstance from '../../AxiosInstance';

const Dashboard = () => {
    
    useEffect(() => {
        const fetchProtectedData = async () => {
            try {
                const response = await AxiosInstance.get('/protected-view/')
            } catch (error) {
                console.error('Error fetching data: ', error.response.data)
            }
        }

        fetchProtectedData()
    }, [])

    return (
        <>
            <div className="container text-light">
                Dashboard
            </div>
        </>
    )
}

export default Dashboard;