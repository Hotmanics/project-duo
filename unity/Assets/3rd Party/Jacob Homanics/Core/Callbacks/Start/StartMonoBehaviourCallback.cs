namespace JacobHomanics.Core.Callbacks
{
	public class StartMonoBehaviourCallback : BaseMonoBehaviourCallback<Started>
	{
		private void Start()
		{
			Callback?.Invoke(this);
		}
	}
}