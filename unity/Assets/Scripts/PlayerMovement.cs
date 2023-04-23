using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerMovement : MonoBehaviour
{
    public float speed;
    public Rigidbody2D rb;

    Vector2 input;

    void Update()
    {
        input.x = Input.GetAxisRaw("Horizontal");
        input.y = Input.GetAxisRaw("Vertical");
    }

    private void FixedUpdate()
    {
        rb.velocity = new Vector2(input.x * speed, input.y * speed);

        Vector3 worldPosition = Camera.main.ScreenToWorldPoint(Input.mousePosition);
        this.transform.rotation = LookAt(worldPosition, transform.position);
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
}
