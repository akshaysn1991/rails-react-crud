class QuestionsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: []
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.addNewQuestion = this.addNewQuestion.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.updateQuestion = this.updateQuestion.bind(this);
  }

  handleFormSubmit(pri, question, teaming_stage, appears_day, frequency, question_type, role, required, conditions, mapping) {
    let body = JSON.stringify({
      question: { pri: pri, question: question, teaming_stage:teaming_stage, appears_day:appears_day, frequency:frequency, question_type:question_type, role:role, required:required, conditions:conditions, mapping:mapping}
    });

    fetch("/api/v1/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: body
    })
      .then(response => {
        return response.json();
      })
      .then(question => {
      alert("New Question Added");
        this.addNewQuestion(question);
      });
  }

  addNewQuestion(question) {
    this.setState({
      questions: this.state.questions.concat(question)
    });
  }
  
  handleDelete(id) {
    fetch(`/api/v1/questions/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => {
      alert("Question was deleted!");
      this.deleteQuestion(id);
    });
  }

  deleteQuestion(id) {
    newQuestions = this.state.questions.filter(question => question.id !== id);
    this.setState({
      questions: newQuestions
    });
  }

  handleUpdate(question) {
    fetch(`/api/v1/questions/${question.id}`, {
      method: "PUT",
      body: JSON.stringify({ question: question }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => {
      alert("Question was updated");
      this.updateQuestion(question);
    });
  }

  updateQuestion(question) {
    let newQuestions = this.state.questions.filter(f => f.id !== question.id);
    newQuestions.push(question);
    this.setState({
      questions: newQuestions
    });
  }

  componentDidMount() {
    fetch("/api/v1/questions.json")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ questions: data });
      });
  }
  render() {
    return (
      <div>
        <h2>Add New Question</h2>
        <NewQuestion handleFormSubmit={this.handleFormSubmit} />
        <h2>All Questions</h2>
        <AllQuestions
          questions={this.state.questions}
          handleDelete={this.handleDelete}
          handleUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}
