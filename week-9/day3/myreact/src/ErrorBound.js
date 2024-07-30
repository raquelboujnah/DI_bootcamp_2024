import React from 'react';

class ErrorBoundary extends React.Component {
    constructor() {
        super()
        this.state ={
            hasError: false,
            error:null,
            errorInfo:null
        };
    }

    static getDerivedStateFromError = (error) => {
        return {hasError:true};
    }

    componentDidCatch =(error, errorInfo) => {
        this.setState({error:error,errorInfo:errorInfo})
        console.log("error=>", error);
        console.log("errorInfo=>", errorInfo);

    }

    render(){
        if(this.state.hasError) {
            return (
                <details style={{ whiteSpace: 'pre-wrap' }}>
                    {this.state.error && this.state.error?.toString()}
                    <br />
                    {this.state.errorInfo?.componentStack}
                </details>
            )
        }else{
            return this.props.children;
        }
    }
}

export default ErrorBoundary;