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

  handleFormSubmit(pri, question) {
    let body = JSON.stringify({
      question: { pri: pri, question: question }
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
      console.log("Question was deleted!");
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
        <h2>Add new question</h2>
        <NewQuestion handleFormSubmit={this.handleFormSubmit} />
        <h2>All Quiestions</h2>
        <AllQuestions
          questions={this.state.questions}
          handleDelete={this.handleDelete}
          handleUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}
