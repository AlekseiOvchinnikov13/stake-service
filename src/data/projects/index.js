import IntroImg from './images/intro.png';
import StakeImg from './images/stake.png';

export const GET_STAKING_TUTORIAL_SUBTITLE = coin => `Your ${coin.toUpperCase()}s must be in a wallet or custodial account in order to use our staking services.`;
export const GET_REWARD_CALCULATOR_SUBTITLE = name => `How many dollars do you want to put in for ${name}?`;
export const POST_TITLE_HOW_TO_STAKE = name => `How to stake ${name} tokens`;

// export const PROJECT_ID_GRAPH = 'the-graph';

export const PROJECTS_DATA = [
  {
    id: 'solana',
    commonInfo: {
      explorerLink: 'https://www.validators.app/validators/HoXANZnWTGeePertqWkMEnnhgXjTjzpfWaT2kja2ZgVU?locale=en&network=mainnet',
      apy: 5.34
    },
    projectsPage: {
      stakingCommissionValue: '10&nbsp;%',
      totalStakeValue: '206448',
      delegatorsValue: '484',
      description: {
        desc1: 'Solana is&nbsp;a&nbsp;high-performance cryptocurrency blockchain that supports smart contracts and decentralized applications. Its feature is&nbsp;the use of&nbsp;a&nbsp;special PoS consensus mechanism, called Proof-of-History, with time-stamped transactions in&nbsp;order to&nbsp;achieve maximum efficiency.',
        desc2: 'Solana solves one of&nbsp;the main problems-slow transactions and high costs (which are found in&nbsp;layer-1&nbsp;analogues, for example, Bitcoin and Ethereum). Solana is&nbsp;capable of&nbsp;processing about 50,000 transactions per second. Also an&nbsp;important area of&nbsp;activity of&nbsp;the Solana Foundation is&nbsp;to&nbsp;ensure greater access to&nbsp;decentralized finance.'
      },
      basicInfoList: {
        'Protocol Category': 'Layer 1',
        'Staking Type': 'PoH',
        'Governance': 'Validator vote',
        'Validator Address': '4dmBLJcchyfucSxkVmrymmsnVpZm3rBkp7kbF7qHTTYW',
      },
      articleLinks: [
        {
          sourceLink: 'https://medium.com/stake-service/introduction-to-solana-f35e23a25a61',
          img: IntroImg,
          isIntro: true,
          postTitle: 'A killer for Ethereum?'
        },
        {
          articleSubtitle: 'via Solflare Wallet',
          sourceLink: 'https://medium.com/stake-service/how-to-stake-solana-tokens-7a6542fe4ec8',
          img: StakeImg,
          postTitle: 'How to stake $SOL tokens using a SolFlare or Phantom wallet'
        }
      ]
    }
  },
  {
    id: 'celo',
    commonInfo: {
      explorerLink: 'https://rc1-blockscout.celo-testnet.org/address/0xbf5049910Db82E8c92B7158c959330BFe5cC135e/celo',
      apy: 4.72
    },
    projectsPage: {
      stakingCommissionValue: '50&nbsp;%',
      description: {
        desc1: 'Celo is&nbsp;global payments infrastructure built for mobile Thousands of&nbsp;organizations and individuals are developing, growing, and governing Celo, an&nbsp;open-source platform that enables anyone to&nbsp;build borderless applications.',
        desc2: 'We&nbsp;believe that people live primarily in&nbsp;connection to&nbsp;one another. We&nbsp;recognize that individuals are healthier and happier when they are members of&nbsp;a&nbsp;strong social community with meaningful relationships&nbsp;&mdash; that&nbsp;is, when they are living within a&nbsp;healthy and happy whole. We&nbsp;embrace values that strengthen community.'
      },
      basicInfoList: {
        'Protocol Category': 'Layer 1',
        'Staking Type': 'PoS',
        'Governance': 'Validator vote',
        'Validator Address': '0xb35Be22BccB0dB9dC62967dcF15fEB97C20f854e',
      },
      articleLinks: [
        {
          sourceLink: 'https://medium.com/stake-service/money-can-be-beautiful-37c42a8d535a',
          img: IntroImg,
          isIntro: true,
          postTitle: 'Money can be beautiful'
        },
        {
          articleSubtitle: 'via desktop celo wallet',
          sourceLink: 'https://medium.com/stake-service/hey-guys-today-well-take-a-look-at-how-you-can-use-the-cello-wallet-to-stake-your-own-cello-92730ac24aa5',
          img: StakeImg,
          postTitle: 'Hey guys! Today, we’ll take a look at how you can use the Celo wallet to stake your own CELO tokens and start earning rewards.'
        }
      ]
    }
  },
  {
    id: 'the-graph',
    commonInfo: {
      explorerLink: 'https://www.maplenodes.com/graph/indexer/0x19fBac0891042bE71Ce60321a17720358575f580',
      apy: 10
    },
    projectsPage: {
      stakingCommissionValue: '10&nbsp;%',
      totalStakeValue: '3935535',
      description: {
        desc1: 'The Graph is&nbsp;an&nbsp;indexing protocol and a&nbsp;global API for organizing blockchain data. Easy access to&nbsp;them is&nbsp;provided by&nbsp;GraphQL. The main difference (from other PoS networks) of&nbsp;delegation to&nbsp;the Graph is&nbsp;that the indexers that GRT holders can delegate represent indexing and query processing services for open API subgraphs.',
        desc2: 'Subgraphs can be&nbsp;queried by&nbsp;applications via GraphQL, and together with Indexers, Curators, and Delegates, they form a&nbsp;decentralized data marketplace for the Web3&nbsp;ecosystem.'
      },
      basicInfoList: {
        'Protocol Category': 'Layer 2',
        'Staking Type': 'dPoS',
        'Governance': 'Validator vote',
        'Validator Address': '0x19fBac0891042bE71Ce60321a17720358575f580',
      },
      articleLinks: [
        {
          sourceLink: 'https://medium.com/stake-service/introduction-to-the-graph-a5ec70c10d4a',
          img: IntroImg,
          isIntro: true,
          postTitle: 'Blockchain applications most often face difficulties in maintaining completeness, chain reorganization and security during the execution of request tasks'
        },
        {
          img: StakeImg,
          isSoon: true
        }
      ]
    }
  },
  {
    id: 'oasis-network',
    commonInfo: {
      explorerLink: 'https://www.oasisscan.com/validators/detail/oasis1qzt4fvcc6cw9af69tek9p3mfjwn3a5e5vcyrw7ac',
      apy: 10.21
    },
    projectsPage: {
      stakingCommissionValue: '18&nbsp;%',
      totalStakeValue: '21372614',
      delegatorsValue: '17',
      description: {
        desc1: 'By&nbsp;bringing privacy and scalability to&nbsp;DeFi, the Oasis Network expands DeFi beyond early adopters to&nbsp;a&nbsp;mass market. It&nbsp;enables private smart contracts, high scalability, and the ability to&nbsp;tokenize data.',
        desc2: 'This unlocks new use cases like private lending, undercollateralized loans, and private automated market makers.'
      },
      basicInfoList: {
        'Protocol Category': 'Layer 2',
        'Staking Type': 'PoS',
        'Governance': 'Validator vote',
        'Validator Address': 'oasis1qzt4fvcc6cw9af69tek9p3mfjwn3a5e5vcyrw7ac',
      },
      articleLinks: [
        {
          sourceLink: 'https://medium.com/stake-service/introduction-to-oasis-b589f52efe5f',
          img: IntroImg,
          isIntro: true,
          postTitle: 'Hello everybody! In this review, we want to talk about Oasis Labs!'
        },
        {
          articleSubtitle: 'via the Bitpie wallet',
          sourceLink: 'https://medium.com/stake-service/howe-to-delegate-rose-tokens-ad58cd84e542',
          img: StakeImg,
          postTitle: 'How to delegate ROSE tokens in the Bitpie wallet'
        }
      ]
    }
  },
  {
    id: 'avalanche-2',
    commonInfo: {
      explorerLink: 'https://avascan.info/staking/validator/NodeID-MZQmJvHFuSEPnhbTKzohubAqFi32Tc2Bz',
      apy: 2.7
    },
    projectsPage: {
      stakingCommissionValue: '5&nbsp;%',
      totalStakeValue: '2000',
      description: {
        desc1: 'Avalanche is&nbsp;a&nbsp;layer one blockchain that functions as&nbsp;a&nbsp;platform for decentralized applications and custom blockchain networks. It&nbsp;is&nbsp;one of&nbsp;Ethereum&rsquo;s rivals, aiming to&nbsp;unseat Ethereum as&nbsp;the most popular blockchain for smart contracts. It&nbsp;aims to&nbsp;do&nbsp;so&nbsp;by&nbsp;having a&nbsp;higher transaction output of&nbsp;up&nbsp;to&nbsp;6,500 transactions per second while not compromising scalability.',
        desc2: 'This is&nbsp;made possible by&nbsp;Avalanche&rsquo;s unique architecture. The Avalanche network consists of&nbsp;three individual blockchains: the X-Chain, C-Chain and P-Chain. Each chain has a&nbsp;distinct purpose, which is&nbsp;radically different from the approach Bitcoin and Ethereum use, namely having all nodes validate all transactions. Avalanche blockchains even use different consensus mechanisms based on&nbsp;their use cases.'
      },
      basicInfoList: {
        'Protocol Category': 'Layer 2',
        'Staking Type': 'PoS',
        'Governance': 'Validator vote',
        'Validator Address': 'MZQmJvHFuSEPnhbTKzohubAqFi32Tc2Bz',
      },
      articleLinks: [
        {
          sourceLink: 'https://medium.com/stake-service/avalanche-7f5e07061501',
          img: IntroImg,
          isIntro: true,
          postTitle: 'Another project that we think you should pay attention to is Avalanche.'
        },
        {
          isSoon: true,
          img: StakeImg
        }
      ]
    }
  },
  {
    id: 'regen',
    commonInfo: {
      explorerLink: 'https://atomscan.com/regen-network/validators/regenvaloper163g6kygmh08mgp0kj4gkenl4hj6nsqzgmd9w86',
      apy: 26.28
    },
    projectsPage: {
      stakingCommissionValue: '5&nbsp;%',
      totalStakeValue: '1791018',
      description: {
        desc1: 'Platform for a&nbsp;Thriving Planet Regen Network aligns economics with ecology to&nbsp;drive regenerative land management. Regen Ledger is&nbsp;a&nbsp;public, proof of&nbsp;stake (PoS) blockchain developed with the Cosmos Software Development Kit (SDK) built for verification of&nbsp;claims, agreements &amp;&nbsp;data related to&nbsp;ecological state.',
        desc2: 'Regen Ledger enables multiple registries to&nbsp;communicate and transact with each other producing a&nbsp;public ecological accounting system. Get involved with our community of&nbsp;developers.'
      },
      basicInfoList: {
        'Protocol Category': 'Layer 2',
        'Staking Type': 'PoS',
        'Governance': 'Validator vote',
        'Validator Address': 'regenvaloper163g6kygmh08mgp0kj4gkenl4hj6nsqzgmd9w86',
      },
      articleLinks: [
        {
          sourceLink: 'https://medium.com/stake-service/regen-network-blockchain-network-of-ecological-knowledge-573db3ac7880',
          img: IntroImg,
          isIntro: true,
          postTitle: 'Regen Network — blockchain network of ecological knowledge'
        },
        {
          articleSubtitle: 'via Keplr wallet',
          sourceLink: 'https://medium.com/stake-service/staking-regen-with-keplr-43b5d630fb16',
          img: StakeImg,
          postTitle: 'Hello everyone! April 15, 2021 — the launch of the Regen Network mainnet took place, and we have prepared for you the first manual on stake your coins to the Stake Service validator!'
        }
      ]
    }
  },
  {
    id: 'sentinel',
    commonInfo: {
      explorerLink: 'https://atomscan.com/sentinel/validators/sentvaloper163g6kygmh08mgp0kj4gkenl4hj6nsqzguk6rzf',
      apy: 30
    },
    projectsPage: {
      stakingCommissionValue: '2&nbsp;%',
      totalStakeValue: '35518657',
      description: {
        desc1: 'The Sentinel Network ($DVPN) is&nbsp;a&nbsp;peer to&nbsp;peer bandwidth marketplace that enables Decentralized Virtual Private Network (dVPN) applications and services.',
        desc2: 'Powered by&nbsp;the native $dVPN token along with Tendermint core &amp;&nbsp;Exidio.'
      },
      basicInfoList: {
        'Protocol Category': 'Layer 2',
        'Staking Type': 'PoS',
        'Governance': 'Validator vote',
        'Validator Address': 'sentvaloper163g6kygmh08mgp0kj4gkenl4hj6nsqzguk6rzf',
      },
      articleLinks: [
        {
          isSoon: true,
          img: IntroImg,
          isIntro: true
        },
        {
          articleSubtitle: 'via Keplr wallet',
          sourceLink: 'https://medium.com/stake-service/greetings-bd2a1955434e',
          img: StakeImg,
          postTitle: 'Greetings! A new regular manual telling us about the staking of dVPN coins of the Sentinel project. We’ll be using our favorite Keplr wallet!'
        }
      ]
    }
  },
  {
    id: 'xxcoin',
    commonInfo: {
      explorerLink: 'https://wallet.xx.network/#/staking/query/6XLcDwtHFRGdFHQm8j8sAszD3pJQ5sv35RUuXURH87rUv73D',
    },
    projectsPage: {
      stakingCommissionValue: '20&nbsp;%',
      totalStakeValue: '374111',
      delegatorsValue: '6',
      description: {
        desc1: 'The xx&nbsp;network is&nbsp;a&nbsp;&laquo;full-stack&raquo; platform which combines a&nbsp;native scalable, quantum-ready layer 1&nbsp;blockchain with the most private communications network in&nbsp;the world.',
        desc2: 'Invented by&nbsp;cryptographer David Chaum, the godfather of&nbsp;digital currency and privacy, the xx&nbsp;network&rsquo;s cMix communications layer provides complete metadata protection to&nbsp;all network communications. Using the xxDK, any application or&nbsp;blockchain platform can route their traffic through the xx&nbsp;network and provide quantum-secure, end-to-end encryption to&nbsp;their own transactions.'
      },
      basicInfoList: {
        'Protocol Category': 'Layer 2',
        'Staking Type': 'nPoS',
        'Governance': 'Validator vote',
        'Validator Address': '6XLcDwtHFRGdFHQm8j8sAszD3pJQ5sv35RUuXURH87rUv73D',
      },
      articleLinks: [
        {
          isSoon: true,
          img: IntroImg,
          isIntro: true
        },
        {
          isSoon: true,
          img: StakeImg
        }
      ]
    }
  },
  {
    id: 'centrifuge',
    commonInfo: {
      explorerLink: 'https://portal.chain.centrifuge.io/#/staking/query/4dfMuh3JVgrKgeWyzbcys2y5H3BJzzTySUmgUkgmuQumDZAK',
    },
    projectsPage: {
      stakingCommissionValue: '8&nbsp;%',
      totalStakeValue: '3113295',
      description: {
        desc1: 'Centrifuge is&nbsp;a&nbsp;decentralized asset financing protocol. It&nbsp;connects decentralized finance (DeFi) with real-world assets (RWA) while trying to&nbsp;lower the cost of&nbsp;capital for small and mid-size enterprises (SMEs) and provide investors with a&nbsp;stable source of&nbsp;income. The main goal of&nbsp;the project is&nbsp;to&nbsp;generate profits that are not tied to&nbsp;volatile crypto assets; the developers are pursuing the task of&nbsp;transferring real monetary value from fiat to&nbsp;cryptocurrencies.',
        desc2: 'Companies are using Centrifuge to&nbsp;access the liquidity that DeFi has to&nbsp;offer. They can tokenize real assets and use these tokens as&nbsp;collateral to&nbsp;access financing through Tinlake, a&nbsp;decentralized application (DApp) lending protocol. The Centrifuge blockchain is&nbsp;built on&nbsp;Polkadot (DOT) for speed and low fees, while its financial DApp Tinlake is&nbsp;built to&nbsp;access Ethereum (ETH) liquidity.'
      },
      basicInfoList: {
        'Protocol Category': 'Layer 2',
        'Staking Type': 'nPoS',
        'Governance': 'Validator vote',
        'Validator Address': '4dfMuh3JVgrKgeWyzbcys2y5H3BJzzTySUmgUkgmuQumDZAK',
      },
      articleLinks: [
        {
          sourceLink: 'https://medium.com/stake-service/introduction-to-centrifuge-379303ae8dda',
          img: IntroImg,
          isIntro: true,
          postTitle: 'One of the unsolved problems for large and medium-sized businesses is the delay and high cost of payments.'
        },
        {
          isSoon: true,
          img: StakeImg
        }
      ]
    }
  },
  {
    id: 'agoric',
    commonInfo: {
      explorerLink: 'https://atomscan.com/agoric/validators/agoricvaloper1upz9xpay0qx0vqealgr69ejtpzj5gskla5v0d9',
    },
    projectsPage: {
      stakingCommissionValue: '2&nbsp;%',
      totalStakeValue: '621831',
      description: {
        desc1: 'Agoric is&nbsp;an&nbsp;open-source development company launching an&nbsp;interoperable Proof-of-Stake chain and economy.',
        desc2: 'Our JavaScript-native smart contract platform offers developers a&nbsp;safe, reusable library of&nbsp;DeFi components to&nbsp;rapidly build and deploy on-chain.'
      },
      basicInfoList: {
        'Protocol Category': 'Layer 2',
        'Staking Type': 'PoS',
        'Governance': 'Validator vote',
        'Validator Address': 'agoricvaloper1upz9xpay0qx0vqealgr69ejtpzj5gskla5v0d9 ',
      },
      articleLinks: [
        {
          sourceLink: 'https://medium.com/stake-service/agoric-d288f101efd6',
          img: IntroImg,
          isIntro: true,
          postTitle: 'Agoric is a public blockchain with PoS consensus built on the basis of the Cosmos SDK and Tendermint.'
        },
        {
          articleSubtitle: 'via Keplr wallet',
          sourceLink: 'https://medium.com/stake-service/how-to-stake-agoric-bld-tokens-312c0dfd8b37',
          img: StakeImg,
          postTitle: 'Previously, we have introduced to you Agoric project. Since that article was published, there was a token sale of Agoric tokens on Coinlist on 28 of March.'
        }
      ]
    }
  },
  {
    id: 'dock',
    commonInfo: {
      explorerLink: '',
      apy: 14.73
    },
    projectsPage: {
      description: {
        desc1: 'Dock is&nbsp;a&nbsp;platform designed to&nbsp;provide a&nbsp;simple solution for businesses and developers to&nbsp;build, manage and present digital credentials that are instantly verifiable using blockchain technology.',
        desc2: 'With a standalone blockchain and integrated payment and incentivisation token, a trusted network of validators, and seamless adoption and interoperability, Dock is part of a movement to solve universal problems with existing data and how it is captured, shared and controlled.'
      },
      basicInfoList: {
        'Protocol Category': 'Layer 2',
        'Staking Type': 'PoS',
        'Governance': 'Validator vote',
      },
      articleLinks: [
        {
          sourceLink: 'https://medium.com/stake-service/dock-io-25b141c38b02',
          img: IntroImg,
          isIntro: true,
          postTitle: 'How confident are you in the validity of the data provided to you in the Internet?'
        },
        {
          isSoon: true,
          img: StakeImg
        }
      ]
    }
  }
];

/*export const PRODUCT_CARDS_ARRAY = [
  {
    img: CosmicHorizonIcon,
    id: 'cosmic-horizon',
    isSoon: true,
    coin: 'coho',
    coinName: 'Cosmic Horizon',
    percentNumber: 1
  }
];*/