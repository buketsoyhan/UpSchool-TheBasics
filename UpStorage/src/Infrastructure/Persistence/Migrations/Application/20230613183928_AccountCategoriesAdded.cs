using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Infrastructure.Persistence.Migrations.Application
{
    /// <inheritdoc />
    public partial class AccountCategoriesAdded : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AccountCategory_Accounts_AccountId",
                table: "AccountCategory");

            migrationBuilder.DropForeignKey(
                name: "FK_AccountCategory_Category_CategoryId",
                table: "AccountCategory");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Category",
                table: "Category");

            migrationBuilder.DropPrimaryKey(
                name: "PK_AccountCategory",
                table: "AccountCategory");

            migrationBuilder.RenameTable(
                name: "Category",
                newName: "Categories");

            migrationBuilder.RenameTable(
                name: "AccountCategory",
                newName: "AccountCategories");

            migrationBuilder.RenameIndex(
                name: "IX_AccountCategory_CategoryId",
                table: "AccountCategories",
                newName: "IX_AccountCategories_CategoryId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Categories",
                table: "Categories",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_AccountCategories",
                table: "AccountCategories",
                columns: new[] { "AccountId", "CategoryId" });

            migrationBuilder.AddForeignKey(
                name: "FK_AccountCategories_Accounts_AccountId",
                table: "AccountCategories",
                column: "AccountId",
                principalTable: "Accounts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_AccountCategories_Categories_CategoryId",
                table: "AccountCategories",
                column: "CategoryId",
                principalTable: "Categories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AccountCategories_Accounts_AccountId",
                table: "AccountCategories");

            migrationBuilder.DropForeignKey(
                name: "FK_AccountCategories_Categories_CategoryId",
                table: "AccountCategories");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Categories",
                table: "Categories");

            migrationBuilder.DropPrimaryKey(
                name: "PK_AccountCategories",
                table: "AccountCategories");

            migrationBuilder.RenameTable(
                name: "Categories",
                newName: "Category");

            migrationBuilder.RenameTable(
                name: "AccountCategories",
                newName: "AccountCategory");

            migrationBuilder.RenameIndex(
                name: "IX_AccountCategories_CategoryId",
                table: "AccountCategory",
                newName: "IX_AccountCategory_CategoryId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Category",
                table: "Category",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_AccountCategory",
                table: "AccountCategory",
                columns: new[] { "AccountId", "CategoryId" });

            migrationBuilder.AddForeignKey(
                name: "FK_AccountCategory_Accounts_AccountId",
                table: "AccountCategory",
                column: "AccountId",
                principalTable: "Accounts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_AccountCategory_Category_CategoryId",
                table: "AccountCategory",
                column: "CategoryId",
                principalTable: "Category",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
