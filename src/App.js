import logo from './logo.svg';
import './App.css';
import LikeButton from './component/LikeButton';
// import MouseTracker from './component/MouseTracker';
import DogShow from './component/DogShow'
import useMousePostion from './hooks/useMousePosition'
import useUrlLoader from './hooks/useUrlLoader';


const DogShowWidthHook = () => {
  const [data, loading] = useUrlLoader('https://dog.ceo/api/breeds/image/random')
  const style = {
      width: 200
  }
  return (
    <>
    {loading? <p>狗狗读取中</p>
        : <img src={data} alt="dog" style = {style}></img>
        }
    </>
  )
}

function App() {

  const positions = useMousePostion();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{positions.x}</h1>
        <DogShowWidthHook />
        {/* <DogShow /> */}
        {/* <MouseTracker /> */}
        <LikeButton />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
