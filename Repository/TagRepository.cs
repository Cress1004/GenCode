using GenCode.Data;
using GenCode.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GenCode.Repository
{
    public class TagRepository
    {
        private readonly TagContext _context = null;
        public TagRepository(TagContext context)
        {
            _context = context;
        }

        public async Task<List<TagModel>> GetTags()
        {
            return await _context.Tags.Select(x => new TagModel()
            {
                TagId = x.TagId,
                Text = x.Text,
                Type = x.Type,
            }).ToListAsync();
        }

        public async Task<TagModel> GetTagById(int id)
        {
            return await _context.Tags.Where(x => x.TagId == id).Select(tag => new TagModel()
            {
                Text = tag.Text,
                Type = tag.Type,
            }).FirstOrDefaultAsync();
        }
        public async Task<TagModel> GetTagByType(string type)
        {
            return await _context.Tags.Where(x => Equals(x.Type, type)).Select(tag => new TagModel()
            {
                TagId = tag.TagId,
                Text = tag.Text,
                Type = tag.Type,
            }).FirstOrDefaultAsync();
        }
    }
}
