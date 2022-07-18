import Button from "./Button";
import Button2 from "./Button2";
import style from "./App.module.css"

function App() {
  return (
    <div>
        <h1 className={style.title}>Welcome back!</h1>
        <Button
            text={"Continue"}
        />
        <Button2
            text={"Continue2"}
        />
    </div>
  );
}

export default App;
