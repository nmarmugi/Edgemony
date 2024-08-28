import styles from "./page.module.css";
import {Card} from "@/components/Card";


const array = [
  {
    title: 'Titolo 1',
    description: 'Descrizione 1',
    id: 1
  },
  {
    title: 'Titolo 2',
    description: 'Descrizione 2',
    id: 2
  },
  {
    title: 'Titolo 3',
    description: 'Descrizione 3',
    id: 3
  }
]

export default function Home() {
  return (
    <main className={styles.main}>
      {array.map(element => <Card title={element.title} description={element.description} id={element.id}/>)}
    </main>
  );
}
