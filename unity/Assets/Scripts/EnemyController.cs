using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EnemyController : MonoBehaviour
{
    Transform player;
    public Rigidbody2D rb;
    public float speed;

    private void Start()
    {
        player = GameObject.Find("Player").transform;
    }

    private void Update()
    {
        this.transform.rotation = LookAt(player.transform.position, transform.position);
    }

    private void FixedUpdate()
    {
        rb.velocity = ((transform.right * speed));
    }

    Quaternion LookAt(Vector3 target, Vector3 entity)
    {
        // Get Angle in Radians
        float AngleRad = Mathf.Atan2(target.y - entity.y, target.x - entity.x);
        // Get Angle in Degrees
        float AngleDeg = (180 / Mathf.PI) * AngleRad;
        // Rotate Object

        return Quaternion.Euler(0, 0, AngleDeg);
    }

    public void DestroyMe()
    {
        Destroy(this.gameObject);
    }
}
