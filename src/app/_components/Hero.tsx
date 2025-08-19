export default function Hero() {
    return(
        <div className="relative isolate overflow-hidden bg-linear-to-b from-indigo-100/20 pt-14">
            <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
                    <h1 className="max-w-2xl text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl lg:col-span-2 xl:col-auto">
                        Théo Banette
                    </h1>
                    <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                        <p className="text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                            I&apos;m a fullstack developper living in Niort, France.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}