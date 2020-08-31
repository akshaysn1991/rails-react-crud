class AllArticles extends React.Component {
  render() {
    var articles = this.props.articles.map(article => {
      return (
        <div key={article.id}>
          <Article
            article={article}
            handleDelete={this.props.handleDelete}
            handleUpdate={this.props.handleUpdate}
          />
        </div>
      );
    });

    return <div>



    <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Text</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            
         


          {articles.map((name, index) => (
              <tr key={index}>
             { console.log(name)}
                <td>{name.title}</td>
                <td>{name.text}</td>
              </tr>
            ))}

             </tbody>
        </table>

    
    </div>;

  }
}
