import { useState } from "react";
import { AddItem } from "./AddItem";

const Item = ({ name, view }) => {
  return (
    <li>
      {name}
      {view ? '✅' : '⛔'}
    </li>
  );
};

export const List = () => {
  const addTopic = () => {
    setItems([...arrayWithItems, { name: 'New', view: false }]);
  }
  let arrayWithItems = [
    { name: 'Instalación', view: true },
    { name: 'Vite', view: true },
    { name: 'Componentes', view: true },
    { name: 'Variables en JSX', view: true },
    { name: 'Props', view: true },
    { name: 'Eventos', view: true },
    { name: 'Use State', view: true },
    { name: 'Redux', view: false },
    { name: 'Custom Hooks', view: false }
  ]
  const [items, setItems] = useState(arrayWithItems);
  const onAddItem = (value) => {
    const item = { name: value, view: false };
    setItems([...items, item]);
  };
  return (
    <>
      <h1>Listado de Temas</h1>
      <AddItem onAddItem = {onAddItem}/>
      <ol>
        { items.map(item => <Item key = {item.name} name = {item.name} view = {item.view} />) }
      </ol>
    </>
  );
}