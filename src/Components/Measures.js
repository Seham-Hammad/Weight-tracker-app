import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';
import axios from 'axios';

const Measures = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios('/api/measuresDetails');
            setData(res.data);
        };

        fetchData();
    }, []);
    console.log(data);

    const listMeasures = () => {
        return (
            data.map((measure, i) => (

                <tr key={i}>
                    <td >{measure.weight}</td>
                    <td>{measure.height}</td>
                    <td>{measure.BMI}</td>
                    <td>{measure.date}</td>
                </tr>
            ))
        );
    }

    return (
        <>
            <h5>Your Measures!</h5>
            <br />
            <Table responsive striped hover>
                <thead>
                    <tr>
                        <th>Weight</th>
                        <th>Height</th>
                        <th>BMI</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {listMeasures()}
                </tbody>
            </Table>
        </>
    );
}

export default Measures;