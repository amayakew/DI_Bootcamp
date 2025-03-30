import React from 'react';

class ErrorBoundry extends React.Component{
	constructor(){
		super()
		this.state = {error: null, errorInfo: null}
	}

    componentDidCatch(error, errorInfo) {
        this.setState({
            error,
            errorInfo,
        })
    }

    render() {
        if (this.state.error) { 
            return (
                <>
                    <h2>Something went wrong</h2>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo.componentStack}
                    </details>
                </>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundry;