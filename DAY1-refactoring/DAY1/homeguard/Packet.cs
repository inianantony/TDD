namespace Homeguard
{
    public class Packet
    {
        public string status;
        public string id;

        public Packet(string packet)
        {
            string[] tokens = packet.Split(",".ToCharArray());
            this.id = tokens[0];
            this.status = tokens[1];
        }

        public bool IsTripped()
        {
            return status == StatusEnum.TRIPPED;
        }
    }
}