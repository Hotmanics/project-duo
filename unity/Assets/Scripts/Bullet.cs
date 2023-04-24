using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Bullet : MonoBehaviour
{
    public Rigidbody2D rb;
    public float damage;
    private bool isPlayerOwned;

    public void Initialize(float damage, float speed, bool isPlayerOwned)
    {
        rb.GetComponent<Rigidbody2D>().velocity = ((transform.right * speed));
        this.isPlayerOwned = isPlayerOwned;
        this.damage = damage;
    }

    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (isPlayerOwned)
        {
            if (collision.gameObject.name == "Enemy(Clone)")
            {
                Destroy(this.gameObject);
                collision.GetComponentInChildren<HealthManager>().currentHealth -= damage;
            }
        } 
        else
        {
            if (collision.gameObject.name == "Player")
            {
                Destroy(this.gameObject);
                collision.GetComponentInChildren<HealthManager>().currentHealth -= damage;
            }
        }

    }
}
