import React from "react";
import "./Form.css"

export const FormUI = (props) => {
  return (
    <div className="form-box">
      <div className="form-heading">
        <h1>{props.formType}</h1>
        {props.statusCodeText}
      </div>
      <div className="form-details">
        {props.formType === "Sign Up" && (
          <div className="username-box">
            <label>
              <span>Username:</span>
              <br />
              <input
                type="text"
                id="username"
                placeholder="Tim"
                value={props.username}
                onChange={props.handleChangeUsername}
                required
              />
            </label>
          </div>
        )}
        <div className="email-box">
          <label>
            <span>Email:</span>
            <br />
            <input
              type="email"
              id="email"
              placeholder="example@duc.tiv"
              value={props.email}
              onChange={props.handleChangeEmail}
              required
            />
          </label>
        </div>
        <div className="password-box">
          <label>
            <span>Password:</span>
            <br />
            <input
              type="password"
              id="password"
              placeholder="password"
              minLength="8"
              value={props.password}
              onChange={props.handleChangePassword}
              required
            />
          </label>
        </div>
        <div className="submit-btn">
          <input type="submit" id="submit" value={props.formType} />
        </div>
      </div>
    </div>
  );
};
