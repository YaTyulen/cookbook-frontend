import React from 'react'

const SvgSelector = (props) => {
    switch (props.id) {
        case 'soup':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="20" height="20">
                    <path d="M16.225,24H7.774l-.2-.1A14.108,14.108,0,0,1,.042,13.485,2.968,2.968,0,0,1,.705,11.07,3.012,3.012,0,0,1,3.009,10H20.99a3.009,3.009,0,0,1,2.3,1.07,2.968,2.968,0,0,1,.665,2.415A14.112,14.112,0,0,1,16.427,23.9Zm-8-2H15.77a12.309,12.309,0,0,0,6.215-8.849.96.96,0,0,0-.219-.79A1.013,1.013,0,0,0,20.99,12H3.009a1.012,1.012,0,0,0-.776.361.963.963,0,0,0-.22.79A12.313,12.313,0,0,0,8.229,22ZM12,6.414a4.386,4.386,0,0,0-1.293-3.122A2.39,2.39,0,0,1,10,1.586V0H8V1.586A4.384,4.384,0,0,0,9.292,4.707,2.429,2.429,0,0,1,10,6.414V8h2Zm4-1a4.381,4.381,0,0,0-1.293-3.121A2.432,2.432,0,0,1,14,.586V0H12V.586a4.451,4.451,0,0,0,1.292,3.122A2.394,2.394,0,0,1,14,5.414V7h2Z"/>
                </svg>
            )
        case 'hot':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="20" height="20">
                    <path d="M19.85,10.755a5.038,5.038,0,0,0-.17-3.03c.038-.012,1.482-1.481,1.513-1.5a1.5,1.5,0,1,0,.649-2.063,1.5,1.5,0,1,0-2.063.649c-.015.022-1.5,1.482-1.5,1.507-1.424-.764-4.375,0-6.134.964C6.193,5.8.029,9.471,0,16v2.568a5.026,5.026,0,0,0,4.3,4.951C10.447,24.5,23.753,24.34,24,18,24,15.553,22.448,12.867,19.85,10.755ZM14.643,8.388c1.435-.481,2.635-.516,3.06-.092.965.965-.563,5.139-2.181,6.757C12.461,18,8,13.538,10.947,10.478A10.574,10.574,0,0,1,14.643,8.388ZM9,22a36.975,36.975,0,0,1-4.419-.461A3.015,3.015,0,0,1,2,18.568V16A6.956,6.956,0,0,1,9.571,9.03c-5.795,6.95,5.914,14.078,9.632,3.8C26.5,20.17,18.3,21.918,9,22ZM7,3V1A1,1,0,0,1,9,1V3A1,1,0,0,1,7,3Zm4,0V1a1,1,0,0,1,2,0V3A1,1,0,0,1,11,3ZM3,3V1A1,1,0,0,1,5,1V3A1,1,0,0,1,3,3Z"/>
                </svg>
            )
        case 'salad':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="20" height="20">
                    <path d="M23.293,11.071a3,3,0,0,0-2.226-1.063A28.466,28.466,0,0,0,22,4.04l.043-1.089L20.954,3a31,31,0,0,0-3.662.416A7.913,7.913,0,0,0,18,0H16a6.08,6.08,0,0,1-.4,2.258,3.923,3.923,0,0,0-.763-1.093A3.982,3.982,0,0,0,9.5.905,3.969,3.969,0,0,0,3.727,6.251a4.918,4.918,0,0,0-1.716,3.937,2.956,2.956,0,0,0-1.97,3.3A14.112,14.112,0,0,0,7.572,23.9l.2.1h8.451l.2-.1a14.109,14.109,0,0,0,7.53-10.418A2.965,2.965,0,0,0,23.293,11.071ZM18.973,10H16.414l1.293-1.293L16.292,7.293,13.585,10H12.036a3.429,3.429,0,0,1,.976-2.9c1.132-1.132,4.464-1.784,6.907-2.016A22.8,22.8,0,0,1,18.973,10ZM4,10a3,3,0,0,1,6,0ZM5.578,2.579a1.978,1.978,0,0,1,2.793,0c.095.1,1.128,1.23,1.128,1.23s1.034-1.134,1.128-1.229A1.96,1.96,0,0,1,13.955,4.29a5.672,5.672,0,0,0-3.183,2.465A4.916,4.916,0,0,0,5.485,5.26,1.973,1.973,0,0,1,5.578,2.579ZM21.985,13.152A12.308,12.308,0,0,1,15.77,22H8.229a12.307,12.307,0,0,1-6.215-8.849.963.963,0,0,1,.219-.79A1.015,1.015,0,0,1,3.009,12H20.99a1.015,1.015,0,0,1,.776.361A.968.968,0,0,1,21.985,13.152Z"/>
                </svg>
            )
        case 'bakery':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="20" height="20">
                    <path d="M22.375,3.785a13.441,13.441,0,0,0-4.5-1.583A2.981,2.981,0,0,0,16.966.738,3.044,3.044,0,0,0,14.527.031a16.763,16.763,0,0,0-4.6,1.382,2.931,2.931,0,0,0-.7-.3,3.025,3.025,0,0,0-2.428.372h0A18.885,18.885,0,0,0,1.48,6.794a3.021,3.021,0,0,0-.372,2.428,2.941,2.941,0,0,0,.3.7A16.816,16.816,0,0,0,.03,14.527a3.056,3.056,0,0,0,.708,2.44,2.976,2.976,0,0,0,1.464.912,13.435,13.435,0,0,0,1.583,4.5,3.168,3.168,0,0,0,3.431,1.557,3.259,3.259,0,0,0,2.61-2.876A9.6,9.6,0,0,1,10.578,18h1.143a14.491,14.491,0,0,1,1.043-2.477l2.759-2.759A14.491,14.491,0,0,1,18,11.721V10.578a9.6,9.6,0,0,1,3.056-.752,3.259,3.259,0,0,0,2.876-2.61A3.161,3.161,0,0,0,22.375,3.785ZM3,11.267l7.861,3.555A11.2,11.2,0,0,0,10.3,16H3a.974.974,0,0,1-.747-.341,1.053,1.053,0,0,1-.241-.843A14.714,14.714,0,0,1,3,11.267Zm4.837,9.566a1.274,1.274,0,0,1-1.027,1.14,1.169,1.169,0,0,1-1.291-.59A11.5,11.5,0,0,1,4.244,18H8.46C8.177,18.874,7.839,20.833,7.839,20.833Zm4.379-7.593L3.555,9.323a1.007,1.007,0,0,1-.393-1.447A16.752,16.752,0,0,1,7.876,3.163a.986.986,0,0,1,.816-.126.972.972,0,0,1,.614.483l3.934,8.7ZM16,10.3a11.2,11.2,0,0,0-1.178.561L11.267,3a14.658,14.658,0,0,1,3.549-.993,1.046,1.046,0,0,1,.841.241A.977.977,0,0,1,16,3Zm5.973-3.49a1.274,1.274,0,0,1-1.14,1.027S18.874,8.177,18,8.46V4.244a11.5,11.5,0,0,1,3.383,1.277A1.172,1.172,0,0,1,21.973,6.812Z"/>
                </svg>
            )
        case 'cake':
            return (
                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="20" height="20">
                    <path d="M24,22H22V12a3,3,0,0,0-3-3H13V5.794a2.536,2.536,0,0,0,1.537-2.331C14.537,2.062,12,0,12,0S9.463,2.062,9.463,3.463A2.536,2.536,0,0,0,11,5.794V9H5a3,3,0,0,0-3,3V22H0v2H24ZM5,11H19a1,1,0,0,1,1,1v2.98c-.936-.1-1.5-.7-1.5-.98h-2c0,.343-.682,1-1.75,1C13.661,15,13,14.306,13,14H11c0,.343-.682,1-1.75,1-1.089,0-1.75-.694-1.75-1h-2c0,.315-.579.888-1.5.981V12A1,1,0,0,1,5,11ZM4,16.979A4.156,4.156,0,0,0,6.5,16a4.309,4.309,0,0,0,5.5.015A4.309,4.309,0,0,0,17.5,16a4.156,4.156,0,0,0,2.5.978V22H4Z"/>
                </svg>
            )
        default:
            return <svg></svg>
    }
}

export default SvgSelector