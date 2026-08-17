const translations = {
  en: {
    navProblem: "Problem",
    navWorkflow: "Workflow",
    navResult: "Result",
    navTeam: "Team",
    navContact: "Pilot",
    heroEyebrow: "AI-assisted construction workflow",
    heroTitle: "ProObject — the technical and economic foundation of a construction deal.",
    heroSupportLine: "Clear terms. Predictable outcomes.",
    heroLede:
      "ProObject turns a request, photo, project, BOQ or defect report into a structured task, relevant questions, a preliminary cost/time/team/risk estimate, execution context and closing documents.",
    ctaPilot: "Discuss pilot",
    ctaWorkflow: "See workflow",
    heroInput: "Input",
    heroInputValue: "Request, photo, project, BOQ, defect report, technical task",
    heroFlowOne: "User role and task purpose",
    heroFlowTwo: "Object passport and missing data",
    heroFlowThree: "Relevant customer questions",
    heroFlowFour: "Preliminary cost, team, timing and risks",
    heroFlowFive: "Proposal, execution, acceptance and closing documents",
    problemEyebrow: "Recognizable pain",
    problemTitle: "The job is already there. How do you determine the real scope and a defensible price?",
    problemLead:
      "For a solo master, a 2-5 person crew, a small contractor or a customer, the hard part often starts after the request is received. The inputs are scattered, the work boundaries are unclear, and the price has to be named before all conditions are understood.",
    problemItemOne: "Photos, descriptions, projects and tables rarely turn into a ready price by themselves.",
    problemItemTwo: "Materials, operations, people, timing, complications and expenses can be easy to miss.",
    problemItemThree: "The contractor is afraid to underprice and lose money, or overprice and lose the customer.",
    problemItemFour: "The customer does not always understand what is included and where extra charges may appear.",
    calculatorEyebrow: "Why a simple calculator is not enough",
    calculatorTitle: "Price is not only quantity times rate.",
    calculatorText:
      "Real work depends on site conditions and responsibility boundaries. Height, tight access, active systems, restricted facilities, shutdowns, lifting, buried utilities, equipment, travel, mobilization, consumables, documentation and testing can change labor, risk and price.",
    factorOne: "Site conditions",
    factorTwo: "Access and shutdowns",
    factorThree: "Team and equipment",
    factorFour: "Documentation and tests",
    factorFive: "Responsibility boundaries",
    workflowEyebrow: "How ProObject works",
    workflowTitle: "From source data to deal completion.",
    workflowText:
      "ProObject supports a construction task across the working cycle: from source-data review and alignment of conditions to execution, acceptance, settlement and closing documents.",
    workflowOneTitle: "Role and purpose",
    workflowOneText:
      "First, ProObject identifies who is using it and what result is needed: quick decision, estimate, proposal, customer roadmap or comparison.",
    workflowTwoTitle: "Source data",
    workflowTwoText: "The user enters or uploads a request, description, photos, project, BOQ, defect report or technical task.",
    workflowThreeTitle: "Object passport and known scope",
    workflowThreeText:
      "Known work scope, conditions, documents, deadlines, budget hints and requirements are structured into one object record.",
    workflowFourTitle: "Gaps, risks and factors",
    workflowFourText:
      "The system highlights missing data, site risks, complications, work boundaries and responsibility zones that affect labor, duration and cost.",
    workflowFiveTitle: "Questions and customer message",
    workflowFiveText:
      "ProObject prepares relevant clarification questions and a professional customer message, skipping what is already clear from the request, photos, BOQ, defect report or project.",
    workflowSixTitle: "Answers and boundaries recorded",
    workflowSixText: "Customer answers are saved as source data, assumptions, work boundaries and responsibility zones.",
    workflowSevenTitle: "Defensible estimate",
    workflowSevenText:
      "Works, materials, team, timing, expenses, risks and price range are calculated with visible assumptions. Better inputs narrow the range but do not make it a guaranteed final estimate.",
    workflowEightTitle: "Agreement and execution tracking",
    workflowEightText:
      "Proposal, response, contract, stages, schedule, condition changes and completed work confirmations are kept in the same object context.",
    workflowNineTitle: "Acceptance, settlement and closing",
    workflowNineText:
      "Completion acts, closing and as-built documents, stage confirmations, final settlement status and the object archive close the deal loop.",
    documentEyebrow: "Roadmap module: Documents",
    documentTitle: "A dedicated document module follows the actual deal scenario.",
    documentText:
      "ProObject is planned to include a separate Documents module: not a generic library, but a role-, object-, work- and stage-aware document base connected to the object card.",
    documentTechTitle: "Prepared by context",
    documentTechText:
      "Requests for source data, questionnaires, technical notes, BOQs, defect reports, proposals, estimates and work plans are selected by scenario.",
    documentContractTitle: "Linked to the object card",
    documentContractText:
      "Documents can use known details, scope, stages and responsibility boundaries, with versions, statuses, change log and links between documents.",
    documentCloseTitle: "Tracked through the deal",
    documentCloseText:
      "The module tracks what is required, prepared, agreed, signed or missing: from contracts and addenda to as-built, acceptance, KS-2/KS-3 where applicable, warranty and archive.",
    documentNote:
      "This is part of the product roadmap. Templates and reference materials do not replace dedicated legal or technical review where it is required; future signing and handover flows require separate legal and technical design.",
    outcomeEyebrow: "Result for both sides",
    outcomeTitle: "One environment from inputs and price to closing documents.",
    outcomePhilosophy:
      "We do not position one side against the other. We create a clear technical and economic foundation on which customers and contractors can align expectations and work toward the intended result.",
    contractorTitle: "Contractor",
    contractorText:
      "Understands scope, costs, team, timing and risks, then protects expected profit with a reasoned price instead of guessing.",
    sharedTitle: "Shared basis",
    sharedText:
      "If source data is insufficient or the economics do not fit, it becomes visible before the contract. The same environment can then support agreement, execution, acceptance, settlement and closing documents.",
    customerTitle: "Customer",
    customerText: "Gets a clearer scope, expected result, budget range, stages and questions for comparing offers by the same conditions.",
    experienceEyebrow: "Why we can build it",
    experienceTitle: "Not just AI. Full-cycle construction experience.",
    experienceLead:
      "Generic AI can write text. ProObject is built on 20 years of hands-on experience and must know what to ask, what affects price and where a real object usually loses money and time.",
    experienceOne: "Permits and source documentation.",
    experienceTwo: "Engineering network and pipeline design.",
    experienceThree: "BOQs, estimates, commercial proposals and contractor economics.",
    experienceFour: "Contracts, correspondence and customer coordination.",
    experienceFive: "Installation organization and hands-on field practice.",
    experienceSix: "Technical office work, as-built documentation, testing and handover.",
    experienceNote:
      "This experience becomes product logic: clarification questions, source-data checks, risk categories and the structure of the preliminary estimate process. Legal documents and settlement mechanics require dedicated legal review before production use.",
    marketplaceEyebrow: "Not a response marketplace first",
    marketplaceTitle: "First: analyze, clarify, estimate, document. Later: match.",
    marketplaceText:
      "Profi.ru, Vsem Podryad, Biddaro and similar services help users find requests or contacts. ProObject starts after the request appears: it turns fragmented inputs into a managed engineering and commercial process. A future marketplace can connect customers and contractors around a structured task and transparent conditions, not only around a contact.",
    growthEyebrow: "Product depth",
    growthTitle: "From engineering assistant to construction deal infrastructure.",
    growthText:
      "ProObject develops step by step: each next capability builds on a useful working scenario and expands it without turning the public roadmap into a technical specification.",
    growthOneTitle: "Review and estimate",
    growthOneText: "Role, source data, known scope, risks, questions, preliminary cost, timing and team.",
    growthTwoTitle: "Documents and object tracking",
    growthTwoText:
      "Proposals, contracts, schedules, acts, as-built and closing documents, versions and change log.",
    growthThreeTitle: "Party interaction and transparent deal",
    growthThreeText:
      "Customers and contractors align terms, stages, acceptance and, in the future, staged settlement through permitted infrastructure.",
    growthFourTitle: "International development and localization",
    growthFourText:
      "The product is not limited to one country: language, currency, regulations, document forms, payments and legal requirements are localized by market.",
    growthNote:
      "ProObject starts with a clear answer to \"what needs to be done here and what should it cost\" and can grow into an environment where parties find each other, align terms, work through documents, accept stages and settle transparently. Future staged settlement can be supported only through permitted payment infrastructure and after legal, security and compliance design. The MVP does not try to implement the whole market at once, but the architecture should not require rebuilding the product from scratch.",
    pricingEyebrow: "Payment for useful output",
    pricingTitle: "No artificial paywall around basic clarity.",
    pricingManualTitle: "Manual input",
    pricingManualText:
      "Basic path: the user enters volumes, materials and conditions manually and gets a useful preliminary structure.",
    pricingDocsTitle: "Photo and document analysis",
    pricingDocsText:
      "Paid intelligent processing saves time: photos, projects, BOQs and defect reports influence questions, risks and estimate confidence.",
    pricingProTitle: "Extended estimate and documents",
    pricingProText:
      "Next level: fuller estimate, response draft, proposal outline, customer roadmap or document pack for a professional next step.",
    accessEyebrow: "Accessible by design",
    accessTitle: "Professional logic without bureaucratic friction.",
    accessText:
      "The interface should use clear field names, short profile questions and a compact glossary for terms such as BOQ, technical task, as-built documentation, technical office and completion documents. The public interface avoids personal author labels; future users work under registered accounts or nicknames, while internal authorship and version history remain in the project records.",
    trustSecurityTitle: "Security and privacy",
    trustSecurityText:
      "Confidential files stay off-chain. The architecture is designed around data minimization, role-based access, encryption, event audit, version history, secure uploads, backups and AI-output controls.",
    trustBlockchainTitle: "Verifiable digital record, not technology for its own sake",
    trustBlockchainText:
      "Future integrations may use neutral digital fixation of key events, document fingerprints and status records. No token or real-funds custody is promised in the MVP.",
    trustMvpTitle: "Current status",
    trustMvpText:
      "A local MVP and public proof materials are being prepared for pilots, grants and partner conversations using public-safe or synthetic data.",
    contactEyebrow: "Pilot, partnership, grant, investment",
    contactTitle: "Pilot the workflow with real requests.",
    contactText:
      "ProObject is open to focused pilots with masters, crews, contractors and customers: starting with real requests and price clarity, then moving toward documents, stages, acceptance and transparent settlement logic. The page is a public product proof, not a disclosure of the internal calculation base.",
    vitaliyRole: "Founder, domain expert",
    nikitaRole: "Developer",
    teamEyebrow: "Team and technical proof",
    teamTitle: "Domain expertise plus a developer who can explain the code.",
    teamText:
      "The product is built by two people with clearly separated roles: two decades of field and technical-office practice on one side, and hands-on implementation on the other. We describe the current stage as it is, without claiming capabilities the project has not reached yet.",
    vitaliyBio:
      "Twenty years of full-cycle construction practice: permits and source documentation, engineering network design, BOQs and contractor economics, contracts and customer coordination, installation organization, as-built documentation, testing and handover. This experience defines the product logic.",
    nikitaRoleFull: "Core developer",
    nikitaBio:
      "Core developer of the current ProObject prototype and of the planned public-safe XRPL proof module. Holds a vocational qualification in software development and is continuing his education in artificial intelligence and technology. Responsible for product implementation, structured-data workflows and test automation. XRPL expertise is being built through a working, documented proof rather than claimed prior production blockchain experience.",
    proofStatus: "In preparation",
    proofTitle: "Public-safe XRPL proof module",
    proofText:
      "A separate public repository will demonstrate, on synthetic data only, how a construction document fingerprint and a milestone status can be recorded on XRPL Testnet. Documents stay off-chain, no real funds are used and no token is issued. The commercial core of ProObject is not part of that repository.",
    proofNote:
      "The repository link will be published here once the module and its run instructions are ready for external review.",
    disclosureText:
      "Public disclosure boundary: this page does not disclose internal formulas, coefficients, prompts, matching or scoring logic, real customer documents, real case database or private roadmap. Preliminary outputs are decision-support only and do not replace design, official estimates, contracts, legal review or professional on-site inspection."
  },
  ru: {
    navProblem: "Проблема",
    navWorkflow: "Как работает",
    navResult: "Результат",
    navTeam: "Команда",
    navContact: "Пилот",
    heroEyebrow: "AI-помощник строительного workflow",
    heroTitle: "ProObject — техническая и экономическая основа строительной сделки.",
    heroSupportLine: "Понятные условия. Предсказуемый результат.",
    heroLede:
      "ProObject превращает заявку, фото, проект, ВОР или дефектную ведомость в структурированную задачу, релевантные вопросы, предварительную оценку стоимости/срока/команды/рисков, контекст исполнения и закрывающие документы.",
    ctaPilot: "Обсудить пилот",
    ctaWorkflow: "Посмотреть сценарий",
    heroInput: "Вход",
    heroInputValue: "Заявка, фото, проект, ВОР, дефектная ведомость, ТЗ",
    heroFlowOne: "Роль пользователя и цель расчета",
    heroFlowTwo: "Паспорт объекта и недостающие данные",
    heroFlowThree: "Релевантные вопросы заказчику",
    heroFlowFour: "Предварительная цена, команда, срок и риски",
    heroFlowFive: "КП, исполнение, приемка и закрывающие документы",
    problemEyebrow: "Узнаваемая боль",
    problemTitle: "Заказ уже есть. Как определить реальный объем работ и обоснованную стоимость?",
    problemLead:
      "Для одиночного мастера, бригады 2-5 человек, малого подрядчика или заказчика сложная часть часто начинается уже после получения заявки. Исходники разрознены, границы работ неясны, а цену нужно назвать до того, как понятны все условия.",
    problemItemOne: "Фото, описание, проект и таблицы редко сами превращаются в готовую цену.",
    problemItemTwo: "Материалы, операции, люди, сроки, усложнения и расходы легко не заметить.",
    problemItemThree: "Исполнитель боится занизить цену и уйти в убыток либо завысить и потерять заказ.",
    problemItemFour: "Заказчик не всегда понимает, что входит в цену и где могут появиться доплаты.",
    calculatorEyebrow: "Почему обычного калькулятора недостаточно",
    calculatorTitle: "Цена — это не только количество единиц, умноженное на расценку.",
    calculatorText:
      "Реальная работа зависит от условий объекта и границ ответственности. Высота, стесненность, действующее оборудование, режимный объект, остановка систем, подъем, пересечения коммуникаций, техника, выезд, мобилизация, расходка, документация и испытания могут менять трудоемкость, риск и цену.",
    factorOne: "Условия объекта",
    factorTwo: "Доступ и отключения",
    factorThree: "Команда и техника",
    factorFour: "Документы и испытания",
    factorFive: "Границы ответственности",
    workflowEyebrow: "Как работает ProObject",
    workflowTitle: "От исходных данных до завершения сделки.",
    workflowText:
      "ProObject сопровождает строительную задачу не только до расчета, а по всему рабочему циклу: от разбора исходных данных и согласования условий до выполнения, приемки, расчетов и закрывающих документов.",
    workflowOneTitle: "Роль и назначение",
    workflowOneText:
      "Сначала ProObject определяет, кто пользуется сервисом и что нужно получить: быстрое решение, расчет, КП, дорожную карту заказчика или сравнение.",
    workflowTwoTitle: "Исходные данные",
    workflowTwoText: "Пользователь вводит или загружает заявку, описание, фото, проект, ВОР, дефектную ведомость или ТЗ.",
    workflowThreeTitle: "Паспорт объекта и известный объем",
    workflowThreeText:
      "Известный объем работ, условия, документы, сроки, бюджетные ориентиры и требования собираются в единую карточку объекта.",
    workflowFourTitle: "Недостающие данные, риски и факторы",
    workflowFourText:
      "Система выделяет недостающие данные, объектовые риски, усложняющие факторы, границы работ и зоны ответственности, которые влияют на трудоемкость, срок и цену.",
    workflowFiveTitle: "Вопросы и письмо заказчику",
    workflowFiveText:
      "ProObject готовит релевантные уточняющие вопросы и профессиональное письмо заказчику, не повторяя то, что уже ясно из заявки, фото, ВОР, дефектной ведомости или проекта.",
    workflowSixTitle: "Фиксация ответов и границ",
    workflowSixText: "Ответы заказчика сохраняются как исходные данные, допущения, границы работ и зоны ответственности.",
    workflowSevenTitle: "Обоснованный расчет",
    workflowSevenText:
      "Работы, материалы, команда, срок, расходы, риски и диапазон цены рассчитываются с видимыми допущениями. Чем лучше исходные данные, тем уже диапазон, но это не гарантированная финальная смета.",
    workflowEightTitle: "Согласование и ведение исполнения",
    workflowEightText:
      "КП, отклик, договор, этапы, календарный план, изменение условий и подтверждение выполненного ведутся в одном объектном контексте.",
    workflowNineTitle: "Приемка, расчеты и закрытие",
    workflowNineText:
      "Акты выполненных работ, закрывающие и исполнительные документы, подтверждение этапов, статус окончательного расчета и архив объекта замыкают контур сделки.",
    documentEyebrow: "Roadmap-модуль: Документы",
    documentTitle: "Отдельный модуль документов идет за реальным сценарием сделки.",
    documentText:
      "В ProObject предусмотрен отдельный модуль «Документы»: не общая библиотека, а база документов, которая подбирается по роли пользователя, типу объекта, виду работ и текущему этапу и связана с карточкой объекта.",
    documentTechTitle: "Подбор по контексту",
    documentTechText:
      "Запросы исходных данных, опросные листы, технические записки, ВОР, дефектные ведомости, КП, сметы, калькуляции и планы работ подбираются по сценарию.",
    documentContractTitle: "Связь с карточкой объекта",
    documentContractText:
      "Документы могут подставлять известные реквизиты, состав работ, этапы и границы ответственности, хранить версии, статусы, журнал изменений и связи между документами.",
    documentCloseTitle: "Контроль по сделке",
    documentCloseText:
      "Модуль отслеживает, что требуется, подготовлено, согласовано, подписано или отсутствует: от договоров и допсоглашений до исполнительной, актов, КС-2/КС-3 там, где применимо, гарантийных документов и архива.",
    documentNote:
      "Это часть roadmap продукта. Шаблоны и справочные материалы не заменяют профильную юридическую или техническую проверку там, где она обязательна; будущие подписание и передача документов требуют отдельного правового и технического проектирования.",
    outcomeEyebrow: "Результат для двух сторон",
    outcomeTitle: "Единая среда от исходников и цены до закрывающих документов.",
    outcomePhilosophy:
      "Мы не защищаем одну сторону от другой. Мы создаем понятную экономическую и техническую основу, на которой заказчик и подрядчик могут согласовать условия и получить ожидаемый результат.",
    contractorTitle: "Подрядчик",
    contractorText:
      "Понимает состав, затраты, команду, срок и риски, а затем защищает ожидаемую прибыль обоснованной ценой вместо угадывания.",
    sharedTitle: "Общая основа",
    sharedText:
      "Если исходных данных недостаточно или экономика не сходится, это видно до договора. Та же среда дальше может поддерживать согласование, исполнение, приемку, расчеты и закрывающие документы.",
    customerTitle: "Заказчик",
    customerText: "Получает понятнее состав, ожидаемый результат, диапазон бюджета, этапы и вопросы для сравнения предложений по одинаковым условиям.",
    experienceEyebrow: "Почему именно мы",
    experienceTitle: "Не просто AI. Опыт полного жизненного цикла объекта.",
    experienceLead:
      "Универсальный ИИ умеет писать текст. ProObject создается на основе 20 лет практического опыта и должен знать, что спросить, что влияет на цену и где реальный объект обычно теряет деньги и время.",
    experienceOne: "Разрешительная и исходная документация.",
    experienceTwo: "Проектирование инженерных сетей и трубопроводов.",
    experienceThree: "ВОР, сметы, КП и экономика подрядчика.",
    experienceFour: "Договоры, переписка и взаимодействие с заказчиком.",
    experienceFive: "Организация монтажа и личная объектовая практика.",
    experienceSix: "ПТО, исполнительная документация, испытания и сдача.",
    experienceNote:
      "Этот опыт становится логикой продукта: уточняющими вопросами, проверкой исходников, категориями рисков и структурой предварительного расчетного процесса. Юридические документы и механизмы сделки требуют профильной правовой проверки до production.",
    marketplaceEyebrow: "Не биржа откликов на первом шаге",
    marketplaceTitle: "Сначала: разобрать, уточнить, оценить, оформить. Потом: сопоставлять.",
    marketplaceText:
      "Профи.ру, Всем Подряд, Biddaro и похожие сервисы помогают находить заявки или контакты. ProObject начинается после появления заявки: превращает разрозненные вводные в управляемый инженерно-коммерческий процесс. Будущая биржа может соединять заказчика и исполнителя вокруг структурированной задачи и прозрачных условий, а не только вокруг контакта.",
    growthEyebrow: "Глубина продукта",
    growthTitle: "От инженерного помощника до инфраструктуры строительной сделки.",
    growthText:
      "ProObject развивается поэтапно: каждая следующая возможность опирается на уже работающий полезный сценарий и расширяет его, не превращая публичный roadmap в готовое техническое задание.",
    growthOneTitle: "Разбор и расчет",
    growthOneText: "Роль, исходные данные, известный объем, риски, вопросы, предварительная стоимость, срок и команда.",
    growthTwoTitle: "Документы и ведение объекта",
    growthTwoText:
      "КП, договоры, графики, акты, исполнительные и закрывающие документы, версии и журнал изменений.",
    growthThreeTitle: "Взаимодействие сторон и прозрачная сделка",
    growthThreeText:
      "Заказчик и подрядчик согласуют условия, этапы, приемку и в перспективе поэтапные расчеты через разрешенную инфраструктуру.",
    growthFourTitle: "Международное развитие и локализация",
    growthFourText:
      "Продукт не ограничивается одной страной: по рынкам локализуются язык, валюта, нормативные оговорки, формы документов, платежи и требования законодательства.",
    growthNote:
      "ProObject начинается с понятного ответа на вопрос «что здесь нужно сделать и сколько это должно стоить», а развивается в среду, где стороны находят друг друга, согласуют условия, работают по документам, принимают этапы и рассчитываются по прозрачной схеме. Будущие поэтапные расчеты могут поддерживаться только через разрешенную платежную инфраструктуру и после юридического, security и compliance-проектирования. MVP не пытается сразу реализовать весь рынок, но архитектура не должна требовать потом перекраивать продукт с нуля.",
    pricingEyebrow: "Оплата за полезный результат",
    pricingTitle: "Без искусственного платного барьера вокруг базовой ясности.",
    pricingManualTitle: "Ручной ввод",
    pricingManualText:
      "Базовый путь: пользователь сам вводит объемы, материалы и условия, а затем получает полезную предварительную структуру.",
    pricingDocsTitle: "Анализ фото и документов",
    pricingDocsText:
      "Платная интеллектуальная обработка экономит время: фото, проект, ВОР и дефектная ведомость влияют на вопросы, риски и уверенность оценки.",
    pricingProTitle: "Расширенный расчет и документы",
    pricingProText:
      "Следующий уровень: более полный расчет, черновик отклика, структура КП, дорожная карта заказчика или пакет документов для профессионального шага.",
    accessEyebrow: "Доступность",
    accessTitle: "Профессиональная логика без бюрократической тяжести.",
    accessText:
      "Интерфейс должен использовать понятные названия полей, короткие вопросы по профилю и компактный словарь сокращений: ВОР, ТЗ, ИД, ПТО, КС-2 и другие документы. Во внешнем интерфейсе нет персональных авторских ярлыков; будущие пользователи работают под аккаунтом или никнеймом, а внутреннее авторство и версии сохраняются в служебных записях.",
    trustSecurityTitle: "Кибербезопасность и приватность",
    trustSecurityText:
      "Конфиденциальные файлы остаются off-chain. Архитектура строится вокруг минимизации данных, разграничения доступа, шифрования, аудита событий, истории версий, безопасной загрузки, резервного копирования и контроля AI-выводов.",
    trustBlockchainTitle: "Проверяемая цифровая фиксация, а не технология ради технологии",
    trustBlockchainText:
      "Будущие интеграции могут использовать нейтральную цифровую фиксацию ключевых событий, отпечатков документов и статусов. В MVP нет обещаний токена или хранения реальных средств.",
    trustMvpTitle: "Текущий статус",
    trustMvpText:
      "Локальный MVP и публичные proof-материалы готовятся для пилотов, грантов и партнерских разговоров на public-safe или synthetic данных.",
    contactEyebrow: "Пилот, партнерство, грант, инвестиции",
    contactTitle: "Проверить workflow на реальных заявках.",
    contactText:
      "ProObject открыт к точечным пилотам с мастерами, бригадами, подрядчиками и заказчиками: сначала на реальных заявках и ясности цены, затем на документах, этапах, приемке и прозрачной логике расчетов. Страница является публичным доказательством продукта, а не раскрытием внутренней расчетной базы.",
    vitaliyRole: "Основатель, доменный эксперт",
    nikitaRole: "Разработчик",
    teamEyebrow: "Команда и техническое доказательство",
    teamTitle: "Отраслевая экспертиза и разработчик, способный объяснить свой код.",
    teamText:
      "Продукт делают два человека с четко разделенными ролями: двадцать лет полевой практики и работы технического отдела с одной стороны и практическая реализация с другой. Мы описываем текущую стадию как есть, не приписывая проекту возможностей, до которых он еще не дошел.",
    vitaliyBio:
      "Двадцать лет практики полного цикла в строительстве: разрешительная и исходная документация, проектирование инженерных сетей, ВОР, сметы и экономика подрядчика, договоры и координация с заказчиком, организация монтажа, исполнительная документация, испытания и сдача. Этот опыт и определяет продуктовую логику.",
    nikitaRoleFull: "Core developer",
    nikitaBio:
      "Core developer текущего прототипа ProObject и готовящегося public-safe XRPL proof-модуля. Имеет диплом программиста и продолжает образование в области искусственного интеллекта и технологий. Отвечает за реализацию продукта, работу со структурированными данными и автоматизацию тестов. Компетенция по XRPL подтверждается работающим документированным модулем, а не заявлениями о прошлом production-опыте в блокчейне.",
    proofStatus: "В подготовке",
    proofTitle: "Public-safe XRPL proof-модуль",
    proofText:
      "Отдельный публичный репозиторий покажет исключительно на синтетических данных, как отпечаток строительного документа и статус этапа могут быть зафиксированы в XRPL Testnet. Документы остаются off-chain, реальные средства не используются, токен не выпускается. Коммерческое ядро ProObject в этот репозиторий не входит.",
    proofNote:
      "Ссылка на репозиторий появится здесь, как только модуль и инструкция по его запуску будут готовы к внешней проверке.",
    disclosureText:
      "Граница публичного раскрытия: эта страница не раскрывает внутренние формулы, коэффициенты, промпты, matching/scoring logic, реальные клиентские документы, базу кейсов и private roadmap. Предварительные выводы являются decision-support и не заменяют проект, официальную смету, договор, юридическую проверку или профессиональное обследование объекта."
  }
};

const languageButtons = document.querySelectorAll("[data-lang-button]");
const translatableNodes = document.querySelectorAll("[data-i18n]");

function applyLanguage(language) {
  document.documentElement.lang = language;
  translatableNodes.forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = translations[language][key] || translations.en[key] || node.textContent;
  });
  languageButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.langButton === language);
  });
  localStorage.setItem("proobject-language", language);
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.langButton));
});

applyLanguage(localStorage.getItem("proobject-language") || "en");
