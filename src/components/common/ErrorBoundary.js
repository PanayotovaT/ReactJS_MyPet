import { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null
        };
    };

    static getDerivesStateFromError(error) {
        return {error};
    };

    componentDidCatch(error) {
        console.log('error');
        console.log(error);
    }

    render() {

        if(this.state.error) {
            return(
                <h1>404 Not Found</h1>
            );
        };
        
        return this.props.children;
    };
};

export default ErrorBoundary;