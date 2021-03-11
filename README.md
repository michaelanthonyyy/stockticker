# Stock Ticker

-----------------------
## Table of Contents
1. [Description](#description)
2. [Deployed link](#deployed-link)
3. [Code snippets](#code-snippets)
4. [Licenses](#licenses)
5. [Tests](#tests)
6. [Questions](#questions)

-----------------------
## Description
A stock ticker web application that allows users to search for specific stocks, save them, as well as leave comments for themselves to access later. Authentication was run through Google's Firebase and Mongoose was used for our database. The web application is dynamically generated through React components with the graphs being created using the Dygraphs NPM package. On the user dashboard we render news from the New York Times Business section to aide users in potentially seeing stock market shifting news.

![Screenshot](assets/screenshot.png)

![Gif](assets/demo.gif)

-----------------------
## Deployed link
[Link](https://infinite-meadow-98613.herokuapp.com/)

-----------------------
## Code snippets

```javascript
  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError(
        "Password's do not match. Please re-enter password and password confirmation"
      );
    }
    try {
      setError("");
      setUserLogin(true);
      console.log(userLogin);
      API.addUser({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/user");
    } catch {
      setError("Failed to create account");
    }
    setUserLogin(false);
  }
```
On our user signup page we handle the creation of our users through firebase as well as creating the user inside our Mongo DB asynchronously through the handleSubmit function. When the button is clicked, the application first checks that the user input for password and password confirmation match correctly, then it changes the useState for setUserLogin to true. Asynchronously the DB is adding the user and Firebases function that is set up in a context file runs the built in method "auth.createUserWithEmailAndPassword" that is imported to the component.


```javascript
function Graph({ height = 200, width = 300, ticker, saved = true }) {
  const { currentUser } = useAuth();
  const [graphState, setGraphState] = useState(currentUser);
  const [graph, setGraph] = useState();
  const graphRef = useRef();

  useEffect(() => {
    API.getDailyStock(ticker).then((result) => {
      var data = "Date, Close\n";
      var count = 0;
      for (const entry of result.data) {
        data += entry.date + ", ";
        data += entry.close + "\n";
        if (count > 365) {
          break;
        } else {
          count++;
        }
      }
      if (!graph) {
        const g = new Dygraph(
          graphRef.current,
          data,
          { showRangeSelector: true } // the options
        );
        setGraph(g);
      }
    });
  });
```

-----------------------
## Licenses
This project uses a [MIT License](https://opensource.org/licenses/MIT). 

-----------------------
## Tests
To run tests locally run the following command after pulling repo down to local machine. This installs all packages (react, react-router-dom, axios, Firebase, etc) necessary for this web application to work correctly. :
```
npm install
```

-----------------------
## Questions
Created by Michael Medina, James Merges, Jaja Brown

If you have any questions you can reach us at the following: 


| | | | |
|-|-|-|-|
| Jaja Brown  | [jaja.c.brown@gmail.com](mailto:jaja.c.brown@gmail.com)  |[LinkedIn](https://www.linkedin.com/in/jaja-brown-a42261201/) | [GitHub](https://github.com/jbrown827)  |
| James Merges  | [jamesmerges1@gmail.com](mailto:jamesmerges1@gmail.com)  |[LinkedIn](https://www.linkedin.com/in/james-merges-b938401b7/) | [GitHub](https://github.com/jmerges)  |
| Michael Medina  | [michaelanthony.medinaa@gmail.com](mailto:michaelanthony.medinaa@gmail.com)  |[LinkedIn](https://www.linkedin.com/in/michaelanthonyy/) | [GitHub](https://github.com/michaelanthonyyy)  |
