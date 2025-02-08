import { useActionState } from "react";
import { hasMinLength, isNotEmpty } from "../util/validation";

function shareOpinionAction(prevFormState, formData) {
  const userName = formData.get("userName");
  const title = formData.get("title");
  const body = formData.get("body");
  console.log(userName);
  let errors = [];

  if (!isNotEmpty(userName)) {
    errors.push("You must provide a userName");
  }
  if (!isNotEmpty(title) || !hasMinLength(body, 15)) {
    errors.push("Title must be at least five character long");
  }
  if (!isNotEmpty(body) || hasMinLength(body, 300) || !hasMinLength(body, 10)) {
    errors.push("Opinion must be between 10 and 300 character long");
  }

  if (errors.length > 0) {
    return {
      errors,
      enteredValues: {
        userName,
        title,
        body,
      },
    };
  }
  return {
    errors: null,
  };
}
export function NewOpinion() {
  const [formState, formAction] = useActionState(shareOpinionAction, {
    errors: null,
  });
  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input
              type="text"
              id="userName"
              name="userName"
              defaultValue={formState.enteredValues?.userName}
            />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              defaultValue={formState.enteredValues?.title}
            />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea
            id="body"
            name="body"
            rows={5}
            defaultValue={formState.enteredValues?.body}
          ></textarea>
        </p>
        {formState.errors && (
          <ul className="errors">
            {formState.errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
        <p className="actions">
          <button type="submit">Submit</button>
        </p>
      </form>
    </div>
  );
}
