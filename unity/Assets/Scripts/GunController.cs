using JacobHomanics.Core.Timer;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

public class GunController : MonoBehaviour
{
    public Bullet prefab;
    public Transform barrel;
    public float bulletSpeed;
    public bool isPlayerOwned;
    public float bulletDamage;

    public UnityEvent Fired;

    public void Fire()
    {
        var bullet = Instantiate(prefab, barrel.position, barrel.rotation);
        bullet.Initialize(bulletDamage, bulletSpeed, isPlayerOwned);

        Fired?.Invoke();
    }
}
