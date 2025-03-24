import {ReactElement} from "react";
import Section from "./Section";

type HeadingProps = {
    title: string
}

const Heading = ({title}: HeadingProps): ReactElement => {
    return (
        <>
            <h1>{title}</h1>
            <Section content={'bla bla bla'}>hello from section</Section>
        </>
    )
};

export default Heading