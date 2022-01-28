import React from 'react';
import './Section.css';
import Image from '../image/Image'
import Container from '../container/Container'

class Section extends React.Component {
    render() {
        return (
            <section className="card-section d-flex justify-content-center">
                <div className="card">
                    <div>
                        <Image />
                    </div>
                    <h2 className="fw-bold acab text-light text-start fs-5 ms-4 mt-2">Equilibrium #3429</h2>
                    <p className="text-blue text-start ms-4 mt-2">Our Equilibrium collection promotes balance and calm.</p>
                    <Container />
                </div>
            </section>
        );
    }
}
export default Section;
