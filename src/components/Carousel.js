import React from "react";
import { useState } from "react";



function Carousel() {
    const [items] = useState([{ title: 'Our Story' }, { title: 'Our Values' }, { title: 'Our People' }, { title: 'Others' }]);
    let [start, setStart] = useState(0)
    let [end, setEnd] = useState(3)
   
    
    const nextItem = ()=>{
        if(end < items.length){
            start++;
            end++;
            setStart(start);
            setEnd(end);
        }
    }
    
    const prevHandler = ()=>{
        if(start > 0){
            start--;
            end--;
            setStart(start);
            setEnd(end);
        }
    }

    


    return (
        <React.Fragment>
            
            <div className="carousel container">
                <div className="row">
                    {
                        items.slice(start, end).map((item, index) => (
                            <div className="col-lg-4 col-xs-12" key={index}>
                                <div className="card ">
                                    <div className="card-body">
                                        <div className="card-pre-title">About</div>
                                        <h5 className="card-title">{item.title} </h5>
                                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quis velit ligula. Pellentesque vel lectus tempor orci bibendum...</p>
                                        <a href="#link" className="btn btn-outline-danger">READ MORE</a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    <button onClick={() => prevHandler()} className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button onClick={() => nextItem()} className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>

                </div>
            </div>

        </React.Fragment>
    );
}

export default Carousel;