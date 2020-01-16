import React from 'react';
import moment from 'moment';

export default class Countdown extends React.Component {
    state = {
        days: undefined,
        hours: undefined,
        minutes: undefined,
        seconds: undefined
    };

    componentDidMount() {
        this.interval = setInterval(() => {
            this.countdown();
        }, 1000);
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    countdown = () => {
        const { timeTillDate, timeFormat } = this.props;
        const then = moment(timeTillDate, timeFormat);
        const now = moment();
        const countdown = moment(then - now);
        const days = countdown.format('D');
        const hours = countdown.format('HH');
        const minutes = countdown.format('mm');
        const seconds = countdown.format('ss');
        this.setState({ days, hours, minutes, seconds });
    }

    render() {
        const { days, hours, minutes, seconds } = this.state;

        return (
            <div className="countdown-wrapper">
                <div className="flip-clock">

                    <span className="flip-clock__piece flip">
                        <span className="flip-clock__card flip-card">

                            <b className="flip-card__top">
                                {days}
                            </b>

                            <b className="flip-card__bottom">
                                {days}
                            </b>

                            <b className="flip-card__back">
                                {days}
                            </b>

                            <b className="flip-card__back-bottom">
                                {days}
                            </b>

                        </span>
                        <span className="flip-clock__slot">days</span>
                    </span>

                    <span className="flip-clock__piece flip">
                        <span className="flip-clock__card flip-card">

                            <b className="flip-card__top">
                                {hours}
                            </b>

                            <b className="flip-card__bottom">
                                {hours}
                            </b>

                            <b className="flip-card__back">
                                {hours}
                            </b>

                            <b className="flip-card__back-bottom">
                                {hours}
                            </b>
                        </span>
                        <span className="flip-clock__slot">hours</span>
                    </span>

                    <span className="flip-clock__piece flip">
                        <span className="flip-clock__card flip-card">

                            <b className="flip-card__top">
                                {minutes}
                            </b>

                            <b className="flip-card__bottom">
                                {minutes}
                            </b>

                            <b className="flip-card__back">
                                {minutes}
                            </b>

                            <b className="flip-card__back-bottom">
                                {minutes}
                            </b>
                        </span>
                        <span className="flip-clock__slot">minutes</span>
                    </span>

                    <span className="flip-clock__piece flip">
                        <span className="flip-clock__card flip-card">

                            <b className="flip-card__top">
                                {seconds}
                            </b>

                            <b className="flip-card__bottom">
                                {seconds}
                            </b>

                            <b className="flip-card__back">
                                {seconds}
                            </b>

                            <b className="flip-card__back-bottom">
                                {seconds}
                            </b>

                        </span>
                        <span className="flip-clock__slot">seconds</span>
                    </span>

                </div>
            </div>
        );
    }
}