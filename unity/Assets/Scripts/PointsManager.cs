using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;

public class PointsManager : MonoBehaviour
{
    public int points;
    public TMP_Text Text;

    private void Update()
    {
        Text.text = "Score: " + points.ToString();
    }
}
