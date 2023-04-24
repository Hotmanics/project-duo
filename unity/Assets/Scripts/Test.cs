using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Thirdweb;
using System.Threading.Tasks;
using UnityEngine.Events;
using System;
using UnityEngine.UI;
using JacobHomanics.Core.Timer;

public class Test : MonoBehaviour
{
    [System.Serializable]
    public class InitData
    {
        public float speed;
        public float fireRate;
        public float damage;
    }

    [Header("Contract")]
    public string contractAddress = "0xbF6A844c4873372E138Da8FbF8BB51d4229b3873";
    public string abi;
    private ThirdwebSDK sdk;

    [Header("Player")]
    public PlayerMovement playerMovement;
    public GunController playerGun;
    public Timer playerGunTimer;
    public SpriteRenderer sr;

    [Header("Init Data")]
    public InitData samData;
    public InitData rileyData;
    public InitData loganData;
    public InitData multitronData;
    
    [Header("Instantation")]
    public GameObject nftPrefab;
    public Transform nftParent;

    [Header("Events")]
    public UnityEvent NFTCountIsZero;
    public UnityEvent NFTCountIsGreaterThanZero;
    public UnityEvent Selected;


    void Start()
    {
#if !UNITY_EDITOR
        sdk = new ThirdwebSDK("mumbai");
#endif
    }

    public async void CheckBalance(string address)
    {
        Contract contract = sdk.GetContract(contractAddress, abi);

        int mintCount = await contract.Read<int>("mintCount");

        List<int> ownedIndices = new List<int>();

        for (int i = 0; i < mintCount; i++)
        {
            string ownerOf = await contract.Read<string>("ownerOf", i);

            if (ownerOf == address)
            {
                ownedIndices.Add(i);
                NFTCountIsGreaterThanZero?.Invoke();
            }
        }

        for (int i = 0; i < ownedIndices.Count; i++)
        {
            NFT nft = await contract.ERC721.Get(ownedIndices[i].ToString());
            var nftInstance = CreateNewInstance();
            nftInstance.LoadNFT(nft);
        }
    }

    [ContextMenu("Create Instances With Dummy Data")]
    public void CreateInstancesWithDummyData()
    {
        for (int i = 0; i < 3; i++)
        {
            var nftInstance = CreateNewInstance();
            NFT nft = new NFT();
            nft.type = "ERC721";
            nft.metadata.image = "https://ipfs.io/ipfs/bafybeift2czkjgp42uysyt4jds42e6664ufnhiqwo74777itipfafivehq/QmTkVPXfeaAhUEFsDcDi9D1vbAA8rrQkru4owk9ifkGi12.gif";
            nft.metadata.name = "Multi-tron";
            nftInstance.LoadNFT(nft);
        }
    }

    private Prefab_NFT CreateNewInstance()
    {
        var newInstance = Instantiate(nftPrefab, nftParent);
        Prefab_NFT newPrefabNFTInstance = newInstance.GetComponentInChildren<Prefab_NFT>();
        Button newInstanceBtn = newInstance.GetComponentInChildren<Button>();

        Debug.Log("HERE I AM");

        newInstanceBtn.onClick.AddListener(() =>
        {
            if (!newPrefabNFTInstance.isGif)
            {
                sr.sprite = newPrefabNFTInstance.nftImage.sprite;
            }
            else
            {
                StartCoroutine(sr.GetComponent<SpriteRendererUniGif>().SetGifFromUrlCoroutine(newPrefabNFTInstance.nft.metadata.image));
            }

            SetByName(newPrefabNFTInstance.nftName.text);
            Selected?.Invoke();
            Debug.Log("Green");
        });

        return newPrefabNFTInstance;
    }

    public void SetByName(string name)
    {
        if (name == "Sam")
        {
            Set(samData);
        }
        else if (name == "Riley")
        {
            Set(rileyData);
        }
        else if (name == "Logan")
        {
            Set(loganData);
        }
        else if (name == "Multi-tron")
        {
            Set(multitronData);
        }
        else
        {
            Set(new InitData() { damage = 5, fireRate = .5f, speed = 3 });
        }
    }

    public void Set(InitData data)
    {
        playerMovement.speed = data.speed;
        playerGunTimer.duration = data.fireRate;
        playerGun.bulletDamage = data.damage;
    }
}