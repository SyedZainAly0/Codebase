import React from "react";


function auth(WrappedComponent) {
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


const ProtectedDashboard = auth(Dashboard);


function Data() {
  return (
    <div>
      <ProtectedDashboard />
    </div>
  );
}

export default Data;