const NewQuestion = props => {
  let formFields = {};

  return (
    <form
      
      onSubmit={e => {
        props.handleFormSubmit(formFields.pri.value, formFields.question.value);
        e.target.reset();
        e.preventDefault();
      }}
    >
      <input
        ref={input => (formFields.pri = input)}
        placeholder="Enter the pri"
      />
      <input
        ref={input => (formFields.question = input)}
        placeholder="Enter the question"
      />
      <button>Submit</button>
    </form>
  );
};
