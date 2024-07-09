import styles from './form.module.css'
import Card from '../Card/Card'
import { data } from './../../assets/Data/data'
import { useState } from 'react'

const inputReset = { title: '', description: '' }

function Form() {
    const [arrayObj, setArrayObj] = useState(data);
    const [inputValue, setInputValue] = useState(inputReset)
    const [filterValue, setFilterValue] = useState('');

    function handleChange(e) {
        const { name, value } = e.target;
        setInputValue((prevState) => { return { ...prevState, [name]: value } })
    }

    function handleClick(e) {
        e.preventDefault();
        setArrayObj((prevState) => {
            return [...prevState, { ...inputValue, id: self.crypto.randomUUID(), img: "https://picsum.photos/200/300" }]
        })
        setInputValue(inputReset)
    }

    function handleFilter(e) {
        setFilterValue(e.target.value);
    }

    function handleDelete(e) {
        const button = e.target.parentNode.id
        const newArray = arrayObj.filter((element => (element.id !== button)))
        setArrayObj(newArray)
    }

    const filteredArray = arrayObj.filter((element) => {
        return element.title.toLowerCase().includes(filterValue.toLowerCase());
    });

    return (
        <>
            <form onSubmit={handleClick} className={styles.form}>
                <div className={styles.containerText}>
                    <label className={styles.labelText} htmlFor="inputText">Title</label>
                    <input value={inputValue.title} name='title' className={styles.inputText} id='inputText' type="text" onChange={handleChange} maxLength={25} />
                </div>
                <div className={styles.containerTextarea}>
                    <label className={styles.labelTextarea} htmlFor="inputTextarea">Description</label>
                    <textarea value={inputValue.description} name='description' className={styles.inputTextarea} id='inputTextarea' onChange={handleChange} maxLength={100} />
                </div>
                <button type='submit'>Send</button>
                <div className={styles.containerFilter}>
                    <label className={styles.labelFilter} htmlFor="inputFilter">Filter</label>
                    <input placeholder='Filter by title...' className={styles.inputFilter} id='inputFilter' type="text" onChange={handleFilter} value={filterValue} />
                </div>
            </form>
            <div className={styles.containerCatalog}>
                {filteredArray.map(element => (
                    <Card
                        key={element.id}
                        onClick={handleDelete}
                        idCard={element.id}
                        img={element.img}
                        title={element.title}
                        description={element.description}
                    />
                ))}
            </div>
        </>
    )
}

export default Form