namespace JacobHomanics.Core.Callbacks
{
	public class UpdateMonoBehaviourCallback : BaseMonoBehaviourCallback<Updated>
	{
		void Update()
		{
			Callback?.Invoke(this);
		}
	}
}