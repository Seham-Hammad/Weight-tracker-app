import React, { useState, } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`
const Label = styled.label`
    margin: 5px;
`
const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`
const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`
const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`
const AddMeasures = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [BMI, setBMI] = useState('');
    const [date, setDate] = useState(new Date());
    let history = useHistory();


    const createMeasure = () => {
        const payload = { weight, height, BMI, date };
        axios({
            url: '/api/addMeasures',
            method: 'post',
            data: payload
        }).then(() => {
            console.log('Measures added');
        }).catch((err) => {
            console.log(err);
        });
        history.push("/measuresDetails");
    }
    return (

        <Wrapper>
            <Label>Weight: </Label>
            <InputText
                value={weight}
                type="text"
                name="weight"
                placeholder="Weight"
                onChange={e => setWeight(e.target.value)}
            />
            <Label>Height: </Label>
            <InputText
                value={height}
                type="text"
                name="height"
                placeholder="height"
                onChange={e => setHeight(e.target.value)}
            />

            <Label>BMI: </Label>
            <InputText
                value={BMI}
                type="text"
                name="BMI"
                placeholder="BMI"
                onChange={e => setBMI(e.target.value)}
            />
            <Label>Date </Label>
            <DatePicker
                selected={date}
                onChange={date => setDate(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="time"
                dateFormat="MMMM d, yyyy h:mm aa" />
            <Button onClick={e => createMeasure()} type="submit">Add Measures</Button>
            <CancelButton href={'/measuresDetails'}>Cancel</CancelButton>
        </Wrapper >

    );
}

export default AddMeasures;