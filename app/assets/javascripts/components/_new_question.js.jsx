const NewQuestion = props => {
  let formFields = {};

  return (
    <form
      
      onSubmit={e => {
        props.handleFormSubmit(formFields.pri.value, formFields.question.value, formFields.teaming_stage.value, formFields.appears_day.value, formFields.frequency.value, formFields.question_type.value, formFields.role.value, formFields.required.value, formFields.conditions.value, formFields.mapping.value);
        e.target.reset();
        e.preventDefault();
      }}
    >
      <input
       type="integer"
        ref={input => (formFields.pri = input)}
        placeholder="Pri"
      />
      {" "}
      <input
      type="string"
        ref={input => (formFields.question = input)}
        placeholder="Question"
      />
      {" "}

      <input
      type="string"
        ref={input => (formFields.teaming_stage = input)}
        placeholder="Teaming Age"
      />
      {" "}
      <input
      type="integer"
        ref={input => (formFields.appears_day = input)}
        placeholder="Appears Day"
      />
      {" "}

      <input
      type="integer"
        ref={input => (formFields.frequency = input)}
        placeholder="Frequency"
      />
      {" "}
      <input
      type="string"
        ref={input => (formFields.question_type = input)}
        placeholder="Question Type"
      />
      {" "}

      <input
      type="integer"
        ref={input => (formFields.role = input)}
        placeholder="Role"
      />
      {" "}
      <input
      type="boolean"
        ref={input => (formFields.required = input)}
        placeholder="Required"
      />
      {" "}

      <input
      type="string"
        ref={input => (formFields.conditions = input)}
        placeholder="Conditions"
      />
      {" "}
      <input
      type="string"
        ref={input => (formFields.mapping = input)}
        placeholder="Mapping"
      />
      {" "}
      <button class='btn btn-info btn-sm'>Submit</button>
      <hr />
    </form>
  );
};
