import { ChevronDownIcon } from '@heroicons/react/16/solid'
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Card} from "@/components/ui/card";
import Content from "@/app/_components/Content";
import {TechJourneyContent} from "@/models/TechJourneyContent";

const tabs: TechJourneyContent[] = [
    {
        name: 'Projects',
        contents: [
            {
                name: 'Bot Discord Lucario',
                description: 'A certified bot discord with over 75 servers',
                date: 'March 2021',
                gitRepository: '',
                stack: '',
                flags: []
            },
            {
                name: 'Dklare',
                description: 'A furniture management tool for business',
                date: 'May 2024',
                gitRepository: '',
                stack: '',
                flags: []
            },
            {
                name: 'Bot Discord Lucarios',
                description: 'A certified bot discord with over 75 servers',
                date: 'March 2021',
                gitRepository: '',
                stack: '',
                flags: []
            },
            {
                name: 'Dklares',
                description: 'A furniture management tool for business',
                date: 'May 2024',
                gitRepository: '',
                stack: '',
                flags: []
            },
        ]
    },
    {
        name: 'Tech training',
        contents: [
            {
                name: 'Two-year technical diploma in IT services',
                description: 'A school training to learn IT basics - ICSAA',
                date: 'September 2019 - July 2021',
                gitRepository: '',
                stack: '',
                flags: []
            },
            {
                name: 'Software Engineering Accountant',
                description: 'A bachelor\'s degree specialized in software development - Apprenticeship - CESI',
                date: 'September 2021 - September 2022',
                gitRepository: '',
                stack: '',
                flags: []
            },
            {
                name: 'Software Architecture Manager',
                description: 'A master\'s degree specialized in software architecture - Apprenticeship - CESI',
                date: 'September 2022 - September 2024',
                gitRepository: '',
                stack: '',
                flags: []
            }
        ]
    },
    {
        name: 'Pro',
        contents: [
            {
                name: 'COVEA - MAAF',
                description: 'I worked on compliance procedures related to AML/CFT regulations.',
                date: 'September 2024 - July 2025',
                gitRepository: '',
                stack: '',
                flags: []
            },
            {
                name: 'MACIF - MUTAVIE',
                description: 'Contributed to a strategic migration project at Mutavie, focused on decoupling and exposing business logic through standardized APIs, allowing seamless access by the parent company.',
                date: 'July 2025 - Now',
                gitRepository: '',
                stack: '',
                flags: []
            }
        ]
    },
    {
        name: 'Skills',
        contents: [
            {
                name: 'Bot Discord Lucario',
                description: 'A discord bot',
                date: '',
                gitRepository: '',
                stack: '',
                flags: []
            },
            {
                name: 'Dklare',
                description: 'A furniture management tool',
                date: '',
                gitRepository: '',
                stack: '',
                flags: []
            }
        ]
    },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function TechJourney() {
    return (
        <div className="relative isolate overflow-hidden bg-linear-to-b from-indigo-100/20 pt-14">
            <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
                    <Card className="mx-auto p-4 shadow overflow-hidden max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
                        <Tabs defaultValue={tabs[0].name}>
                            <TabsList>
                                {tabs.map((tab, index) => (
                                    <TabsTrigger key={tab.name} value={tab.name}>{tab.name}</TabsTrigger>
                                ))}
                            </TabsList>
                            {tabs.map((tab, index) => (
                                <TabsContent key={tab.name} value={tab.name}>
                                    <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
                                        {tab.contents.map((content, index) => (
                                            <Content key={content.name} content={content}/>
                                        ))}
                                    </div>
                                </TabsContent>
                            ))}
                        </Tabs>
                    </Card>
                </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-linear-to-t from-white sm:h-32" />
        </div>
    )
}
