using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

public class HealthManager : MonoBehaviour
{
    private float _currentHealth;
    public float currentHealth { get { return _currentHealth; } 
        set 
        { 
            _currentHealth = Mathf.Clamp(value, 0, maxHealth);

            if (_currentHealth <= 0)
                Zeroed?.Invoke();
        } 
    }

    public float maxHealth;

    public UnityEvent Zeroed;

    private void Start()
    {
        Initialize(7);    
    }

    public void Initialize(float maxHealth)
    {
        this.maxHealth = maxHealth;
        currentHealth = this.maxHealth;
    }
}
