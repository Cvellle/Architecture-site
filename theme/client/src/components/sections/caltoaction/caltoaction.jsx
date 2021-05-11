import React, {Component} from 'react';
import './caltoaction.scss';

class CallToActionSection extends Component {
    render (){
        return (
            <div className="call-to-action text-center">
                <div className="container">
                    <h2 className="text-uppercase text-white">DOSTUPNO ZA</h2>
                    <h1 className="text-uppercase text-white mb-4">USELJENJE ODMAH !</h1>
                    <div className="btn-call-to-action">
                        <a href="#" className="btn btn-dark" role="button">Pozovite nas</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default CallToActionSection