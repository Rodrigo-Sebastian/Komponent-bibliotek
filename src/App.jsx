import Button from "./components/button";
import Alert from "./components/alert";
import Badge from "./components/badgets";
import { FaStar, FaHeart, FaCheckCircle } from 'react-icons/fa';  // Använd de ikoner du behöver

export default function App(){ 
  return (
    <div>
      <section className="Buttons">
        <h1>Det här är mina knapp komponenter</h1>
        <h3>Blå och liten knapp</h3>
        <Button size="small" color="Blue" disable={false}></Button>
        <h3>grönt och stor knapp, disabled </h3>
        <Button size="large" color="Green" disable={true}></Button>
      </section>
      <section className="Alerts">
        <h1>Det här är mina Alerts komponenter</h1>
        <h3>Alert div med grönt borders och en check ikon</h3>
        <Alert color="green" icon="check" additionalProp="Extra Info" />

        <h3>Alert div med en rött borders och en x ikon</h3>
        <Alert color="red" icon="cross" />

        <h3>Alert div med en blå borders och ett info ikon</h3>
        <Alert color="blue" icon="info" />
      </section>
      <section className="Badgets">
      <h1>Det här är mina badgets</h1>
      <h3>Stjärn Badge</h3>
      <Badge color="green" size="2em" icon={FaStar} />

      <h3>Hjärt Badge</h3>
      <Badge color="red" size="1.5em" icon={FaHeart} />

      <h3>Check Badge</h3>
      <Badge color="blue" size="2.5em" icon={FaCheckCircle} />
      </section>
    </div>
  )
};

