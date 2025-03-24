import { ReactElement, ReactNode } from "react";

// interface ListPropsNumberOrSting {
//     items: (number | string)[];
// };

interface ListProps<T> {
    items: T[];
}

const List = <T,>({items}: ListProps<T>): ReactElement  => {
    return (
        <>
            <h2>List</h2>
            {items.map((item, idx) => {
                return(
                    <div key={idx}>{item as ReactNode}</div>
                )
            })}
        </>
    )
};

export default List