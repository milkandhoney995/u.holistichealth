import * as React from "react";
import { SVGProps } from "react";
export const SvgLaptop = (props: SVGProps<SVGSVGElement>): JSX.Element => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" />
        </svg>
    );
};

export default SvgLaptop;