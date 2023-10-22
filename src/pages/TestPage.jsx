import React, { useState } from "react";

// Define the ErrorBoundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <div>ErrorBoundary: Oops! Something went wrong.</div>;
    }
    return this.props.children;
  }
}

export const TestPage = () => {
  const [error, setError] = useState(false);

  const handleError = () => {
    setError(true);
  };

  return (
    <div className="testPage">
      <h1 onClick={handleError}>Click below to test for ErrorBoundary</h1>
      <button onClick={handleError}>TestPage</button>
    </div>
  );
};

export const TestPageWithBoundary = () => {
  const [showErrorBoundary, setShowErrorBoundary] = useState(false);

  return (
    <div className="testPageWithBoundary">
      {showErrorBoundary ? (
        <ErrorBoundary>
          <TestPage />
        </ErrorBoundary>
      ) : (
        <TestPage />
      )}
      <button onClick={() => setShowErrorBoundary(!showErrorBoundary)}>
        Toggle ErrorBoundary
      </button>
    </div>
  );
};
