import React from "react";
import OnBoard from './OnBoard';

export default function NewUser(props) {
  const checkForLogin = () => {
    return localStorage.getItem("access_token");
  };

  const renderContent = () => {
    return <OnBoard />;
  };
  return (
    <div>{checkForLogin() ? renderContent() : props.history.push("/")}</div>
  );
}
