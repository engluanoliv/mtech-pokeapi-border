import React from "react";
import { Button } from "./style";

const PageButton = ({ name, page }) => {

    return (
        <>
            <Button onClick={page}>{name}</Button>
        </>
    );
}

export default PageButton;