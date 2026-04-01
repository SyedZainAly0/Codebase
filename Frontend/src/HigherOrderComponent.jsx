import React from "react";

// HOC definition
function withAuth(WrappedComponent) {
  return function AuthComponent(props) {
    const isLoggedIn = true; 

    if (!isLoggedIn) {
      return <h2>Please log in to view this content</h2>;
    }

    return <WrappedComponent {...props} />;
  };
}


function Dashboard() {
  return <h1>Welcome to the Dashboard!</h1>;
}


const ProtectedDashboard = withAuth(Dashboard);


function Data() {
  return (
    <div>
      <ProtectedDashboard />
    </div>
  );
}

export default Data;