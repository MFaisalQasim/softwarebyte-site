import React from 'react'

export default function OurClient() {
    return (
        <>
            {/* <div class="container-fluid">
                <div class="row cards">
                    <div class="card-single card-offshore col-md-12 col-lg-6">
                        <div class="row">
                            <div class="col-xs-12 col-sm-6 card-img offshore-img2">
                                <div id="offshoreCharter" class="carousel slide" data-ride="carousel">
                                    <ol class="carousel-indicators">
                                        <li class="active" data-target="#offshoreCharter" data-slide-to="0"> </li>
                                        <li data-target="#offshoreCharter" data-slide-to="1"> </li>
                                        <li data-target="#offshoreCharter" data-slide-to="2"> </li>
                                    </ol>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active" style="background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/319606/yellow-dawg-fishing-offshore-01.jpg');"></div>
                                        <div class="carousel-item" style="background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/319606/yellow-dawg-fishing-offshore-02.jpg');"></div>
                                        <div class="carousel-item" style="background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/319606/yellow-dawg-fishing-offshore-03.jpg');"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 card-content">
                                <div class="card-height d-flex align-items-center justify-content-center">
                                    <div class="card-text">
                                        <h2>Offshore Fishing Charters</h2>
                                        <p>Offshore six to eight hour tours are available. These trips can consist of trolling for mahi, sailfish, kingfish, & Wahoo.</p>
                                        <p>We also offer offshore bottom fishing trips for grouper, snapper, seabass, cobia, and flounder.</p>
                                        <button>Learn More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-single card-inshore col-md-12 col-lg-6">
                        <div class="row">
                            <div class="col-xs-12 col-sm-6 card-img order-md-1 order-lg-0">
                                <div id="inshoreCharter" class="carousel slide" data-ride="carousel">
                                    <ol class="carousel-indicators">
                                        <li class="active" data-target="#inshoreCharter" data-slide-to="0"></li>
                                        <li data-target="#inshoreCharter" data-slide-to="1"></li>
                                        <li data-target="#inshoreCharter" data-slide-to="2"></li>
                                    </ol>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active" style="background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/319606/yoellow-dawg-fishing-inshore-01.jpg');"></div>
                                        <div class="carousel-item" style="background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/319606/yellow-dawg-fishing-inshore-02.jpg');"></div>
                                        <div class="carousel-item" style="background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/319606/yellow-dawg-fishing-inshore-03.jpg');"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 card-content order-md-0 order-lg-1">
                                <div class="card-height d-flex align-items-center justify-content-center">
                                    <div class="card-text">
                                        <h2>Inshore Fishing Charters</h2>
                                        <p>Praesent et purus mi. Morbi hendrerit magna placerat risus imperdiet pharetra. Duis mi nisi, tempus non aliquet sed, iaculis dictum justo. Donec vulputate dignissim quam, quis varius purus. In dapibus libero ligula, sit amet ultrices lectus venenatis et.</p>
                                        <button>Learn More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-single card-bird-watching col-md-12 col-lg-6">
                        <div class="row">
                            <div class="col-xs-12 col-sm-6 card-content order-md-1 order-lg-0">
                                <div class="card-height d-flex align-items-center justify-content-center">
                                    <div class="card-text">
                                        <h2>Hook N Cook</h2>
                                        <p>We specialize in the full experience by putting you on the fish and then work with local restaurants to cook your catch!</p>
                                        <button>Learn More</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 card-img order-md-0 order-lg-1">
                                <div id="birdTour" class="carousel slide" data-ride="carousel">
                                    <ol class="carousel-indicators">
                                        <li class="active" data-target="#birdTour" data-slide-to="0"></li>
                                        <li data-target="#birdTour" data-slide-to="1"></li>
                                        <li data-target="#birdTour" data-slide-to="2"></li>
                                    </ol>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active" style="background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/319606/yellow-dawg-fishing-eat-what-you-catch-01.jpg');"></div>
                                        <div class="carousel-item" style="background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/319606/yellow-dawg-fishing-eat-what-you-catch-02.jpg');"></div>
                                        <div class="carousel-item" style="background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/319606/yellow-dawg-fishing-eat-what-you-catch-03.jpg');"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-single card-manatee-tour col-md-12 col-lg-6">
                        <div class="row">
                            <div class="col-xs-12 col-sm-6 card-content">
                                <div class="card-height d-flex align-items-center justify-content-center">
                                    <div class="card-text">
                                        <h2>Private Sunset Wildlife Tours</h2>
                                        <p>These tours are a fun activity for families and individuals wanting a special, memorable experience. Just show up at the specified time, bring a camera, snacks and beverages ( Beer & wine is permitted ). Tours run about two hours long and give customers many opportunities to see local populations and pods of dolphins.</p>
                                        <button>Learn More</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6 card-img">
                                <div id="manateeTour" class="carousel slide" data-ride="carousel">
                                    <ol class="carousel-indicators">
                                        <li class="active" data-target="#manateeTour" data-slide-to="0"></li>
                                        <li data-target="#manateeTour" data-slide-to="1"></li>
                                        <li data-target="#manateeTour" data-slide-to="2"></li>
                                    </ol>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active" style="background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/319606/yellow-dawg-fishing-wildlife-dolphin.jpg');"></div>
                                        <div class="carousel-item" style="background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/319606/yellow-dawg-fishing-wildlife-manatee.jpg');"></div>
                                        <div class="carousel-item" style="background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/319606/yellow-dawg-fishing-wildlife-bird.jpg');"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

        </>
    )
}
