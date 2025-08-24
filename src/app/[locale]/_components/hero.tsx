import {useI18n, useScopedI18n} from "@/locales/client";
import {Avatar, AvatarImage} from "@/components/ui/avatar";

export default function Hero() {
    const t = useI18n()
    const scopedT = useScopedI18n('hero')

    return(
        <div className="relative isolate overflow-hidden p-14">
            <div className="mx-auto grid grid-flow-col md:grid-rows-2 lg:grid-rows-3 grid-cols-3 max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
                <h1 className="max-w-2xl col-span-2 row-span-1 font-semibold tracking-tight text-balance sm:text-7xl lg:col-span-2 xl:col-auto">
                    Théo Banette
                </h1>
                <p className="col-span-2 row-span-1">
                    {scopedT('description')}
                </p>
                <Avatar className="col-span-1 row-span-3 justify-self-end shrink-0 overflow-hidden">
                    <AvatarImage src="/theo.png" alt="Avatar"/>
                </Avatar>
            </div>
        </div>
    );
}