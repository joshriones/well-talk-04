// components/RegistrationForm.js
"use client";

// DISCLAIMER: THIS PAGE IS FOR TESTING SA SIGNUP ONLY

import { useState } from "react";
import { useRouter } from "next/navigation";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    institutionalEmail: "",
    idNumber: "",
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    password: "",
    college: "",
    program: "",
    year: 0,
    birthDate: "",
    contactNumber: "",
    address: "",
    role: "",
  });

  const router = useRouter();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  console.log(formData.contactNumber, formData.birthDate);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push("/login");
      } else {
        throw new Error("Failed to register user");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="institutionalEmail"
        placeholder="Institutional Email"
        value={formData.institutionalEmail}
        onChange={handleChange}
      />
      <input
        type="text"
        name="idNumber"
        placeholder="ID Number"
        value={formData.idNumber}
        onChange={handleChange}
      />
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="middleName"
        placeholder="Middle Name"
        value={formData.middleName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="gender"
        placeholder="Gender"
        value={formData.gender}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />

      <select
        name="role"
        id="role"
        value={formData.role}
        onChange={handleChange}
      >
        <option value="">...</option>
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
        <option value="counselor">Counselor</option>
      </select>

      {formData?.role === "student" && (
        <>
          <input
            type="text"
            name="college"
            placeholder="College"
            value={formData.college}
            onChange={handleChange}
          />
          <input
            type="text"
            name="program"
            placeholder="Program"
            value={formData.program}
            onChange={handleChange}
          />
          <input
            type="number"
            name="year"
            placeholder="Year lvl"
            value={formData.year}
            onChange={handleChange}
          />

          <input
            type="date"
            name="birthdate"
            placeholder="Birthdate"
            value={formData.birthDate}
            onChange={handleChange}
          />

          <input
            type="text"
            name="contact"
            placeholder="Contact"
            value={formData.contactNumber}
            onChange={handleChange}
          />

          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
          />
        </>
      )}
      {formData?.role === "teacher" && (
        <>
          <input
            type="text"
            name="college"
            placeholder="College"
            value={formData.college}
            onChange={handleChange}
          />
        </>
      )}

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
