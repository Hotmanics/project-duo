using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EnemySpawner : MonoBehaviour
{
    public GameObject prefab;
    public Transform[] spawnPoints;

    [ContextMenu("Spawn")]
    public void Spawn()
    {
        var rn = Random.Range(0, spawnPoints.Length);
        Instantiate(prefab, spawnPoints[rn].position, Quaternion.identity);
    }
}
