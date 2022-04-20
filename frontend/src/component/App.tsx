import CounterContainer from "./counter/CounterContainer";
import GithubProfileContainer from "./github/GithubProfileContainer";

const App = (): JSX.Element => {
  return (
    <div>
      <CounterContainer />
      <GithubProfileContainer />
    </div>
  );
}

export default App;
