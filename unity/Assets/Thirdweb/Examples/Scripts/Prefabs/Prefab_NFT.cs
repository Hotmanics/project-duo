using System.Collections;
using UnityEngine;
using UnityEngine.UI;
using TMPro;
using Thirdweb;
using UnityEngine.Networking;

public class Prefab_NFT : MonoBehaviour
{
    [Header("UI ELEMENTS")]
    public Image nftImage;
    public TMP_Text nftName;

    public UniGifImage gifImage;
    public bool isGif { get; private set; }

    public NFT nft;


    public async void LoadNFT(NFT nft)
    {
        this.nft = nft;

        nftName.text = nft.metadata.name;
    
        if (nft.metadata.image.Contains(".gif"))
        {
            isGif = true;
            StartCoroutine(gifImage.SetGifFromUrlCoroutine(nft.metadata.image));
            nftImage.enabled = false;

        }
        else
        {
            nftImage.sprite = await ThirdwebManager.Instance.SDK.storage.DownloadImage(nft.metadata.image);
            gifImage.gameObject.SetActive(false);
        }
    }
}