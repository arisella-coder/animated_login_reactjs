const Form = ({ heading, socialIcons,forgotPassword,buttonText }) => {
  return (
    <div>
      <form>
        <h1>{heading}</h1>
        {socialIcons}
        <span>or use tour email for registration</span>
        <input
          type="text"
          placeholder="Name"
          style={heading === "Create Account" ? {} : { display: "none" }}
        />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="password" />
        {forgotPassword && <a href="*">Forget your Password</a>}
        <button>{buttonText}</button>
      </form>
    </div>
  );
};

export default Form;
