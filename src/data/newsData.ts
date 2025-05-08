import { Article } from '../types/types';

export const newsArticles: Article[] = [
  {
    id: '1',
    title: 'Scientists Discover New Species in Amazon Rainforest',
    thumbnail: 'https://images.pexels.com/photos/2295744/pexels-photo-2295744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: `Researchers working in the Amazon rainforest have discovered a previously unknown species of frog that can change colors based on its environment. This remarkable discovery is helping scientists better understand evolution and adaptation in amphibians.

The newly identified species, tentatively named "Hyla chromatica," was found during an expedition led by Dr. Maria Rodriguez of the International Biodiversity Institute. The research team spent three months investigating remote areas of the Amazon basin.

"This discovery is truly extraordinary," said Dr. Rodriguez. "The frog's ability to rapidly alter its pigmentation in response to surroundings goes beyond typical camouflage mechanisms we've observed in other amphibians."

Initial studies suggest that the frog can shift between at least five distinct color patterns, ranging from vibrant green to deep brown, in a matter of minutes. Researchers believe this adaptation helps it evade predators in the diverse microhabitats of the rainforest floor.

The finding comes at a critical time, as deforestation and climate change continue to threaten the Amazon ecosystem. Dr. Rodriguez emphasized that "each new species discovery underscores how much we still don't know about this vital ecosystem, and what we stand to lose if conservation efforts fail."

The team has collected several specimens for further study and plans to publish their complete findings in the Journal of Tropical Biology next month.`,
    summary: 'Researchers discover a color-changing frog species in the Amazon rainforest, raising new questions about evolution and highlighting conservation needs.',
    viewCount: 1243,
    likes: 326,
    dislikes: 18,
    comments: [
      {
        id: 'c1',
        userId: 'user1',
        username: 'EcoWatcher',
        content: 'This is why we need to protect the Amazon! Who knows what other amazing species are still undiscovered.',
        createdAt: '2024-08-21T14:23:00Z'
      },
      {
        id: 'c2',
        userId: 'user2',
        username: 'BiologyFan',
        content: 'The adaptation mechanisms of rainforest species never cease to amaze me. Nature is incredible!',
        createdAt: '2024-08-21T16:45:00Z'
      }
    ],
    publishedAt: '2024-08-21T10:00:00Z',
    category: 'Science'
  },
  {
    id: '2',
    title: 'Global Tech Conference Unveils Next-Generation AI Systems',
    thumbnail: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: `The annual Global Technology Summit (GTS) kicked off yesterday with major announcements about next-generation artificial intelligence systems that promise to revolutionize industries from healthcare to transportation.

Tech giant NeuraTech unveiled their much-anticipated "Nexus" AI platform, which they claim represents a significant leap forward in machine learning capabilities. According to Dr. James Chen, NeuraTech's Chief AI Officer, "Nexus can process and analyze complex datasets up to 50 times faster than previous generation systems while using 70% less energy."

Demonstrations at the conference showed Nexus accurately diagnosing rare medical conditions from scans in seconds and optimizing city traffic patterns in real-time. Industry analysts are already predicting that Nexus will set new standards for AI performance and efficiency.

Not to be outdone, startup QuantumMinds presented their "EtherNet" system, which uses quantum computing principles to enhance natural language processing. Their showcase featured EtherNet simultaneously translating conversations between five different languages with unprecedented accuracy.

"Traditional language models struggle with context and cultural nuances," explained QuantumMinds founder Sofia Patel. "EtherNet's quantum approach allows it to maintain contextual understanding across multiple languages in ways that weren't possible before."

The four-day conference is expected to draw over 50,000 attendees from 120 countries. Other anticipated highlights include sessions on responsible AI development, quantum computing applications, and the future of human-computer interaction.`,
    summary: 'The Global Technology Summit showcases revolutionary AI advancements, including NeuraTech\'s ultra-efficient Nexus platform and QuantumMinds\' multilingual translation system.',
    viewCount: 984,
    likes: 245,
    dislikes: 42,
    comments: [
      {
        id: 'c3',
        userId: 'user3',
        username: 'TechEnthusiast',
        content: 'Nexus sounds promising, but I wonder about the ethical guidelines they\'re implementing. Advanced AI needs robust safety measures.',
        createdAt: '2024-08-22T09:12:00Z'
      }
    ],
    publishedAt: '2024-08-22T08:30:00Z',
    category: 'Technology'
  },
  {
    id: '3',
    title: 'Historic Climate Agreement Reached at International Summit',
    thumbnail: 'https://images.pexels.com/photos/2990650/pexels-photo-2990650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: `After two weeks of intense negotiations, representatives from 195 countries have signed a landmark climate agreement that goes beyond previous accords in both ambition and enforcement mechanisms.

The "Global Climate Restoration Pact" establishes binding targets to reduce carbon emissions by 60% from 2020 levels by 2035, with a pathway to carbon neutrality by 2045. Unlike previous agreements, this pact includes financial penalties for nations that fail to meet interim targets.

"This is the agreement our planet has been waiting for," said United Nations Secretary-General Amara Okafor. "For the first time, we have combined ambitious goals with real accountability."

A key breakthrough came when the world's three largest carbon emitters—China, the United States, and India—jointly announced their commitment to accelerate their transition to renewable energy sources. This includes quadrupling their combined investment in green technologies to $2 trillion over the next decade.

The agreement also establishes a $300 billion "Climate Justice Fund" to help vulnerable nations adapt to already unavoidable climate impacts and transition their economies away from fossil fuels.

Environmental groups have cautiously welcomed the agreement. "This pact represents real progress, especially in terms of enforcement," said Greenpeace International Director Lin Wei. "But the true test will be implementation. We'll be watching closely to ensure these promises translate into action."

The new measures will take effect in January 2025, with the first compliance review scheduled for 2027.`,
    summary: 'Nations sign groundbreaking climate agreement with binding emission targets, financial penalties, and a $300 billion fund to support vulnerable countries.',
    viewCount: 1572,
    likes: 489,
    dislikes: 76,
    comments: [
      {
        id: 'c4',
        userId: 'user4',
        username: 'ClimateAdvocate',
        content: 'Finally some real consequences for inaction! This gives me hope that we might actually address this crisis in time.',
        createdAt: '2024-08-23T11:18:00Z'
      },
      {
        id: 'c5',
        userId: 'user5',
        username: 'EconomicsProf',
        content: 'The financial mechanisms are interesting, but I\'m skeptical about enforcement. We\'ve seen promises broken before.',
        createdAt: '2024-08-23T12:45:00Z'
      },
      {
        id: 'c6',
        userId: 'user6',
        username: 'FutureThinking',
        content: 'The $300B fund is crucial. Developing nations shouldn\'t have to choose between economic growth and climate action.',
        createdAt: '2024-08-23T14:20:00Z'
      }
    ],
    publishedAt: '2024-08-23T10:15:00Z',
    category: 'Environment'
  },
  {
    id: '4',
    title: 'Revolutionary Treatment Shows Promise for Alzheimer\'s Patients',
    thumbnail: 'https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: `A clinical trial for a new Alzheimer's treatment has shown unprecedented results in slowing and potentially reversing cognitive decline in patients with early to moderate stages of the disease.

The treatment, developed by researchers at Cambridge Neuroscience Institute, combines targeted immunotherapy with neural stimulation to address both the amyloid plaques associated with Alzheimer's and the neural connectivity issues that lead to cognitive symptoms.

In the Phase II trial involving 240 patients, 78% of those receiving the treatment showed significant improvement in cognitive function after six months, compared to just 3% in the placebo group. More remarkably, brain scans revealed a reduction in amyloid plaques in 65% of treated patients.

"These results far exceeded our expectations," said lead researcher Dr. Elena Kostas. "Not only did we see the disease progression halt in most patients, but many experienced meaningful recovery of cognitive abilities that had been lost."

Participants in the treatment group reported improvements in memory, problem-solving abilities, and daily functioning. Family members noted that patients were more engaged and able to recall recent events and recognize loved ones who had become unfamiliar to them.

The team is now preparing for a larger Phase III trial while continuing to monitor current participants for any long-term effects. If these results hold up in expanded trials, the treatment could be available to patients within three to four years, pending regulatory approval.

"We must be cautiously optimistic," Dr. Kostas emphasized. "But this represents the most promising advance we've seen in Alzheimer's treatment in decades."`,
    summary: 'A groundbreaking combination therapy shows unprecedented success in improving cognitive function and reducing amyloid plaques in Alzheimer\'s patients during clinical trials.',
    viewCount: 2103,
    likes: 573,
    dislikes: 24,
    comments: [
      {
        id: 'c7',
        userId: 'user7',
        username: 'MedStudent',
        content: 'This approach targeting both plaques and neural connectivity is brilliant. I\'ve been following Dr. Kostas\' work for years.',
        createdAt: '2024-08-24T15:30:00Z'
      }
    ],
    publishedAt: '2024-08-24T09:45:00Z',
    category: 'Health'
  },
  {
    id: '5',
    title: 'Major Economic Reform Package Announced to Address Inflation',
    thumbnail: 'https://images.pexels.com/photos/210574/pexels-photo-210574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: `The Federal Reserve and Treasury Department jointly announced a comprehensive economic reform package yesterday aimed at tackling persistent inflation while preventing a recession.

The multi-pronged approach includes adjustments to interest rates, new supply chain resilience measures, and targeted tax incentives designed to increase production in sectors experiencing shortages.

"We're taking a more nuanced approach than the blunt instrument of rate hikes alone," explained Federal Reserve Chair Daniel Harrison. "Our data shows that current inflation is driven by specific supply constraints rather than general demand issues."

Central to the package is the Supply Chain Resilience Act, which allocates $50 billion to expand domestic manufacturing capacity for critical components and materials. Additionally, the Fed will implement a modified interest rate strategy that varies by economic sector rather than applying uniform increases.

Economists have responded positively to the announcement. "This represents a sophisticated understanding of our current economic challenges," said Dr. Maya Johnson, chief economist at Global Financial Institute. "By addressing specific supply bottlenecks while carefully managing demand, they've charted a potential path to price stability without triggering a downturn."

Markets reacted favorably to the news, with the Dow Jones Industrial Average gaining 420 points. Consumer confidence indices also showed improvement following the announcement.

The measures will be implemented in phases over the next six months, with the first set of targeted interventions beginning next week. Officials have committed to monthly progress reports on inflation metrics and supply chain improvements.`,
    summary: 'Federal economic authorities announce innovative reforms combining sector-specific interest rates and supply chain investments to fight inflation without causing a recession.',
    viewCount: 1456,
    likes: 287,
    dislikes: 115,
    comments: [
      {
        id: 'c8',
        userId: 'user8',
        username: 'FinanceGuru',
        content: 'This sector-specific approach is innovative, but extremely complex to execute well. I\'m cautiously optimistic.',
        createdAt: '2024-08-25T10:10:00Z'
      },
      {
        id: 'c9',
        userId: 'user9',
        username: 'PolicyWonk',
        content: 'The supply chain investments are long overdue. We\'ve needed this kind of strategic industrial policy for years.',
        createdAt: '2024-08-25T11:23:00Z'
      }
    ],
    publishedAt: '2024-08-25T08:00:00Z',
    category: 'Economy'
  },
  {
    id: '6',
    title: 'Breakthrough in Sustainable Aviation: Hydrogen-Powered Commercial Flight Completed',
    thumbnail: 'https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    content: `Aviation history was made yesterday when the first commercial-sized aircraft powered entirely by hydrogen fuel cells completed a successful 300-mile test flight with 40 passengers onboard.

The modified regional jet, developed by AeroNova in partnership with renewable energy firm GreenHydrogen, produced zero carbon emissions during the flight from London to Edinburgh. Instead, the only byproduct was water vapor.

"This flight marks the beginning of truly sustainable air travel," said AeroNova CEO Richard Takamoto during a press conference following the landing. "We've proven that hydrogen power can deliver the range and reliability needed for commercial aviation without the environmental impact."

The aircraft uses liquid hydrogen stored in specialized insulated tanks that feed into fuel cells, which generate electricity to power advanced electric motors. The system provides thrust equivalent to conventional jet engines while weighing only 15% more.

While the technology is still in its early stages, the successful flight has major implications for the airline industry, which has struggled to find viable paths to decarbonization. Current projections suggest hydrogen-powered aircraft could handle up to 75% of short and medium-haul flights by 2040.

"This isn't just an incremental improvement—it's a quantum leap," said International Air Transport Association Director Rebecca Chen. "The data from this flight will accelerate adoption of hydrogen technology across the industry."

AeroNova plans to conduct more test flights over longer distances in the coming months, with the goal of securing regulatory approval for passenger service on select routes by 2027.`,
    summary: 'The world\'s first hydrogen-powered commercial aircraft successfully completes a 300-mile flight with passengers, demonstrating zero-emission technology that could transform the aviation industry.',
    viewCount: 1898,
    likes: 512,
    dislikes: 33,
    comments: [
      {
        id: 'c10',
        userId: 'user10',
        username: 'SkyTravel',
        content: 'I would absolutely choose a hydrogen-powered flight if given the option. The airline industry needs this revolution.',
        createdAt: '2024-08-26T14:50:00Z'
      }
    ],
    publishedAt: '2024-08-26T12:30:00Z',
    category: 'Technology'
  }
];

export const initialUserProfile: UserProfile = {
  id: 'user123',
  username: 'NewsReader',
  viewedArticles: [],
  likedArticles: [],
  dislikedArticles: []
};

export const getArticleById = (id: string): Article | undefined => {
  return newsArticles.find(article => article.id === id);
};

export const getTrendingArticles = (): Article[] => {
  return [...newsArticles].sort((a, b) => b.viewCount - a.viewCount).slice(0, 3);
};

export const getArticlesByCategory = (category: string): Article[] => {
  return category === 'All' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === category);
};

export interface UserProfile {
  id: string;
  username: string;
  viewedArticles: string[];
  likedArticles: string[];
  dislikedArticles: string[];
}