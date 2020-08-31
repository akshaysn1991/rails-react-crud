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


    return <div>
 <table class="table">
          <thead>
            <tr>
                <th style={{width: '50px'}}>Pri</th>
                <th style={{width: '200px'}}>Question</th>
                <th style={{width: '150px'}}>Teaming Age</th>
                <th style={{width: '150px'}}>Appears day</th>
                <th style={{width: '150px'}}>Frequency</th>
                <th style={{width: '150px'}}>Question tyoe</th>
                <th style={{width: '150px'}}>Role</th>
                <th style={{width: '150px'}}>Required</th>
                <th style={{width: '150px'}}>Condition</th>
                <th style={{width: '150px'}}>Mapping</th>
                <th style={{width: '100px'}}></th>
                <th style={{width: '100px'}}></th>

            </tr>

            </thead>
            </table>
            { console.log(questions.keys) }
                   {questions}
                


                   </div>;







  }
}


