/* eslint-disable  no-restricted-globals */
import React from "react";
import Button from "./Button";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center">
          <h1 className="text-xl text-teal-900 mb-2">Something went wrong.</h1>
          <h2 className="text-lg mb-2">
            Please refresh the application and try again
          </h2>
          <Button onClick={() => location.reload()}>Refresh</Button>
        </div>
      );
    }

    return this.props.children;
  }
}
