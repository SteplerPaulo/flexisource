import React from "react";

function Footer() {
    return (
        <React.Fragment>
            <div className="footer">
                <div className="row">
                    <div className="col-lg-5 col-xs-12">
                        We acknowledge the Traditional Owners of country throughout Australia and recognise their continuing connection to land, waters and culture. We pay our respects to their Elders past, present and emerging.
                    </div>
                    <div className="col-lg-auto offset-lg-2 col-xs-12">
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
                <div className="row">
                    <div className="col-lg-7 col-xs-12">
                        <h3>Stay up to date</h3>
                        <p>Subscribe to get the latest news and insights from our weekly update and research releases.</p>
                        
                        <div className="row">
                            <div className="col">
                                <input className="form-control"  placeholder="First Name*"/>
                            </div>
                            <div className="col">
                                <input className="form-control"  placeholder="Last Name*"/>
                            </div>
                        </div><br/>
                        <div className="row">
                            <div className="col">
                                <input type="email" className="form-control"  placeholder="Email*"/>
                            </div>
                        </div><br/>
                        <div className="row">
                            <div className="col">
                                <input className="form-control"  placeholder="Company"/>
                            </div>
                        </div><br/>
                        <div className="row">
                            <div className="col-lg-7  col-xs-12">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                    <label className="form-check-label" htmlFor="flexCheckChecked">
                                        Etiam vel orci vel massa accumsan aliquam. Nunc sit amet placerat . Read our terms and conditions
                                    </label>
                                </div>
                            </div>
                            <div className="col-lg-5 col-xs-12">
                                <button type="button" className="btn btn-outline-secondary">SUBSCRIBE</button>
                            </div>
                        </div><br/>
                    </div>
                    <div className="col-lg-5 col-xs-12">
                        <h3>Twitter feed</h3>
                        <img className="rounded-circle" src="/assets/img/logo.png" alt="Logo"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi facilisis molestie est a ultrices. Proin elementum, lorem et dignissim tempus, ligula arcu pellentesque sapien, a imperdiet ex velit at urna. Quisque ac nisi turpis. Fusce ultricies elit quis dui vulputate, eu maximus enim molestie.</p>
                    </div>
                </div>      
                <div className="row">
                    <div className="col-7">
                        ABN 123 456 789  |   © 2020 LOGO  |  Privacy and data collection
                    </div>
                    <div className="col">
                        <div class="row">
                            <div class="col"><i className="fa fa-facebook"></i></div>
                            <div class="col"><i className="fa fa-twitter"></i></div>
                            <div class="col"><i className="fa fa-linkedin"></i></div>
                            <div class="col"><i className="fa fa-instagram"></i></div>
                            <div class="col"><i className="fa fa-youtube"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Footer;