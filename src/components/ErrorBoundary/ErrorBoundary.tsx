import {Component} from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

class ErrorBoundary extends Component {
    state = {
        error: false
    }

    componentDidCatch(error: any, errorInfo: any) {
        console.log(error, errorInfo)
        this.setState({
            error: true
        })
    }

    render() {
        if (this.state.error) {
            return (
                <ErrorMessage/>
            )
        }
        // @ts-ignore
        return this.props.children;
    }

}

export default ErrorBoundary;