using UnityEngine;
using System.Collections.Generic;
#if UNITY_EDITOR
using UnityEditor;
#endif
namespace JacobHomanics.Core.Timer
{
	public class Timer : MonoBehaviour
	{
		[Header("Properties")]
		public float duration;
		public float timeLeft;

		public Events events;

		public void TickDeltaTime()
        {
			Tick(Time.deltaTime);
        }

		public void TickFixedDeltaTime()
        {
			Tick(Time.fixedDeltaTime);
        }

		public void Tick(float deltaTime)
		{
			timeLeft -= deltaTime;

			events.Ticked?.Invoke(this);

			if (timeLeft <= 0)
			{
				events.Expired?.Invoke(this);
			}
		}

		public float TimeTillCompletion
		{
			get
			{
				return Mathf.Abs(duration - timeLeft);
			}
		}

		public void SetTimeLeftToDuration()
		{
			timeLeft = duration;
		}
	}
}