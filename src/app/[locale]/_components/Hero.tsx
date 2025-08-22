import {useI18n, useScopedI18n} from "@/locales/client";
import {Avatar, AvatarImage} from "@/components/ui/avatar";

export default function Hero() {
    const t = useI18n()
    const scopedT = useScopedI18n('hero')

    return(
        <div className="relative isolate overflow-hidden bg-linear-to-b from-indigo-100/20 pt-14">
            <div className="mx-auto grid grid-cols-3 xl:grid-cols-4 max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
                <div className="mx-auto max-w-2xl col-span-2 lg:mx-0 lg:grid lg:max-w-none lg:gap-x-16 lg:gap-y-8 xl:mx-0 xl:col-span-1 xl:col-start-2 xl:grid-cols-2 xl:gap-x-8">
                    <h1 className="max-w-2xl text-5xl font-semibold tracking-tight text-balance sm:text-7xl lg:col-span-2 xl:col-auto">
                        Théo Banette
                    </h1>
                    <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1">
                        <p className="text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                            {scopedT('description')}
                        </p>
                    </div>
                </div>
                <Avatar className="col-span-1 w-full h-full shrink-0 overflow-hidden">
                    <AvatarImage src="/theo.png" alt="Avatar"/>
                </Avatar>
            </div>
        </div>
    );
}