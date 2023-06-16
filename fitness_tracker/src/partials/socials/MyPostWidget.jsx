import React, { useState, useContext } from "react";
import "../../css/additional-styles/my-post.css";
import { TransactionContext } from "../../context/TransactionContext";

// FieldGroup Component
const FieldGroup = (props) => {
  const { label, handleChange } = props;
  const [isRaised, setIsRaised] = useState(false);

  return (
    <div className="form__field-group">
      <label className={`form__label ${isRaised && "form__label--raised"}`}>
        {label}
      </label>
      <input
        className="form__input"
        type="textarea"
        name="message"
        onChange={handleChange}
        onFocus={() => setIsRaised(true)}
        onBlur={(e) => e.target.value < 1 && setIsRaised(false)}
      />
    </div>
  );
};

// My Post Component
const MyPostWidget = (props) => {
  const { currentAccount, formData, sendTransaction, handleChange, loading } =
    useContext(TransactionContext);

  const handleSubmit = (e) => {
    e.target.blur();
    if (currentAccount) {
      console.log("Logged IN");
      const { addressTo, amount, keyword, message } = formData;
      if (!message || !addressTo || !amount || !keyword) return;

      sendTransaction();
    }
  };

  return (
    <form className="form" onSubmit={(e) => e.preventDefault()}>
      <h3 className="form__title">My Fitness Journey</h3>
      <FieldGroup label="My Fitnes Journey" handleChange={handleChange} />

      {!loading ? (
        <input
          className="form__submit"
          type="submit"
          value="Submit"
          onClick={(e) => handleSubmit(e)}
        />
      ) : (
        <div>
          <div className="progress-6"></div>
        </div>
      )}
    </form>
  );
};

export default MyPostWidget;
