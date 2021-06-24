using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GenCode.Data
{
    public class BoundingBox
    {
        public int BoundingBoxId { get; set; }
        public double Top { get; set; }
        public double Left { get; set; }
        public double Height { get; set; }
        public double Width { get; set; }
        public int TagId { get; set; }
        public string TagType { get; set; }
        public Tag Tag { get; set; }
    }
}
