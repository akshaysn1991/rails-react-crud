class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false
    };
    this.handleEdit = this.handleEdit.bind(this);
  }
 
  handleEdit() {
    if (this.state.editable) {
      let pri = this.pri.value;
      let question = this.question.value;
      let id = this.props.question.id;
      let question_obj = { id: id, pri: pri, question: question };
      this.props.handleUpdate(question_obj);
    }
    this.setState({
      editable: !this.state.editable
    });
  }

  render() {
    let pri = this.state.editable ? (
      <input
        type="integer"
        ref={input => (this.pri = input)}
        defaultValue={this.props.question.pri}
      />
    ) : (
      <h3>{this.props.question.pri}</h3>
    );
    let question = this.state.editable ? (
      <input
        type="string"
        ref={input => (this.question = input)}
        defaultValue={this.props.question.question}
      />
    ) : (
      <p>{this.props.question.question}</p>
    );
    return (
      <div>
        {pri}
        {question}
        <button onClick={() => this.handleEdit()}>
          {this.state.editable ? "Submit" : "Edit"}
        </button>
        {!this.state.editable && (
          <button
            onClick={() => this.props.handleDelete(this.props.question.id)}
          >
            Delete
          </button>
        )}
      </div>
    );
  }
}

