import React from 'react'



export default function About(props) {
    let mode = props.set;

    const myMode = {
        color: mode === 'dark' ? 'white' : 'black',
    }
    return (
        <>
            <div className="container">
                <h1 style={myMode}>About Us</h1>
                <p style={myMode}>This is a web base utility which can be used to reform your text in the way you desire or read it aloud.</p>
                <h1 style={myMode}>About Developer</h1>

                <div className="row">
                    <div className="col-md-3 my-2">
                        <div class="card">
                            <img src="./maneesh.png" class="card-img-top" alt="..."/>

                            <div class="card-body">
                                <h5 class="card-title">Maneesh Manoj</h5>
                                <p class="card-text">Maneesh is a sophomore at IIITH, currently pursuing CS.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 my-2">
                        <div class="card">
                                <img src="./maneesh2.png" class="card-img-top" alt="..."/>

                                <div class="card-body">
                                    <h5 class="card-title">Maneesh Manoj</h5>
                                    <p class="card-text">Yup this is me again.The same old guy studying at IIITH.</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </>
    )
}