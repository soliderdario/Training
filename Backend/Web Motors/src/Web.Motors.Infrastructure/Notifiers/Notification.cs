﻿namespace Web.Motors.Infrastructure.Notifiers
{
    public class Notification
    {
        public Notification(string message)
        {
            Message = message;
        }
        public string Message { get; }
    }
}
