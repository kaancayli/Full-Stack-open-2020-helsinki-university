import React from "react";

const Notification = ({ message, status }) => {
  const errorStyle = {
    color: "red",
    background: "lightgrey",
    fontSize: "20px",
    borderStyle: "solid",
    borderRadius: "5px",
    padding: "10px",
    marginBottom: "10px",
  };

  const successStyle = {
    color: "green",
    background: "lightgrey",
    fontSize: "20px",
    borderStyle: "solid",
    borderRadius: "5px",
    padding: "10px",
    marginBottom: "10px",
  };

  if (message === null || status === null) {
    return null;
  }

  if (status === "error") {
    return (
      <div style={errorStyle} className="message">
        {message}
      </div>
    );
  } else if (status === "success") {
    return (
      <div style={successStyle} className="message">
        {message}
      </div>
    );
  } else {
    return null;
  }
};

export default Notification;
