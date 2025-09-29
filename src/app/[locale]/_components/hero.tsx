import {useI18n, useScopedI18n} from "@/locales/client";
import {Avatar, AvatarImage} from "@/components/ui/avatar";
import Container from "@/app/[locale]/_components/container";
import {Separator} from "@/components/ui/separator";

export default function Hero() {
    const t = useI18n()
    const scopedT = useScopedI18n('hero')

    return(
        <Container>
            <div className="flex col-span-12 lg:col-start-2 lg:col-span-4 justify-center place-items-center shrink-0 overflow-hidden">
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
            <Separator className="lg:col-span-2 lg:justify-self-center" orientation="vertical" />
            <p className="mt-10 col-span-12 lg:col-span-4 lg:mt-0 text-justify place-content-center ">
                {scopedT('description')}
            </p>
        </Container>
    );
}