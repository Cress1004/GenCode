using Microsoft.EntityFrameworkCore.Migrations;

namespace GenCode.Migrations
{
    public partial class AddTagType : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Weight",
                table: "BoundingBoxes",
                newName: "Width");

            migrationBuilder.AddColumn<string>(
                name: "TagType",
                table: "BoundingBoxes",
                type: "text",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TagType",
                table: "BoundingBoxes");

            migrationBuilder.RenameColumn(
                name: "Width",
                table: "BoundingBoxes",
                newName: "Weight");
        }
    }
}
