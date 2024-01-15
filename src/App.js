import logo from './logo.svg';
import './App.css';
import "./style.css";

function App() {
  return (
    <div className="login-page">
      <div className="div">
        <div className="group">
          <div className="overlap-group">
            <img className="untitled" alt="Untitled" src="untitled-1-2-1-1.png" />
            <div className="text-wrapper">Sow your Success</div>
          </div>
        </div>
        <div className="overlap">
          <div className="group-2">
            <div className="text-wrapper-2">Welcome Back</div>
            <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <p className="login-with-others">
                  <span className="span">Login</span>
                  <span className="text-wrapper-3"> with Others</span>
                </p>
                <img className="subtract" alt="Subtract" src="subtract.svg" />
              </div>
            </div>
            <div className="overlap-wrapper">
              <div className="overlap-2">
                <div className="rectangle" />
                <div className="text-wrapper-4">LOG IN</div>
              </div>
            </div>
            <div className="div-wrapper">
              <div className="overlap-3">
                <div className="text-wrapper-5">Password</div>
                <img className="frame" alt="Frame" src="frame.svg" />
              </div>
            </div>
            <div className="group-3">
              <div className="overlap-3">
                <div className="text-wrapper-5">Username</div>
                <img className="frame" alt="Frame" src="image.svg" />
              </div>
            </div>
            <div className="group-4">
              <div className="group-wrapper">
                <div className="group-5">
                  <p className="login-with-facebook">
                    <span className="text-wrapper-6">Login with </span>
                    <span className="text-wrapper-7">Facebook</span>
                  </p>
                  <img className="img" alt="Facebook" src="facebook-1.png" />
                </div>
              </div>
              <div className="overlap-4">
                <div className="group-6">
                  <div className="group-7">
                    <p className="login-with-google">
                      <span className="text-wrapper-6">Login with </span>
                      <span className="text-wrapper-7">Google</span>
                    </p>
                    <img className="img" alt="Google" src="google-1.png" />
                  </div>
                </div>
              </div>
            </div>
            <div className="group-8">
              <div className="text-wrapper-8">Don’t have an account?</div>
              <div className="text-wrapper-9">Sign Up</div>
            </div>
            <div className="section-forgot">
              <div className="text-wrapper-10">Forgot password?</div>
              <div className="text-wrapper-11">Remember me</div>
              <div className="rectangle-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
