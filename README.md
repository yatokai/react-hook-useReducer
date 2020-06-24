# useReducer, useMemo, useCallback

    const [state, dispatch] = useReducer(reducer, { value: [] });
    
    const onAddItem = useCallback(() => {
        console.log("%c Inserting...", "color: blue");
        // do something...
    }, [todo]);
    
    const average = useMemo(() => getAverage(state.itemList), [state]);
# react-hook-useReducer
