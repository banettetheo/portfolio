import {useI18n, useScopedI18n} from "@/locales/client";
import {Avatar, AvatarImage} from "@/components/ui/avatar";

export default function Hero() {
    const t = useI18n()
    const scopedT = useScopedI18n('hero')

    return(
        <div className="grid grid-cols-12 grid-rows-4 items-center justify-between py-14">
            <h1 className="col-start-3 col-span-4">
                Théo Banette
            </h1>
            <p className="col-start-3 col-span-8 row-span-1">
                {scopedT('description')}
            </p>
            <Avatar className="col-start-5 col-span-4 row-span-2 justify-self-end h-full w-full shrink-0 overflow-hidden">
                <AvatarImage src="/theo.png" alt="Avatar"/>
            </Avatar>
        </div>
    );
}