
function shareOpinionAction(prevFormState, formData) {
  const username = formData.get("username");
  const title = formData.get("title");
  const body = formData.get("body");
  
  // console.log(enteredEmail);

  let errors = [];

  if (!isEmail(email)) {
    errors.push("Invalid email Address");
  }
  if (!isNotEmpty(password) || !hasMinLength(password, 6)) {
    errors.push("You must provide a password with at least six characters");
  }
  if (!isEqualToOtherValue(password, confirmPassword)) {
    errors.push("Passwords do not match");
  }

  if (!isNotEmpty(firstName) || !isNotEmpty(lastName)) {
    errors.push("Please provide both your first name and last name");
  }
  if (!isNotEmpty(role)) {
    errors.push("Please select a role");
  }
  if (!terms) {
    errors.push("You must agree to the terms and conditions");
  }
  if (acquisitionChannel.length === 0) {
    errors.push("Please select at least one acquisition channel");
  }

  if (errors.length > 0) {
    return {
      errors,
      enteredValues: {
        email,
        firstName,
        lastName,
        role,
        terms,
        acquisitionChannel,
      },
    };
  }
  return {
    errors: null,
  };
}
export function NewOpinion() {
  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input type="text" id="userName" name="userName" />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea id="body" name="body" rows={5}></textarea>
        </p>

        <p className="actions">
          <button type="submit">Submit</button>
        </p>
      </form>
    </div>
  );
}
