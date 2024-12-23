export const storyBadgeAbi = [
	{
		type: 'constructor',
		inputs: [
			{ name: 'ipAssetRegistry', internalType: 'address', type: 'address' },
			{ name: 'licensingModule', internalType: 'address', type: 'address' },
			{ name: 'orgNft', internalType: 'address', type: 'address' },
			{ name: 'pilTemplate', internalType: 'address', type: 'address' },
			{
				name: 'defaultLicenseTermsId',
				internalType: 'uint256',
				type: 'uint256'
			}
		],
		stateMutability: 'nonpayable'
	},
	{ type: 'error', inputs: [], name: 'BaseStoryNFT__ZeroAddressParam' },
	{
		type: 'error',
		inputs: [
			{ name: 'sender', internalType: 'address', type: 'address' },
			{ name: 'tokenId', internalType: 'uint256', type: 'uint256' },
			{ name: 'owner', internalType: 'address', type: 'address' }
		],
		name: 'ERC721IncorrectOwner'
	},
	{
		type: 'error',
		inputs: [
			{ name: 'operator', internalType: 'address', type: 'address' },
			{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }
		],
		name: 'ERC721InsufficientApproval'
	},
	{
		type: 'error',
		inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
		name: 'ERC721InvalidApprover'
	},
	{
		type: 'error',
		inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
		name: 'ERC721InvalidOperator'
	},
	{
		type: 'error',
		inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
		name: 'ERC721InvalidOwner'
	},
	{
		type: 'error',
		inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
		name: 'ERC721InvalidReceiver'
	},
	{
		type: 'error',
		inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
		name: 'ERC721InvalidSender'
	},
	{
		type: 'error',
		inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
		name: 'ERC721NonexistentToken'
	},
	{ type: 'error', inputs: [], name: 'InvalidInitialization' },
	{ type: 'error', inputs: [], name: 'NotInitializing' },
	{
		type: 'error',
		inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
		name: 'OwnableInvalidOwner'
	},
	{
		type: 'error',
		inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
		name: 'OwnableUnauthorizedAccount'
	},
	{ type: 'error', inputs: [], name: 'StoryBadgeNFT__InvalidSignature' },
	{ type: 'error', inputs: [], name: 'StoryBadgeNFT__SignatureAlreadyUsed' },
	{ type: 'error', inputs: [], name: 'StoryBadgeNFT__TransferLocked' },
	{ type: 'error', inputs: [], name: 'StoryBadgeNFT__ZeroAddressParam' },
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{
				name: 'owner',
				internalType: 'address',
				type: 'address',
				indexed: true
			},
			{
				name: 'approved',
				internalType: 'address',
				type: 'address',
				indexed: true
			},
			{
				name: 'tokenId',
				internalType: 'uint256',
				type: 'uint256',
				indexed: true
			}
		],
		name: 'Approval'
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{
				name: 'owner',
				internalType: 'address',
				type: 'address',
				indexed: true
			},
			{
				name: 'operator',
				internalType: 'address',
				type: 'address',
				indexed: true
			},
			{ name: 'approved', internalType: 'bool', type: 'bool', indexed: false }
		],
		name: 'ApprovalForAll'
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{
				name: '_fromTokenId',
				internalType: 'uint256',
				type: 'uint256',
				indexed: false
			},
			{
				name: '_toTokenId',
				internalType: 'uint256',
				type: 'uint256',
				indexed: false
			}
		],
		name: 'BatchMetadataUpdate'
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{
				name: 'version',
				internalType: 'uint64',
				type: 'uint64',
				indexed: false
			}
		],
		name: 'Initialized'
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{
				name: 'tokenId',
				internalType: 'uint256',
				type: 'uint256',
				indexed: false
			}
		],
		name: 'Locked'
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{
				name: '_tokenId',
				internalType: 'uint256',
				type: 'uint256',
				indexed: false
			}
		],
		name: 'MetadataUpdate'
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{
				name: 'previousOwner',
				internalType: 'address',
				type: 'address',
				indexed: true
			},
			{
				name: 'newOwner',
				internalType: 'address',
				type: 'address',
				indexed: true
			}
		],
		name: 'OwnershipTransferred'
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{
				name: 'recipient',
				internalType: 'address',
				type: 'address',
				indexed: false
			},
			{
				name: 'tokenId',
				internalType: 'uint256',
				type: 'uint256',
				indexed: false
			},
			{
				name: 'ipId',
				internalType: 'address',
				type: 'address',
				indexed: false
			}
		],
		name: 'StoryBadgeNFTMinted'
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{
				name: 'signer',
				internalType: 'address',
				type: 'address',
				indexed: false
			}
		],
		name: 'StoryBadgeNFTSignerUpdated'
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{ name: 'from', internalType: 'address', type: 'address', indexed: true },
			{ name: 'to', internalType: 'address', type: 'address', indexed: true },
			{
				name: 'tokenId',
				internalType: 'uint256',
				type: 'uint256',
				indexed: true
			}
		],
		name: 'Transfer'
	},
	{
		type: 'event',
		anonymous: false,
		inputs: [
			{
				name: 'tokenId',
				internalType: 'uint256',
				type: 'uint256',
				indexed: false
			}
		],
		name: 'Unlocked'
	},
	{
		type: 'function',
		inputs: [],
		name: 'DEFAULT_LICENSE_TERMS_ID',
		outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
		stateMutability: 'view'
	},
	{
		type: 'function',
		inputs: [],
		name: 'IP_ASSET_REGISTRY',
		outputs: [{ name: '', internalType: 'contract IIPAssetRegistry', type: 'address' }],
		stateMutability: 'view'
	},
	{
		type: 'function',
		inputs: [],
		name: 'LICENSING_MODULE',
		outputs: [{ name: '', internalType: 'contract ILicensingModule', type: 'address' }],
		stateMutability: 'view'
	},
	{
		type: 'function',
		inputs: [],
		name: 'ORG_NFT',
		outputs: [{ name: '', internalType: 'address', type: 'address' }],
		stateMutability: 'view'
	},
	{
		type: 'function',
		inputs: [],
		name: 'PIL_TEMPLATE',
		outputs: [{ name: '', internalType: 'address', type: 'address' }],
		stateMutability: 'view'
	},
	{
		type: 'function',
		inputs: [
			{ name: 'to', internalType: 'address', type: 'address' },
			{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }
		],
		name: 'approve',
		outputs: [],
		stateMutability: 'pure'
	},
	{
		type: 'function',
		inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
		name: 'balanceOf',
		outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
		stateMutability: 'view'
	},
	{
		type: 'function',
		inputs: [],
		name: 'contractURI',
		outputs: [{ name: '', internalType: 'string', type: 'string' }],
		stateMutability: 'view'
	},
	{
		type: 'function',
		inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
		name: 'getApproved',
		outputs: [{ name: '', internalType: 'address', type: 'address' }],
		stateMutability: 'view'
	},
	{
		type: 'function',
		inputs: [
			{ name: 'orgTokenId_', internalType: 'uint256', type: 'uint256' },
			{ name: 'orgIpId_', internalType: 'address', type: 'address' },
			{
				name: 'initParams',
				internalType: 'struct IStoryNFT.StoryNftInitParams',
				type: 'tuple',
				components: [
					{ name: 'owner', internalType: 'address', type: 'address' },
					{ name: 'name', internalType: 'string', type: 'string' },
					{ name: 'symbol', internalType: 'string', type: 'string' },
					{ name: 'contractURI', internalType: 'string', type: 'string' },
					{ name: 'baseURI', internalType: 'string', type: 'string' },
					{ name: 'customInitData', internalType: 'bytes', type: 'bytes' }
				]
			}
		],
		name: 'initialize',
		outputs: [],
		stateMutability: 'nonpayable'
	},
	{
		type: 'function',
		inputs: [
			{ name: 'owner', internalType: 'address', type: 'address' },
			{ name: 'operator', internalType: 'address', type: 'address' }
		],
		name: 'isApprovedForAll',
		outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
		stateMutability: 'view'
	},
	{
		type: 'function',
		inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
		name: 'locked',
		outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
		stateMutability: 'pure'
	},
	{
		type: 'function',
		inputs: [
			{ name: 'recipient', internalType: 'address', type: 'address' },
			{ name: 'signature', internalType: 'bytes', type: 'bytes' }
		],
		name: 'mint',
		outputs: [
			{ name: 'tokenId', internalType: 'uint256', type: 'uint256' },
			{ name: 'ipId', internalType: 'address', type: 'address' }
		],
		stateMutability: 'nonpayable'
	},
	{
		type: 'function',
		inputs: [],
		name: 'name',
		outputs: [{ name: '', internalType: 'string', type: 'string' }],
		stateMutability: 'view'
	},
	{
		type: 'function',
		inputs: [
			{ name: '', internalType: 'address', type: 'address' },
			{ name: '', internalType: 'address', type: 'address' },
			{ name: '', internalType: 'uint256', type: 'uint256' },
			{ name: '', internalType: 'bytes', type: 'bytes' }
		],
		name: 'onERC721Received',
		outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
		stateMutability: 'nonpayable'
	},
	{
		type: 'function',
		inputs: [],
		name: 'orgIpId',
		outputs: [{ name: '', internalType: 'address', type: 'address' }],
		stateMutability: 'view'
	},
	{
		type: 'function',
		inputs: [],
		name: 'orgTokenId',
		outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
		stateMutability: 'view'
	},
	{
		type: 'function',
		inputs: [],
		name: 'owner',
		outputs: [{ name: '', internalType: 'address', type: 'address' }],
		stateMutability: 'view'
	},
	{
		type: 'function',
		inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
		name: 'ownerOf',
		outputs: [{ name: '', internalType: 'address', type: 'address' }],
		stateMutability: 'view'
	},
	{
		type: 'function',
		inputs: [],
		name: 'renounceOwnership',
		outputs: [],
		stateMutability: 'nonpayable'
	},
	{
		type: 'function',
		inputs: [
			{ name: 'from', internalType: 'address', type: 'address' },
			{ name: 'to', internalType: 'address', type: 'address' },
			{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }
		],
		name: 'safeTransferFrom',
		outputs: [],
		stateMutability: 'nonpayable'
	},
	{
		type: 'function',
		inputs: [
			{ name: 'from', internalType: 'address', type: 'address' },
			{ name: 'to', internalType: 'address', type: 'address' },
			{ name: 'tokenId', internalType: 'uint256', type: 'uint256' },
			{ name: 'data', internalType: 'bytes', type: 'bytes' }
		],
		name: 'safeTransferFrom',
		outputs: [],
		stateMutability: 'pure'
	},
	{
		type: 'function',
		inputs: [
			{ name: 'operator', internalType: 'address', type: 'address' },
			{ name: 'approved', internalType: 'bool', type: 'bool' }
		],
		name: 'setApprovalForAll',
		outputs: [],
		stateMutability: 'pure'
	},
	{
		type: 'function',
		inputs: [{ name: 'signer_', internalType: 'address', type: 'address' }],
		name: 'setSigner',
		outputs: [],
		stateMutability: 'nonpayable'
	},
	{
		type: 'function',
		inputs: [{ name: 'tokenURI_', internalType: 'string', type: 'string' }],
		name: 'setTokenURI',
		outputs: [],
		stateMutability: 'nonpayable'
	},
	{
		type: 'function',
		inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
		name: 'supportsInterface',
		outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
		stateMutability: 'view'
	},
	{
		type: 'function',
		inputs: [],
		name: 'symbol',
		outputs: [{ name: '', internalType: 'string', type: 'string' }],
		stateMutability: 'view'
	},
	{
		type: 'function',
		inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
		name: 'tokenURI',
		outputs: [{ name: '', internalType: 'string', type: 'string' }],
		stateMutability: 'view'
	},
	{
		type: 'function',
		inputs: [],
		name: 'totalSupply',
		outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
		stateMutability: 'view'
	},
	{
		type: 'function',
		inputs: [
			{ name: 'from', internalType: 'address', type: 'address' },
			{ name: 'to', internalType: 'address', type: 'address' },
			{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }
		],
		name: 'transferFrom',
		outputs: [],
		stateMutability: 'pure'
	},
	{
		type: 'function',
		inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
		name: 'transferOwnership',
		outputs: [],
		stateMutability: 'nonpayable'
	}
];
