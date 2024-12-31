import './Toggle.css';

const Toggle = ({ onToggle, isSignUpActive }) => {
  return (
    <div className={`toggle-container ${isSignUpActive ? "active" : ""}`}>
      <div className="toggle">
        <div className="toggle-panel toggle-left">
          <h1>Hello, Friends</h1>
          <p>
            Register with your personel details to use all of site features.
          </p>
          <button className="hidden" onClick={onToggle}>
            Sign In
          </button>
        </div>
        <div className="toggle-panel toggle-right">
          <h1>Welcome back!</h1>
          <p>Enter your personel details to use all of site features.</p>
          <button className="hidden" onClick={onToggle}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toggle;
