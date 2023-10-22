import React, { useState } from "react";
import ErrorBoundary from "./ErrorBoundary"; // Import the ErrorBoundary component

export const TestPage = () => {
  const [error, setError] = useState(false);

  const handleError = () => {
    setError(true);
  };

  return (
    <div className="testPage">
      <h1 onClick={handleError}>Click below to test for ErrorBoundary</h1>
      {error && <ErrorBoundary />} {/* Display the ErrorBoundary when error is true */}
    </div>
  );
};
