import React from 'react';

const AdminLogin = () => {
  return (
    <div>
      <h2>Admin Login</h2>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
