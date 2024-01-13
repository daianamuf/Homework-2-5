import { useReducer } from "react";

const initialState = {
  inputs: {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  },
  errors: {},
};

function formReducer(state, action) {
  switch (action.type) {
    case "setInput":
      return {
        ...state,
        inputs: { ...state.inputs, [action.field]: action.value },
      };
    case "setError":
      return {
        ...state,
        errors: { ...state.errors, [action.field]: action.error },
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "setInput", field: name, value });
    validateInput(name, value);
  };

  const validateInput = (name, value) => {
    let error = "";
    switch (name) {
      case "username":
        if (!value) {
          error = "Username is required";
        } else if (!/^(?=(?:.*\d){2})(?=.{4,})/.test(value)) {
          error =
            "Username must be at least 4 characters long and contain at least 2 numbers ";
        }
        break;
      case "email":
        if (!value) {
          error = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          error = "Email is invalid";
        }
        break;
      case "password":
        if (!value) {
          error = "Password is required";
        } else if (!/^(?=(?:.*\d){2})(?=.*[!@#$%^&*])(?=.{6,})/.test(value)) {
          error =
            "Password must be at least 6 characters long, contain at least 2 numbers and one special character";
        }
        break;
      case "confirmPassword":
        if (!value) {
          error = "Password confirmation is required";
        } else if (value !== state.inputs.password) {
          error = "Passwords do not match";
        }
        break;
      default:
        break;
    }
    dispatch({ type: "setError", field: name, error });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Object.keys(state.inputs).forEach((key) =>
      validateInput(key, state.inputs[key])
    );
    if (Object.values(state.errors).every((error) => error === "")) {
      console.log("Form submitted", state.inputs);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="heading">Hello!</h1>

      <div className="form-group">
        <input
          id="username"
          name="username"
          className="input username"
          onChange={handleChange}
        />

        {state.errors.username ? (
          <p className="error">{state.errors.username}</p>
        ) : (
          <label htmlFor="username">Username</label>
        )}
      </div>

      <div className="form-group">
        <input
          id="email"
          name="email"
          type="email"
          className="input email"
          onChange={handleChange}
        />

        {state.errors.email ? (
          <p className="error">{state.errors.email}</p>
        ) : (
          <label htmlFor="email">Email</label>
        )}
      </div>

      <div className="form-group">
        <input
          id="password"
          name="password"
          type="password"
          className="input password"
          onChange={handleChange}
        />

        {state.errors.password ? (
          <p className="error">{state.errors.password}</p>
        ) : (
          <label htmlFor="password">Password</label>
        )}
      </div>

      <div className="form-group">
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          className="input password"
          onChange={handleChange}
        />

        {state.errors.confirmPassword ? (
          <p className="error">{state.errors.confirmPassword}</p>
        ) : (
          <label htmlFor="confirmPassword">Confirm Password</label>
        )}
      </div>

      <button
        type="submit"
        className="btn"
        disabled={Object.values(state.errors).some((error) => error)}
      >
        Create account
      </button>
    </form>
  );
}

export default App;
