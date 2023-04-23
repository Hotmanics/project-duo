using JacobHomanics.Core.Timer;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TimerRangeSetter : MonoBehaviour
{
    public float min;
    public float max;

    public Timer timer;

    public void Randomize()
    {
        timer.duration = Random.Range(min, max);
        timer.timeLeft = timer.duration;
    }
}
