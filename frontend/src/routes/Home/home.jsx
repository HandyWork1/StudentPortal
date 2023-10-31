import React, { useState } from "react";

const NavigationBar = () => {
  // const navBarStyle = {
  //   display: "flex",
  //   margin-Y: 10px, // Set the display property to inline
  // };

  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-items">
          <a href="/">Home</a>
        </li>
        <li className="nav-items">
          <a href="/signup">Sign Up</a>
        </li>
      </ul>
    </nav>
  );
};

const Home = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // You can add your authentication logic here
    const { email, password } = formData;
    console.log("Email:", email);
    console.log("Password:", password);
    // Replace the console logs with your authentication logic
  };

  return (
    <>
      <div>
        <NavigationBar />
        <h1>University Management Portal</h1>

        <form onSubmit={handleFormSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
          <br />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />
          <br />

          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default Home;
