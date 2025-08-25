import {useI18n, useScopedI18n} from "@/locales/client";
import {Avatar, AvatarImage} from "@/components/ui/avatar";

export default function Hero() {
    const t = useI18n()
    const scopedT = useScopedI18n('hero')

    return(
        <div className="grid grid-cols-12 grid-rows-2 items-center justify-between py-14">
            <div className="flex col-start-3 col-span-8 row-span-3 justify-center shrink-0 overflow-hidden">
                <Avatar className="h-30 w-30 mr-4">
                    <AvatarImage src="/theo.png" alt="Avatar"/>
                </Avatar>
                <div className="place-content-center">
                    <h1 className="text-2xl col-start-6 col-span-7 sm:col-start-5 md:col-start-6">
                        Théo Banette
                    </h1>
                    <h2 className="text-sm italic self-start text col-start-6 col-span-7 sm:col-start-5 md:col-start-6">
                        {scopedT('role')}
                    </h2>
                </div>
            </div>
            <p className="col-start-3 col-span-8 text-center mt-10">
                {scopedT('description')}
            </p>
        </div>
    );
}