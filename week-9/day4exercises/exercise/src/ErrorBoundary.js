import React from "react";

class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch = (error, errorInfo) => {
    this.setState({ hasError: true });
    console.log("error=>", error);
    console.log("errorInfo=>", errorInfo);
  };

  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

export default ErrorBoundary;