import React from 'react'


export const SearchBar = () => {

    
    
    //https://api.nasa.gov/planetary/apod?api_key=vHq0tWV5BJsmQ6iS0q2HdGr3OndUBoYqJ7R9SF16&start_date=2022-01-01&end_date=2022-04-04

    // https://api.nasa.gov/planetary/apod?myKey&start_date=2022-01-01&end_date=2022-04-04
    
    const fetchData = async (event) => {
        event.preventDefault();
        const data = new FormData(event.target)


        const api_key = 'vHq0tWV5BJsmQ6iS0q2HdGr3OndUBoYqJ7R9SF16'
        const start_date = data.get('startdate');
        const end_date = data.get('enddate');
        const baseURL = 'https://api.nasa.gov/planetary/apod?'

        const url = new URL(baseURL + 'api_key=' + api_key + '&' + 'start_date=' + start_date + '&' + 'end_date=' + end_date);

        const requestOptions = {
            method: 'GET',
        };
        
        await fetch(url, requestOptions)
            .then(response => {
                response.json()
            })
            .then((response) => {
                console.log(response)
            }).catch((error) =>{
                console.error(error);
            }) 
    }

    
    return (
        <>
            <div>
                <form onSubmit={(event) => {fetchData(event)}}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        height: '20em',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                    }}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                            <div style={{paddingRight: '1em'}}>
                                <label>Start Date</label>
                                <input name='startdate' type='date'></input>
                            </div>

                            <div style={{paddingRight: '1em'}}>
                                <label>End Date</label>
                                <input name='enddate' type='date'></input>
                            </div>

                            <div style={{paddingRight: '1em'}}>
                                <label>Count</label>
                                <input type='number'></input>
                            </div>
                            <button>Submit</button>

                        </div> 
                    </div>
                </form>
            </div>


        </>

    )
}

