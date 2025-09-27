const Container = ({children}) => {
    return (
        <div className="grid grid-cols-12 items-center justify-between py-14">
            <div className="grid grid-cols-12 col-start-2 col-span-10 sm:col-start-3 sm:col-span-8 gap-4">
                {children}
            </div>
        </div>
    )
}

export default Container;