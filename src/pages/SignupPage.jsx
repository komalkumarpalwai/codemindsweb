import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  // Hardcoded credentials
  const ADMIN_CREDENTIALS = [
    { email: "admin@company.com", password: "admin123" },
    { email: "superadmin@company.com", password: "superadmin123" }
  ];
  
  const EMPLOYEE_CREDENTIALS = [
    { email: "employee1@company.com", password: "emp123" },
    { email: "employee2@company.com", password: "emp456" }
  ];

  const [isAdminLogin, setIsAdminLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Validate inputs
    if (!email || !password) {
      setError("Please enter both email and password");
      setLoading(false);
      return;
    }

    // Simulate API call with setTimeout
    setTimeout(() => {
      // Check credentials
      const credentials = isAdminLogin ? ADMIN_CREDENTIALS : EMPLOYEE_CREDENTIALS;
      const validUser = credentials.find(
        user => user.email === email && user.password === password
      );

      if (validUser) {
        // Successful login - navigate to appropriate dashboard
        if (isAdminLogin) {
          navigate("/admin-dashboard");
        } else {
          navigate("/employee-dashboard");
        }
      } else {
        setError("Invalid credentials. Please try again.");
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          {isAdminLogin ? "Admin Login" : "Employee Login"}
        </h2>

        {/* Login Type Toggle */}
        <div className="flex justify-center mb-6">
          <button
            className={`px-6 py-2 font-medium rounded-l-lg ${
              !isAdminLogin ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setIsAdminLogin(false)}
          >
            Employee
          </button>
          <button
            className={`px-6 py-2 font-medium rounded-r-lg ${
              isAdminLogin ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setIsAdminLogin(true)}
          >
            Admin
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={isAdminLogin ? "admin@company.com" : "employee@company.com"}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200 flex justify-center items-center"
            disabled={loading}
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Logging in...
              </>
            ) : (
              "Login"
            )}
          </button>
        </form>

        {/* Demo Credentials Hint */}
        <div className="mt-6 p-4 bg-gray-50 rounded-md text-sm">
          <h3 className="font-medium mb-2">Demo Credentials:</h3>
          <p className="mb-1">
            <span className="font-medium">{isAdminLogin ? "Admin" : "Employee"} 1:</span> {isAdminLogin ? "admin@company.com" : "employee1@company.com"} / {isAdminLogin ? "admin123" : "emp123"}
          </p>
          <p>
            <span className="font-medium">{isAdminLogin ? "Admin" : "Employee"} 2:</span> {isAdminLogin ? "superadmin@company.com" : "employee2@company.com"} / {isAdminLogin ? "superadmin123" : "emp456"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;