import React from "react";

class ErrorBoundary extends React.Component<{
  fallback: React.ReactNode;
  children: React.ReactNode;
}> {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error: any) {
    // if children code throws an error then this component will catch the error using 'getDerivedStateFromError'
    return {
      hasError: true,
      error,
    };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
