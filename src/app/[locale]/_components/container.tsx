import {ReactNode} from "react";

const Container = ({ children }: { children: ReactNode }) => {
    return (
        <div className="grid grid-cols-12 items-center justify-between pb-14 lg:pb-28">
            <div className="grid grid-cols-12 col-start-2 col-span-10 sm:col-start-3 sm:col-span-8 gap-4">
                {children}
            </div>
        </div>
    )
}

export default Container;