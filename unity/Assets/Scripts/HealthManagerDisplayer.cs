using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class HealthManagerDisplayer : MonoBehaviour
{
    public HealthManager healthManager;
    public Slider slider;
    public TMP_Text currentHealthText;
    public TMP_Text maxHealthText;

    void Update()
    {
        slider.value = healthManager.currentHealth;
        slider.maxValue = healthManager.maxHealth;

        if (currentHealthText != null)
        {
            currentHealthText.text = healthManager.currentHealth.ToString();
        }

        if (maxHealthText != null)
        {
            maxHealthText.text = healthManager.maxHealth.ToString();
        }
    }
}
