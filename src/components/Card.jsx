import React from 'react'

export const Card = ({ title, date, hdurl, explanation }) => {
    console.log(title)
    return (
        <>
            <div style={{height: '60em', border: '3px solid black', margin: '2em', padding: '1em', borderRadius: '20px', }}>
               
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    {date}
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    {title}
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    <img style={{height: '300px', width:'300px'}} src={hdurl}></img>

                </div>
                
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    {explanation}
                </div>
            </div>
        </>
    )
}

