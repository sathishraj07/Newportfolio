// CustomToast.js
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastContent = ({ type, message }) => {
  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      padding: "12px 16px",
      borderRadius: "8px",
      color: "#fff",
      fontWeight: "500",
      fontSize: "14px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
    },
    icon: {
      fontSize: "18px",
    },
  };

  const bgColors = {
    success: "#4CAF50",
    error: "#F44336",
    info: "#2196F3",
    warning: "#FF9800",
  };

  const icons = {
    success: "✅",
    error: "❌",
    info: "ℹ️",
    warning: "⚠️",
  };

  return (
    <div style={{ ...styles.container, background: bgColors[type] }}>
      <span style={styles.icon}>{icons[type]}</span>
      <span>{message}</span>
    </div>
  );
};

// Utility object with `show` method
const CustomToast = {
  show: (type, message) => {
    toast(<ToastContent type={type} message={message} />, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
    });
  },

  // Component to render ToastContainer once in your app
  Container: () => <ToastContainer />,
};

export default CustomToast;
