using GenCode.Data;
using GenCode.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GenCode.Repository
{
    public class BoundingBoxRepository
    {
        private readonly TagContext _context = null;
        public BoundingBoxRepository(TagContext context, TagRepository tagRepository)
        {
            _context = context;
        }

        public async Task<int> AddNewBox(BoundingBoxModel model)
        {
            var newBox = new BoundingBox()
            {
                Width = model.Width,
                Height = model.Height,
                Top = model.Top,
                Left = model.Left,
                TagId = model.TagId,
                TagType = model.TagType,
            };
            await _context.BoundingBoxes.AddAsync(newBox);
            await _context.SaveChangesAsync();
            return newBox.BoundingBoxId;
        }

        /*public async Task<RegionModel> GetRegionById(int id)
        {
            return await _context.Regions.Where(x => x.RegionId == id).Select(region => new RegionModel()
            {
                Width = region.Width,
                Height = region.Height,
                LeftPos = region.LeftPos,
                RightPos = region.RightPos,
                CreatedAt = DateTime.UtcNow,
                Tag = region.Tag,
                GenUI = region.GenUI,
            }).FirstOrDefaultAsync();
        }*/
    }
}
