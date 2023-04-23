namespace JacobHomanics.Core.Timer
{
	[System.Serializable]
	public class Events
	{
		public Ticked Ticked = new Ticked();
		public Expired Expired = new Expired();
	}
}