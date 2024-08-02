import React, { Component } from 'react';
import Error from '../Error'

const WithoutInternet = WrappedComponent => {
    return class extends Component {
        state = {
            isOnline: navigator.onLine
        };

        componentDidMount() {
            window.addEventListener('offline', this.handleOffline);
            window.addEventListener('online', this.handleOnline);
        }

        componentWillUnmount() {
            window.removeEventListener('offline', this.handleOffline);
            window.removeEventListener('online', this.handleOnline);
        }

        handleOffline = () => {
            this.setState({ isOnline: false });
        };

        handleOnline = () => {
            this.setState({ isOnline: true });
        };

        render() {
            const { isOnline } = this.state;

            if (!isOnline) {
                return <Error />;
            }

            return <WrappedComponent {...this.props} />;
        }
    };
};

export default WithoutInternet;
