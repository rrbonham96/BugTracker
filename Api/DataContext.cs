using Api.Models;
using Microsoft.EntityFrameworkCore;

namespace Api
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<User> Users { get; set; }

        
    }
}