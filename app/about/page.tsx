'use client'

import { useContext } from "react";
import { Container } from "../components/Container";
import { AppContext } from "../providers";

export default function About() {
    const appContext = useContext(AppContext);
    return(
        <Container>
            about {appContext.previousPathname}
        </Container>
    )
}