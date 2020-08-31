const EditArticle = props => {
  let formFields = {};

  return (
    <form
      
      onSubmit={e => {
        article_obj = {title: formFields.title.value, text: formFields.text.value, id: this.props.article_id}
        props.handleUpdate(article_obj);
        e.target.reset();
        e.preventDefault();
      }}
    >
      <input
        type="string"
        ref={input => (formFields.title = input)}
        defaultValue={props.title}
      />
      <input
        type="string"
        ref={input => (formFields.text = input)}
        defaultValue={props.text}
      />
      <button>Submit</button>
    </form>
  );
};

