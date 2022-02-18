import { useWeather } from "./useWeather";

function App() {
  const data = useWeather()
  return JSON.stringify(data)
}

export default App;
