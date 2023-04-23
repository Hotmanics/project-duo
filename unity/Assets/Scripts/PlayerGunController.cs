using JacobHomanics.Core.Timer;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerGunController : MonoBehaviour
{
    public GunController gunController;
    public Timer timer;

    void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            if (timer.timeLeft <= 0)
                gunController.Fire();
        }
    }
}
