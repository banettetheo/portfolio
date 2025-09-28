import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Card} from "@/components/ui/card";
import Content from "@/app/[locale]/_components/content";
import {TechJourneyContent} from "@/models/tech-journey-content";
import {useI18n, useScopedI18n} from "@/locales/client";
import Container from "@/app/[locale]/_components/container";

const tabs: TechJourneyContent[] = [
    {
        "name": "",
        "contents": [
            {
                "enName": "Bot Discord Lucario",
                "frName": "Bot Discord Lucario",
                "enDescription": "A certified bot discord with over 75 servers",
                "frDescription": "Un bot discord certifié avec plus de 75 serveurs",
                "enDate": "March 2021",
                "frDate": "Mars 2021",
                "redirectUrl": "",
                "stacks": [
                    { "name": "JavaScript", "img": "javascript.svg" },
                    { "name": "Docker", "img": "docker.svg" },
                    { "name": "MongoDB", "img": "mongo.svg" }
                ],
                "flags": [],
                "imgRedirect": "private.svg"
            },
            {
                "enName": "Dklare",
                "frName": "Dklare",
                "enDescription": "A furniture management tool for business",
                "frDescription": "Un outil de gestion de mobilier pour les entreprises",
                "enDate": "May 2024",
                "frDate": "Mai 2024",
                "redirectUrl": "",
                "stacks": [
                    { "name": "Spring Boot", "img": "spring-boot.svg" },
                    { "name": "Angular", "img": "angular.svg" },
                    { "name": "PostgreSQL", "img": "postgresql.svg" }
                ],
                "flags": [],
                "imgRedirect": "private.svg"
            },
            {
                "enName": "Portfolio",
                "frName": "Portfolio",
                "enDescription": "A business portolio about me",
                "frDescription": "Un portfolio professionnel à mon sujet",
                "enDate": "August 2025",
                "frDate": "Août 2025",
                "redirectUrl": "https://github.com/banettetheo/portfolio",
                "stacks": [
                    { "name": "Next", "img": "next.svg" },
                    { "name": "TypeScript", "img": "typescript.svg" }
                ],
                "flags": [],
                "imgRedirect": "github.svg"
            }
        ]
    },
    {
        "name": "Tech training",
        "contents": [
            {
                "enName": "Two-year technical degree",
                "frName": "DUT Informatique (Bac+2)",
                "enDescription": "A school training to learn IT basics - ICSAA",
                "frDescription": "Une formation scolaire pour apprendre les bases de l'informatique - ICSAA",
                "enDate": "September 2019 - July 2021",
                "frDate": "Septembre 2019 - Juillet 2021",
                "redirectUrl": "https://www.icssa-niort.com/",
                "stacks": [
                    { "name": "PHP", "img": "php.svg" },
                    { "name": "React Native", "img": "react.svg" },
                    { "name": "Java", "img": "java.svg" }
                ],
                "flags": [],
                "imgRedirect": "icssa.png"
            },
            {
                "enName": "Software Engineering Accountant",
                "frName": "Licence Développement logiciel",
                "enDescription": "A bachelor's degree specialized in software development - Apprenticeship - CESI",
                "frDescription": "Une licence spécialisée en développement logiciel - en alternance - CESI",
                "enDate": "September 2021 - September 2022",
                "frDate": "Septembre 2021 - Septembre 2022",
                "redirectUrl": "https://www.cesi.fr/",
                "stacks": [
                    { "name": "Laravel", "img": "laravel.svg" },
                    { "name": "Flutter", "img": "flutter.svg" },
                    { "name": "C#", "img": "csharp.svg" }
                ],
                "flags": [],
                "imgRedirect": "cesi.png"
            },
            {
                "enName": "Software Architecture Manager",
                "frName": "Master Architecture Logicielle",
                "enDescription": "A master's degree specialized in software architecture - Apprenticeship - CESI",
                "frDescription": "Un master spécialisé en architecture logicielle - en alternance - CESI",
                "enDate": "September 2022 - September 2024",
                "frDate": "Septembre 2022 - Septembre 2024",
                "redirectUrl": "https://www.cesi.fr/",
                "stacks": [
                    { "name": "Spring Boot", "img": "spring-boot.svg" },
                    { "name": "C#", "img": "csharp.svg" },
                    { "name": "Angular", "img": "angular.svg" },
                    { "name": "Redis", "img": "redis.svg" },
                    { "name": "MongoDB", "img": "mongo.svg" },
                    { "name": "Kafka", "img": "kafka.svg" }
                ],
                "flags": [],
                "imgRedirect": "cesi.png"
            }
        ]
    },
    {
        "name": "Pro",
        "contents": [
            {
                "enName": "COVEA - MAAF",
                "frName": "COVEA - MAAF",
                "enDescription": "I worked on compliance procedures related to AML/CFT regulations.",
                "frDescription": "J'ai travaillé sur des procédures de conformité liées aux réglementations LCB-FT.",
                "enDate": "September 2024 - July 2025",
                "frDate": "Septembre 2024 - Juillet 2025",
                "redirectUrl": "https://www.maaf.fr/fr/assurance",
                "stacks": [
                    { "name": "JEE", "img": "java.svg" },
                    { "name": "Spring", "img": "spring-boot.svg" },
                    { "name": "PostgreSQL", "img": "postgresql.svg" },
                    { "name": "Angular", "img": "angular.svg" }
                ],
                "flags": [],
                "imgRedirect": "maaf.png"
            },
            {
                "enName": "MACIF - MUTAVIE",
                "frName": "MACIF - MUTAVIE",
                "enDescription": "Contributed to a strategic migration project at Mutavie, focused on decoupling and exposing business logic through standardized APIs, allowing seamless access by the parent company.",
                "frDescription": "Participation à un projet de migration stratégique chez Mutavie, axé sur le découplage et l’exposition de la logique métier via des API standardisées, permettant un accès fluide par la société mère.",
                "enDate": "July 2025 - Now",
                "frDate": "Juillet 2025 - Aujourd'hui",
                "redirectUrl": "https://www.macif.fr/",
                "stacks": [
                    { "name": "Spring Boot", "img": "spring-boot.svg" },
                    { "name": "JSP", "img": "java.svg" },
                    { "name": "React", "img": "react.svg" },
                    { "name": "Oracle", "img": "oracle.svg" }
                ],
                "flags": [],
                "imgRedirect": "macif.png"
            }
        ]
    }
]


export default function TechJourney() {
    const t = useI18n()

    tabs[0].name = t('projects');
    tabs[1].name = t('trainings');
    tabs[2].name = t('pro');

    return (
        <Container>
            <Card className="p-4 col-span-12 overflow-hidden">
                <Tabs defaultValue={tabs[0].name}>
                    <TabsList>
                        {tabs.map((tab, index) => (
                            <TabsTrigger key={tab.name} value={tab.name}>{tab.name}</TabsTrigger>
                        ))}
                    </TabsList>
                    {tabs.map((tab, index) => (
                        <TabsContent className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 py-4" key={tab.name} value={tab.name}>
                            {tab.contents.map((content, index) => (
                                <Content key={content.enName} content={content}/>
                            ))}
                        </TabsContent>
                    ))}
                </Tabs>
            </Card>
        </Container>
    )
}
