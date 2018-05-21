const API = 'https://talaikis.com/api/quotes/random/';

class App extends React.Component {
      constructor(props) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.state = {
          quote: [],
          author: []
        };
      }

      componentDidMount() {
        fetch(API)
          .then(response => response.json())
          .then(data => this.setState({
              quote: data.quote,
              author: data.author
          }));
      }

      render() {
          const title = "Random Quote Generator";
          const subtitle = "Just like every other one, but I made it in React."
          return (
          <div>
              <Header
                  title = {title}
                  subtitle = {subtitle}
              />
              <Quote
                  rawQuote = {this.state.quote}
                  rawAuthor = {this.state.author}
                  refresh = {this.componentDidMount}
              />
          </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
}


class Quote extends React.Component {
    render() {
        return (
            <div>
                <p>
                    {this.props.rawQuote}
                </p>
                <p>
                    {this.props.rawAuthor}
                </p>
                <button onClick={this.props.refresh}>Get Quote</button>
            </div>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById('app'));
