import { ReactElement, ReactNode } from "react";

interface SectionProps {
    content: string;
    children: ReactNode
}

const Section = ({content, children}: SectionProps): ReactElement => {
    return (
        <>
            <h3>{content}</h3>
            <div>{children}</div>
        </>
    )
};

export default Section