

import React from "react";

function Accordion() {
    return (
        <React.Fragment>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <div class="pre-header">ACCORDIAN COLLAPSED STYLE</div><br/>
                            <div class="main-header">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                            </div>
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p>
                                Donec congue, massa ut tempor blandit, felis nisi cursus massa, at pulvinar orci nunc vel ex. Nullam id leo vitae metus vestibulum dapibus. In auctor tortor neque, nec efficitur nisi placerat vel. Quisque ac sollicitudin magna. Quisque iaculis pellentesque tortor, quis elementum erat euismod et. Praesent egestas neque eget nibh congue gravida. Suspendisse facilisis, ante et malesuada ornare, magna felis convallis dolor, imperdiet dictum mi augue ut ipsum. Phasellus id odio ipsum.
                                Donec congue, massa ut tempor blandit, felis nisi cursus massa, at pulvinar orci nunc vel ex. Nullam id leo vitae metus vestibulum dapibus. In auctor tortor neque, nec efficitur nisi placerat vel. Quisque ac sollicitudin magna. Quisque iaculis pellentesque tortor, quis elementum erat euismod et. Praesent egestas neque eget nibh congue gravida. Suspendisse facilisis, ante et malesuada ornare, magna felis convallis dolor, 
                            </p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                            <div class="pre-header">ACCORDIAN COLLAPSED STYLE</div><br/>
                            <div class="main-header">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
                            </div>
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <p>
                                Donec congue, massa ut tempor blandit, felis nisi cursus massa, at pulvinar orci nunc vel ex. Nullam id leo vitae metus vestibulum dapibus. In auctor tortor neque, nec efficitur nisi placerat vel. Quisque ac sollicitudin magna. Quisque iaculis pellentesque tortor, quis elementum erat euismod et. Praesent egestas neque eget nibh congue gravida. Suspendisse facilisis, ante et malesuada ornare, magna felis convallis dolor, imperdiet dictum mi augue ut ipsum. Phasellus id odio ipsum.
                                Donec congue, massa ut tempor blandit, felis nisi cursus massa, at pulvinar orci nunc vel ex. Nullam id leo vitae metus vestibulum dapibus. In auctor tortor neque, nec efficitur nisi placerat vel. Quisque ac sollicitudin magna. Quisque iaculis pellentesque tortor, quis elementum erat euismod et. Praesent egestas neque eget nibh congue gravida. Suspendisse facilisis, ante et malesuada ornare, magna felis convallis dolor, 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Accordion;