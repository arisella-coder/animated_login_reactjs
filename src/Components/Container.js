import { useState } from "react";
import Form from "./Form";
import SocialIcons from "./SocialIcons";
import Toggle from "./Toggle";
import "./Container.css";

const Container = () => {
  const [isSignUpActive, setIsSignUpActive] = useState(false);

  const toggleActive = () => {
    setIsSignUpActive(!isSignUpActive);
  };

  return (
    <div className={`container ${isSignUpActive ? 'active' : ''}`}>
      <div className="form-container sign-up">
        <Form
          heading="Create Account"
          buttonText="Sign Up"
          socialIcons={<SocialIcons />}
        />
      </div>
      <div className="form-container sign-in">
        <Form
          heading="Sign In"
          buttonText="Sign In"
          socialIcons={<SocialIcons />}
          forgotPassword={true}
        />
      </div>
      <Toggle onToggle={toggleActive} isSignUpActive={isSignUpActive} />
    </div>
  );
};
 
export default Container;
