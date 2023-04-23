using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PointAdder : MonoBehaviour
{
    public void Add(int amount)
    {
        FindObjectOfType<PointsManager>().points += amount;
    }
}
