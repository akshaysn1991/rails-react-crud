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

      let teaming_stage = this.teaming_stage.value;
      let appears_day = this.appears_day.value;
      let frequency = this.frequency.value;
      let question_type = this.question_type.value;
      let role = this.role.value;
      let required = this.required.value;
      let conditions = this.conditions.value;
      let mapping = this.mapping.value;



      let id = this.props.question.id;
      let question_obj = { id: id, pri: pri, question: question, teaming_stage:teaming_stage,  appears_day:appears_day, frequency:frequency, question_type:question_type, role:role, required:required, conditions:conditions, mapping:mapping};
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
      <p>{this.props.question.pri}</p>
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

    let teaming_stage = this.state.editable ? (
      <input
        type="string"
        ref={input => (this.teaming_stage = input)}
        defaultValue={this.props.question.teaming_stage}
      />
    ) : (
      <p>{this.props.question.teaming_stage}</p>
    );

    let appears_day = this.state.editable ? (
      <input
        type="integer"
        ref={input => (this.appears_day = input)}
        defaultValue={this.props.question.appears_day}
      />
    ) : (
      <p>{this.props.question.appears_day}</p>
    );

     let frequency = this.state.editable ? (
      <input
        type="integer"
        ref={input => (this.frequency = input)}
        defaultValue={this.props.question.frequency}
      />
    ) : (
      <p>{this.props.question.frequency}</p>
    );

     let question_type = this.state.editable ? (
      <input
        type="string"
        ref={input => (this.question_type = input)}
        defaultValue={this.props.question.question_type}
      />
    ) : (
      <p>{this.props.question.question_type}</p>
    );

    let role = this.state.editable ? (
      <input
        type="string"
        ref={input => (this.role = input)}
        defaultValue={this.props.question.role}
      />
    ) : (
      <p>{this.props.question.role}</p>
    );


    let required = this.state.editable ? (
      <input
        type="boolean"
        ref={input => (this.required = input)}
        defaultValue={this.props.question.required}
      />
    ) : (
      <p>{this.props.question.required}</p>
    );

    let conditions = this.state.editable ? (
      <input
        type="string"
        ref={input => (this.conditions = input)}
        defaultValue={this.props.question.conditions}
      />
    ) : (
      <p>{this.props.question.conditions}</p>
    );

    let mapping = this.state.editable ? (
      <input
        type="string"
        ref={input => (this.mapping = input)}
        defaultValue={this.props.question.mapping}
      />
    ) : (
      <p>{this.props.question.mapping}</p>
    );


    return (
      <div>
      <table class='table'>
      <tbody>
       <tr>
        <td style={{width: '50px'}}>{pri}</td>
        <td style={{width: '200px'}}>{question}</td>
        <td style={{width: '150px'}}>{teaming_stage}</td>
        <td style={{width: '150px'}}>{appears_day}</td>
        <td style={{width: '150px'}}>{frequency}</td>
        <td style={{width: '150px'}}>{question_type}</td>
        <td style={{width: '150px'}}>{role}</td>
        <td style={{width: '150px'}}>{required}</td>
        <td style={{width: '150px'}}>{conditions}</td>
        <td style={{width: '150px'}}>{mapping}</td>
        <td style={{width: '100px'}}>
         <button class="btn btn-warning btn-sm" onClick={() => this.handleEdit()}>
          {this.state.editable ? "Submit" : "Edit"}
        </button></td>
        <td style={{width: '100px'}}>
        {!this.state.editable && (
          <button class="btn btn-danger btn-sm"
            onClick={() => this.props.handleDelete(this.props.question.id)}
          >
            Delete
          </button>
        )}
        </td>

        </tr>
        </tbody>
       </table>
      </div>
    );
  }
}

