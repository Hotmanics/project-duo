using UnityEngine.Events;

namespace JacobHomanics.Core.Callbacks
{
    [System.Serializable]
    public class BaseMonoBehaviourCallbackEvent<T> : UnityEvent<T> where T : BaseMonoBehaviourCallback { }
}