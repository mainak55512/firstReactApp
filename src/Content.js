import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "holderjs";

function Content() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="holder.js/800x600?text=Touching the teeth means touching your skull&bg=373940"
                    alt="Touching the teeth means touching your skull"
                />
                <Carousel.Caption>
                    <h5>Click {">"} for more</h5>
                    <p>What the F@ct!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="holder.js/800x600?text=Snakes are 90 percent tail&bg=373940"
                    alt="Snakes are 90% tail"
                />

                <Carousel.Caption>
                    <h5>Click {">"} for more</h5>
                    <p>What the F@ct!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="holder.js/800x600?text=Ice cubes swim in their own blood&bg=373940"
                    alt="Ice cubes swim in their own blood"
                />

                <Carousel.Caption>
                    <h5>Click {">"} for more</h5>
                    <p>What the F@ct!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="holder.js/800x600?text=Anything done by Debjit is considered as group work&bg=373940"
                    alt="Anything done by Debjit is considered as group work"
                />

                <Carousel.Caption>
                    <h5>Click {">"} for more</h5>
                    <p>What the F@ct!</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Content;