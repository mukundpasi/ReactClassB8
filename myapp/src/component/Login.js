import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

export default function Login() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card login-card">
            <div className="card-body">
              <h4 className="card-title text-center mb-4">Login</h4>
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-block">Login</button>
                </div>
                <div className="text-center mt-3">
                  <a href="#" className="text-decoration-none">Forgot password?</a>
                </div>
              </form>
            </div>
            <div className="card-footer text-center">
              Don't have an account? <a href="#" className="text-decoration-none">Sign up</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
