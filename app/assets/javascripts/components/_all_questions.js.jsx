class AllQuestions extends React.Component {
  render() {
    var questions = this.props.questions.map(question => {
      return (
        <div key={question.id}>
          <Question
            question={question}
            handleDelete={this.props.handleDelete}
            handleUpdate={this.props.handleUpdate}
          />
        </div>
      );
    });

    return <div>{questions}</div>;
  }
}
