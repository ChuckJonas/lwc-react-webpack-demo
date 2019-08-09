import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Hello, HelloProps } from "./components/Hello";

(window as any).mount = (el: any, injected: HelloProps) => {

    console.log(injected)

    ReactDOM.render(
        <Hello {...injected} />,
        el
    );
}

