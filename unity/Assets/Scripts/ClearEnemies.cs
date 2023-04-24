using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ClearEnemies : MonoBehaviour
{
    public void Do()
    {
        var ecs = FindObjectsOfType<EnemyController>();
        for (int i = 0; i < ecs.Length; i++)
        {
            Destroy(ecs[i].gameObject);
        }
    }
}
