import HookUseState from "../components/HookUseState";
import HookUseReducer from "../components/HookUseReducer";
import HookUseEffect from "../components/HookUseEffect";
import HookUseRef from "../components/HookUseRef";

import { useContext } from "react";
import { SomeContext } from "../components/HookUseContext";
import HookUseCallBack from "../components/HookUseCallBack";
import HookUseMemo from "../components/HookUseMemo";
import HookUseLayoutEffect from "../components/HookUseLayoutEffect";
import HookUseImperativeHandle from "../components/HookUseImperativeHandle";
import Custom from "../components/Custom";

const Home = () => {
  const { valor } = useContext(SomeContext);

  return (
    <div>
        <h1>Home</h1>
        <HookUseState/>
        <HookUseReducer />
        <HookUseEffect />
        <h2>useContext</h2>
        <p>Valor do contexto: { valor }</p>
        <hr />
        <HookUseRef />
        <HookUseCallBack />
        <HookUseMemo />
        <HookUseLayoutEffect />
        <HookUseImperativeHandle />
        <Custom />
    </div>
  )
}

export default Home;