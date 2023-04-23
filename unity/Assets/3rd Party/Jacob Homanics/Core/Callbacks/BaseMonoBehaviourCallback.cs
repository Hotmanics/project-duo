using UnityEngine;

namespace JacobHomanics.Core.Callbacks
{
    public class BaseMonoBehaviourCallback : MonoBehaviour
    {
    
    }

    public class BaseMonoBehaviourCallback<T> : BaseMonoBehaviourCallback where T : new()
    {
        public T Callback = new();
    }
}