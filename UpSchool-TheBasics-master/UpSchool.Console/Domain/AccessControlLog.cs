using System;
using Upschool.Console.Enums;

namespace Upschool.Console.Domain
{
    public class AccessControlLog
    {
        public int UserId { get; set;}

        public string DeviceSerialNo { get; set;}

        public AccessType AccessType { get; set; }

        public DateTimeOffset Date { get; set; }

    }
}
