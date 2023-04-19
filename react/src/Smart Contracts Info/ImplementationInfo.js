const implementationABI = [
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "beansToDispursePerAttendee",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "fundingThreshold",
            "type": "uint256"
          },
          {
            "internalType": "address[]",
            "name": "admins",
            "type": "address[]"
          },
          {
            "internalType": "address[]",
            "name": "circleLeaders",
            "type": "address[]"
          },
          {
            "internalType": "address[]",
            "name": "beanPlacementAdmins",
            "type": "address[]"
          },
          {
            "internalType": "address[]",
            "name": "fundsManagers",
            "type": "address[]"
          },
          {
            "internalType": "address",
            "name": "erc20Token",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "kycController",
            "type": "address"
          }
        ],
        "internalType": "struct Initialization.GivingCircleInitialization",
        "name": "init",
        "type": "tuple"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "propNumb",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "beansplaced",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "beanPlacer",
        "type": "address"
      }
    ],
    "name": "BeansPlaced",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "FundsAllocated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "fundsWithdrawn",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "withdrawee",
        "type": "address"
      }
    ],
    "name": "FundsRedeemed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint8",
        "name": "version",
        "type": "uint8"
      }
    ],
    "name": "Initialized",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "propNumb",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "proposer",
        "type": "address"
      }
    ],
    "name": "ProposalCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "previousAdminRole",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "newAdminRole",
        "type": "bytes32"
      }
    ],
    "name": "RoleAdminChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "RoleGranted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "RoleRevoked",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "VotingClosed",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "BEAN_PLACEMENT_ADMIN_ROLE",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "DEFAULT_ADMIN_ROLE",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "FUNDS_MANAGER_ROLE",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "LEADER_ROLE",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "PROPOSER_ROLE",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "ProgressToBeanPlacementPhase",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "ProgressToFundsRedemptionPhase",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "attendeeCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "attendees",
    "outputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "beansAvailable",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "addr",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "contributions",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "fundsAllocated",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "hasRedeemed",
            "type": "bool"
          }
        ],
        "internalType": "struct Proposals.Contributor[]",
        "name": "newContributors",
        "type": "tuple[]"
      }
    ],
    "name": "batchCreateNewProposals",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "beansToDispursePerAttendee",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "addr",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "contributions",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "fundsAllocated",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "hasRedeemed",
            "type": "bool"
          }
        ],
        "internalType": "struct Proposals.Contributor",
        "name": "newContributor",
        "type": "tuple"
      }
    ],
    "name": "createNewProposal",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "addr",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "contributions",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "fundsAllocated",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "hasRedeemed",
            "type": "bool"
          }
        ],
        "internalType": "struct Proposals.Contributor",
        "name": "newContributor",
        "type": "tuple"
      }
    ],
    "name": "createNewProposalForMe",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "erc20Token",
    "outputs": [
      {
        "internalType": "contract partialIERC20",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "erc20TokenPerBean",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "fundingThreshold",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getAttendees",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "addr",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "beansAvailable",
            "type": "uint256"
          }
        ],
        "internalType": "struct Attendees.Attendee[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "getAvailableBeans",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getLeftoverFunds",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getProposals",
    "outputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "addr",
                "type": "address"
              },
              {
                "internalType": "string",
                "name": "name",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "contributions",
                "type": "string"
              },
              {
                "internalType": "uint256",
                "name": "fundsAllocated",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "hasRedeemed",
                "type": "bool"
              }
            ],
            "internalType": "struct Proposals.Contributor",
            "name": "contributor",
            "type": "tuple"
          },
          {
            "internalType": "uint256",
            "name": "beansReceived",
            "type": "uint256"
          }
        ],
        "internalType": "struct Proposals.Proposal[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      }
    ],
    "name": "getRoleAdmin",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getTotalAllocatedFunds",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getTotalBeansDispursed",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getTotalRedeemedFunds",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getTotalUnredeemedFunds",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "grantRole",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "hasRole",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "beansToDispursePerAttendee",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "fundingThreshold",
            "type": "uint256"
          },
          {
            "internalType": "address[]",
            "name": "admins",
            "type": "address[]"
          },
          {
            "internalType": "address[]",
            "name": "circleLeaders",
            "type": "address[]"
          },
          {
            "internalType": "address[]",
            "name": "beanPlacementAdmins",
            "type": "address[]"
          },
          {
            "internalType": "address[]",
            "name": "fundsManagers",
            "type": "address[]"
          },
          {
            "internalType": "address",
            "name": "erc20Token",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "kycController",
            "type": "address"
          }
        ],
        "internalType": "struct Initialization.GivingCircleInitialization",
        "name": "init",
        "type": "tuple"
      }
    ],
    "name": "initialize",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "kycController",
    "outputs": [
      {
        "internalType": "contract KYCController",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "phase",
    "outputs": [
      {
        "internalType": "enum IGivingCircle.Phase",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "attendee",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "proposalIndex",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "beanQuantity",
        "type": "uint256"
      }
    ],
    "name": "placeBeansForSomeone",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "attendee",
        "type": "address"
      },
      {
        "internalType": "uint256[]",
        "name": "proposalIndices",
        "type": "uint256[]"
      },
      {
        "internalType": "uint256[]",
        "name": "beanQuantities",
        "type": "uint256[]"
      }
    ],
    "name": "placeBeansForSomeoneMultiple",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "proposalIndex",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "beanQuantity",
        "type": "uint256"
      }
    ],
    "name": "placeMyBeans",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256[]",
        "name": "proposalIndices",
        "type": "uint256[]"
      },
      {
        "internalType": "uint256[]",
        "name": "beanQuantities",
        "type": "uint256[]"
      }
    ],
    "name": "placeMyBeansMultiple",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "proposalCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "proposals",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "addr",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "contributions",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "fundsAllocated",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "hasRedeemed",
            "type": "bool"
          }
        ],
        "internalType": "struct Proposals.Contributor",
        "name": "contributor",
        "type": "tuple"
      },
      {
        "internalType": "uint256",
        "name": "beansReceived",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "redeemFundsForSomeone",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "addrs",
        "type": "address[]"
      }
    ],
    "name": "redeemFundsForSomeoneMultiple",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "redeemMyFunds",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "registerAttendee",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "addrs",
        "type": "address[]"
      }
    ],
    "name": "registerAttendees",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "renounceRole",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "revokeRole",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes4",
        "name": "interfaceId",
        "type": "bytes4"
      }
    ],
    "name": "supportsInterface",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "withdrawRemainingFunds",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

module.exports = { implementationABI };