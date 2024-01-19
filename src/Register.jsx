import React, { useState } from 'react';
function Register() {
  const [data, setData] = useState({
    fullname: '',
    phone: '',
    email: '',
    msg: '',
    password: '',
    confirmPassword: '',
    employeeId: '',
    department: '',
    designation: '',
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`Registration Details:
      Full Name: ${data.fullname}
      Phone: ${data.phone}
      Email: ${data.email}
      Message: ${data.msg}
      Password: ${data.password}
      Confirm Password: ${data.confirmPassword}
      Employee ID: ${data.employeeId}
      Department: ${data.department}
      Designation: ${data.designation}`);
  };

  return (
    <div>
      <div className="my-5">
        <h1 className="text-center">Register</h1>
      </div>

      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              {/* Full Name */}
              <div className="mb-3">
                <label htmlFor="fullname" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fullname"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Enter your Name"
                  required
                />
              </div>

              {/* Phone */}
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="Enter your Phone"
                />
              </div>

              {/* Email */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                  required
                />
              </div>

              {/* Message */}
              <div className="mb-3">
                <label htmlFor="msg" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="msg"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                ></textarea>
              </div>

              {/* Password */}
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={data.password}
                  onChange={InputEvent}
                  placeholder="Enter your Password"
                  required
                />
              </div>

              {/* Confirm Password */}
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={data.confirmPassword}
                  onChange={InputEvent}
                  placeholder="Confirm your Password"
                  required
                />
              </div>

              {/* Employee ID */}
              <div className="mb-3">
                <label htmlFor="employeeId" className="form-label">
                  Employee ID
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="employeeId"
                  name="employeeId"
                  value={data.employeeId}
                  onChange={InputEvent}
                  placeholder="Enter your Employee ID"
                  required
                />
              </div>

              {/* Department Dropdown */}
              <div className="mb-3">
                <label htmlFor="department" className="form-label">
                  Department
                </label>
                <select
                  className="form-select"
                  id="department"
                  name="department"
                  value={data.department}
                  onChange={InputEvent}
                  required
                >
                  <option value="">Select Department</option>
                  <option value="IT">IT</option>
                  <option value="HR">HR</option>
                  <option value="Finance">Finance</option>
                  <option value="Marketing">Marketing</option>
                </select>
              </div>

              {/* Designation Dropdown */}
              <div className="mb-3">
                <label htmlFor="designation" className="form-label">
                  Designation
                </label>
                <select
                  className="form-select"
                  id="designation"
                  name="designation"
                  value={data.designation}
                  onChange={InputEvent}
                  required
                >
                  <option value="">Select Designation</option>
                  <option value="Manager">Manager</option>
                  <option value="Employee">Employee</option>
                </select>
              </div>

              <div className="col-12">
                <button
                  className="btn btn-outline-primary"
                  type="submit"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
