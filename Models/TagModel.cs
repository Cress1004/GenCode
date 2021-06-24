using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GenCode.Models
{
    public class TagModel
    {
        public int TagId { get; set; }
        public string Type { get; set; }
        public string Text { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
