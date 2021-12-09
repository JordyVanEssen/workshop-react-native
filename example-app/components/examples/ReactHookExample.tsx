import React from "react";

export default function ReactHookExample() {

    const [value, setValue] = React.useState<string>();

    const memoizedValues = React.useMemo(() => { }, []);

    const memoizedFunction = React.useCallback(() => { }, []);

    React.useEffect(() => { }, []);

    return (<> </>);
}

// const value = memoizedFunction(); 


