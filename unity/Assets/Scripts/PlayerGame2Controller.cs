using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

public class PlayerGame2Controller : MonoBehaviour
{
    public Rigidbody2D _playerRigidbody;
    public float jumpPower;
    public float speed;

    void Update()
    {
        MovePlayer();

        if (Input.GetKeyDown(KeyCode.Space))
        {
            Debug.Log("AYE");
            if (IsGrounded())
            {
                Debug.Log("2AYE");
                Jump();

            }
        }    
    }

    private void MovePlayer()
    {
        var horizontalInput = Input.GetAxisRaw("Horizontal");
        _playerRigidbody.velocity = new Vector2(horizontalInput * speed, _playerRigidbody.velocity.y);
    }

    private void OnDrawGizmos()
    {
        Gizmos.color = Color.red;
        Gizmos.DrawRay(transform.position, Vector2.down * 1.4f);
    }

    private bool IsGrounded()
    {
        var groundCheck = Physics2D.RaycastAll(transform.position, Vector2.down, 1.4f);

        for (var i = 0; i < groundCheck.Length; i++)
        {
            if (groundCheck[i].collider != null && groundCheck[i].collider.GetComponent<Ground>())
            {
                return true;
            }
        }

        return false;
    }

    private void Jump()
    {
        _playerRigidbody.velocity = new Vector2(0, jumpPower);
    }

    public HealthManager hm;

    private void OnCollisionExit2D(Collision2D collision)
    {
        if (collision.gameObject.GetComponent<Ground>())
        {
            Destroy(collision.gameObject);  
        }
    }

    private void OnCollisionEnter2D(Collision2D collision)
    {
        if (collision.gameObject.name == "Death")
        {
            hm.currentHealth -= 1000;
        }

        if (collision.gameObject.name == "Win")
        {
            won?.Invoke();
        }
    }

    public UnityEvent won;

}
