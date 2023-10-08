'use client'

import { useContext } from "react";
import { Container } from "../components/Container";
import { AppContext } from "../providers";

export default function Articles() {
    const appContext = useContext(AppContext)
    return(
        <Container>
            article {appContext.previousPathname}
        </Container>
    )
}