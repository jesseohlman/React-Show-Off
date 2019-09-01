import { Card, CardImg, CardHeader } from "shards-react";


function App() {
  const [user, setUser] = useState([
    {
      name: "Joe",
      email: "email@gmail.com",
      password: "1234567890"
    },
    {
      name: "Bobby",
      email: "email2@gmail.com",
      password: "1234567890"
    },
  ]);

  const addUser = input => {

  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Show Off</h1>
        </header>
        <main>
          <Router>
            <nav>
              <ul>
                <li><Link className="link" to="#">Code</Link></li>
                <li><Link className="link" to="#">Projects</Link></li>
                <li><Link className="link" to="#">My Dackground</Link></li>
              </ul>
            </nav>
          </Router>
        </main>

      <Card style={{maxWidth: "300px"}}>
        <CardHeader>ART #1</CardHeader>
        <CardImg className="card-img" src="https://art.art/wp-content/uploads/2019/05/mucha_500.jpg"/>
      </Card>
        


        <Customers />
      </div>
    );
  }


export default App;
