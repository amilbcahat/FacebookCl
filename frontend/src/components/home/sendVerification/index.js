import React from "react";
import { useState } from "react";
import axios from "axios";
import "./style.css";
export default function SendVerification({ user }) {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const sendVerificationLink = async () => {
    try {
      const { data } = await axios.post(
        `http://localhost:8000/sendVerification`,
        {},
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      setSuccess(data.message);
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  return (
    <div className="send_verification">
      <span>
        Your Account is not verified ,verify your account before it gets
        disabled after a month from creating.
      </span>
      <a onClick={() => sendVerificationLink()}>
        Click here to resend verification link
      </a>
      {success && <div className="success_text">{success}</div>}
      {error && <div className="error_text">{error}</div>}
    </div>
  );
}
