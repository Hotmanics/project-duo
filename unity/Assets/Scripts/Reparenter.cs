using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Reparenter : MonoBehaviour
{
    public Transform target;
    public Vector3 offset;

    public void Reparent()
    {
        transform.SetParent(target);
        transform.localPosition = offset;
    }

    public void Unparent9()
    {
        transform.SetParent(null);
    }
}
