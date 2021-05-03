import React from "react";

function Footer() {
    return (
        <React.Fragment>
            <div class="footer">
                <div class="row">
                    <div class="col-5">
                        We acknowledge the Traditional Owners of country throughout Australia and recognise their continuing connection to land, waters and culture. We pay our respects to their Elders past, present and emerging.
                    </div>
                    <div class="col offset-2">
                        <address>
							<strong>Telephone</strong> 	<a href="tel:123-456-7890">+61 3 9123 4561</a>
						</address>	
						<address>
							<strong>Email </strong> <a href="mailto:info@logo.com.au?subject=Get%20Info">info@logo.com.au</a>
						</address>
                        <div>Terms and conditions</div>  
                        <div>Events policy </div>
                        <div>Careers</div>
                        <div>Contact</div>

                    </div>
                </div><hr/>
                <div class="row">
                    <div class="col-5">
                        <h3>Stay up to date</h3>
                        <p>Subscribe to get the latest news and insights from our weekly update and research releases.</p>
                        
                        <div class="row">
                            <div class="col">
                                <input class="form-control"  placeholder="First Name*"/>
                            </div>
                            <div class="col">
                                <input class="form-control"  placeholder="Last Name*"/>
                            </div>
                        </div><br/>
                        <div class="row">
                            <div class="col">
                                <input type="email" class="form-control"  placeholder="Email*"/>
                            </div>
                        </div><br/>
                        <div class="row">
                            <div class="col">
                                <input class="form-control"  placeholder="Company"/>
                            </div>
                        </div>
                   
                   
                    </div>
                    <div class="col offset-2">
                        <h3>Twitter feed</h3>
                        <img class="rounded-circle" src="/assets/img/logo.png" alt="Logo"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis molestie est a ultrices. Proin elementum, lorem et dignissim tempus, ligula arcu pellentesque sapien, a imperdiet ex velit at urna. Quisque ac nisi turpis. Fusce ultricies elit quis dui vulputate, eu maximus enim molestie.</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Footer;