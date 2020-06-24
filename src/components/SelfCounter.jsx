import React, { useState, useReducer, useMemo, useEffect, useCallback } from 'react';
import { ADD_ITEM, DEL_ITEM } from './../actions/actions';
import { myReducer } from './../reducers/reducers';

// const getAverage = (numbers) => {
//     return 100;
// }

const SelfCounter = () => {
    const [state, dispatch] = useReducer(myReducer, { itemList: [] });
    const [todo, setTodo] = useState('');
    // const [name, setName] = useState('test');
    // const initialCandies = ['snickers', 'skittles', 'twix', 'milky way'];
    const initialCandies = useMemo(() => ['snickers', 'skittles', 'twix', 'milky way'], []);

    const handleChange = useCallback(e => {
        setTodo(e.target.value);
    }, []);

    const onAddItem = useCallback(() => {
        console.log("%c Inserting...", "color: blue");
        dispatch({
            type: ADD_ITEM,
            payload: parseInt(todo)
        });
        setTodo('');
    }, [todo]);

    const onDelItem = useCallback(index => {
        console.log("%c Deleting...", "color: white; background: black;");
        dispatch({
            type: DEL_ITEM,
            id: index
        });
    }, []);

    const getAverage = useCallback((numbers) => {
        console.log("%c Calculating......", "color: white; background: green;");
        if (numbers.length === 0) return 0;
        const sum = numbers.reduce((a, b) => a + b, 0);
        return sum / numbers.length;
    }, []);

    const average = useMemo(() => {
        console.log("%c Getting Average....", "color: red");
        return getAverage(state.itemList);
    }, [getAverage, state.itemList]);

    // const average = useMemo(() => getAverage(state.itemList), [state]);

/*
//  Wrong...
    const average = useCallback(() => {
        console.log("%c useCallback - Getting Average...", "color: red");
        getAverage(state.itemList);
    }, [state]);
*/
/*
    const [average, setAverage] = useState(0);
    useEffect(() => {
        console.log("%c Getting Average...", "color: red;   ");
        setAverage(getAverage(state.itemList));
    }, [state]);
*/
    return (
        <div>
            <input type="number" onChange={handleChange} value={todo} />
            <button onClick={onAddItem}>Add</button>
            <ul>
            {
                state.itemList && state.itemList.map((item, index) => (
                    <li key={index}>
                        {item}
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={() => onDelItem(index)}>Del</button>
                    </li>
                ))
            }
            </ul>
            <h2>Average: {average}</h2>
            <ul>
            { initialCandies && initialCandies.map((item, index) => <li key={index}>{item}</li>) }
            </ul>
            {/* <h3>{name}</h3>
            <button onClick={() => setName("Let's check Delete Item function")}>Change Name</button>
            <button onClick={() => onDelItem(0)}>Delete First</button> */}
        </div>
    );
};

export default SelfCounter;