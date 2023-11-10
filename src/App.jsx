import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    username: "",
    password: "",
    scrollValue: 50,
    selectedColor: "#ff0000",
    selectedDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleScrollChange = (e) => {
    setFormData({
      ...formData,
      scrollValue: e.target.value,
    });
  };

  const handleColorChange = (e) => {
    setFormData({
      ...formData,
      selectedColor: e.target.value,
    });
  };

  const handleDateChange = (e) => {
    setFormData({
      ...formData,
      selectedDate: e.target.value,
    });
  };

   const isHexColor = (color) => /^#([0-9a-fA-F]{3}){1,2}$/.test(color);

  const isRgbColor = (color) =>
    /^rgb\(\s?\d+\s?,\s?\d+\s?,\s?\d+\s?\)$/.test(color) ||
    /^rgba\(\s?\d+\s?,\s?\d+\s?,\s?\d+\s?,\s?[\d.]+\s?\)$/.test(color);

  const isValidColor = (color) => /^(red|green|blue)$/.test(color) || isHexColor(color) || isRgbColor(color);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !/^[a-zA-Z]{1,16}$/.test(formData.firstName) ||
      !/^[a-zA-Z]{1,16}$/.test(formData.lastName)
    ) {
      alert("First and last names should be 1 to 16 characters and can only include letters.");
      return;
    }

    if (!/^01/.test(formData.phone)) {
      alert("Phone number must start with '01'.");
      return;
    }

    if (!/^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com)$/.test(formData.email)) {
      alert("Email must end with @gmail.com or @yahoo.com.");
      return;
    }

    if (!isValidColor(formData.selectedColor)) {
      alert("Choose a valid color in hex or rgb format.");
      return;
    }

    if (formData.scrollValue < 50 || formData.scrollValue > 100) {
      alert("Scroll value must be between 50 and 100.");
      return;
    }

    if (!/^[a-zA-Z0-9]{8,}$/.test(formData.password)) {
      alert("Password must have at least 8 alphanumeric characters.");
      return;
    }

    const selectedDate = new Date(formData.selectedDate);
    const startDate = new Date("2020-01-01");
    const endDate = new Date("2023-12-01");

    if (!(selectedDate >= startDate && selectedDate <= endDate)) {
      alert("Choose a date between January 1, 2020, and December 1, 2023.");
      return;
    }

    // If all guard conditions pass, show a success message
    alert("Registration successful! Form submitted:", formData);
  };

  return (
    <>
      <h1>Sample form for Selenium testing</h1>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">
            Your First Name: 
            <input type="text" name="firstName" onChange={handleInputChange} />
          </label><br />
          <label htmlFor="lastName">
            Your Last Name: 
            <input type="text" name="lastName" onChange={handleInputChange} />
          </label><br />
          <label htmlFor="email">
            Email: 
            <input type="email" name="email" onChange={handleInputChange} />
          </label><br />
          <label htmlFor="phone">
            Phone: 
            <input type="tel" name="phone" onChange={handleInputChange} />
          </label><br />
          <label htmlFor="password">
            Password: 
            <input type="password" name="password" onChange={handleInputChange} />
          </label><br />
          <label htmlFor="scroll">
            Scroll Value: 
            <input
              type="range"
              name="scrollValue"
              min="0"
              max="100"
              value={formData.scrollValue}
              onChange={handleScrollChange}
            />
          </label><br />
          <label htmlFor="color">
            Choose Your Favorite Color
            <input
              type="color"
              name="selectedColor"
              value={formData.selectedColor}
              onChange={handleColorChange}
            />
          </label><br />
          <label htmlFor="date">
            Select a Date between January 1, 2020, and December 1, 2023
            <input
              type="date"
              name="selectedDate"
              value={formData.selectedDate}
              onChange={handleDateChange}
            />
          </label><br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
