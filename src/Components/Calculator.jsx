import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'

function Calculator() {
    const [input, setInput] = useState('');

    const handleButtonClick = (value) => {
        setInput(input + value);
    }

    const handleCalculate = () => {
        try {
            setInput(eval(input).toString());
        } catch (error) {
            setInput('Error');
        }
    }

    const handleClear = () => {
        setInput('');
    }
    const handleBackspace = () => {
        setInput(input.slice(0, -1));
    };


    return (
        <>
            <div className='d-flex justify-content-center align-items-center' style={{ height: '90vh', backgroundColor: 'indigo' }}>
                <div className='container w-25 card shadow p-4' style={{ backgroundColor: '#d4dadc', height: '350px' }}>
                    <Row className='d-flex align-items-center px-2 mb-2 border border-1 border-dark text-dark shadow' style={{ height: '50px' }}>
                        {input}
                    </Row>
                    {/* row 1 */}
                    <Row>
                        <Col onClick={handleBackspace} className='btn btn-primary me-1 my-1 py-2'>
                            <i className="fa-solid fa-delete-left"></i>
                        </Col>
                        <Col onClick={handleClear} className='btn btn-primary m-1'>C</Col>
                        <Col onClick={() => handleButtonClick('%')} className='btn btn-primary m-1 py-2'>%</Col>
                        <Col onClick={() => handleButtonClick('/')} className='btn btn-primary ms-1 my-1 py-2'>/</Col>
                    </Row>
                    {/* row 2 */}
                    <Row>
                        <Col onClick={() => handleButtonClick('7')} className='btn btn-primary me-1 my-1 py-2'>7</Col>
                        <Col onClick={() => handleButtonClick('8')} className='btn btn-primary m-1 py-2'>8</Col>
                        <Col onClick={() => handleButtonClick('9')} className='btn btn-primary m-1 py-2'>9</Col>
                        <Col onClick={() => handleButtonClick('*')} className='btn btn-primary ms-1 my-1 py-2'>*</Col>
                    </Row>
                    {/* row 3 */}
                    <Row>
                        <Col onClick={() => handleButtonClick('4')} className='btn btn-primary me-1 my-1 py-2'>4</Col>
                        <Col onClick={() => handleButtonClick('5')} className='btn btn-primary m-1 py-2'>5</Col>
                        <Col onClick={() => handleButtonClick('6')} className='btn btn-primary m-1 py-2'>6</Col>
                        <Col onClick={() => handleButtonClick('-')} className='btn btn-primary ms-1 my-1 py-2'>-</Col>
                    </Row>
                    {/* row 4 */}
                    <Row>
                        <Col onClick={() => handleButtonClick('1')} className='btn btn-primary me-1 my-1 py-2'>1</Col>
                        <Col onClick={() => handleButtonClick('2')} className='btn btn-primary m-1 py-2'>2</Col>
                        <Col onClick={() => handleButtonClick('3')} className='btn btn-primary m-1 py-2'>3</Col>
                        <Col onClick={() => handleButtonClick('+')} className='btn btn-primary ms-1 my-1 py-2'>+</Col>
                    </Row>
                    {/* row 5 */}
                    <Row>
                        <Col onClick={() => handleButtonClick('0')} className='btn btn-primary me-1 my-1 py-2'>0</Col>
                        <Col onClick={() => handleButtonClick('00')} className='btn btn-primary m-1 py-2'>00</Col>
                        <Col onClick={() => handleButtonClick('.')} className='btn btn-primary m-1 py-2'>.</Col>
                        <Col onClick={handleCalculate} className='btn btn-primary ms-1 my-1 py-2'>=</Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default Calculator