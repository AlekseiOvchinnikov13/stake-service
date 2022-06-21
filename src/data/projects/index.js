import IntroImg from './images/intro.png';
import StakeImg from './images/stake.png';

const stakingTutorialTitle = 'STAKING TUTORIAL';
const stakingMechanicsTitle = 'STAKING MECHANICS';
const rewardsCalculatorTitle = 'REWARDS CALCULATOR';
const rewardsCalculatorSubTitle = 'How many dollars do you want to put in for ';

const basicInfoProtocolCategoryTitile = 'Protocol Category';
const basicInfoStakingTypeTitile = 'Staking Type';
const basicInfoGovernanceTitile = 'Governance';
const basicInfoValidatorAddressTitile = 'Validator Address';

const introductoryArticleTitle = 'INTRODUCTORY ARTICLE';
const howToStakeArticleTitle = 'HOW TO STAKE';

const mediumSiteLabel = 'medium.com';
const mediumSiteLink = 'https://medium.com/stake-service';
const sourceButtonLabel = 'See Explained';

const stakingCommissionTitle = 'Staking Commission';
const totalStakeTitle = 'Our Total Stake:';
const delegatorsTitle = 'Delegators:';

export const PROJECT_ID_GRAPH = 'the-graph';

export const ProjectsData = [
  {
    projectId: 'solana',
    data: {
      description1: 'Solana is&nbsp;a&nbsp;high-performance cryptocurrency blockchain that supports smart contracts and decentralized applications. Its feature is&nbsp;the use of&nbsp;a&nbsp;special PoS consensus mechanism, called Proof-of-History, with time-stamped transactions in&nbsp;order to&nbsp;achieve maximum efficiency.',
      description2: 'Solana solves one of&nbsp;the main problems-slow transactions and high costs (which are found in&nbsp;layer-1&nbsp;analogues, for example, Bitcoin and Ethereum). Solana is&nbsp;capable of&nbsp;processing about 50,000 transactions per second. Also an&nbsp;important area of&nbsp;activity of&nbsp;the Solana Foundation is&nbsp;to&nbsp;ensure greater access to&nbsp;decentralized finance.',
      stakingCommissionTitle: stakingCommissionTitle,
      stakingCommissionValue: '10&nbsp;%',
      totalStakeTitle: totalStakeTitle,
      totalStakeValue: '206448',
      delegatorsTitle: delegatorsTitle,
      delegatorsValue: '484',
      basicInfoList: [
        {
          title: basicInfoProtocolCategoryTitile,
          value: 'Layer 1'
        },
        {
          title: basicInfoStakingTypeTitile,
          value: 'PoH'
        },
        {
          title: basicInfoGovernanceTitile,
          value: 'Validator vote'
        },
        {
          title: basicInfoValidatorAddressTitile,
          value: '4dmBLJcchyfucSxkVmrymmsnVpZm3rBkp7kbF7qHTTYW',
          isAddress: true
        }
      ],
      stakingTutorialTitle: stakingTutorialTitle,
      stakingTutorialSubTitle: 'Your SOLs must be in a wallet or custodial account in order to use our staking services.',
      articleLinks: [
        {
          articleTitle: introductoryArticleTitle,
          postTitle: 'INTRODUCTION TO SOLANA',
          siteLink: mediumSiteLink,
          siteText: mediumSiteLabel,
          sourceLink: 'https://medium.com/stake-service/introduction-to-solana-f35e23a25a61',
          sourceText: sourceButtonLabel,
          img: IntroImg
        },
        {
          articleTitle:  howToStakeArticleTitle,
          articleSubtitle: 'via Solflare Wallet',
          postTitle: 'How to stake Solana tokens',
          siteLink: mediumSiteLink,
          siteText: mediumSiteLabel,
          sourceLink: 'https://medium.com/stake-service/how-to-stake-solana-tokens-7a6542fe4ec8',
          sourceText: sourceButtonLabel,
          img: StakeImg
        }
      ],
      stakingMechanicsTitle: stakingMechanicsTitle,
      rewardsCalculatorTitle: rewardsCalculatorTitle,
      rewardsCalculatorSubTitle: rewardsCalculatorSubTitle,
    }
  },
  {
    projectId: 'celo',
    data: {
      description1: 'Celo is&nbsp;global payments infrastructure built for mobile Thousands of&nbsp;organizations and individuals are developing, growing, and governing Celo, an&nbsp;open-source platform that enables anyone to&nbsp;build borderless applications.',
      description2: 'We&nbsp;believe that people live primarily in&nbsp;connection to&nbsp;one another. We&nbsp;recognize that individuals are healthier and happier when they are members of&nbsp;a&nbsp;strong social community with meaningful relationships&nbsp;&mdash; that&nbsp;is, when they are living within a&nbsp;healthy and happy whole. We&nbsp;embrace values that strengthen community.',
      stakingCommissionTitle: stakingCommissionTitle,
      stakingCommissionValue: '50&nbsp;%',
      totalStakeTitle: totalStakeTitle,
      totalStakeValue: '10974.72',
      delegatorsTitle: delegatorsTitle,
      basicInfoList: [
        {
          title: basicInfoProtocolCategoryTitile,
          value: 'Layer 1'
        },
        {
          title: basicInfoStakingTypeTitile,
          value: 'PoS'
        },
        {
          title: basicInfoGovernanceTitile,
          value: '-'
        },
        {
          title: basicInfoValidatorAddressTitile,
          value: '0xb35Be22BccB0dB9dC62967dcF15fEB97C20f854e',
          isAddress: true
        }
      ],
      stakingTutorialTitle: stakingTutorialTitle,
      stakingTutorialSubTitle: 'Your CELOs must be in a wallet or custodial account in order to use our staking services.',
      articleLinks: [
        {
          articleTitle: introductoryArticleTitle,
          postTitle: 'Money can be beautiful',
          siteLink: mediumSiteLink,
          siteText: mediumSiteLabel,
          sourceLink: 'https://medium.com/stake-service/money-can-be-beautiful-37c42a8d535a',
          sourceText: sourceButtonLabel,
          img: IntroImg
        },
        {
          articleTitle: howToStakeArticleTitle,
          articleSubtitle: 'via desktop celo wallet',
          postTitle: 'Hey guys! Today, we’ll take a look at how you can use the Celo wallet to stake your own CELO tokens and start earning rewards.',
          siteLink: mediumSiteLink,
          siteText: mediumSiteLabel,
          sourceLink: 'https://medium.com/stake-service/hey-guys-today-well-take-a-look-at-how-you-can-use-the-cello-wallet-to-stake-your-own-cello-92730ac24aa5',
          sourceText: sourceButtonLabel,
          img: StakeImg
        }
      ],
      stakingMechanicsTitle: stakingMechanicsTitle,
      rewardsCalculatorTitle: rewardsCalculatorTitle,
      rewardsCalculatorSubTitle: rewardsCalculatorSubTitle,
    }
  },
  {
    projectId: 'the-graph',
    data: {
      description1: 'The Graph is&nbsp;an&nbsp;indexing protocol and a&nbsp;global API for organizing blockchain data. Easy access to&nbsp;them is&nbsp;provided by&nbsp;GraphQL. The main difference (from other PoS networks) of&nbsp;delegation to&nbsp;the Graph is&nbsp;that the indexers that GRT holders can delegate represent indexing and query processing services for open API subgraphs.',
      description2: 'Subgraphs can be&nbsp;queried by&nbsp;applications via GraphQL, and together with Indexers, Curators, and Delegates, they form a&nbsp;decentralized data marketplace for the Web3&nbsp;ecosystem.',
      stakingCommissionTitle: stakingCommissionTitle,
      stakingCommissionValue: '0&nbsp;%',
      totalStakeTitle: totalStakeTitle,
      totalStakeValue: '1605464.53',
      delegatorsTitle: delegatorsTitle,
      delegatorsValue: '178',
      basicInfoList: [
        {
          title: basicInfoProtocolCategoryTitile,
          value: 'Middleware'
        },
        {
          title: basicInfoStakingTypeTitile,
          value: 'DPoS'
        },
        {
          title: basicInfoGovernanceTitile,
        },
        {
          title: basicInfoValidatorAddressTitile,
          value: '0x19fBac0891042bE71Ce60321a17720358575f580',
          isAddress: true
        }
      ],
      stakingTutorialTitle: stakingTutorialTitle,
      stakingTutorialSubTitle: 'Your GRTs must be in a wallet or custodial account in order to use our staking services.',
      articleLinks: [
        {
          articleTitle: introductoryArticleTitle,
          postTitle: 'INTRODUCTION TO THE GRAPH',
          siteLink: mediumSiteLink,
          siteText: mediumSiteLabel,
          sourceLink: 'https://medium.com/stake-service/introduction-to-the-graph-a5ec70c10d4a',
          sourceText: sourceButtonLabel,
          img: IntroImg
        },
        {
          articleTitle: howToStakeArticleTitle,
          siteLink: mediumSiteLink,
          siteText: mediumSiteLabel,
          img: StakeImg,
          isSoon: true
        }
      ],
      stakingMechanicsTitle: stakingMechanicsTitle,
      rewardsCalculatorTitle: rewardsCalculatorTitle,
      rewardsCalculatorSubTitle: rewardsCalculatorSubTitle,
    }
  },
  {
    projectId: 'oasis-network',
    data: {
      description1: 'By&nbsp;bringing privacy and scalability to&nbsp;DeFi, the Oasis Network expands DeFi beyond early adopters to&nbsp;a&nbsp;mass market. It&nbsp;enables private smart contracts, high scalability, and the ability to&nbsp;tokenize data.',
      description2: 'This unlocks new use cases like private lending, undercollateralized loans, and private automated market makers.',
      stakingCommissionTitle: stakingCommissionTitle,
      stakingCommissionValue: '18&nbsp;%',
      totalStakeTitle: totalStakeTitle,
      totalStakeValue: '274519.95',
      delegatorsTitle: delegatorsTitle,
      delegatorsValue: '17',
      basicInfoList: [
        {
          title: basicInfoProtocolCategoryTitile,
          value: 'Layer 1'
        },
        {
          title: basicInfoStakingTypeTitile,
          value: 'PoS'
        },
        {
          title: basicInfoGovernanceTitile,
        },
        {
          title: basicInfoValidatorAddressTitile,
          value: 'oasis1qzt4fvcc6cw9af69tek9p3mfjwn3a5e5vcyrw7ac',
          isAddress: true
        }
      ],
      stakingTutorialTitle: stakingTutorialTitle,
      stakingTutorialSubTitle: 'Your ROSEs must be in a wallet or custodial account in order to use our staking services.',
      articleLinks: [
        {
          articleTitle: introductoryArticleTitle,
          postTitle: 'Introduction to Oasis',
          siteLink: mediumSiteLink,
          siteText: mediumSiteLabel,
          sourceLink: 'https://medium.com/stake-service/introduction-to-oasis-b589f52efe5f',
          sourceText: sourceButtonLabel,
          img: IntroImg
        },
        {
          articleTitle: howToStakeArticleTitle,
          articleSubtitle: 'via Bitpie wallet',
          postTitle: 'How to delegate ROSE tokens in the Bitpie wallet',
          siteLink: mediumSiteLink,
          siteText: mediumSiteLabel,
          sourceLink: 'https://medium.com/stake-service/howe-to-delegate-rose-tokens-ad58cd84e542',
          sourceText: sourceButtonLabel,
          img: StakeImg
        }
      ],
      stakingMechanicsTitle: stakingMechanicsTitle,
      rewardsCalculatorTitle: rewardsCalculatorTitle,
      rewardsCalculatorSubTitle: rewardsCalculatorSubTitle,
    }
  },
  {
    projectId: 'agoric',
    data: {
      description1: 'Agoric is&nbsp;an&nbsp;open-source development company launching an&nbsp;interoperable Proof-of-Stake chain and economy. Our JavaScript-native smart contract platform offers developers a&nbsp;safe, reusable library of&nbsp;DeFi components to&nbsp;rapidly build and deploy on-chain.',
      description2: '',
      stakingCommissionTitle: stakingCommissionTitle,
      stakingCommissionValue: '2&nbsp;%',
      totalStakeTitle: totalStakeTitle,
      totalStakeValue: '110387',
      delegatorsTitle: delegatorsTitle,
      basicInfoList: [
        {
          title: basicInfoProtocolCategoryTitile,
          value: 'Layer 1'
        },
        {
          title: basicInfoStakingTypeTitile,
          value: 'PoS'
        },
        {
          title: basicInfoGovernanceTitile,
          value: 'Validator vote'
        },
        {
          title: basicInfoValidatorAddressTitile,
          value: 'agoricvaloper1upz9xpay0qx0vqealgr69ejtpzj5gskla5v0d9',
          isAddress: true
        }
      ],
      stakingTutorialTitle: stakingTutorialTitle,
      stakingTutorialSubTitle: 'Your BLDs must be in a wallet or custodial account in order to use our staking services.',
      articleLinks: [
        {
          articleTitle: introductoryArticleTitle,
          postTitle: 'Introducing article about Agoric',
          siteLink: mediumSiteLink,
          siteText: mediumSiteLabel,
          sourceLink: 'https://medium.com/stake-service/agoric-d288f101efd6',
          sourceText: sourceButtonLabel,
          img: IntroImg
        },
        {
          articleTitle: howToStakeArticleTitle,
          articleSubtitle: 'via Keplr wallet',
          postTitle: 'How to stake Agoric ($BLD) tokens',
          siteLink: mediumSiteLink,
          siteText: mediumSiteLabel,
          sourceLink: 'https://medium.com/stake-service/how-to-stake-agoric-bld-tokens-312c0dfd8b37',
          sourceText: sourceButtonLabel,
          img: StakeImg
        }
      ],
      stakingMechanicsTitle: stakingMechanicsTitle,
      rewardsCalculatorTitle: rewardsCalculatorTitle,
      rewardsCalculatorSubTitle: rewardsCalculatorSubTitle,
    }
  },
  {
    projectId: 'sentinel',
    data: {
      description1: 'The Sentinel Network ($DVPN) is&nbsp;a&nbsp;peer to&nbsp;peer bandwidth marketplace that enables Decentralized Virtual Private Network (dVPN) applications and services.',
      description2: 'Powered by&nbsp;the native $dVPN token along with Tendermint core &amp;&nbsp;Exidio.',
      stakingCommissionTitle: stakingCommissionTitle,
      stakingCommissionValue: '2&nbsp;%',
      totalStakeTitle: totalStakeTitle,
      totalStakeValue: '391221.39',
      delegatorsTitle: delegatorsTitle,
      basicInfoList: [
        {
          title: basicInfoProtocolCategoryTitile,
          value: 'Layer 1'
        },
        {
          title: basicInfoStakingTypeTitile,
          value: 'PoS'
        },
        {
          title: basicInfoGovernanceTitile,
          value: 'Validator vote'
        },
        {
          title: basicInfoValidatorAddressTitile,
          value: 'sentvaloper163g6kygmh08mgp0kj4gkenl4hj6nsqzguk6rzf',
          isAddress: true
        }
      ],
      stakingTutorialTitle: stakingTutorialTitle,
      stakingTutorialSubTitle: 'Your DVPNs must be in a wallet or custodial account in order to use our staking services.',
      articleLinks: [
        {
          articleTitle: introductoryArticleTitle,
          siteLink: mediumSiteLink,
          siteText: mediumSiteLabel,
          img: IntroImg,
          isSoon: true
        },
        {
          articleTitle: howToStakeArticleTitle,
          articleSubtitle: 'via Keplr wallet',
          postTitle: 'Greetings! A new regular manual telling us about the staking of dVPN coins of the Sentinel project. We’ll be using our favorite Keplr wallet!',
          siteLink: mediumSiteLink,
          siteText: mediumSiteLabel,
          sourceLink: 'https://medium.com/stake-service/greetings-bd2a1955434e',
          sourceText: sourceButtonLabel,
          img: StakeImg
        }
      ],
      stakingMechanicsTitle: stakingMechanicsTitle,
      rewardsCalculatorTitle: rewardsCalculatorTitle,
      rewardsCalculatorSubTitle: rewardsCalculatorSubTitle,
    }
  },
  {
    projectId: 'centrifuge',
    data: {
      description1: 'Centrifuge is&nbsp;a&nbsp;decentralized asset financing protocol. It&nbsp;connects decentralized finance (DeFi) with real-world assets (RWA) while trying to&nbsp;lower the cost of&nbsp;capital for small and mid-size enterprises (SMEs) and provide investors with a&nbsp;stable source of&nbsp;income. The main goal of&nbsp;the project is&nbsp;to&nbsp;generate profits that are not tied to&nbsp;volatile crypto assets; the developers are pursuing the task of&nbsp;transferring real monetary value from fiat to&nbsp;cryptocurrencies.',
      description2: 'Companies are using Centrifuge to&nbsp;access the liquidity that DeFi has to&nbsp;offer. They can tokenize real assets and use these tokens as&nbsp;collateral to&nbsp;access financing through Tinlake, a&nbsp;decentralized application (DApp) lending protocol. The Centrifuge blockchain is&nbsp;built on&nbsp;Polkadot (DOT) for speed and low fees, while its financial DApp Tinlake is&nbsp;built to&nbsp;access Ethereum (ETH) liquidity.',
      stakingCommissionTitle: stakingCommissionTitle,
      stakingCommissionValue: '8&nbsp;%',
      totalStakeTitle: totalStakeTitle,
      totalStakeValue: '14985.44',
      delegatorsTitle: delegatorsTitle,
      delegatorsValue: '-',
      basicInfoList: [
        {
          title: basicInfoProtocolCategoryTitile,
          value: 'Layer 1'
        },
        {
          title: basicInfoStakingTypeTitile,
          value: 'NPoS'
        },
        {
          title: basicInfoGovernanceTitile,
          value: ''
        },
        {
          title: basicInfoValidatorAddressTitile,
          value: '4dfMuh3JVgrKgeWyzbcys2y5H3BJzzTySUmgUkgmuQumDZAK',
          isAddress: true
        }
      ],
      stakingTutorialTitle: stakingTutorialTitle,
      stakingTutorialSubTitle: 'Your CFGs must be in a wallet or custodial account in order to use our staking services.',
      articleLinks: [
        {
          articleTitle: introductoryArticleTitle,
          postTitle: 'INTRODUCTION TO CENTRIFUGE',
          siteLink: mediumSiteLink,
          siteText: mediumSiteLabel,
          sourceLink: 'https://medium.com/stake-service/introduction-to-centrifuge-379303ae8dda',
          sourceText: sourceButtonLabel,
          img: IntroImg
        },
        {
          articleTitle: howToStakeArticleTitle,
          siteLink: mediumSiteLink,
          siteText: mediumSiteLabel,
          sourceText: sourceButtonLabel,
          img: StakeImg,
          isSoon: true
        }
      ],
      stakingMechanicsTitle: stakingMechanicsTitle,
      rewardsCalculatorTitle: rewardsCalculatorTitle,
      rewardsCalculatorSubTitle: rewardsCalculatorSubTitle,
    }
  },
  {
    projectId: 'cosmic-horizon',
    data: {
      description1: 'Our application-specific blockchain is&nbsp;built using the Cosmos SDK, an&nbsp;open-source framework for building multi-asset public Proof-of-Stake (PoS) blockchains and one of&nbsp;the most powerfull tools in&nbsp;the industry.',
      description2: 'Cosmic Horizon is&nbsp;not just an&nbsp;experience, it&rsquo;s a&nbsp;community! Using the power of&nbsp;governance you get to&nbsp;decide how to&nbsp;make it&nbsp;an&nbsp;amazing one. You are at&nbsp;the center of&nbsp;this mission!',
      homepage: 'https://cosmic-horizon.com/',
      stakingCommissionTitle: stakingCommissionTitle,
      stakingCommissionValue: '-&nbsp;%',
      totalStakeTitle: totalStakeTitle,
      totalStakeValue: '-',
      delegatorsTitle: delegatorsTitle,
      delegatorsValue: '-',
      basicInfoList: [
        {
          title: basicInfoProtocolCategoryTitile,
          value: 'Layer 1'
        },
        {
          title: basicInfoStakingTypeTitile,
          value: 'PoS'
        },
        {
          title: basicInfoGovernanceTitile,
          value: '-'
        },
        {
          title: basicInfoValidatorAddressTitile,
          value: '-',
          isAddress: true
        }
      ],
      stakingTutorialTitle: stakingTutorialTitle,
      stakingTutorialSubTitle: 'Your COHOs must be in a wallet or custodial account in order to use our staking services.',
      articleLinks: [
        {
          articleTitle: introductoryArticleTitle,
          siteLink: mediumSiteLink,
          siteText: mediumSiteLabel,
          sourceText: sourceButtonLabel,
          img: IntroImg,
          isSoon: true
        },
        {
          articleTitle: howToStakeArticleTitle,
          siteLink: mediumSiteLink,
          siteText: mediumSiteLabel,
          sourceText: sourceButtonLabel,
          img: StakeImg,
          isSoon: true
        }
      ],
      stakingMechanicsTitle: stakingMechanicsTitle,
      rewardsCalculatorTitle: rewardsCalculatorTitle,
      rewardsCalculatorSubTitle: rewardsCalculatorSubTitle,
    }
  },
  {
    projectId: 'dock',
    data: {
      description1: 'Dock is&nbsp;a&nbsp;platform designed to&nbsp;provide a&nbsp;simple solution for businesses and developers to&nbsp;build, manage and present digital credentials that are instantly verifiable using blockchain technology.',
      description2: 'With a standalone blockchain and integrated payment and incentivisation token, a trusted network of validators, and seamless adoption and interoperability, Dock is part of a movement to solve universal problems with existing data and how it is captured, shared and controlled.',
      stakingCommissionTitle: stakingCommissionTitle,
      stakingCommissionValue: '-&nbsp;%',
      totalStakeTitle: totalStakeTitle,
      totalStakeValue: '-',
      delegatorsTitle: delegatorsTitle,
      delegatorsValue: '-',
      basicInfoList: [
        {
          title: basicInfoProtocolCategoryTitile,
          value: 'Layer 1'
        },
        {
          title: basicInfoStakingTypeTitile,
          value: 'PoS'
        },
        {
          title: basicInfoGovernanceTitile,
        },
        {
          title: basicInfoValidatorAddressTitile,
          value: '-',
          isAddress: true
        }
      ],
      stakingTutorialTitle: stakingTutorialTitle,
      stakingTutorialSubTitle: 'Your DOCKs must be in a wallet or custodial account in order to use our staking services.',
      articleLinks: [
        {
          articleTitle: introductoryArticleTitle,
          siteLink: mediumSiteLink,
          siteText: mediumSiteLabel,
          sourceText: sourceButtonLabel,
          img: IntroImg,
          isSoon: true
        },
        {
          articleTitle: howToStakeArticleTitle,
          siteLink: mediumSiteLink,
          siteText: mediumSiteLabel,
          sourceText: sourceButtonLabel,
          img: StakeImg,
          isSoon: true
        }
      ],
      stakingMechanicsTitle: stakingMechanicsTitle,
      rewardsCalculatorTitle: rewardsCalculatorTitle,
      rewardsCalculatorSubTitle: rewardsCalculatorSubTitle,
    }
  },
  {
    projectId: 'regen',
    data: {
      description1: 'Platform for a&nbsp;Thriving Planet Regen Network aligns economics with ecology to&nbsp;drive regenerative land management. Regen Ledger is&nbsp;a&nbsp;public, proof of&nbsp;stake (PoS) blockchain developed with the Cosmos Software Development Kit (SDK) built for verification of&nbsp;claims, agreements &amp;&nbsp;data related to&nbsp;ecological state.',
      description2: 'Regen Ledger enables multiple registries to&nbsp;communicate and transact with each other producing a&nbsp;public ecological accounting system. Get involved with our community of&nbsp;developers.',
      stakingCommissionTitle: stakingCommissionTitle,
      stakingCommissionValue: '4&nbsp;%',
      totalStakeTitle: totalStakeTitle,
      totalStakeValue: '1856929',
      delegatorsTitle: delegatorsTitle,
      basicInfoList: [
        {
          title: basicInfoProtocolCategoryTitile,
          value: 'Layer 1'
        },
        {
          title: basicInfoStakingTypeTitile,
          value: 'PoS'
        },
        {
          title: basicInfoGovernanceTitile,
          value: 'Validator vote'
        },
        {
          title: basicInfoValidatorAddressTitile,
          value: 'regenvaloper163g6kygmh08mgp0kj4gkenl4hj6nsqzgmd9w86',
          isAddress: true
        }
      ],
      stakingTutorialTitle: stakingTutorialTitle,
      stakingTutorialSubTitle: 'Your REGENs must be in a wallet or custodial account in order to use our staking services.',
      articleLinks: [
        {
          articleTitle: introductoryArticleTitle,
          postTitle: 'Regen Network — blockchain network of ecological knowledge',
          siteLink: mediumSiteLink,
          siteText: mediumSiteLabel,
          sourceLink: 'https://medium.com/stake-service/regen-network-blockchain-network-of-ecological-knowledge-573db3ac7880',
          sourceText: sourceButtonLabel,
          img: IntroImg
        },
        {
          articleTitle: howToStakeArticleTitle,
          articleSubtitle: 'via Keplr wallet',
          postTitle: 'Staking Regen with Keplr.',
          siteLink: mediumSiteLink,
          siteText: mediumSiteLabel,
          sourceLink: 'https://medium.com/stake-service/staking-regen-with-keplr-43b5d630fb16',
          sourceText: sourceButtonLabel,
          img: StakeImg
        }
      ],
      stakingMechanicsTitle: stakingMechanicsTitle,
      rewardsCalculatorTitle: rewardsCalculatorTitle,
      rewardsCalculatorSubTitle: rewardsCalculatorSubTitle,
    }
  },
  /*{
    projectId: 'xx-network',
    data: {
      description1: 'The xx&nbsp;network is&nbsp;a&nbsp;&laquo;full-stack&raquo; platform which combines a&nbsp;native scalable, quantum-ready layer 1&nbsp;blockchain with the most private communications network in&nbsp;the world.',
      description2: 'Invented by&nbsp;cryptographer David Chaum, the godfather of&nbsp;digital currency and privacy, the xx&nbsp;network&rsquo;s cMix communications layer provides complete metadata protection to&nbsp;all network communications. Using the xxDK, any application or&nbsp;blockchain platform can route their traffic through the xx&nbsp;network and provide quantum-secure, end-to-end encryption to&nbsp;their own transactions.',
      stakingCommissionTitle: stakingCommissionTitle,
      stakingCommissionValue: '10&nbsp;%',
      totalStakeTitle: totalStakeTitle,
      totalStakeValue: '',
      delegatorsTitle: delegatorsTitle,
      delegatorsValue: '',
      basicInfoList: [
        {
          title: basicInfoProtocolCategoryTitile,
          value: 'Layer 1'
        },
        {
          title: basicInfoStakingTypeTitile,
          value: ''
        },
        {
          title: basicInfoGovernanceTitile,
          value: ''
        },
        {
          title: basicInfoValidatorAddressTitile,
          value: '',
          isAddress: true
        }
      ],
      stakingTutorialTitle: stakingTutorialTitle,
      stakingTutorialSubTitle: 'Your SOLs must be in a wallet or custodial account in order to use our staking services.',
      articleLinks: [
        {
          articleTitle: introductoryArticleTitle,
          postTitle: 'INTRODUCTION TO SOLANA',
          siteLink: mediumSiteLink,
          siteText: mediumSiteLabel,
          sourceLink: 'https://medium.com/stake-service/introduction-to-solana-f35e23a25a61',
          sourceText: sourceButtonLabel,
          img: IntroImg
        },
        {
          articleTitle:  howToStakeArticleTitle,
          articleSubtitle: 'via Solflare Wallet',
          postTitle: 'How to stake Solana tokens',
          siteLink: mediumSiteLink,
          siteText: mediumSiteLabel,
          sourceLink: 'https://medium.com/stake-service/how-to-stake-solana-tokens-7a6542fe4ec8',
          sourceText: sourceButtonLabel,
          img: StakeImg
        }
      ],
      stakingMechanicsTitle: stakingMechanicsTitle,
      rewardsCalculatorTitle: rewardsCalculatorTitle,
      rewardsCalculatorSubTitle: rewardsCalculatorSubTitle,
    }
  }*/
];